import {Database} from "bun:sqlite";
const db = new Database("mydb.sqlite", {create: true});
//CREATE TABLE enchantment ( id INTEGER PRIMARY KEY AUTOINCREMENT, type VARCHAR(20), description VARCHAR(20), name VARCHAR(20) UNIQUE, max_level tinyint(1) )
//INSERT INTO enchantment (type, description, name, max_level) VALUES ('melee','does fire damage', 'fire aspect', 5);

//CREATE TABLE item ( id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(20) UNIQUE, type VARCHAR(20))
//INSERT INTO item (name,type) VALUES ('iron sword','melee');

/**MAKE SURE FOREIGN KEYS ARE ENABLED PRAGMA foreign_keys = 1 */
//CREATE TABLE item_has_enchantment (item_name varchar(20), enchantment_name varchar(20), 
// FOREIGN KEY (item_name) REFERENCES item(name), 
// FOREIGN KEY (enchantment_name) REFERENCES enchantment(name), 
// PRIMARY KEY(item_name, enchantment_name))
//INSERT INTO item_has_enchantment (item_name, enchantment_name) VALUES ('iron sword', 'fire aspect');



