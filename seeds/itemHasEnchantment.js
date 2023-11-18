import db from "../db/db";
import itemHasEnchantment from "../models/itemHasEnchantment";
import {eq} from 'drizzle-orm';

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
// await db.delete(itemHasEnchantment).where(eq(itemHasEnchantment,16));
console.log(`Seeding complete.`);
