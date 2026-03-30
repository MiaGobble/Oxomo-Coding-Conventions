# Juxtaposition
When programming, it's important to make sure that similar things are in similar places in a script, that way other programmers know where to find what they need.

When possible, your code must have data organized in this order:
* Class declaration (when applicable)
* Types
* Constants
* Services
* Imports
* Types extended
* Constants extended
* Variables
* Local functions
* Class functions (when applicable)
* Class object methods (when applicable)

:::info

Juxtaposition is extremely important for consistency and readability, since it allows developers to quickly glance at a part of the code they assume will have the information they need.

:::

Types, constants, services, imports, types extended, constants extended, and variables all are separated into sections by whitespace and have a comment of each section saying what it is. "Extended" sections only should exist if they need something from imports or something else.

Below is an example script showing proper juxtaposition and comments:

```lua
local Class = {}
Class.__index = Class

-- Types
type Dictionary = {[string] : any}
type Class = setmetatable({}, Class) & {
    --...
}

-- Constants
local CONSTANT_A = "Hello,"
local CONSTANT_B = "World!

-- Services
local PlayersService = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

-- Imports
local Common = ReplicatedStorage.Common
local Packages = Common.Packages
local ModuleA = require(path.to.module)
local ModuleB = require(path.to.module)

-- Types extended
type SpecialTypeArray = {ModuleA.SpecialType}

-- Constants extended
local OTHER_CONSTANT = ModuleB.SomeSetting

-- Variables
local ThingThatChanges = 0

local function ChangeThing()
    ThingThatChanges = 1
end

function Class.new()
    return --...
end

function Class.Method(self : Class)
    return --...
end

return Class
```