# Classes

## Classe

```ts
class ConsoleLogger {
    location: string;

    constructor(location: string) { 
        this.location = location;
    }

    log(message: string): void {
        console.log(`Type: ${ this.location }, Log Message: ${ message }.`)
     }
 }
```

## Herança

```ts
abstract class Logger {
    location: string;

    constructor(location: string) { 
        this.location = location;
    }

    abstract log(message: string): void;

    protected getDefaultMessage(message: string): string { 
        return `Type: ${this.location}, Log Message: ${message}.`;
    }
}

class ConsoleLogger extends Logger {
    constructor(location: string) {
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

## Propriedades
```ts
class ConsoleLogger {
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

### Mais detalhes neste [link](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Classes.md)