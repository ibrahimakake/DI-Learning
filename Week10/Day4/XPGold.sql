/*Exercise 3 : Items And Customers

Instructions

We will work on the public database that we created yesterday.

Part I

Create a table named purchases. It should have 3 columns :
id : the primary key of the table
customer_id : this column references the table customers
item_id : this column references the table items
quantity_purchased : this column is the quantity of items purchased by a certain customer

Insert purchases for the customers, use subqueries:
Scott Scott bought one fan
Melanie Johnson bought ten large desks
Greg Jones bougth two small desks
The table purchases should look like this:

id	customer_id	item_id	quantity_purchased
1	3	3	1
2	5	1	10
3	1	2	2


Here is the explanation of the first row:

id = 1, this is the auto-incrementing primary key
customer_id = 3, because the id of Scott Scott in the customers table is 3
item_id = 3, because the id of a fan in the items table is 3
quantity_purchased = 1, because Scott Scott bought one fan
*/
 create table purchases(
id serial primary key,
customer_id integer,
item_id integer,
quantity_purchased bigint 
 )

/*alter table customers rename item_id to customer_id;*/
 
 
insert into purchases(customer_id,item_id,quantity_purchased)
values
((select customer_id from customers where first_name='Scott' and last_name='Scott'),
 (select item_id from items where items ='Fan'),
 1 ),
 ((select customer_id from customers where first_name='Melanie' and last_name='Johnson'),
 (select item_id from items where items ='Large_desk'),
 10 ),
 ((select customer_id from customers where first_name='Greg' and last_name='Jones'),
 (select item_id from items where items ='Small_desk'),
 2 );
 
 
 /*delete from purchases where item_id is null*/
 

select * from customers
select * from items



/*Part II

Use SQL to get the following from the database:
All purchases. Is this information useful to us?
All purchases, joining with the customers table.
Purchases of the customer with the ID equal to 5.
Purchases for a large desk AND a small desk

Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
Customer first name
Customer last name
Item name

Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?*/

select * from purchases

select purchases.quantity_purchased,customers.*
from purchases
inner join customers
on purchases.customer_id = customers.customer_id;

select quantity_purchased,customer_id from purchases where customer_id = 5

select quantity_purchased,item_id from purchases where item_id in(1,2)

alter table customers add column  item_id integer

 select * from customers
 
 update customers set item_id= 3 where customer_id = 3
 
 update customers set item_id= 1 where customer_id = 5
 
 update customers set item_id= 2 where customer_id = 1
 
 select customers.first_name,customers.last_name,items.items as Item_name
 from customers
inner join items
 on customers.item_id = items.item_id
 
 insert into purchases(customer_id,item_id)
 values(2)
 /* not working */
 
 
 
 








