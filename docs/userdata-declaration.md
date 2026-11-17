# Userdata Declaration
Always use the `local` keyword within any scope, including the top one (except in cases for `const`, see below). Functions have function syntax, variables have variable syntax.

When defining functions, put `local function` before the name, not after.

```luau
Foo = 5 -- Bad

local Foo = 5 -- Good

function Bar() -- Bad

end

local Bar = function() -- Bad

end

local function Bar() -- Good

end
```

By using the `local` keyword, you are increasing modularity by explicitly definiting the scope of the value. Functions are also written in `local function` format for readability purposes.

## Exceptions with `const`
`const` is an alternative way to declare variables, which increases type safety on constants.

One reason to use it is when writing variables as constants, like so:

```luau
const CONFIG = {
    ...
}
```

The only other time you use it is when writing services as variables, like so:

```luau
const ReplicatedStorage = game:GetService("ReplicatedStorage")
const PlayersService = game:GetService("Players")
```

## Single-line function signatures
Functions should always be written in one line for improved readability. For example, instead of writing:

```luau
local function MyFunction(
    X : string,
    Y : string,
    Z : string
)
    print("...")
end
```

You would write:

```luau
local function MyFunction(X : string, Y : string, Z : string)
    print("...")
end
```

However, signatures **do not need to be written the same as calls!** This means that it's totally acceptable to write multi-line calls, like so:

```luau
MyFunction(
    "a",
    "b",
    "c",
)
```