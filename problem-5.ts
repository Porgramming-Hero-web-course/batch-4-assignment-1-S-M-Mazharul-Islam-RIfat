const getProperty = <T extends { name: string }>(person: T, key: string): string => {
   return person[key as keyof typeof person] as string;
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));