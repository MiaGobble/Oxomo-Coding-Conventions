# Intro
These conventions cover a number of topics, such as for juxtaposition, capitalization, and more.

For any convention unspecified, match the nearest golden example; do not invent a style.

If you feel something is missing, please make an issue on the GitHub repository.

## Additional general practices
Consider the following in addition to the rest of the conventions, as general advice:
* Keep code to reasonable minimum.
* Do not obfuscate or keep statements on single lines.
* Do not overwrite code.
* Do not repeat yourself.
* Do not cache inline functions, such as those from the math or cframe libraries, for example. Luau includes inline caching.
* Assign variables to the smallest possible scope.
* Return in a function as soon as possible.
* Avoid yielding code (like with `WaitForChild`) when possible.

## Example OOP Module Script

```luau
local DynamicPart = {}
DynamicPart.__index = DynamicPart

-- Constants
local DEFAULT_PART_PROPERTIES = {
    Size = Vector3.one * 5,
    Color = Color3.fromRGB(255, 255, 255),
    Transparency = 0.5,
    Reflectance = 0.5,
    CanCollide = true,
    Anchored = true,
}

-- Services
local ReplicatedStorage = game:GetService("ReplicatedStorage")

-- Imports
local SharedModules = ReplicatedStorage.SharedModules
local Packages = SharedModules.Packages
local Bucket = require(Packages.Bucket)
local Signal = require(Packages.Signal)

-- Types extended
export type DynamicPart = typeof(setmetatable({}, DynamicPart)) & {
    Part : BasePart,
    Id : number,
    PropertyChanged : Signal.Signal<string>,
    Bucket : Bucket.Bucket,
}

-- Variables
local CurrentMaxId = 0

function DynamicPart.new() : DynamicPart
    local self : DynamicPart = setmetatable({}, DynamicPart)

    CurrentMaxId += 1

    self.Part = Instance.new("Part")
    self.Id = CurrentMaxId
    self.PropertyChanged = Signal.new()
    self.Bucket = Bucket.new()

    self:Init()

    return self
end

function DynamicPart.Init(self : DynamicPart)
    for property, value in DEFAULT_PART_PROPERTIES do
        self.Part[property] = value
    end

    self.Bucket:Add(self.Part)
    self.Bucket:Add(self.PropertyChanged)
end

function DynamicPart.SetProperty(self : DynamicPart, property : string, value : any)
    self.Part[property] = value
    self.PropertyChanged:Fire(property)
end

function DynamicPart.GetProperty(self : DynamicPart, property : string)
    return self.Part[property]
end

function DynamicPart.Destroy(self : DynamicPart)
    self.Bucket:Destroy()
end

return DynamicPart
```