# Architecture
Everything works best when using a multi-script architecture. This means there is no centralized framework, and instead code is just modularized and loaded normally. Multiple scripts are allowed on the client and server (just don't be excessive), but they must be in their respective structure folders.

All script, asset, config, and other file names are in *pacal case* (`PascalCase`) capitalization.

:::info

Avoiding a central framework allows for easy onboarding and non-strict development, which decreases hiring costs. Central frameworks tend to overcomplicate codebases, often leading to memory, typechecking, and design problems.

:::

If you want to learn more about our rationale for not using SSA or central frameworks, [read here](https://blog.igottic.com/misc/2026/03/20/ssa.html).

## File Structure
Here is the recommended file structure:

```
.
└── Project/
    ├── ReplicatedFirst/
    │   ├── Scripts
    │   └── Modules
    ├── ServerScriptService/
    │   ├── Scripts
    │   ├── Modules
    │   └── Data
    ├── ReplicatedStorage/
    │   ├── Modules/
    │   │   └── Packages
    │   ├── Data
    │   ├── Assets
    │   └── Remotes
    └── ServerStorage/
        └── Assets
```

### `ReplicatedFirst`
Any local scripts should go under `Scripts`, and any client-specific modules should go under `Modules`. An example of a client-specific module would be an interface component.

### `ServerScriptService`
Any server scripts should go under `Scripts`, and any server-specific modules should go under `Modules`. An example of a server-specific module would be a datastore wrapper.

### `ReplicatedStorage`
Store any common/shared modules in `Modules` (for example, utility modules). `Packages` is a folder of packages imported by a package manager, such as Wally (and belongs under `Modules`). `Data` is used to store modules or other data that is constant (for example, game config). `Assets` is used to store non-code instances that is used by client or server. `Remotes` is exclusively for remote events and remote functions.

### `ServerStorage`
Store any server-specific assets in `Assets`. For example, you would store maps here.

## Modularization
Modularization is important to make sure that functionality is divided into isolated scopes, either through functions or modules. This makes it easy for team members to navigate a codebase and understand what something does at a glance, but more importantly, it makes it easy to scale. 

Functions should be reserved for splitting functionality that is part of a larger picture in a script or module. For example, a weapon might have functions to shoot, reload, etc.

Modules are used to separate bigger things to create libraries, databases, and systems. Some examples of things that are their own modules include:
* Configurations
* Utilities
* Systems
* Frameworks
* Classes
* Etc

Variable modularization is the smallest level of splitting up information into something more digestible. This is something you should eyeball, with the general rule of thumb being "if it's readable, it's good”. Make sure to utilize variables for repeated information.