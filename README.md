# nstrumenta

### [nstrumenta cli](#cli)

Use the cli to:

- subscribe and publish to a websocket server and pipe between files or processes 
- ~~manage~~ list your vm servers
- ~~publish your sandbox~~

### [nstrumenta javascript client module](#client)

The client module can be imported in node or web based javascript 

## <a name="cli"></a>cli

### quickstart

1. Have a project on nstrumenta
2. Get yourself an api key for remote access to that project from https://nstrumenta.com/projects/[project name]/settings
3. Install and configure

```console
$ npm i -g nstrumenta
$ nstrumenta auth add 
```
4. When prompted, enter the project id and the api key
5. Open 3 terminals

#### terminal 1 server

```console
$ nstrumenta context set-property wsHost --value ws://localhost:8088
$ nstrumenta serve
```

#### terminal 2 subscriber

```console
$ nstrumenta subscribe
```

#### terminal 3 publisher

```console
$ nstrumenta publish 
```

At this point you can send messages from the the terminal with the publishing process, and they'll be read and displayed by any subscriber process. Try typing something and pressing enter. Next up, try piping from the subscribe to another process or a file.

## cli reference

### install

```
$ npm install -g nstrumenta
```

### usage

```
nstrumenta [command] {arguments --options}
```

* Note: `[command]` is required, and `[arguments]` are required or `{optional}`

nstrumenta will save your configuration scoped to the current user. Within this configuration, you can define a set of contexts which will store information about the project you're currently working with and how you want to interact with this project. You can set the working project, a websocket server to work to act as a broker for all your sensor and client interactions, the channel you want to communicate with, etc. These settings can be overridden with arguments and options if needed.  

### commands

- [auth](#auth)
- [context](#context)
- [machine](#machine)
- [subscribe](#subscribe)
- [publish](#publish)
- [serve](#serve)

***

### <a name="auth"></a> auth

Manage project api keys

e.g. `nstrumenta auth set PROJECT_NAME`

###### subcommands:

`add` _add an api key associated with a project. You'll be prompted for the project name and the api key._

> Generate a project scoped api key from https://nstrumenta.com/projects/[your-project-name]/settings 

`set PROJECT_NAME` s*et the current working project. This affects the current context. If you don't supply an argument, you'll be prompted to select one of projects already configured*

`list / ls` _list all locally configured projects_

***

### <a name="context"></a> context

Manage local contexts

 e.g. `nstrumenta context set-property wsHost --value ws://localhost:8088`

There will always be a default context, which is editable. Additional contexts can be added to work locally or remotely within the same project, for instance, or to work with different projects or to stream to different channels. 

###### subcommands:

`add CONTEXT_NAME`

`list` _List all context names_

`show` _Display the values of the properties of the current context_ 

`delete`

`set {CONTEXT_NAME}` _Will prompt to select an existing context if no arg_

Set the current working context

`set-property {PROPERTY_NAME} --{value | v VALUE}`
_Set a property in the current context. Only a valid property can be set — run without argument to be presented with an option list of possible properties_

***

### <a name="subscribe"></a> subscribe

Subscribe to a channel on the websocket host.

```
subscribe {WS_HOST} --{channel | c CHANNEL}
```

Will use the current context for configuration if no args/options.  

***

### <a name="publish"></a>publish

Publish to a channel on the websocket host. Pipe a process reading from a sensor into `nstrumenta publish`

```
publish {WS_HOST} --{channel | c CHANNEL}
```

Will use the current context for configuration if no args/options.

***

#### [deprecated?] serve

```
nstrumenta serve WS_HOST {-- CHANNEL}
```

## develop cli

```
npm i
npm link
```

command can be run with npx

```
npx nstrumenta --help

...

npx nstrumenta auth set
npx nstrumenta auth list
npx nstrumenta machine list|ls
```

Debug in vscode

* `note: figure how best to add cli args when debuggin; could add configs in launch.json for each possile command, but that seems silly`
