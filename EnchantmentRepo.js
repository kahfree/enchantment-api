import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { eq } from 'drizzle-orm';
class EnchantmentRepo {
    constructor(databasePath = "mydb.sqlite") {
        const sqlite = new Database('mydb.sqlite');
        this.db = drizzle(sqlite);
        this.enchantment = sqliteTable('enchantment', {
            id: integer('id').primaryKey(),
            type: text('type'),
            description: text('description'),
            name: text('name'),
            maxLevel: integer('max_level'),
          });
    }
  
    // Additional methods specific to the "enchantment" table
  
    // Get Enchantment by Name
    getByEnchantmentName(name) {
      // Use the parent class method with a parameterized table name
      return this.db.select().from(this.enchantment).where(eq(this.enchantment.name, name)).values();
    }

    // Get all enchantments
    getAllEnchantments(){
        return this.db.select().from(this.enchantment).values();
    }

    // Add Enchantment
    //INSERT INTO enchantment (type, description, name, max_level) VALUES ('melee','does fire damage', 'fire aspect', 5)
    async addEnchantment(){

        await this.db.insert(this.enchantment).values([{
            type: "test type",
            description: "test description",
            name: "test name",
            maxLevel: 6
        },]);
    }

    // Update Enchantment
    async updateEnchantmentType(newType, id){
        await this.db.update(this.enchantment)
        .set({type: newType})
        .where(eq(this.enchantment.id,id));
    }

    async deleteEnchantment(enchantmentName){
        await this.db.delete(this.enchantment).where(eq(this.enchantment.name,enchantmentName));
    }
  
    // Other methods specific to the "enchantment" table can be added here
  }
  
  export default EnchantmentRepo;
  