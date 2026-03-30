# Userdata Naming
Userdata can be variables or functions.

## Variables
Bear in mind the following rules when deciding a name for any variables:
* Do not abbreviate or truncate variable or function names from their context. Names should make sense, and should not require or provoke thought into what it actually is used for. For example, player is much better than plr, and even better than p. More verbose names is usually better.
* Booleans can only be true or false. As such, they should be named as if they were yes or no questions. “isAlive” sounds like a yes or no question, but “alive” does not.
* Names should be kept in positive form, meaning that they clarify an activity or state. Examples:
    * Rename `isDead` to `isAlive`.
    * Rename `isNotShooting` to `isShooting`
    * Rename `isIdle` to `isMoving`
    * Rename `disallowedToDoThing` to `allowedToDoThing`
    * And etc...
* If the not keyword is used to negate a variable more often than not and scales that way, consider renaming the variable to the inverse.
* Variables should be descriptive and verbose enough to describe a purpose and state.
* Do not reuse variable names in shared scopes (or in other words, don't shadow variable names).

Bad example:

```lua
local CONFIG = {s = 5}

local plrs = game:GetService("Players")
local repstore = game:GetService("ReplicatedStorage")

local pks = repstore:WaitForChild("Packages")
local seam = require(pks.Seam)
local n = seam.New
local s = seam.Spring

local plr = plrs.LocalPlayer
local gui = plr.PlayerGui
```

Good example:

```lua
local CONFIG = {Speed = 5}

local PlayersService = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Packages = ReplicatedStorage:WaitForChild("Packages")
local Seam = require(Packages.Seam)
local New = Seam.New
local Spring = Seam.Spring

local Player = PlayersService.LocalPlayer
local PlayerGui = Player.PlayerGui
```

:::warning 

The number one counter-argument to keeping consistent styling and good naming is "already knowing what everything does". That does not cut it. Whether you are working by yourself or with others, at some point in the future the code will need to be iterated upon, and in order to do so there should not be time wasted asking "what does everything do?”

:::

## Functions
Like variables, functions need solid names as well. Bear the following in mind:
* Functions, when called, happen in the moment as an event. As such, they must be named as if they are in present verb form. Examples:
    * Change `allChildren()` to `getAllChildren()` as this clarifies that the function is a "getter" method.
    * Change `playerMovement()` to `movePlayer()` as this implies the userdata a call to action rather than a state.
* Functions should clarify what data is processed and how it is processed. To do so, include terms such as the type of data, the action, etc in the naming. Examples:
    * Change drink() to consumeDrink(), since "Drink" can also represent an object, while "Consume" is always a call to action.

The general rule of thumb is to include as much description in a function name as possible without needing the use of comments or documentation.

Good function names are important for inferring what something does as an action. If a developer has to test it to know what it does, then you're doing it wrong.