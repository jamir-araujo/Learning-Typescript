# Basic Types

## boolean
```ts
let enabled: boolean;

enabled = true;
enabled = false;
enabled = "teste"; //error (Type '"teste"' is not assignable to type 'boolean')
```

## number
```ts
let integer: number = 6;
let float: number = 6.1;
```

## string
```ts
let color: string = "blue";
let color: string = 'red';

let value: number = 50;

let message: string = `O valor é ${value}`;
```

## Array
```ts
let list: number[] = [1, 2, 3, 4];
let list: Array<number> = [1, 2, 3, 4];
```

## enum
```ts
enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Red;
```

## any
```ts
let value: any;

value = 1;
value = "test";
value = new Date();
value = { text: "test" };
value = [1,2,3,4];

let text = value.text;
```

## null e undefined
```ts
let undefinedValue: undefined = undefined;
let nullValue: null = null;
```
### usando a flag de compilador `--strictNullChecks`

Ao usar a `--strictNullChecks` é necessário especificar explicitamente que uma referência aceita `null` ou `undefined`.
```ts
let value: number;

value = 1;
value = null; \\error: Type 'null' is not assignable to type 'number'.
value = undefined; \\error: Type 'undefined' is not assignable to type 'number'.
```
```ts
let value: number | null;

value = 1;
value = null;
value = undefined; \\error: Type 'undefined' is not assignable to type 'number'.
```
```ts
let value: number | undefined;

value = 1;
value = null; \\error: Type 'null' is not assignable to type 'number'.
value = undefined;
```
```ts
let value: number | null | undefined;

value = 1;
value = null;
value = undefined;
```

## Casts

```ts
let text: any = "test";
let length: number = (<string>text).length;
```
```ts
let text: any = "test";
let length: number = (text as string).length;
```

#### Mais detalhes neste [link](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Basic%20Types.md).