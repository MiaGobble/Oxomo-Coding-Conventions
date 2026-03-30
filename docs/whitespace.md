# Whitespace
Whitespace refers to indentation and line breaks.

## Indentation
Indentation is always done with tabs, not spaces.

If you cannot tab, use 4 spaces.

```lua
do
    do
        do
            -- Good indentation
        end
    end
end
```

Do not use unneeded indentation, and maintain indentation so that it matches the scope in best possible way.

## Line breaks
Separate different sections of userdata and more with line breaks, as shown in [juxtaposition](./juxtaposition.md).

The rule of thumb is to always prefer a line break when programming anything if it means your code becomes more readable.

Excessive line breaks are not acceptable, since it's just more you have to scroll through. Here is an example of excessive line breaks:

```lua
local foo = 5










local function bar()

end
```