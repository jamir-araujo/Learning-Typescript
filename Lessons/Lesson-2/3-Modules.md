# Modulos

## Exportando e importando Modulos

### export

É possivel exportar qualquer declaração no modulo (variáveis, funções, alias de tipos, interfaces e etc).

Definições no arquivo `Utils.ts`.
```ts
export var DefaultValues = { /** */ };
export class List<T> { /** */ }
export enum WeekDay { /** */ }
export function SortArray<T>(array: T[]): void { /** */ }
export type EventHandler = (sender: any, args: any[]) => void;
```

Importando apenas a classe `List<T>` do arquivo `Utils.ts`.
```ts
import {List} from "./Utils";
```

Importando as classes `List<T>` e o método `SortArray<T>` do arquivo `Utils.ts`.
```ts
import {List, SortArray} from "./Utils";
```

Importando o método `SortArray<T>` do arquivo `Utils.ts` e renomeando para `Sort`.
```ts
import {SortArray as Sort} from "./Utils";
```

Importando tudo do modulo `Utils.ts` e atribuindo a um alias.
```ts
import * as Utils from "./Utils";

//membros do modulo estarão dentro o objeto Utils.
let list = new Utils.List<string>();
```

### export default

O `export default` define um membro de um modulo com sendo o único membro do modulo a ser exportado.

Classe `List<T>` sendo definida e exportada do `default` no arquivo List.ts.
```ts
export default class List<T> { /** */ }
```

Ao importar deste modulo não é necessário especificar o membro do modulo.
```ts
import List from "./List";
```

### Re-export

`Collections.Generic.ts`
```ts
export class List<T> { /** */ }
export class Dictionary<TKey, TValue> { /** */ }
```

`Collections.Primitives.ts`
```ts
export class Stack { /** */ }
export class Queue { /** */ }
```

`Collections.ts`
```ts
export {List, Dictionary} from "/Collections.Generic";
export {Stack, Queue} from "/Collections.Primitives";
```
ou
```ts
export * from "/Collections.Generic";
export * from "/Collections.Primitives";
```

### Importando pelos efeitos no ambiente

É possivel importar um modulo apenas pelos efeitos no ambiente.

Por exemplo: Criando método de extenção para o `Array<T>`.

* Extendemos a interface `Array<T>`, incluindo os métodos desejados.
```ts
interface Array<T> {
    select: <TResult>(selector: (item: T) => TResult) => TResult[];
    where: (predicate: (item: T) => boolean) => T[];
}
```

* Criamos um modulos no arquivo `ArrayExtensions.ts`, que implementa os métodos de extenção da interface.
```ts
//função auto executavel.
((array: Array<any>) => {
    array.select = (item) => { /** */ };
    array.where = (item) => { /** */ };
})(Array.prototype);
```

* Referenciamos o modulo `ArrayExtensions` no arquivo de inicialização da aplicação.
```ts
import "./ArrayExtensions";
```

Desta forma, ao requisitar o modulo `ArrayExtensions`, a função auto executavel vai registrar os métodos de extenção no `prototype` do Array.
