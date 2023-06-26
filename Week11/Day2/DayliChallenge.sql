/*Instructions

You are going to practice tables relationships

Part I

Create 2 tables : Customer and Customer profile. They have a One to One relationship.

A customer can have only one profile, and a profile belongs to only one customer
The Customer table should have the columns : id, first_name, last_name NOT NULL
The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

Insert those customers

John, Doe
Jerome, Lalu
Lea, Rive

Insert those customer profiles, use subqueries

John is loggedIn
Jerome is not logged in

Use the relevant types of Joins to display:

The first_name of the LoggedIn customers
All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
The number of customers that are not LoggedIn
*/
create table customer (
customer_id serial primary key ,
first_name varchar(50) not null,
last_name varchar(50) not null);

insert into customer (first_name,last_name)
values
('John', 'Doe'),    
('Jerome', 'Lalu'),
('Lea', 'Rive')

select * from customer

CREATE TABLE customer_profil (
  profil_id serial PRIMARY KEY,
  isLoggedIn boolean NOT NULL,
  customer_id int NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
);
insert into customer_profil(isLoggedIn,customer_id)
values
('true',(select customer_id from customer where first_name ='John')),
('false',(select customer_id from customer where first_name ='Jerome'))

select * from customer_profil

/*Use the relevant types of Joins to display:

The first_name of the LoggedIn customers
All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
The number of customers that are not LoggedIn */

select customer.first_name, customer_profil.isLoggedIn
from customer
inner join customer_profil on customer.customer_id = customer_profil.customer_id;

select customer.first_name, customer_profil.isLoggedIn
from customer
left join customer_profil on customer.customer_id = customer_profil.customer_id;

select count (customer.first_name) as number_of_customers_that_are_not_LoggedIn , customer_profil.isLoggedIn
from customer
inner join customer_profil on customer.customer_id = customer_profil.customer_id
where customer_profil.isLoggedIn is false group by customer_profil.isLoggedIn ;

/*Part II:

Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

Insert those books :
Alice In Wonderland, Lewis Carroll
Harry Potter, J.K Rowling
To kill a mockingbird, Harper Lee*/

create table books (
book_id SERIAL PRIMARY KEY,
title varchar (50) not null, 
author varchar(50) not null 
);

 insert into books (title,author)
 values      
 ( 'Alice In Wonderland', 'Lewis Carroll'),
 ('Harry Potter', 'J.K Rowling'),
 ('To kill a mockingbird', 'Harper Lee')
 
 select * from books
 
/*Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. 
 Make sure that the age is never bigger than 15 (Find an SQL method);

Insert those students:
John, 12
Lera, 11
Patrick, 10
Bob, 14*/

create table student
(student_id SERIAL PRIMARY KEY,
 name varchar(50)NOT NULL UNIQUE,
 age int NOT NULL CHECK (age <= 15))
 
 insert into student(name,age)
 values
 ('John', 12),
 ('Lera', 11),  
 ('Patrick', 10),
 ('Bob', 14)
 
 /*Create a table named Library, with the columns :
book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
student_id ON DELETE CASCADE ON UPDATE CASCADE
borrowed_date
This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
book_fk_id is a Foreign Key representing the column book_id from the Book table
student_fk_id is a Foreign Key representing the column student_id from the Student table
The pair of Foreign Keys is the Primary Key of the Junction Table*/
 
 create table Library 
 ( book_fk_id int,
   student_fk_id int,
   borrowed_date date,
  PRIMARY KEY (book_fk_id, student_fk_id),
  foreign key (book_fk_id) references books (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  foreign key (student_fk_id) references student (student_id) ON DELETE CASCADE ON UPDATE CASCADE
  )
   
  ;

 /*Add 4 records in the junction table, use subqueries.
the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
the student named Bob, borrowed the book Harry Potter the on 12/08/2021
*/

ALTER TABLE books
ALTER COLUMN title drop not null,
ALTER COLUMN author drop not null;

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES
((SELECT book_id FROM books WHERE title = 'Alice In Wonderland'),
(SELECT student_id FROM Student WHERE name = 'John'),
'2022-02-15'),
((SELECT book_id FROM books WHERE title = 'To kill a mockingbird'),
(SELECT student_id FROM Student WHERE name = 'Bob'),
'2021-03-03'),
((SELECT book_id FROM books WHERE title = 'Alice In Wonderland'),
(SELECT student_id FROM Student WHERE name = 'Lera'),
'2021-05-23'),
((SELECT book_id FROM books WHERE title = 'Harry Potter'),
(SELECT student_id FROM Student WHERE name = 'Bob'),
'2021-08-12');

select * from library

/*Display the data
Select all the columns from the junction table
Select the name of the student and the title of the borrowed books
Select the average age of the children, that borrowed the book Alice in Wonderland
Delete a student from the Student table, what happened in the junction table*/


SELECT *
FROM Library;

SELECT student.name, books.title
FROM Library
JOIN Student ON Library.student_fk_id = Student.student_id
JOIN books ON Library.book_fk_id = books.book_id;

SELECT AVG(age) as the_average_age_of_the_children
FROM student
inner join library on student.student_id = library.student_fk_id
inner join books on books.book_id = library.book_fk_id
WHERE title = 'Alice In Wonderland';

DELETE FROM Student
WHERE name = 'John';

select * from student

SELECT *
FROM Library;