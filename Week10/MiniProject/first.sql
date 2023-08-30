/* Write a query to display the names (first_name, last_name) using an alias name “First”, “Last” from the employee table.

Write a query to get unique departments ID from the employee table (ie. without duplicates).

Write a query to get the details of all employees from the employee table, do so in descending order by first name.

Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.

Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.

Write a query to get the total sum of all salaries paid to the employees.

Write a query to get the maximum and minimum salaries paid to the employees.

Write a query to get the average salary paid to the employees.

Write a query to get the number of employees working in the company.

Write a query to get all the first names from the employees table in upper case.

Write a query to get the first three characters of each first name of all the employees in the employees table.

Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.

Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.

Write a query to check whether the first_name column of the employees table contains any numbers.

Write a query to select the first ten records from a table.


 */
 select * from employees
 
 
 select first_name as "First", last_name as "Last" from employees
 
 
 
 select distinct department_id from employees 
 
 
 
 select * from employees order by first_name desc  
 
 select first_name, last_name, salary, salary*0.15 as "PF" from employees
 
 select employee_id, first_name, last_name, salary  from employees order by salary asc
 
  select sum(salary) as "Total Salary" from employees
  
  select max(salary) as "Maximum Salary", min(salary) as "Minimum Salary" from employees
  
  select avg(salary) as "The average salary" from employees
  
  select count(*) as "Number Of Employees" from employees
  
  select upper(first_name) from employees 
  
  select substring(first_name,1,3) from employees
  
  /*select first_name from employees where length(first_name) <= 3*/
  
  select concat(first_name,' ', last_name) as "Full Name" from employees
  
  select first_name, last_name, length(concat(first_name,'', last_name)) as "Length Of full Name" from employees
  
  select first_name from employees where first_name like '%[1-9]%'
  
  select first_name from employees limit 10; 
  
  
  /* 🌟 Restricting And Sorting

Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.

Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.

Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.

Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.

Write a query to display the last names of all employees whose last name contains exactly six characters.

Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.

Write a query to display the jobs title appearing in the employees table.

Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
*/
  
  select first_name, last_name, salary from employees where salary between 10000 and 15000
  
 
 select first_name, last_name, hire_date from employees where extract(year from hire_date) = '1987'
 
select * from employees where first_name ilike '%c%e%' 

select * from jobs

select employees.last_name, jobs.job_title, employees.salary from employees inner join jobs on jobs.job_id = employees.job_id 
where job_title not in ( 'Programmer', 'Shipping Clerks')  and salary not in (4500, 10000, 15000)

select last_name from employees where length(last_name)= 6

select last_name from employees where last_name like '__e%'

select employees.*, jobs.job_title from employees inner join jobs on jobs.job_id = employees.job_id 	

select * from employees where Upper(last_name)in ('JONES', 'BLAKE', 'SCOTT', 'KING', 'FORD')




 
 
 