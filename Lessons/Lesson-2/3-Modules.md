# Modulos

Modulos em Typescript são basicamente definidos pelo arquivo (`.ts`) onde o código está.

Por exemplo:

Se você esta criando um arquivo com o nome `Utils.ts`.
Ele será o modulo `Utils`.

## Exportando e importando Modulos

### export e import

É possivel exportar qualquer declaração no modulo (variáveis, funções, alias de tipos, interfaces e etc) usando a palavra reservada `export` antes da declaração.

Definições no arquivo `Utils.ts`.
```ts
export var DefaultValues = { /** */ };
export class List<T> { /** */ }
export enum WeekDay { /** */ }
export function SortArray<T>(array: T[]): void { /** */ }
export type EventHandler = (sender: any, args: any[]) => void;
```

Para importar um modulo, é necessário usar a palavra reservada `import`;

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

O `export default` define um membro de um modulo com sendo o único membro a ser exportado.

Classe `List<T>` sendo definida e exportada do `default` no arquivo List.ts.
```ts
export default class List<T> { /** */ }
```

Ao importar este modulo não é necessário especificar o membro do modulo.
```ts
import List from "./List";

let list = new List<string>();
```

### Re-export

É possivel re-exportar modulos ou membros de modulos.

Exemplo:

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

No arquivo `Collections.ts`, definimos um modulo que apenas re-exporta os modulos anteriores.
```ts
export {List, Dictionary} from "./Collections.Generic";
export {Stack, Queue} from "./Collections.Primitives";
```
ou
```ts
export * from "./Collections.Generic";
export * from "./Collections.Primitives";
```

Desta forma é possivel importar o modulo `Collections`, e ter acesso a coleções definidas nos modulos `Collections.Generic` e `Collections.Primitives`.

```ts
import {List, Dictionary, Stack, Queue} from "./Collections";
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
    array.select = (selector) => { /** */ };
    array.where = (predicate) => { /** */ };
})(Array.prototype);
```

* Referenciamos o modulo `ArrayExtensions` no arquivo de inicialização da aplicação.
```ts
import "./ArrayExtensions";
```

Desta forma, ao requisitar o modulo `ArrayExtensions`, a função auto executavel vai registrar os métodos de extenção no `prototype` do Array.
