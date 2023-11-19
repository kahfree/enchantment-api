import EnchantmentServiceWrapper from './servicewrappers/EnchantmentServiceWrapper';
import ItemServiceWrapper from './servicewrappers/ItemServiceWrapper';
import ItemHasEnchantmentServiceWrapper from './servicewrappers/ItemHasEnchantmentServiceWrapper';
const enchantSW = new EnchantmentServiceWrapper();
const itemSW = new ItemServiceWrapper();
const itemHasEnchantmentSW = new ItemHasEnchantmentServiceWrapper();
console.log(itemSW.getAllEnchantments());
const responseBuilder = require('./util/responsebuilder.js');

const server = Bun.serve({
    port: 8080,
    development: true,
    fetch(req) {
      try{
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
        return responseBuilder.buildSimpleJSONResponse(results,200);
      }

      if(pathname.includes("/enchantments/name") && method == "GET"){
        const enchantmentName = pathname.split("/").pop();
        console.log("Enchantment Name:", enchantmentName);
        let test = enchantSW.getEnchantmentsByName(enchantmentName);
        console.log(test);
        return responseBuilder.buildSimpleJSONResponse(test,200);
      }

      if(pathname.includes("/enchantments/item") && method == "GET"){
        const itemName = pathname.split("/").pop();
        console.log("Item Name:", itemName);
        // let test = enchantSW.getEnchantmentsByName(enchantmentName);
        let newyolk = itemHasEnchantmentSW.getEnchantmentNamesByItem(itemName);
        console.log(newyolk);
        let thegoodstuff = enchantSW.getEnchantmentsFromNames(newyolk);
        console.log(thegoodstuff);
        return responseBuilder.buildSimpleJSONResponse(thegoodstuff,200);
      }

      return new Response("", {status: 404});
    }catch(error){
      console.log(error);
    }
    },
  });
  
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  