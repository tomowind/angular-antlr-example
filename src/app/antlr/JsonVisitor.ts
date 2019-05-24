import { ExpVisitor } from './generated/ExpVisitor';
import {
  EvalContext,
  AdditionExpContext,
  MultiplyExpContext,
  AtomExpContext
} from './generated/ExpParser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';

export class JsonVisitor extends AbstractParseTreeVisitor<Object>
  implements ExpVisitor<Object> {
  constructor() {
    super();
  }

  protected defaultResult(): Object {
    return '0';
  }

  visitEval(ctx: EvalContext): Object {
    return { eval: this.visitAdditionExp(ctx.children[0]) };
  }

  visitAdditionExp(ctx: AdditionExpContext): Object {
    return {
      addition: ctx.children.map(child => {
        if (child instanceof MultiplyExpContext) {
          return this.visitMultiplyExp(child);
        } else {
          return { node: 'terminal' };
        }
      })
    };
  }

  visitMultiplyExp(ctx: MultiplyExpContext): Object {
    return {
      multiply: ctx.children.map(child => {
        if (child instanceof AtomExpContext) {
          return this.visitAtomExp(child);
        } else {
          return { node: 'terminal' };
        }
      })
    };
  }

  visitAtomExp(ctx: AtomExpContext): Object {
    return {
      atom: ctx.children.map(child => {
        return { node: 'terminal' };
      })
    };
  }
}
