--Subqueries
select * from employees
select* from jobs
select * from countries
select* from locations
select * from regions
select * from dependents
select * from departments

--Write a query to find the first_name, last_name and salaries of the employees who have a higher salary than the employee whose last_name is Bull.

SELECT first_name, last_name, salary FROM employees WHERE salary > (SELECT salary FROM employees WHERE last_name = 'Bell');


--Write a SQL subquery to find the first_name and last_name of the employees under a manager who works for a department based in the United States.
--Hint : Write single-row and multiple-row subqueries
select employees.first_name, employees.last_name
from employees 
inner join departments on departments.department_id = employees.department_id
inner join locations on departments.location_id = locations.location_id
inner join countries on countries.country_id = locations.country_id
where country_name ='United States of America'
  --or 
SELECT
  first_name,
  last_name
FROM
  (
    SELECT
      employees.first_name,
      employees.last_name
    FROM employees
    INNER JOIN departments ON departments.department_id = employees.department_id
	 inner join locations on departments.location_id = locations.location_id
    inner join countries on countries.country_id = locations.country_id
where country_name ='United States of America'
  ) AS names;


--Write a SQL subquery to find the first_name and last_name of the employees who are working as managers.

select employees.first_name,employees.last_name 
from employees
inner join jobs on jobs.job_id = employees.job_id
where jobs.job_title ilike '%manager%'

--Write a SQL subquery to find the employee(s) first_name and last_name, which salary is greater than the average salary of the employees.
select first_name,last_name from employees where salary > (select avg(salary) from employees)


--Write a SQL subquery to find the employee(s) first_name and last_name, which salary is equal to the minimum salary of their job position.
select employees.first_name,employees.last_name, jobs.min_salary 
from employees
inner join jobs on jobs.job_id = employees.job_id
where employees.salary = jobs.min_salary 
--(select min(salary) from employees )


--Write a query to find the names (first_name, last_name) of the employees who are not supervisors.
select employees.first_name,employees.last_name, jobs.job_title
from employees
inner join jobs on jobs.job_id = employees.job_id
where job_title not ilike'%supervisor%'

--Write a SQL subquery to find the employee(s) ID, first name, last name and salary of all employees whose salary is above the average salary for their departments.
select employees.employee_id,employees.first_name,employees.last_name,employees.salary
from employees
inner join departments on departments.department_id = employees.department_id
where employees.salary > (select avg(salary) from employees)

--Write a subquery to find the 5th maximum salary of all salaries.
select first_name,last_name, salary from employees order by salary desc limit 5;
--or
select max_salary from jobs limit 5

--Write a subquery to find the 4th minimum salary of all the salaries.
select first_name,last_name,salary from employees order by salary offset 3 limit 1;


--Write a query to list the department name and number, of all the departments in which there are no employees.

select departments.department_name, count(department_name) as Number
from departments
inner join employees on employees.department_id = departments.department_id
where employees.department_id is null group by departments.department_name

--Joins
select * from employees
select* from jobs
select * from countries
select* from locations
select * from regions
select * from dependents
select * from departments

--Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments.
select locations.location_id,locations.street_address,locations.city,locations.state_province,countries.country_name
from locations
inner join countries on locations.country_id = countries.country_id

--Write a query to make a join with the employees and departments table to find the name of the employee, including first_name and last name, department ID and name of departments.
select employees.first_name,employees.last_name , departments.department_id,departments.department_name
from employees
full outer join departments on departments.department_id = employees.department_id

--Write a SQL query to make a join with three tables: employees, departments and locations to find the name, including first_name and last_name, jobs, department name and ID, of the employees working in London.
select employees.first_name,employees.last_name, departments.department_id,departments.department_name,locations.city
from employees
inner join departments on departments.department_id = employees.department_id
inner join locations on locations.location_id = departments.location_id
where locations.city = 'London'

--Write a query to make a join with two tables to find the employee id, last_name as Employee along with their manager_id and last name as Manager.
select * from employees
select * from dependents

SELECT 
    employees.employee_id AS Employee_ID,
    employees.last_name AS Employee_LastName,
    employees.manager_id,
    dependents.last_name AS Manager_LastName
FROM 
    employees employees
JOIN
    employees dependents ON employees.manager_id = dependents.employee_id;








--Write a query to make a join with two tables employees and departments, to get the employees working in each department (retrieve the employees details, and the department name and number).

Write a query to make a join to find the employees who worked in a department which ID is 90 (retrieve the employee ID, job title and number of days the employee worked).

Write a query to make a join with three tables, departments, employees, and locations to display the department name, manager name, and city.

Write a query to make a join with two tables, employees and jobs to display the job title and average salary of the employees.

Write a query to make a join with two tables, employees and departments to display department name, first_name and last_name, hire date and salary for all the managers who achieved a working experience of more than 15 years.

--String Function

select * from employees
select* from jobs
select * from countries
select* from locations
select * from regions
select * from dependents
select * from departments

--Write a query to update phone_number records. If the the substring ‘124’ was found in that column, update the phone_number to ‘999’.

UPDATE employees
SET phone_number = '999'
WHERE phone_number LIKE '%124%';

-- ambiguous ! so :
update employees
set phone_number = replace(phone_number, '124', '999')
WHERE phone_number LIKE '%124%';

--Write a query to find the details of the employees who contain eight or more characters in their first name.
select * from employees where length(first_name) >= 8

--Write a query to join in uppercase, the first letter of the first_name, with the last_name, with '@example.com‘ in the email column.

 -- **Sample Output :**
  --EMAIL
  --------------------

  --JDOE@example.com (where first_name is John, and last_name is Doe)
  
  SELECT UPPER(LEFT(first_name, 1)) || last_name || '@example.com' as email
FROM employees;


--Write a query to get the employee id, email but discard the last three characters of the email.

SELECT employee_id, 
       left(email,length(email) - 3) AS email_without_suffix
FROM employees;

--Write a query to display the first word in the job title, if the job title contains more than one words.
SELECT job_title,
       LEFT(job_title, POSITION(' ' IN job_title)) AS first_word
FROM jobs;


--Write a query that displays the first name and the length of the first name for all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by the employees’ first names.
SELECT first_name AS "Names", length(first_name) AS "Name Length"
FROM employees
WHERE first_name iLIKE 'A%' OR first_name iLIKE 'J%' OR first_name iLIKE 'M%'
ORDER BY first_name;


--Write a query to display the first name and salary for all employees. Display the salary with the $ symbol. Label the column as SALARY.

SELECT first_name, format('$%s',salary) AS "SALARY"
FROM employees;

SELECT employees.employee_id as "Emp_id" , employees.last_name AS "Employee",
jobs.job_id AS "Manager ID", jobs.last_name AS "Manager"
FROM employees W1 JOIN employees W2
ON W1.manager_id= W2.employee_id;





