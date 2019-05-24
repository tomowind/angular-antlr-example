// Generated from ./src/app/antlr/Exp.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { EvalContext } from "./ExpParser";
import { AdditionExpContext } from "./ExpParser";
import { MultiplyExpContext } from "./ExpParser";
import { AtomExpContext } from "./ExpParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExpParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ExpVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ExpParser.eval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEval?: (ctx: EvalContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpParser.additionExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionExp?: (ctx: AdditionExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpParser.multiplyExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyExp?: (ctx: MultiplyExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ExpParser.atomExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExp?: (ctx: AtomExpContext) => Result;
}

