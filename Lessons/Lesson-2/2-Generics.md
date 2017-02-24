# Genéricos

## Funções
```ts
function foreach<T>(array: T[], action: (item: T) => void) {
    for (let index = 0; index <= array.length; index++) {
        action(array[index]);
     }
}
```

## Classes
```ts
class List<T> {
    private _array: T[];

    constructor(items?: T[]) {
        this._array = items || [];
    }

    add(item: T): void {
        this._array.push(item);
    }

    addRange(items: T[]): void { 
        this._array.push(...items);
    }
 }
```

## Tipagem de funções genéricas
```ts
let action: <T>(object: T) => void;

action = (item) => {
}

action = (item, item2) => { // error: Type '(item: any, item2: any) => void' is not assignable to type '<T>(object: T) => void'.
}
```

## Constraints
```ts
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(object: T): void {
    console.log(object.length);
}

logLength("teste");
logLength([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
logLength({ length: 30 });
logLength(30); // error: Argument of type '30' is not assignable to parameter of type 'Lengthwise'.
```

#### Mais detalhes neste [link](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Generics.md)
