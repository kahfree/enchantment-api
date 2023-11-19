import db from "../db/db";
import itemHasEnchantment from "../models/itemHasEnchantment";

await db.insert(itemHasEnchantment).values([
  {
    itemType: "All purpose",
    enchantmentName: "Mending"
  },
  {
    itemType: "All purpose",
    enchantmentName: "Unbreaking"
  },
  {
    itemType: "All purpose",
    enchantmentName: "Curse of Vanishing"
  },
  {
    itemType: "Armor",
    enchantmentName: "Blast Protection"
  },
  {
    itemType: "Armor",
    enchantmentName: "Curse of Binding"
  },
  {
    itemType: "Armor",
    enchantmentName: "Aqua Affinity"
  },
]);

console.log(`Seeding complete.`);
