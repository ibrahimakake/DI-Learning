/*
🌟 Exercise 1 : Items And Customers

Create a database called public.

Add two tables:
items
customers.


Follow the instructions below to determine which columns and data types to add to the two tables:

Add the following items to the items table:
1 - Small Desk – 100 (ie. price)
2 - Large desk – 300
3 - Fan – 80

Add 5 new customers to the customers table:
1 - Greg - Jones
2 - Sandra - Jones
3 - Scott - Scott
4 - Trevor - Green
5 - Melanie - Johnson

Use SQL to fetch the following data from the database:
All the items.
All the items with a price above 80 (80 not included).
All the items with a price below 300. (300 included)
All customers whose last name is ‘Smith’ (What will be your outcome?).
All customers whose last name is ‘Jones’.
All customers whose firstname is not ‘Scott’.


*/

create table items (
item_id serial primary key,
items varchar(50) not null ,
prices integer not null
 )
insert into items (items, prices)
values('Large_desk',100);
insert into items (items,prices)
values('Small_desk',300);
insert into items (items,prices)
values('Fan',80)

select * from items

select * from items where prices > 80

select * from items where prices <= 300

create table customers (
item_id serial primary key,
first_name varchar(50) not null,
last_name varchar(50) not null

)
insert into customers ( first_name, last_name)
values ('Greg','Jones');
insert into customers ( first_name, last_name)
values ('Sandra','Jones');
insert into customers ( first_name, last_name)
values ('Scott','Scott');
insert into customers ( first_name, last_name)
values ('Trevor','Green');
insert into customers ( first_name, last_name)
values ('Melanie','Johnson')

select * from customers

select * from customers where last_name ='Smith' /* Nothing will retrieve because 'Smith' does not exist in the table*/

select * from customers where last_name ='Jones'

select * from customers where first_name = 'Scott'


