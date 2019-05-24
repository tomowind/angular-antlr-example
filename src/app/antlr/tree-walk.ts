import { CommonTokenStream, CharStreams } from 'antlr4ts';
import { ExpLexer } from './generated/ExpLexer';
import { ExpParser } from './generated/ExpParser';
import { JsonVisitor } from './JsonVisitor';

export function treeWalk() {
  // Create the lexer and parser
  const inputStream = CharStreams.fromString('(1 + 1) * 3');
  const lexer = new ExpLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ExpParser(tokenStream);
  const visitor = new JsonVisitor();

  // Parse the input
  const tree = parser.eval();
  return visitor.visitEval(tree);
}
