# Tables
See [capitalization](./capitalization.md) and [userdata naming](./userdata-naming.md) for more info on this topic.

## Sealed vs Unsealed Tables
A sealed table looks like this:

```lua
local foo = {
    a = 1,
    b = 2,
    c = 3,
}
```

And an unsealed table looks like this:

```lua
local foo = {}

foo.a = 1
foo.b = 2
foo.c = 3
```

Sealed tables are reserved for constants such as configurations or settings. Modules, classes, etc are all to be declared and mutated in an unsealed table.

The reason modules and classes use unsealed tables is because of readability. If a developer is reading your code, they shouldn't have to fight indentation or other weird issues. Sealed tables are best reserved for configs or settings since they are never mutated.

## Writing and Reading Tables
Use plain `key` syntax for writing dictionaries when possible, but if there are any entries that cannot follow that, then use `["key"]` syntax. This is easier to write and read. Example:

```lua
local bar = {
    a = 1, -- ok
    ["b"] = 2, -- not ok
    ["letter c"] = 3, -- ok
}
```

Use dot (`table.value`) notation for accessing values in a dictionary table when possible (as opposed to something like `table["value"]`). Again, it's easier to write and read. Example:

```lua
local a = bar.a -- ok
local b = bar["b"] -- not ok
local c = bar["letter c"] -- ok
```