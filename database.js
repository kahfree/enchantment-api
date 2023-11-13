import {Database} from "bun:sqlite";
// const db = new Database("mydb.sqlite");

class MyDatabase {
  constructor(databasePath = "mydb.sqlite") {
    this.db = new Database(databasePath, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
      } else {
        console.log('Connected to the database');
      }
    });
  }

  // Create a table
  createTable(query) {
    this.db.run(query, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Table created successfully');
      }
    });
  }

  // Insert data
  insertData(query, values) {
    this.db.run(query, values, function (err) {
      if (err) {
        console.error('Error inserting data:', err.message);
      } else {
        console.log(`Row inserted with ID: ${this.lastID}`);
      }
    });
  }

  // Read data
  getAllData(query) {
    const rows = this.db.query(query);
    return rows.all();
  }
// Cannot paramaterize table name
  getByName(name,table) {
    const row = this.db.query("SELECT * FROM enchantment WHERE name = ?;")
    return row.get(name);
  }

  // Update data
  updateData(query, values) {
    this.db.run(query, values, (err) => {
      if (err) {
        console.error('Error updating data:', err.message);
      } else {
        console.log('Row updated successfully');
      }
    });
  }

  // Delete data
  deleteData(query, values) {
    this.db.run(query, values, (err) => {
      if (err) {
        console.error('Error deleting data:', err.message);
      } else {
        console.log('Row deleted successfully');
      }
    });
  }

  // Close the database connection
  close() {
    this.db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      } else {
        console.log('Database connection closed');
      }
    });
  }
}

export default MyDatabase;
// const enchantment_query = db.query(`CREATE TABLE enchantment ( id INTEGER PRIMARY KEY AUTOINCREMENT, type VARCHAR(20), description VARCHAR(20), name VARCHAR(20) UNIQUE, max_level tinyint(1) );
// INSERT INTO enchantment (type, description, name, max_level) VALUES ('melee','does fire damage', 'fire aspect', 5);
// enchantment_query.run();
// const item_query = db.query(`CREATE TABLE item ( id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(20) UNIQUE, type VARCHAR(20));
// INSERT INTO item (name,type) VALUES ('iron sword','melee');`);
// item_query.run();
// const foreign_keys = db.query(`PRAGMA foreign_keys = 1;`);
// foreign_keys.run();
// const item_has_enchantment_query = db.query(`
// CREATE TABLE item_has_enchantment (item_name varchar(20), enchantment_name varchar(20), 
// FOREIGN KEY (item_name) REFERENCES item(name), 
// FOREIGN KEY (enchantment_name) REFERENCES enchantment(name), 
// PRIMARY KEY(item_name, enchantment_name));
// INSERT INTO item_has_enchantment (item_name, enchantment_name) VALUES ('iron sword', 'fire aspect');`)
// item_has_enchantment_query.run();
// const query = db.query
// db.close();
//CREATE TABLE enchantment ( id INTEGER PRIMARY KEY AUTOINCREMENT, type VARCHAR(20), description VARCHAR(20), name VARCHAR(20) UNIQUE, max_level tinyint(1) )
//INSERT INTO enchantment (type, description, name, max_level) VALUES ('melee','does fire damage', 'fire aspect', 5);

//CREATE TABLE item ( id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(20) UNIQUE, type VARCHAR(20))
//INSERT INTO item (name,type) VALUES ('iron sword','melee');

/**MAKE SURE FOREIGN KEYS ARE ENABLED PRAGMA foreign_keys = 1 */
// CREATE TABLE item_has_enchantment (item_name varchar(20), enchantment_name varchar(20), 
// FOREIGN KEY (item_name) REFERENCES item(name), 
// FOREIGN KEY (enchantment_name) REFERENCES enchantment(name), 
// PRIMARY KEY(item_name, enchantment_name));
// INSERT INTO item_has_enchantment (item_name, enchantment_name) VALUES ('iron sword', 'fire aspect');



