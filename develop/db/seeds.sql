INSERT INTO department (department_name)
VALUES ("Accounting"),
       ("Sales"),
       ("Engineering"),
       ("REDACTED");

INSERT INTO role (title, salary, department_id)
VALUES ("Chief Accountant", 100000.00, 1),
       ("Sales Lead", 100000.00, 2),
       ("Lead Dev", 1000000.00, 3),
       ("XXXXXXX XXXX", 0.00, 4);

       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Johnson", 1, 1),
       ("Steve", "Johnson", 2, 2),
       ("Steve", "Johnson", 3, 3),
       ("SXXXX", "JXXXXXX", 0, 0),