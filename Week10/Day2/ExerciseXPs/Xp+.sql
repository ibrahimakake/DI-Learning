/*
Create

Create a database called bootcamp.
Create a table called students.
Add the following columns:
id
last_name
first_name
birth_date 
The id must be auto_incremented.
Make sure to choose the correct data type for each column. 
To help, here is the data that you will have to insert. (How do we insert a date to a table?)


Here is the data:

id	first_name	last_name	birth_date
1	Marc	Benichou	02/11/1998
2	Yoan	Cohen	03/12/2010
3	Lea	Benichou	27/07/1987
4	Amelia	Dux	07/04/1996
5	David	Grez	14/06/2003
6	Omer	Simpson	03/10/1980


Insert

Insert the data seen above to the students table. Find the most efficient way to insert the data.
Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).


Select

Fetch all of the data from the table.
Fetch all of the students first_names and last_names.
For the following questions, only fetch the first_names and last_names of the students.
Fetch the student which id is equal to 2.
Fetch the student whose last_name is Benichou AND first_name is Marc.
Fetch the students whose last_names are Benichou OR first_names are Marc.
Fetch the students whose first_names contain the letter a.
Fetch the students whose first_names start with the letter a.
Fetch the students whose first_names end with the letter a.
Fetch the students whose second to last letter of their first_names are a (Example: Leah).
Fetch the students whose id’s are equal to 1 AND 3 .

Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).*/

create table Students(
id serial primary key,
last_name varchar(50) not null,
first_name varchar(50) not null,
birth_date date not null 
)
insert into Students(last_name,first_name,birth_date) 
values('Benichou','Marc','11/02/1998');
insert into Students(last_name,first_name,birth_date) 
values('Cohen','Yoan','12/03/2010');
insert into Students(last_name,first_name,birth_date) 
values('Benichou','Lea','07/27/1987');
insert into Students(last_name,first_name,birth_date) 
values('Dux	','Amelia','04/07/1996');
insert into Students(last_name,first_name,birth_date) 
values('Grez','David','06/17/2003');
insert into Students(last_name,first_name,birth_date) 
values('Simpson','Omer','10/03/1980');
insert into Students(last_name,first_name,birth_date)
values('Kake','Ibrahima','02/16/2000') 


select * from Students

select first_name, last_name from Students 

select first_name, last_name from Students where id = 2

select first_name, last_name from Students where first_name = 'Marc' and last_name = 'Benichou'

select first_name, last_name from Students where last_name = 'Benichou' or first_name = 'Marc'

select first_name, last_name from Students where first_name ilike '%a%'

select first_name, last_name from Students where first_name ilike 'a%'

select first_name, last_name from Students where first_name ilike '%a'

select first_name, last_name from Students where first_name ilike '%a_'

select first_name, last_name from Students where id = 1 or id= 3

select id, first_name, last_name, birth_date from Students where birth_date >= '01/01/2000'






