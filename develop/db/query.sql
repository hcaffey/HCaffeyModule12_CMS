/*SELECT department.id AS department, role.department_id
FROM role
LEFT JOIN department
ON role.department_id = department.id
ORDER BY department.id;
*/

SELECT department.department_name, role.title, role.salary, employee.first_name, employee.last_name
FROM department
INNER JOIN role ON department_id = department.id
INNER JOIN employee ON role_id = role.id


/*SELECT department.name
FROM department
RIGHT JOIN role ON department.id = role.department_id

UNION ALL

SELECT role.title, role.salary
FROM role
LEFT JOIN role ON role.id = employee.role_id;*/
