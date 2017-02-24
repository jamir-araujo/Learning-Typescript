# Basic Types

Typescript tem os mesmos tipos primitivos do Javascript (ECMAScript) e mais alguns.

## boolean
```ts
let enabled: boolean;

enabled = true;
enabled = false;
enabled = "teste"; // error (Type '"teste"' is not assignable to type 'boolean')
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

O tipo `any` é parecido com o tipo `object` do C#. Ele pode receber qualquer tipo outro tipo primitivo ou customizado.

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

Em Typescript null e undefined são tipos.

```ts
// não podemos atribuir mais nada para estas variáveis.
let undefinedValue: undefined = undefined;
let nullValue: null = null;
```
### usando a flag de compilador `--strictNullChecks`

Ao usar a `--strictNullChecks` é necessário especificar explicitamente que uma referência aceita `null` ou `undefined`.
```ts
let value: number;

value = 1;
value = null; // error: Type 'null' is not assignable to type 'number'.
value = undefined; // error: Type 'undefined' is not assignable to type 'number'.
```
```ts
let value: number | null;

value = 1;
value = null;
value = undefined; // error: Type 'undefined' is not assignable to type 'number'.
```
```ts
let value: number | undefined;

value = 1;
value = null; // error: Type 'null' is not assignable to type 'number'.
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
Ou
```ts
let text: any = "test";
let length: number = (text as string).length;
```

Ambas as formas terão o mesmo resultado, e caso o item objecto sofrendo o cast não seja do tipo correto, nenhuma delas resultara em uma exceção ou `null`.

Quando fazemos um cast errado, o erro só vai se mostrar em tempo de execução.
```ts
let text: any = 1;
let length: string = (text as string).length.toString(); // erro em tempo de execução: Uncaught TypeError: Cannot read property 'toString' of undefined
```

## Type Aliases

É possivel criar um alias para tipos.

Por exemplo: Se estivermos usando a flag de compilador `--strictNullChecks`. Em todos os lugares que quisermos rebeber `null` e `undefined`, teriamos que usar declarar o tipo com sendo `T | null | undefined`.

Com o alias de tipos podemos criar um atalho para esta declaração.
```ts
type Nullable<T> = T | null | undefined;

let value: Nullable<number>;
value = 1;
value = null;
value = undefined;
```

## Inferêcia de tipos

Typescript pode consegue fazer inferêcia de tipos da mesma forma que o `var` do C#.

```ts
let value = 1; // agora 'value' é do tipo 'number'.
value = "text"; // error: Type '"text"' is not assignable to type 'number'.
```

#### Mais detalhes neste [link](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Basic%20Types.md).