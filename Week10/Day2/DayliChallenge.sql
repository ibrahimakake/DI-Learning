/*Instructions

In this exercise we will be using the actors table from todays lesson. 
1. Count how many actors are in the table.
2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
*/
CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2)

select * from actors  

select count(actors) as number_of_actors from actors

INSERT INTO actors (first_name, last_name, age, number_oscars)
values('Ali', 'Camara', null,null)
/*There is a violation of the non null constraint*/

