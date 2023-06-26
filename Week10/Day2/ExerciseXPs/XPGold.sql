/*Exercise 1 : Bootcamp

Instructions

Continuation of the Exercise XP

Select

For the following questions, you have to fetch the first_names, last_names and birth_dates of the students.

Fetch the first four students. You have to order the four students alphabetically by last_name.
Fetch the details of the youngest student.
Fetch three students skipping the first two students.
*/

select first_name, last_name, birth_date from students

select * from students order by first_name  desc limit 1 ;

select * from students offset 2 limit 3
