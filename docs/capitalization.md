# Capitalization
Capitalization refers to the way userdata names is capitalized.

There are four main types of capitalization:
* *Pascal case* (`PascalCase`), which makes every word start with a capital letter
* *Camel case* (`camelCase`), which makes every word start with a capital letter, except the first word
* *Upper case* (`UPPER_CASE`), which makes every letter capitalized, with words separated by underscores
* *Snake case* (`snake_case`), which makes every letter lowercase

In the Oxomo Conventions, *pascal case* is the default for every userdata except the declared exceptions below. *Snake case* is never used. The reason it's best to opt for *pascal case* is because a majority of the Roblox API uses that casing, and so having userdata to match a similar style is easier to read.

::: warning

Be sure to read the exceptions below for cases that don't use *pascal case*.

:::

## Constants
Constants, which are variables that are declared once at the top of the script and never change, are always *upper case*. In this case, only do this casing if the variable is in the root part of the script towards the top, not if it's in another function.

```luau
local MY_CONSTANT = 10 -- Constant
local MyVariable = 10 -- Not constant

MyVariable = 20
```

## Arguments and parameters
Arguments and parameters should be in *camel case*. Arguments are parameters are declared as variables that are passed by something into a more specific scope. Below are two examples of this.

Example in `for` loop:

```luau
for index : number, value : any in MyTable do
    local ExampleVariable = value
    --...
end
```

Example in function:

```luau
local function MyFunction(firstArgument : number, secondArgument : string)
    local ExampleVariable = secondArgument
end
```

## OOP class-wide functions
When programming in OOP format, all OOP methods (e.g. `object:Destroy()`) are named in *pascal case*. However, OOP class functions, such as constructors (e.g. `object.new()`), are always done in *camel case*.

```luau
function object.new(...) -- Class-wide function
    return --...
end

function object:Method() -- Object method
    --...
end
```

## Configuration
Configuration refers to tables or other userdata that act like constants shared across a project. Indexes in these config files are still in *pascal case*.

```luau
local SETTINGS = {
    Setting0 = "",
    Setting1 = "",
    --...
}
```

## Keys and actions
A key or action would refer to something like a string sent to a function that changes behavior. In a case like this, all keys are still *pascal case*.

For example:

```luau
local function DoAction(actionType : string)
    if actionType == "Foo" then
        -- ...
    elseif actionType == "Bar" then
        -- ...
    end
end

DoAction("Foo")
```