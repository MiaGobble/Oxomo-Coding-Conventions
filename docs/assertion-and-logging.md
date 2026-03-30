# Assertion and Logging
Throughout your code, make sure to properly assert and print when needed.

## String Concatenation
When concatenating a string, including for output, make sure to build literal strings with "`". For example:

```lua
local MyNumber = 5
local MyString = `Number = {MyNumber}`
```

## Printing
Reserve printing for the following situations:
* Debugging
* Critical state change
* Critical action

## Warning
A warning should always act similar to an error, but of course without breaking the code. Warnings are great for when you have a point of return or default in something. When warning, if it's not already there, make sure to provide a traceback so that the developer can find the issue. Warnings are great for telling a developer that they are not using a library in the intended way. For example, you can throw a warning when attempting to reference a value that doesn't exist.

```lua
warn(`My warning! {debug.traceback()}`)
```

## Error
Errors are served only for unreturnable states of failure. In other words, if you've reached a point where you cannot allow the script to function no matter what, throw an error. It's better to have custom errors than ones thrown by Roblox.

Errors can also be used for assertion, such as types or values in function parameters. They are most helpful in libraries and systems used by multiple people, or are critical parts of a project. Errors are good at explaining to the developer why they used your code wrong. If they are kept guessing, it increases development time.

```lua
if not x then
    error("X isn't a valid value!")
end
```