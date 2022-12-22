# number2hans

A JavaScript library for parsing number to chinese word.

## Install

To use this library directly, install it as a dependency

```
npm install number2hans
```

Once the package is installed, you can import the library using `import` or `require` approach

```ts
import number2hans from "number2hans";
// ...or
const number2hans = require("number2hans");
```

## Example

```ts
import number2hans from "number2hans";

number2hans(168); // 壹佰陸拾捌
number2hans(1680); // 壹仟陸佰捌拾
number2hans(16800); // 壹萬陸仟捌佰
number2hans(1680000); // 壹佰陸拾捌萬
```

## Build scripts

#### `npm run build`

Builds the project into the `dist` dir.

#### `npm run test`

Run unit test in mocha, all files in the `src/test` directory will be executed. 

#### `npm run compile`

Generate .d.ts files in `types` dir.