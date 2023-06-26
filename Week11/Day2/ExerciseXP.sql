/*Exercise 1 : DVD Rentals

Instructions

Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?

Get a list of all customers who have not returned their rentals. Make sure to group your results.

Get a list of all the Action films with with Joe Swank.
Before you start, could there be a shortcut to getting this information? Maybe a view?
*/

select * from rental where  return_date is null

select film.title,rental.return_date
from 
film
inner join inventory on inventory.film_id = film.film_id
inner join rental on rental.inventory_id = inventory.inventory_id
where return_date is null

select count (rental.return_date),customer.first_name,customer.last_name
from customer
inner join rental on rental.customer_id = customer.customer_id 
where return_date is null group by  customer.first_name,customer.last_name

select film.title,category.name,actor.first_name,actor.last_name
from 
film
inner join film_category on film.film_id = film_category.film_id
inner join category on film_category.category_id = category.category_id
inner join film_actor on film_actor.film_id = film.film_id
inner join actor on actor.actor_id = film_actor.actor_id
where actor.first_name='Joe' and actor.last_name ='Swank' and category.name='Action'



/*Exercise 2 – Happy Halloween

Instructions

There is a zombie plague approaching! The DVD rental company is offering to lend all of its DVDs to the local shelters, so that the citizens can watch the movies together in the shelters until the zombies are destroyed by the armed forces.
Prepare tables with the following data:

How many stores there are, and in which city and country they are located.

How many hours of viewing time there are in total in each store – in other words, the sum of the length of every inventory item in each store.

Make sure to exclude any inventory items which are not yet returned. (Yes, even in the time of zombies there are people who do not return their DVDs)

A list of all customers in the cities where the stores are located.

A list of all customers in the countries where the stores are located.

Some people will be frightened by watching scary movies while zombies walk the streets. Create a ‘safe list’ of all movies which do not include the ‘Horror’ category, or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions… Get the sum of their viewing time (length).
Hint : use the CHECK contraint

For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).
*/


--How many stores there are, and in which city and country they are located.

select store.store_id as Number_of_stores,city.city,country.country
from store
inner join address on store.address_id = address.address_id
inner join city on city.city_id = address.city_id
inner join country on country.country_id = city.country_id


-- How many hours of viewing time there are in total in each store – in other words, the sum of the length of every inventory item in each store.

select store.store_id, sum(film.length) as Total_viewing_time
from store
inner join inventory on inventory.store_id = store.store_id
inner join film on film.film_id = inventory.film_id
inner join rental on rental.inventory_id = inventory.inventory_id
where rental.return_date is not null
group by store.store_id

--A list of all customers in the cities where the stores are located.

select customer.first_name,customer.last_name,city.city
from 
customer
inner join address on address.address_id = customer.address_id
inner join city on city.city_id = address.city_id 


--A list of all customers in the countries where the stores are located.
select customer.first_name,customer.last_name,country.country
from
customer 
inner join address on address.address_id= customer.address_id
inner join city on city.city_id = address.city_id
inner join country on country.country_id = city.country_id

--Some people will be frightened by watching scary movies while zombies walk the streets.
--Create a ‘safe list’ of all movies which do not include the ‘Horror’ category, or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions… 
--Get the sum of their viewing time (length).
--Hint : use the CHECK contraint

CREATE TABLE safe_movies (
  film_id serial PRIMARY KEY,
  title varchar(50) NOT NULL,
  description varchar(255) NOT NULL,
  length int NOT NULL,
  category varchar(50) NOT NULL
);

INSERT INTO safe_movies (title, description, length, category)
SELECT title, description, sum(length), category.name as category
FROM film
INNER JOIN film_category
ON film_category.film_id = film.film_id
INNER JOIN category
ON category.category_id = film_category.category_id
WHERE category.name NOT IN ('Horror')
AND title NOT iLIKE '%beast%'
AND title NOT iLIKE '%monster%'
AND title NOT iLIKE '%ghost%'
AND title NOT iLIKE '%dead%'
AND title NOT iLIKE '%zombie%'
AND title NOT iLIKE '%undead%'
AND description NOT iLIKE '%beast%'
AND description NOT iLIKE '%monster%'
AND description NOT iLIKE '%ghost%'
AND description NOT iLIKE '%dead%'
AND description NOT iLIKE '%zombie%'
AND description NOT iLIKE '%undead%'
 group by title,description, category.name;
 

	
	select * from safe_movies
	

--For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).

-- 'General list'

-- in hours
select title, sum(length)/60 from film
group by title

-- in days
select title, sum(length)/1440 from film
group by title

-- 'Safe list'

-- in hours
select title, sum(length)/60 from safe_movies
group by title

--in days
select title, sum(length)/1440 from safe_movies
group by title

