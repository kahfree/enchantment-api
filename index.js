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
        return new Response(JSON.stringify("All enchantments"),{status: 200});
      }

      if(pathname == "/enchantments/name" && method == "GET") {
        return new Response("All enchantments by name");
      }

      if(pathname == "/enchantments/weapon" && method == "GET") {
        return new Response("All enchantments by weapon");
      }

      return new Response("", {status: 404});
    },
  });
  
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  