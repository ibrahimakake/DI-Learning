/*🌟 Exercise 1: DVD Rental

Instructions

Get a list of all film languages.

Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
Get all films, even if they don’t have languages.
Get all languages, even if there are no films in those languages.

Create a new table called new_film with the following columns : id, name. Add some new films to the table.

Create a new table called customer_review, which will contain film reviews that customers will make.
Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
It should have the following columns:
review_id – a primary key, non null, auto-increment.
film_id – references the new_film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review.
score – the rating of the review (1-10).
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated.

Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

Delete a film that has a review from the new_film table, what happens to the customer_review table?*/

select * from language

select * from film


select film.title, film.description, language.name
from film
left join language
on film.language_id = language.language_id;

select film.title, film.description, language.name
from film
right join language
on film.language_id = language.language_id;

create table new_film (
id serial primary key,
name varchar(50) not null
)
insert into new_film(name)
values('Carol Texas'),
      ( 'Chamber Italian'),
	  ('Grosse Wonderful')
	  
	  select * from new_film 
	  
create table customer_review(
review_id serial primary key,
film_id integer,
language_id integer,
foreign key (film_id) references new_film (id) on delete cascade,  
foreign key (language_id) references language (language_id),
title varchar(50),
score int ,
review_text text,
last_update date 
)
insert into customer_review(film_id,language_id,title,score,review_text,last_update)
values
((select id from new_film where name='Carol Texas'),
 (select language_id from language where name='English'),
 'Carol Texas',
 08,
 'A Epic Drama of a Cat And a Explorer who must Redeem a Moose in Australia',
 '2003/03/11'
),
((select id from new_film where name='Chamber Italian'),
 (select language_id from language where name='French'),
 'Chamber Italian',
 08,
 'A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China',
 '2006/03/18'
);
select * from customer_review

delete from new_film where name ='Chamber Italian'

select * from new_film

select * from customer_review

/*🌟 Exercise 2 : DVD Rental

Instructions

Use UPDATE to change the language of some films. Make sure that you use valid languages.

Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

The 2nd film : A short documentary (less than 1 hour long), rated “R”.

The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
*/

select * from language 

update film set language_id= 2 where title='Chamber Italian'
update film set language_id= 3 where title='Grosse Wonderful'

select film.title,language.language_id,language.name
from film 
inner join language
on film.language_id = language.language_id where film.title ='Chamber Italian'

select film.title,language.language_id,language.name
from film 
inner join language
on film.language_id = language.language_id where film.title='Grosse Wonderful'

select * from customer
-- foreign keys are store_id and address_id
--How does this affect the way in which we INSERT into the customer table?
insert into customer(first_name,last_name)
values('ali','yen')
-- the foreign keys are store_id and address_id don't have any value affect to them which violates not-null constraint.
insert into customer(first_name,last_name,store_id,address_id)
values('ali','yen',1,5)
select * from customer where first_name ='ali' and last_name='yen'
--Now it's works. 
-- In conclusion, any new row insert in a table which contains foreign key should have a value for that foreign key row.

--We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

select * from customer_review
drop table  customer_review
-- It's easy !

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select * from rental
select count(*) as Outstanding_rental from rental where return_date is null

--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT
  film.title,
  film.replacement_cost,
  inventory.inventory_id,
  rental.rental_id
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON rental.inventory_id = inventory.inventory_id
WHERE return_date IS NULL
ORDER BY replacement_cost DESC
LIMIT 30;


--Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select * from film where description ilike '%sumo wrestler %'
select * from actor where first_name ='Penelope' and last_name ='Monroe'
select * from film_actor

select 
film.title,
film.description,
actor.first_name, 
actor.last_name, 
film_actor.actor_id,
film_actor.film_id
from film 
join film_actor on film.film_id = film_actor.film_id 
join actor on actor.actor_id = film_actor.actor_id
where description ilike '%sumo wrestler %'
and first_name ='Penelope'
and last_name ='Monroe'

--The 2nd film : A short documentary (less than 1 hour long), rated “R”.
select * from film
select 
film.title,
film.length,
film.rating,
film_category.category_id,
category.category_id,
category.name
from film 
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
where category.name ='Documentary' 
and film.rating = 'R'
and film.length < 60

--The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
--and he returned it between the 28th of July and the 1st of August, 2005.

select * from customer

select * from customer where first_name ='Matthew' and last_name='Mahan'
select 


-- The 4th film : His friend Matthew Mahan watched this film, as well.
--It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.





/*select * from rental where rental_date is null order by amount limit 30;

select film.title,inventory.inventory_id,rental.rental_id,payment.payment_id,payment.Amount
from(film join inventory on film.film_id = inventory.film_id)
join (rental join payment on rental.rental_id = payment.rental_id where return_date is null order by amount desc limit 30) 


where film.film_id = inventory.film_id and 
join rental on inventory.inventory_id = rental.inventory_id where return_date is null and 
inventory.inventory_id = rental.inventory_id 

select film.title,inventory.inventory_id,rental.rental_id,payment.payment_id
from(film join inventory on film.film_id = inventory.film_id) 
join rental on inventory.inventory_id = rental.inventory_id where return_date is null and 
*/

