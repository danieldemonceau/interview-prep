SELECT e1.name Employee
FROM Employee e1
JOIN Employee e2 ON e2.id = e1.managerId
WHERE e1.salary > e2.salary