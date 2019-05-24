// Generated from ./src/app/antlr/Exp.g5 by ANTLR 4.7.3-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { EvalContext } from './ExpParser';
import { AdditionExpContext } from './ExpParser';
import { MultiplyExpContext } from './ExpParser';
import { AtomExpContext } from './ExpParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExpParser`.
 */
export interface ExpListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `ExpParser.eval`.
   * @param ctx the parse tree
   */
  enterEval?: (ctx: EvalContext) => void;
  /**
   * Exit a parse tree produced by `ExpParser.eval`.
   * @param ctx the parse tree
   */
  exitEval?: (ctx: EvalContext) => void;

  /**
   * Enter a parse tree produced by `ExpParser.additionExp`.
   * @param ctx the parse tree
   */
  enterAdditionExp?: (ctx: AdditionExpContext) => void;
  /**
   * Exit a parse tree produced by `ExpParser.additionExp`.
   * @param ctx the parse tree
   */
  exitAdditionExp?: (ctx: AdditionExpContext) => void;

  /**
   * Enter a parse tree produced by `ExpParser.multiplyExp`.
   * @param ctx the parse tree
   */
  enterMultiplyExp?: (ctx: MultiplyExpContext) => void;
  /**
   * Exit a parse tree produced by `ExpParser.multiplyExp`.
   * @param ctx the parse tree
   */
  exitMultiplyExp?: (ctx: MultiplyExpContext) => void;

  /**
   * Enter a parse tree produced by `ExpParser.atomExp`.
   * @param ctx the parse tree
   */
  enterAtomExp?: (ctx: AtomExpContext) => void;
  /**
   * Exit a parse tree produced by `ExpParser.atomExp`.
   * @param ctx the parse tree
   */
  exitAtomExp?: (ctx: AtomExpContext) => void;
}
