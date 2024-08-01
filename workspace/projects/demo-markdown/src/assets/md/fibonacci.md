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