# Interfaces

## Interfaces para objetos

### Implementação
#### Definição
```ts
interface Message {
    text: string;
}
```

#### Explicitamente
```ts
class SimpleMessage implements Message {
    constructor(public text: string) {
    }
}
```

#### Implicitamente
```ts
class DatedMessage { 
    constructor(public text: string, public date: Date) { 
    }
}
```

#### Uso
```ts
function logMessage(message: Message) { 
    console.log(message.text);
}

logMessage(new SimpleMessage("SimpleMessage"));
logMessage(new DatedMessage("DatedMessage", new Date()));

//objetos anônimos também podem implementar a interface implicitamente
logMessage({ text: "FreeMessage" });
```

### Propriedades opcionais
```ts
interface Message {
    text: string;
    date?: Date;
}

function logMessage(message: Message) {
    if (message.date) { 
        console.log(message.date.toLocaleString());
    }

    console.log(message.text);
}

logMessage({ text: "Mensagem" });
logMessage({ text: "Mensagem", date: new Date() });
```

### Propriedades readonly
```ts
interface Message {
    readonly text: string;
}

let message: Message = { text: "Message" };
message.text = "Message 1"; // error: Cannot assign to 'text' because it is a constant or a read-only property.
```

## Interfaces para funções
```ts
interface EventHandler {
    (source: Object, args: any[]): void;
}

let handler: EventHandler;

handler = function (source: Object, args: any[]): void {

};

handler = function (source, args) {

};

handler = (source: Object, args: any[]): void => {

};

handler = (source, args) => {

};
```

## Interfaces para construtor
```ts
interface MessageContructor {
    new (text: string): Message
}

interface Message {
    text: string;
}

class SimpleMessage implements Message {
    text: string;
}

function getMessageInstance(ctor: MessageContructor, text: string): Message {
    return new ctor(text);
}

var message = getMessageInstance(SimpleMessage, "New SimpleMessage");
```

## Herdando de classes
```ts
class Message {
    text: string;
}

interface DatedMessage extends Message {
    date: Date;
}

class TodayMessage implements DatedMessage { 
    text: string;
    date: Date;
}
```

#### Mais detalhes neste [link](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Interfaces.md)