# Tooling & Workflow
We are opinionated towards working with certain workflows and tools to ensure projects work well and are easy to update.

## Fully Managed Rojo Workflow
The ideal structure for a project is a fully-managed Rojo workflow, where assets are stored in a `game.rbxlx` file, and then built with code to `build.rbxl` using Lune.

A fully managed workflow gives version control over *everything*, not just code. This can provide huge advantages when in a pickle.

For more details on this workflow, read here: https://miagobble.github.io/Rojo-Project-Example/

## Toolchain Manager
Many Roblox projects opt to use Aftman as the toolchain manager of choice. However, we opt to use Rokit, which is backwards-compatible with Aftman.

Read about Rokit here: https://github.com/rojo-rbx/rokit

## Package Manager
Previously, we used Wally to import packages. However, we have opted to now use Pesde, which functions better and is more feature-rich.

Many (but not all) Wally packages are also on Pesde.

Read about Pesde here: https://pesde.dev/

## GitHub Workflows
We opt to do very basic continuous integration in our workflow. When creating or updating a pull request, CI should check the following:
* Does the game build?
* Is the game build corrupted?
* Do docs build?

**DO NOT MERGE A PULL REQUEST UNTIL THESE PASS!**

We also take advantage of GitHub Actions to:
* Publish game on main branch push
* Build and public docs on main branch push (if needed)

## Recommended Libraries
While we understand the needs of certain libraries change depending on the project, we do have some general recommendations for the core types of libraries you should have in your project.

### UI State + Animation
Using a UI State + Animation library (like Seam or Fusion) is incredibly important, since it allows you to create beautiful and incredibly functional UI code.

That being said, ensure the library of choice supports instance hydration; *never* create your UI from scratch programatically, that way it's easier for the UI developer(s) to iterate without the need of going through a programmer.

Store UI assets under the shared assets folder, which can later be hydrated and programmed.

### Networking
A networking library with full typechecking is far superior to raw remote events, because you always know what sort of data is supposed to be passed through the remote.

Do not overcomplicate this. It really should be as simple as using remotes, with just the addition of typechecking.

### Replication
A replication library (like Praxis Replicator) separate from a networking library is super handy for when you need to replicate states from the server to the client declaratively. Not much to be said about this.

### Declarative Datastore
A declarative datastore library (like ProfileStore) is especially handy for managing player data without much of a hassle. If you can, also try to find one with session locking.

### Basic Essentials
Some other basic essential libraries that are really handy to use include:
* Signal (any signal module with typechecking works)
* Cleanup (like Trove or Bucket)
* UI Stories (like UI Labs)
* Promise (any common Promise library works)