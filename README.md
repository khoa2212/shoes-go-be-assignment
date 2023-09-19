Instruction:

### DB: MySQL WorkBench 8.0
### Config file .env
Add these environment variable in .env file
+ PORT=5000
+ MYSQL_DB_HOST=localhost
+ MYSQL_DB_PORT=3306
+ MYSQL_DB_USERNAME=root
+ MYSQL_DB_PASSWORD=password
+ MYSQL_DB_NAME=name

### Install package
- Run: "npm i"

### Create migration and seed data: 
- Step 1: npm run build
- Step 2: npx sequelize-cli db:migrate
- Step 3: npx sequelize-cli db:seed:all

### Start project
- Run: "npm run start:dev"
- Open browser and access http://localhost:5000
