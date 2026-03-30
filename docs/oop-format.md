# OOP Format
Follow this format for writing OOP code:

```lua
local Object = {}
Object.__index = Object

-- Types
type Object = typeof(setmetatable({}, Object)) & {
    Foo : number,
    Bar : string,
}

function Object.new(foo : number, bar : string)
    local self : Object = setmetatable({}, Object) -- UNSEALED TABLE!!!

    self.Foo = foo
    self.Bar = bar

    self:Init()

    return self
end

function Object.Init(self : Object)
    -- Initialization
    self:Method()
end

function Object.Method(self : Object)
    -- ...
end

return Object
```

Things to note:
* OOP is done best with metatables
* `__index` is declared at the top, right alongside the class declaration
* `.new` makes a variable of the top of that scope called `self`, which is an unsealed metatable
* Using `.new` calls `:Init()` before returning `self`
* `self` is typechecked

We write OOP in this way because of readability and ease of use. It's more faux-OOP than anything, but it gets the same job done.

## When to use OOP
Object-oriented programming is used when you can best represent functionality as an instance of an object. For example, a weapon is an object with different existing instances, thus OOP makes the most sense for a gun class. Other examples of OOP being used is for tools, NPCs, cleanup groups, and more.