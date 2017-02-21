# Basic Types

## Boolean
```ts
let enabled: boolean;

enabled = true;
enabled = false;
enabled = "teste"; //error (Type '"teste"' is not assignable to type 'boolean')
```

## Number
```ts
let integer: number = 6;
let float: number = 6.1;
```

## String
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

## Enum
```ts
enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Red;
```


#### Mais detalhes neste [link](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Basic%20Types.md).