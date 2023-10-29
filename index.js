import Enchantment from './models/enchantment';
const responseBuilder = require('./util/responsebuilder.js');
const enchantments = [
  new Enchantment('Fire Aspect', 'Weapon', 'Sets your enemies on fire', 3),
  new Enchantment('Protection', 'Armor', 'Reduces incoming damage', 4),
  new Enchantment('Feather Falling', 'Boots', 'Reduces fall damage', 4),
  new Enchantment('Sharpness', 'Weapon', 'Increases attack damage', 5),
  new Enchantment('Respiration', 'Helmet', 'Allows longer underwater breathing', 3),
];
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
        const combinedEnchantments = enchantmentStrings.join('\n');
        return responseBuilder.buildSimpleResponse(combinedEnchantments,200);
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
  