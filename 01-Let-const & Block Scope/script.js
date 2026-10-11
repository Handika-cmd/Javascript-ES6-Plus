function getActiveUsers(users) {
  let active = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
      const user = users[i];
      for (let j = 0; j < user.tags.length; j++) {
        const tag = user.tags[j];
        if (tag === "vip") {
          active.push(user.name);
        }
      }
    }
  }
  console.log(i, user, tag); // masih bisa diakses di sini — scope leak!
  return active;
}

const data = [
  { name: "Budi", isActive: true, tags: ["regular"] },
  { name: "Sari", isActive: true, tags: ["regular", "vip"] },
  { name: "Rian", isActive: false, tags: ["vip"] },
];
console.log(getActiveUsers(data));