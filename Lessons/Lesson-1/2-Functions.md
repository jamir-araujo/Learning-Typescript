# Functions

## funções sem ou com tipagem

```ts
function sum(a, b) {
    return a + b;
}

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

### Mais detalhes neste [link](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Functions.md)