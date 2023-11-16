import Enchantment from './models/enchantment';
import Item from './models/item';
import ItemHasEnchantment from './models/itemHasEnchantment';

import EnchantmentRepo from './EnchantmentRepo'
const repo = new EnchantmentRepo();


// var insert = await repo.addEnchantment();
// console.log(insert);

var id = repo.getByEnchantmentName('test name')[0][0];
console.log(id);
// await repo.updateEnchantmentType('new type', 2);
await repo.deleteEnchantment('test name');
var results = repo.getAllEnchantments();
console.log(results);
// var result = repo.getByEnchantmentName('test name');
// console.log(result);

const responseBuilder = require('./util/responsebuilder.js');
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

// const insertDataQuery = 'INSERT INTO enchantment (type, description, name, max_level) VALUES (?,?,?,?)';
// const userData = ['melee','does fire damage', 'fire aspect', 5];
// db.insertData(insertDataQuery, userData);
// const readDataQuery = 'SELECT * FROM enchantment';
// const data = db.getAllData(readDataQuery);
// console.log(data);
// const row = db.getByName('fire aspect','enchantment');
// console.log(row.name);
// db.close();

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
        return responseBuilder.buildSimpleResponse('404 add the db',200);
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
  