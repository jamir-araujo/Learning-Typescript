# Learning-Typescript

## Dependencias para instalar
* [Nodejs](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Dependencias globais do nodejs

### Executar no cmd

* ``` npm i gulp -g ```
* ``` npm i typings -g ```
* ``` npm i lite-server -g ```

## configurações do vscode (opcional)
* File -> Preferences -> User Settings
```json
{
  "editor.renderWhitespace": true
}
```
* File -> Preferences -> Keyboard Shortcut
```json
[
  {
    "key": "ctrl+k ctrl+d",
    "command": "editor.action.format"
  },
  {
    "key": "ctrl+.",
    "command": "workbench.action.quickOpen"
  },
  {
    "key": "ctrl+,",
    "command": "workbench.action.gotoSymbol"
  },
  {
    "key": "ctrl+m ctrl+p",
    "command": "editor.foldAll",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+m ctrl+p",
    "command": "editor.foldLevel1",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+m ctrl+o",
    "command": "editor.foldLevel2",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+m ctrl+i",
    "command": "editor.foldLevel3",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+m ctrl+l",
    "command": "editor.unfoldAll",
    "when": "editorFocus"
  }
]
```

## extensões do vs code para baixar (opcional)
* Npm Intellisense
* Path Intellisense
* Bower
* Typescript - Typings autoinstaller
* vscode-icons