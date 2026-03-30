# Userdata Declaration
Always use the `local` keyword within any scope, including the top one. Functions have function syntax, variables have variable syntax.

When defining functions, put `local function` before the name, not after.

```lua
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