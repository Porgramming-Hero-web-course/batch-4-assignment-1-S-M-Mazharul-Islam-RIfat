interface Profile {
   name: string;
   age: number;
   email: string;
}

const updateProfile = (currentProfile: Profile, updatedProfileInfo: { name: string } | { age: number } | { email: string }): Profile => {
   Object.keys(updatedProfileInfo).forEach(key => {
      currentProfile[key as keyof typeof currentProfile] = updatedProfileInfo[key as keyof typeof updatedProfileInfo];
   })
   return currentProfile;
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));