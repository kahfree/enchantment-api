import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
export const enchantment = sqliteTable('enchantment', {
    id: integer('id').primaryKey(),
    type: text('type'),
    description: text('description'),
    name: text('name'),
    maxLevel: integer('max_level'),
  });