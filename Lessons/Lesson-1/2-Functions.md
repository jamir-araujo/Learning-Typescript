# Functions

## funções sem ou com tipagem

Aqui não colocamos tipos (nem para os parâmetros nem para o retorno), então o compilador assume o tipo `any` para todos.

> isso pode modar com a flag de compilador `--strictNullChecks`

```ts
function sum(a, b) {
    return a + b;
}
```

Forma tipada.
```ts

function sum(a: number, b: number): number {
    return a + b;
}
```

## Atribuir funções anônimas à variáveis

```ts
let sum = function (a: number, b: number): number {
    return a + b;
}
```

## Tipagem para funções

```ts
let sum: (a: number, b: number) => number;

sum = function (a: number, b: number): number {
    return a + b;
};

//aqui, os tipos dos parâmetros 'a' e 'b' e o retorno são inferidos pelo tipo da variável 'sum'.
sum = function (a, b) {
    return a + b;
};
```

## Parâmetros opcionais

```ts
function sum(a: number, b?: number): number {
    if (b) {
        b = 0;
    }

    return a + b;
}

let result: number;

result = sum(50); // result = 50
result = sum(50, 10); // result = 60
```

## Funções como Lambdas (Arrow Function)

```ts
let sum: (a: number, b: number) => number;

sum = (a: number, b: number): number => {
    return a + b;
};

sum = (a, b) => {
    return a + b;
};
```

#### Mais detalhes neste [link](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Functions.md)