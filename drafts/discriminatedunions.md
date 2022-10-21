# TypeScript Discriminated Unions

## Type Literals

## Unions

## Discriminated Unions

isloading vs data available vs data error

error with message or no error (and no message!)

```ts
type LoadingState = { state: "loading" };
type ErrorState = { state: "error"; error: unknown };
type ReadyState = { state: "ready"; userDetails: UserDetails };

type UserDetailsResponse = LoadingState | ErrorState | ReadyState;

const useGetUserDetails = (userId: string) => {
  const [response, setResponse] = React.useState<UserDetailsResponse>({
    state: "loading",
  });

  React.useEffect(() => {
    getUserDetails(userId)
      .then((response) =>
        setResponse({ state: "ready", userDetails: response })
      )
      .catch((error) => setResponse({ state: "error", error }));
  }, [userId, getUserDetails]);

  return { response };
};
```

You're welcome :slight_smile:
This is a common problem with discriminated unions. If you immediately destructure them before "discriminating" them, then you lose the type-relationship between the fields.
So you should avoid destructuring them until after you have "discriminated" which version of themselves they are
The reason it works this way is that if you destructure before discriminating, TypeScript is effectively forced to broaden the type of each individual field to include every possibility at that point. But you now have just a bunch of separate values/types which no longer have a relationship to each other.
