import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { eq } from 'drizzle-orm';
import enchantment from './models/enchantment';
import db  from "./db/db";
class EnchantmentRepo {
    constructor() {

    }
  
    // Additional methods specific to the "enchantment" table
  
    // Get Enchantment by Name
    getByEnchantmentName(name) {
      // Use the parent class method with a parameterized table name
      return db.select().from(enchantment).where(eq(enchantment.name, name)).values();
    }

    // Get all enchantments
    getAllEnchantments(){
        let enchantments =  db.select().from(enchantment).values();
        let actualEnchants = [];
        enchantments.forEach(function (enchantment) {
            actualEnchants.push(new Enchantment(enchantment[0], enchantment[1], enchantment[2], enchantment[3], enchantment[4]));
        })
        return actualEnchants;
    }

    // Add Enchantment
    //INSERT INTO enchantment (type, description, name, max_level) VALUES ('melee','does fire damage', 'fire aspect', 5)
    async addEnchantment(newType, newDesc, newName, newMax){

        await db.insert(enchantment).values([
        {
            type: newType,
            description: newDesc,
            name: newName,
            maxLevel: newMax
        }
        ,]);
    }

    // Update Enchantment Type
    async updateEnchantmentType(newType, id){
        await db.update(enchantment)
        .set({type: newType})
        .where(eq(enchantment.id,id));
    }

    // Update Enchantment Description
    async updateEnchantmentType(newDesc, id){
        await db.update(enchantment)
        .set({description: newDesc})
        .where(eq(enchantment.id,id));
    }

    async deleteEnchantment(enchantmentName){
        await db.delete(enchantment).where(eq(enchantment.name,enchantmentName));
    }
  
    // Other methods specific to the "enchantment" table can be added here
  }
  class Enchantment {
    constructor(id, type, description, name, maxLevel){
        this.id = id;
        this.type = type;
        this.description = description,
        this.name = name,
        this.maxLevel = maxLevel
    }

}
  export default EnchantmentRepo;
  