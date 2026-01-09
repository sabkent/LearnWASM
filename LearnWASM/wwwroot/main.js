import { dotnet } from './_framework/dotnet.js'

const { setModuleImports, getAssemblyExports, getConfig } = await dotnet
    .withDiagnosticTracing(false)
    .withApplicationArgumentsFromQuery()
    .create();

//Bridge for c# to call back to brower
setModuleImports('main.js', {
    browser:{
        localStorage:{
            setItem: (key, value) => localStorage.setItem(key, value),
            getItem: (key) => localStorage.getItem(key)
        }
    },
    window: {
        location: {
            href: () => globalThis.window.location.href
        }
    }
});

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);
const text = exports.MyClass.Greeting();
console.log(text);

document.getElementById('out').innerHTML = text;

window.Test = () => {
    exports.MyClass.Test();
};


await dotnet.run();