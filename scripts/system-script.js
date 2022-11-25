const item = await Item.create({name: "Test Weapon", type: "weapon"});
console.log(item.data);