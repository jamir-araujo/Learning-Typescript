# Classes

## Classe

```ts
class ConsoleLogger {
    // por padrão todos campos de um classe são publicos.
    location: string;

    constructor(location: string) { 
        // dentro da classe é necessário chamar os membros da instancia com o 'this'
        this.location = location;
    }

    log(message: string): void {
        console.log(`Type: ${ this.location }, Log Message: ${ message }.`)
     }
 }
```

## Propriedades
```ts
class ConsoleLogger {
    // temos o moderador de acesso 'private'.
    private _location: string;

    get location() {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
     }

    log(message: string): void {
        console.log(`Type: ${ this._location }, Log Message: ${ message }.`)
     }
}

var logger = new ConsoleLogger();
logger.location = "teste";
```

## Membros Estáticos

```ts
class Logger {
    static location: string;

    static log(message: string): void {
        console.log(`Type: ${ Logger.location }, Log Message: ${ message }.`)
    }
}
```

## Herança

```ts
// É possivel criar classes abstratas.
abstract class Logger {
    location: string;

    constructor(location: string) {
        this.location = location;
    }

    // classes abstratas podem ter métodos abstratos.
    abstract log(message: string): void;

    // também temos o moderador de acesso 'protected'.
    protected getDefaultMessage(message: string): string { 
        return `Type: ${this.location}, Log Message: ${message}.`;
    }
}

class ConsoleLogger extends Logger {
    constructor(location: string) {
        // sempre que estendemos uma classe e criamos um construtor, temos que chamar o métodos 'super()'.
        super(location);
    }

    log(message: string): void {
        console.log(this.getDefaultMessage(message));
    }
}

class AlertLogger extends Logger {
    log(message: string): void {
        alert(this.getDefaultMessage(message));
    }
}
```

#### Mais detalhes neste [link](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Classes.md)