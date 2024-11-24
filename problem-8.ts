const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
   let ok = true;
   for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in obj)) {
         ok = false;
         break;
      }
   }
   return ok;
}

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));