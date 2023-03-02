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

const isObject = (unknown: unknown): Record<PropertyKey, unknown> =>
  unknown !== null && typeof unknown === "object";

const isUser = (json: unknown): json is User =>
  isObject(json) && typeof json.name === "string";

const getUserFromApi = (userId: string): Promise<User> =>
  fetchUser(userId)
    .then((response) => response.json())
    .then((json) => {
      if (isUser(json)) return json;
      throw new Error("Unrecognised response from API");
    });
```
