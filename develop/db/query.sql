SELECT department.id AS department, role.department_id
FROM role
LEFT JOIN department
ON role.department_id = department.id
ORDER BY department.id;
