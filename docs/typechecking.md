# Typechecking
Typechecking in Luau exists to provide more information to a developer with the same amount of code and comments. For example, you would typecheck a library's functions to make it clear the developer what types of data they are inputting and what they are getting back. Typechecking also improves intellisense/autofill, allowing the developer to code faster.

Type every public function (both param and return), and type variables when not obvious to reader or linter. Ensure every class and module has proper typing for ease of use.

Bad example:

```luau
local function GetOtherFunction(foo)
    return function(bar)
        --...
    end
end
```

Good example:

```luau
local function GetOtherFunction(foo : number) : (string) -> nil
    return function(bar : string)
        --...
    end
end
```

## Exporting and storing types
Types should be exported from modules when they represent data that is usable from outside the module, like so:

```luau
export type MyType = string | number
```

Additionally, making modules exclusively for storing types is recommended when creating complex libraries or systems.

## Type definition whitespace
Use `Variable : Type` notation instead of `Variable: Type`. This extra space improves readability!

## Linting mode
Use the default linting mode for typechecking. Do not use `--!strict`.