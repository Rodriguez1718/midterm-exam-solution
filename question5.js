const express = require('express');  
const { Sequelize, DataTypes } = require('sequelize');  

const app = express();  
const port = 3000;  

// Database configuration  
const sequelize = new Sequelize('MyDatabase', 'MyUsername', 'MyPassword', {  
  host: 'localhost',  
  dialect: 'mysql'  
});  

// Define the User model  
const User = sequelize.define('User', {  
  id: {  
    type: DataTypes.INTEGER,  
    primaryKey: true,  
    autoIncrement: true  
  },  
  name: {  
    type: DataTypes.STRING,  
    allowNull: false  
  },  
  email: {  
    type: DataTypes.STRING,  
    allowNull: false,  
    unique: true  
  },  
  status: {  
    type: DataTypes.ENUM('active', 'inactive'),  
    defaultValue: 'active'  
  }  
}, {  
  tableName: 'users', // Specify the table name  
  timestamps: false    
});  

// Test the database connection and sync the model  
(async () => {  
  try {  
    await sequelize.authenticate();  
    console.log('Connection has been established successfully.');  

    // Sync the model with the database (creates the table if it doesn't exist)  
  
    await sequelize.sync();  
    console.log('Database synced.');  
  } catch (error) {  
    console.error('Unable to connect to the database:', error);  
  }  
})();  


// Route to fetch all users  
app.get('/users', async (req, res) => {  
  try {  
    const users = await User.findAll();  
    res.json(users);  
  } catch (error) {  
    console.error('Failed to fetch users:', error);  
    res.status(500).json({ error: 'Failed to fetch users' });  
  }  
});  

app.listen(port, () => {  
  console.log(`Server listening at http://localhost:${port}`);  
});  