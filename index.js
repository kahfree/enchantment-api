import Enchantment from './models/enchantment';
import Item from './models/item';
import ItemHasEnchantment from './models/itemHasEnchantment';

import EnchantmentRepo from './EnchantmentRepo'
import EnchantmentServiceWrapper from './EnchantmentServiceWrapper';
// const repo = new EnchantmentRepo();
const enchantSW = new EnchantmentServiceWrapper();

// var insert = await repo.addEnchantment();
// console.log(insert);

// var id = repo.getByEnchantmentName('fire aspect')[0][0];
// console.log(id);
// // await repo.updateEnchantmentType('new type', 2);
// await repo.deleteEnchantment('test name');
// var results = repo.getAllEnchantments();
// console.log(results);
// // var result = repo.getByEnchantmentName('test name');
// // console.log(result);

const responseBuilder = require('./util/responsebuilder.js');

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
        let results = enchantSW.getAllEnchantments();
        console.log(results);
        return responseBuilder.buildSimpleResponse(JSON.stringify(results),200);
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
  