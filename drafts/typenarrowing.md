# Type Narrowing

```ts
function isDuck(animal: Animal): animal is Duck {
  return animal.speak === "quack" && animal.movement === "waddle";
}
```

```ts
interface User {
  name: string;
}

function isUser(json: any): json is User {
  if (!json) return false;
  // TODO this isn't good enough. If `json` is string it'll error
  return typeof json.name === "string";
}

function getUserFromApi(userId: string): Promise<User> {
  return fetchUser(userId)
    .then((response) => response.json())
    .then((json) => {
      if (isUser(json)) {
        return json;
      }
      throw new Error("Unrecognised response from API");
    });
}
```
