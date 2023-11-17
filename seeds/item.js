import db from "../db/db";
import item from "../models/item";

await db.insert(item).values([
  {
    name: "Helmet",
    type: "Armor"
  },
  {
    name: "Turtle Shell",
    type: "Armor"
  },
  {
    name: "Chestplate",
    type: "Armor"
  },
  {
    name: "Leggings",
    type: "Armor"
  },
  {
    name: "Boots",
    type: "Armor"
  },
  {
    name: "Sword",
    type: "Melee"
  },
  {
    name: "Axe",
    type: "Melee"
  },
  {
    name: "Pickaxe",
    type: "Tool"
  },
  {
    name: "Shovel",
    type: "Tool"
  },
  {
    name: "Hoe",
    type: "Tool"
  },
  {
    name: "Bow",
    type: "Ranged"
  },
  {
    name: "Fishing rod",
    type: "Tool"
  },
  {
    name: "Trident",
    type: "Ranged"
  },
  {
    name: "Crossbow",
    type: "Ranged"
  },
  {
    name: "Sheers",
    type: "Tool"
  },
]);

console.log(`Seeding complete.`);
