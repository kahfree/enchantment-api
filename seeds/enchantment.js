import { db } from "../db/db";
import { enchantment } from "../models/enchantment";

await db.insert(enchantment).values([
  {
    type: "All Purpose",
    description: "Repairs the item when gaining XP orbs.",
    name: "Mending",
    maxLevel: 1
  },
  {
    type: "All Purpose",
    description: "Increases item durability.",
    name: "Unbreaking",
    maxLevel: 3
  },
  {
    type: "All Purpose",
    description: "Item destroyed upon death.",
    name: "Curse of Vanishing",
    maxLevel: 1
  },
  {
    type: "Armor",
    description: "Reduces explosion damage and knockback.",
    name: "Blast Protection",
    maxLevel: 4
  },
  {
    type: "Armor",
    description: "Items cannot be removed from armor slots unless the cause is death or breaking.",
    name: "Curse of Binding",
    maxLevel: 1
  },
  {
    type: "Armor",
    description: "Increase the rate of underwater mining speed.",
    name: "Aqua Affinity",
    maxLevel: 1
  },
]);

console.log(`Seeding complete.`);
