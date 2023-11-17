import EnchantmentServiceWrapper from './servicewrappers/EnchantmentServiceWrapper';
import ItemServiceWrapper from './servicewrappers/ItemServiceWrapper';
const enchantSW = new EnchantmentServiceWrapper();
const itemSW = new ItemServiceWrapper();

console.log(itemSW.getAllEnchantments());
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
  