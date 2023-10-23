module.exports = {
    dialect: 'mysql',  // Could be 'postgres', 'mssql', etc.
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'library_db',
    autoLoadModels: true, // Automatically import all models
    synchronize: true,    // Sync database and model
  };

 
  