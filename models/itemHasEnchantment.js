import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import enchantment from './enchantment';
import item from './item';
const itemHasEnchantment = sqliteTable('item_has_enchantment', {
    itemType: text('item_type').references(item.type),
    enchantmentName: text('enchantment_name').references(enchantment.name)
  }, (table) => {
    return {
        pk: primaryKey({columns: [table.itemType, table.enchantmentName]}),
    };
  }
  );
export default itemHasEnchantment;