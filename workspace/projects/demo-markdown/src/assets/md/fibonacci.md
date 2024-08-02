```cs
public class Fibonacci
{
    public static int Calculate(int n)
    {
      if (n < 2)
        return n;
      else
        return Calculate(n - 1) + Calculate(n - 2);
    }
}
```

#### Note
1. In order to serve static files (*.md etc.) configure angular.json in build section to include assets folder.

```json
"assets": [
	"projects/demo-markdown/src/assets",
	{
		"glob": "**/*",
		"input": "projects/demo-markdown/public"
	}
],
```

2. If you want to use the [src] attribute to load a file, in order to keep only one instance of HttpClient and avoid issues with interceptors, you also have to provide HttpClient.

```ts
// app.config.ts
providers: [
  provideHttpClient(),
  provideMarkdown({ loader: HttpClient }),
]
```