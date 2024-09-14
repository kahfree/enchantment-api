# Enchantment API 🔮

A RESTful API built using **Bun.js**, **JavaScript**, and **SQLite** to manage Minecraft enchantments. The project provides endpoints for accessing various enchantments, retrieving them by name, or filtering them based on item type. This API serves as a playground for exploring Bun.js as a runtime and framework for backend development.

## 🔧 Technologies Used
- **Bun.js**: A fast JavaScript runtime bundler, transpiler, and package manager that accelerates web development. Bun aims to be a high-performance alternative to Node.js.
- **SQLite**: A lightweight, file-based SQL database, perfectly suited for small projects requiring relational data without heavy database setup.
- **JavaScript**: The primary language for backend logic, handling API routes and database interactions.

## 📂 Database Design
The database consists of 3 tables:
1. **enchantment**: Stores individual enchantments.
2. **item**: Contains Minecraft items.
3. **itemHasEnchantment**: A many-to-many relationship table that links items to their respective enchantments.

## 🛠️ Server Architecture
The server is structured to represent each database table with a model. These models are accessed via repositories, which are then wrapped by service layers that the API routes interact with. This modular architecture keeps the code clean and scalable.

## 🚀 API Endpoints
- `GET /enchantments`: Returns all enchantments in JSON format.
- `GET /enchantments/name/{enchantmentName}`: Fetches enchantments containing the specified name.
- `GET /enchantments/item/{itemType}`: Returns all enchantments for a given item type.

## 🏗️ Development Workflow with GitHub Projects
This project utilized [GitHub Projects](https://github.com/users/kahfree/projects/1) to organize and track development tasks. GitHub Projects was instrumental in managing self-driven development by:
- Providing a clear roadmap and progress overview.
- Helping break down the development into manageable tasks.
- Facilitating continuous iteration, making it easier to prioritize features and resolve issues.

## 🌱 Purpose
The project was created to:
- Gain experience with Bun.js and explore its advantages over other JavaScript runtimes.
- Build a REST API using JavaScript (having previously worked on APIs in Java).
- Experiment with SQLite as a lightweight database solution, transitioning from previous work with MySQL and MongoDB.

## 📚 What is Bun.js?
**Bun.js** is a modern JavaScript runtime that promises faster performance for server-side applications. It provides a native bundler, transpiler, and test runner, making it easier and faster to develop full-stack JavaScript applications. It aims to compete with Node.js by focusing on speed and developer experience.

## 🗃️ Database Management
- **SQLite** is used for persistent storage, with a relational structure that fits the many-to-many relationship between items and enchantments.

## 📄 License
This project is licensed under the MIT License.

---

Explore and contribute to the project [here](https://github.com/kahfree/enchantment-api). 🚀
