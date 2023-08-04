const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);


const prompts = [
  {
    type: 'list',
    name: 'title',
    message: 'What would you like to view?:',
    choices: ['view departments', 'view roles', 'view employees', 'add department', ]
  },
];

function init() {
  inquirer.prompt(prompts).then((data) => {
    switch (data.title) {
      case 'view departments':
        viewDepartments();
        break;
      case 'view roles':
        viewRoles();
        break;
      case 'view employees':
        viewEmployees();
        break;
      //case 'add department':
        //addDepartment();
        //break;
    }
  });
}
//add dept doesnt exist yet

function viewDepartments() {
  db.query('SELECT * FROM department', (err, results) => {
    if (err) {
      console.error('Error fetching departments: ', err);
      return;
    }
    console.table(results);
    init(); // Prompt for action again
  });
}

function viewRoles() {
  db.query('SELECT * FROM role', (err, results) => {
    if (err) {
      console.error('Error fetching roles: ', err);
      return;
    }
    console.table(results);
    init(); // Prompt for action again
  });
}

function viewEmployees() {
  db.query('SELECT * FROM employee', (err, results) => {
    if (err) {
      console.error('Error fetching employees: ', err);
      return;
    }
    console.table(results);
    init(); // Prompt for action again
  });
}


app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

init();