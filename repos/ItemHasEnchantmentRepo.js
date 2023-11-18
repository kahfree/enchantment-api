import { eq } from 'drizzle-orm';
import itemHasEnchantment from '../models/itemHasEnchantment';
import db  from "../db/db";
class ItemHasEnchantmentRepo {
    constructor() {

    }
  
    // Additional methods specific to the "enchantment" table
  
    // Get Enchantment by Name
    getByItemType(type) {
      // Use the parent class method with a parameterized table name
      return db.select().from(itemHasEnchantment).where(eq(itemHasEnchantment.itemType, type)).values();
    }

    // Get all enchantments
    getAllItems(){
        let items =  db.select().from(itemHasEnchantment).values();
        let actualItems = [];
        items.forEach(function (item) {
            actualItems.push(new ItemHasEnchantment(item[0], item[1]));
        })
        return actualItems;
    }

    // Add Enchantment
    //INSERT INTO enchantment (type, description, name, max_level) VALUES ('melee','does fire damage', 'fire aspect', 5)
    async addItemHasEnchantmnet(newType, newName){

        await db.insert(itemHasEnchantment).values([
        {
            itemType: newType,
            enchantmentName: newName,
        }
        ,]);
    }

    // Update Enchantment Type
    async updateItemType(newType, name){
        await db.update(itemHasEnchantment)
        .set({itemType: newType})
        .where(eq(itemHasEnchantment.enchantmentName,name));
    }

    async deleteItem(enchantmentName){
        await db.delete(itemHasEnchantment).where(eq(itemHasEnchantment.enchantmentName,enchantmentName));
    }
  
    // Other methods specific to the "enchantment" table can be added here
  }
  class ItemHasEnchantment {
    constructor(itemName, enchantmentName){
        this.itemName = itemName;
        this.enchantmentName = enchantmentName;
    }

    toString() {
        return `Item: ${this.itemName}, Enchantment: ${this.enchantmentName}`;
    }

}
  export default ItemHasEnchantmentRepo;
  