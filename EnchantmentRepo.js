import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { eq } from 'drizzle-orm';
import enchantment from './models/enchantment';
class EnchantmentRepo {
    constructor(databasePath = "mydb.sqlite") {
        const sqlite = new Database('mydb.sqlite');
        this.db = drizzle(sqlite);
    }
  
    // Additional methods specific to the "enchantment" table
  
    // Get Enchantment by Name
    getByEnchantmentName(name) {
      // Use the parent class method with a parameterized table name
      return this.db.select().from(enchantment).where(eq(enchantment.name, name)).values();
    }

    // Get all enchantments
    getAllEnchantments(){
        return this.db.select().from(enchantment).values();
    }

    // Add Enchantment
    //INSERT INTO enchantment (type, description, name, max_level) VALUES ('melee','does fire damage', 'fire aspect', 5)
    async addEnchantment(){

        await this.db.insert(enchantment).values([{
            type: "test type",
            description: "test description",
            name: "test name",
            maxLevel: 6
        },]);
    }

    // Update Enchantment
    async updateEnchantmentType(newType, id){
        await this.db.update(enchantment)
        .set({type: newType})
        .where(eq(enchantment.id,id));
    }

    async deleteEnchantment(enchantmentName){
        await this.db.delete(enchantment).where(eq(enchantment.name,enchantmentName));
    }
  
    // Other methods specific to the "enchantment" table can be added here
  }
  
  export default EnchantmentRepo;
  