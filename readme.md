install the workload

```
dotnet workflow install wasm-tools

```

need to install more "dotnet new" templates
```
dotnet new install Microsoft.NET.Runtime.WebAssembly.Templates
```

use the template to create all the things
```
dotnet new wasmbrowser -n LearnWASM
```

need to publish it

```
dotnet build
dotnet publish -c Debug
```

use the vs go live from this location
bin/Debug/net10.0/publish/wwwroot/