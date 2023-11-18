import { eq } from 'drizzle-orm';
import item from '../models/item';
import db  from "../db/db";
class ItemRepo {
    constructor() {

    }
  
    // Additional methods specific to the "enchantment" table
  
    // Get Enchantment by Name
    getByItemName(name) {
      // Use the parent class method with a parameterized table name
      return db.select().from(item).where(eq(item.name, name)).values();
    }

    // Get all enchantments
    getAllItems(){
        let items =  db.select().from(item).values();
        let actualItems = [];
        items.forEach(function (item) {
            actualItems.push(new Item(item[0], item[1]));
        })
        return actualItems;
    }

    // Add Enchantment
    //INSERT INTO enchantment (type, description, name, max_level) VALUES ('melee','does fire damage', 'fire aspect', 5)
    async addItem(newType, newName){

        await db.insert(item).values([
        {
            name: newName,
            type: newType,
        }
        ,]);
    }

    // Update Enchantment Type
    async updateItemType(newType, id){
        await db.update(item)
        .set({type: newType})
        .where(eq(item.id,id));
    }

    async deleteItem(itemID){
        await db.delete(item).where(eq(item.id,itemID));
    }
  
    // Other methods specific to the "enchantment" table can be added here
  }
  class Item {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    toString() {
        return `Name: ${this.name}, Type: ${this.type}`;
    }

}
  export default ItemRepo;
  