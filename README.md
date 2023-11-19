# enchantment-api
Rest API made with Bun, Javascript and SQLite for minecraft enchantments.

## Purpose of the project
- Gain experience with the Bun runtime and framework
- Build a REST API in JavaScript (previous experience making APIs in Java)
- Work with SQLite (previously only worked with MySQL and MongoDB)

## The database
The database is made up of 3 tables:
  - enchantment
  - item
  - itemHasEnchantment
The `itemHasEnchantment` table is a many-to-many table that represents all the enchantments for a given item type.

## The server architecture
The server is designed so that each table in the database is represented by a model, which is interfaced with by a repo, which is then called from by a service wrapper that is used in the server.

## The endpoints
- `/enchantments` Gets all the enchantments in JSON format
- `/enchantments/name/{enchantmentName}` Returns all the enchantments that contain the `enchantmentName` provided
- `/enchantments/item/{itemType}` Returns all the enchantments for a given item type
