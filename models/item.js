import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
const item = sqliteTable('item', {
    id: integer('id').primaryKey(),
    name: text('name'),
    type: text('type')
  });
export default item;