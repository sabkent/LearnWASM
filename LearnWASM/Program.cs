using System;
using System.Runtime.InteropServices.JavaScript;
using System.Threading.Tasks;

public partial class MyClass
{
    public static async Task Main(){await Task.Delay(-1);}

    [JSExport]
    internal static string Greeting()
    {
        var text = $"Hello, World! Greetings from {GetHRef()}";
        Console.WriteLine(text);
        return text;
    }

    [JSImport("window.location.href", "main.js")]
    internal static partial string GetHRef();


    [JSImport("browser.localStorage.setItem", "main.js")]
    internal static partial void SaveData(string key, string value);


    [JSExport]
    internal static void Test()
    {
        SaveData("lama", "lover");
    }
}
