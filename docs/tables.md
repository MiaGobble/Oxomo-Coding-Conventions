# Tables
See [capitalization](./capitalization.md) and [userdata naming](./userdata-naming.md) for more info on this topic.

## Sealed vs Unsealed Tables
A sealed table looks like this:

```luau
local Foo = {
    A = 1,
    B = 2,
    C = 3,
}
```

And an unsealed table looks like this:

```luau
local Foo = {}

Foo.A = 1
Foo.B = 2
Foo.C = 3
```

Sealed tables are reserved for constants such as configurations or settings. Modules, classes, etc are all to be declared and mutated in an unsealed table.

The reason modules and classes use unsealed tables is because of readability. If a developer is reading your code, they shouldn't have to fight indentation or other weird issues. Sealed tables are best reserved for configs or settings since they are never mutated.

## Writing and Reading Tables
Use plain `key` syntax for writing dictionaries when possible, but if there are any entries that cannot follow that, then use `["key"]` syntax. This is easier to write and read. Example:

```luau
local Bar = {
    A = 1, -- ok
    ["B"] = 2, -- not ok
    ["Letter C"] = 3, -- ok
}
```

Use dot (`table.value`) notation for accessing values in a dictionary table when possible (as opposed to something like `table["value"]`). Again, it's easier to write and read. Example:

```luau
local A = bar.A -- ok
local B = bar["B"] -- not ok
local C = bar["Letter C"] -- ok
```

## Trailing commas
Every table entry should end with a comma, even a trailing one.

Good example:
```luau
local Foo = {
    A = 1,
    B = 2,
    C = 3,
}
```

Bad example:
```luau
local Foo = {
    A = 1,
    B = 2,
    C = 3
}
```

## Say no to padded tables
As a small detail, we avoid padded tables. This means you write single-line tables without spaces on each end.

Example:

```luau
local MyTable = {X = 5} -- Good

local MyTable = { X = 5 } -- Bad
```