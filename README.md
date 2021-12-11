# Dotnet Version Finder

Get the dotnet project version to Github Actions

## Inputs

- `path` **required** path of .csproj file

## Outputs

- `version` version of the project

## Sample

```xml
<Project Sdk="Microsoft.NET.Sdk.Razor">

    <PropertyGroup>
        <TargetFramework>net6.0</TargetFramework>
        <Nullable>enable</Nullable>
        <ImplicitUsings>enable</ImplicitUsings>
        
        <!--Version here-->
        <Version>0.0.1</Version>
    </PropertyGroup>

    <ItemGroup>
        <EmbeddedResource Include="wwwroot\**\*" />
        <PackageReference Include="Microsoft.AspNetCore.Components.Web" Version="6.0.0" />
    </ItemGroup>

</Project>

```