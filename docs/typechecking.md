# Typechecking
Typechecking in Luau exists to provide more information to a developer with the same amount of code and comments. For example, you would typecheck a library's functions to make it clear the developer what types of data they are inputting and what they are getting back. Typechecking also improves intellisense/autofill, allowing the developer to code faster.

Typecheck a reasonable amount; nobody should guess if "Value" is a number, string, or table. Overtyping is still annoying.

Bad example:

```lua
local function GetOtherFunction(foo)
    return function(bar)
        --...
    end
end
```

Good example:

```lua
local function GetOtherFunction(foo : number) : (string) -> nil
    return function(bar : string)
        --...
    end
end
```

Types should be exported from modules when they represent data that is usable from outside the module, like so:

```lua
export type MyType = string | number
```

Additionally, making modules exclusively for storing types is recommended when creating complex libraries or systems.