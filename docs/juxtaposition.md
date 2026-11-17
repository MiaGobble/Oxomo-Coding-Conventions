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

::: info

Juxtaposition is extremely important for consistency and readability, since it allows developers to quickly glance at a part of the code they assume will have the information they need.

:::

Types, constants, services, imports, types extended, constants extended, and variables all are separated into sections by whitespace and have a comment of each section saying what it is. "Extended" sections only should exist if they need something from imports or something else. Do not add comments for functions, methods, or anything else that is functional.

Below is an example script showing proper juxtaposition and comments:

```luau
local Class = {}
Class.__index = Class

-- Types
type Dictionary = {[string] : any}
type Class = typeof(setmetatable({}, Class)) & {
    --...
}

-- Constants
const CONSTANT_A = "Hello,"
const CONSTANT_B = "World!"

-- Services
const PlayersService = game:GetService("Players")
const ReplicatedStorage = game:GetService("ReplicatedStorage")

-- Imports
local Common = ReplicatedStorage.Common
local Packages = Common.Packages
local ModuleA = require(path.to.module)
local ModuleB = require(path.to.module)

-- Types extended
type SpecialTypeArray = {ModuleA.SpecialType}

-- Constants extended
const OTHER_CONSTANT = ModuleB.SomeSetting

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

## Imports
Imports should always be required in order that the variables for the folders for those requires are.

Example:

```luau
-- Imports (not properly ordered)
local FolderA = path.to.folder
local FolderB = path.to.folder
local ModuleB = require(FolderB.module)
local ModuleC = require(FolderB.module)
local ModuleA = require(FolderA.module)
local FolderC = path.to.folder
local ModuleD = require(FolderC.module)

-- Imports (properly ordered)
local FolderA = path.to.folder
local FolderB = path.to.folder
local FolderC = path.to.folder
local ModuleA = require(FolderA.module)
local ModuleB = require(FolderB.module)
local ModuleC = require(FolderB.module)
local ModuleD = require(FolderC.module)
```

## Early escaping
Always prefer to escape a scope as fast as possible with `continue` and `return`.

For example, instead of writing this:

```luau
local function SlowEscape(X : boolean)
    if X then
        for Index = 1, 10 do
            if Index ~= 5 then
                print(Index)
            end
        end
    end
end
```

You would write this:

```luau
local function FastEscape(X : boolean)
    if not X then
        return
    end

    for Index = 1, 10 do
        if Index == 5 then
            continue
        end

        print(Index)
    end
end
```

While it does take more lines of code, you drastically improve readability and make it hard to mislead coworkers with what your code is doing.