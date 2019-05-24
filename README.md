# angular-antlr-example

simplest example of angular 2+ with antlr

## How does this work?

- Install [antrl4ts](https://github.com/tunnelvisionlabs/antlr4ts). Read "Getting Started".
- Create a simple grammar in [Exp.g4](src/app/antlr/Exp.g4)
- Compile with antlr4ts
- You will hit a tricky error:
  - Error message: `ERROR TypeError: Class constructor Lexer cannot be invoked without 'new'`.
  - See the issue discussions [here](https://github.com/tunnelvisionlabs/antlr4ts/issues/326). As of 2019 May, they didn't fix this.
  - The issue happens because the library is written in ES6, but you're likely to use ES5 as default and generate lexer/parser in ES5. To fix the issue, change target in [tsconfig.json](tsconfig.json) to `es6`, generate lexer/parsers again, and test the program.
- Write your own visitor. See [JsonVisitor.tx](src/app/antlr/JsonVisitor.ts)
- See [tree-walker.ts](src/app/antlr/tree-walk.ts)

## TODO later

- Walk with Listeners.
- Create a custom error listener. See [this](https://stackoverflow.com/questions/18132078/handling-errors-in-antlr4)
