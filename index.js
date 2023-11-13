import Enchantment from './models/enchantment';
import Item from './models/item';
import ItemHasEnchantment from './models/itemHasEnchantment';
import {Database} from "bun:sqlite"
const responseBuilder = require('./util/responsebuilder.js');
const enchantments = [
  new Enchantment('Fire Aspect', 'Weapon', 'Sets your enemies on fire', 3),
  new Enchantment('Protection', 'Armor', 'Reduces incoming damage', 4),
  new Enchantment('Feather Falling', 'Boots', 'Reduces fall damage', 4),
  new Enchantment('Sharpness', 'Weapon', 'Increases attack damage', 5),
  new Enchantment('Respiration', 'Helmet', 'Allows longer underwater breathing', 3),
];
const dummyData = [
  new Item('Diamond Sword', 'Weapon'),
  new Item('Iron Pickaxe', 'Tool'),
  new Item('Golden Apple', 'Consumable'),
  new Item('Ender Pearl', 'Resource'),
  new Item('Redstone Dust', 'Resource'),
];
const enchantmentData = [
  new ItemHasEnchantment('Diamond Sword', 'Sharpness'),
  new ItemHasEnchantment('Iron Pickaxe', 'Efficiency'),
  new ItemHasEnchantment('Golden Apple', 'Protection'),
  new ItemHasEnchantment('Ender Pearl', 'Unbreaking'),
  new ItemHasEnchantment('Redstone Dust', 'Fortune'),
];

const db = new Database(":memory:");
const query = db.query("select 'Hello world' as message;");
const server = Bun.serve({
    port: 8080,
    development: true,
    fetch(req) {
      console.log(req);
      //URL: http://localhost:8080/magic
      //Method: GET
      const {url, method} = req;
      //Pathname: /magic
      const {pathname} = new URL(url);
      if(pathname == "/enchantments" && method == "GET") {
        // Use map() to get an array of string representations
        const enchantmentStrings = enchantments.map(enchantment => enchantment.toString());

        // Combine the array of strings into a single string
        console.log(dummyData);
        console.log(enchantmentData);
        const combinedEnchantments = enchantmentStrings.join('\n');
        console.log(query.get());
        return responseBuilder.buildSimpleResponse(combinedEnchantments,200);
        console.log(dummyData);
        console.log(enchantmentData);
      }

      if(pathname == "/enchantments/name" && method == "GET") {
        return responseBuilder.buildSimpleResponse("All enchantments by name",200);
      }

      if(pathname == "/enchantments/weapon" && method == "GET") {
        return responseBuilder.buildSimpleResponse("All enchantments by weapon",200);
      }

      return new Response("", {status: 404});
    },
  });
  
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  