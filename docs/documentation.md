# Documentation
All documentation in a codebase should be in Moonwave format, which is very readable and able to be auto-compiled to a generated documentation website.

## Moonwave Docs
Moonwave here refers to the **comment format** used inside Luau modules (and optionally Moonwave's site generator for library APIs). You can learn about Moonwave here: https://eryn.io/moonwave/.

Documentation should be written in Moonwave format for every module under `SharedModules`, `Packages`, and anything else top-level. Skip private helper or sub-module scripts.

When writing Moonwave comments, use comment blocks by starting with `--[=[` and ending with `]=]`. For example:

```luau
--[=[
    This is a class written in Moonwave format

    @class ClassName
]=]
```

Also when writing Moonwave comments, opt to always use `@param`, `@class`, and `@return` tags when applicable, and make sure to describe parameters and return data. Anything else is optional but nice to have. When writing a description for a function, make sure to include a Luau snippet. For example:

```luau
--[=[
    Thing that does thing.

    ``luau
    Module.DoThing(5)
    ``

    @param foo number -- The parameter that does thing
]=]

function Module.DoThing(foo : number)
    --...
end
```

## Comments
Be sure to sprinkle normal comments made with `--` (no more than two dashes) around your code, especially in parts that are hard to understand without further context. If a developer wouldn't be able to understand something, put a comment on it. Put a space before and after typing a comment declaration.

When commenting on something that takes up a single line, put the comment to the right of the data. For example:

```luau
-- This is a bad comment for this variables
local BadCommentVariable = ...

local GoodCommentVariable = ... -- This is a better-formatted comment
```

## Comment blocks
Do *not* do large comment blocks to separate parts of code. Proper juxtaposition and more already does that, and it's just more to scroll through. An example of an excessive comment block would be something like this:

```luau
--------------------------------------------------
------------// VARIABLES
--------------------------------------------------

local Foo = 5

--------------------------------------------------
------------// FUNCTIONS
--------------------------------------------------

local function Bar()

end
```

However, basic comments *are* used to separate sections. Read the page on Juxtaposition for more info.