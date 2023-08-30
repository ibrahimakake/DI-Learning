-- Database: hr.backup

-- DROP DATABASE IF EXISTS "hr.backup";

CREATE DATABASE "hr.backup"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
	


-- Create the product_orders table
CREATE TABLE product_orders (
    order_id serial PRIMARY KEY,
    order_date DATE
)

insert into product_orders(order_date)
values('2023-08-29'),
      ('2023-08-30'),
      ('2023-08-30');


-- Create the items table
CREATE TABLE items (
    item_id serial PRIMARY KEY,
    order_id INT,
    item_name VARCHAR(100),
    price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES product_orders(order_id)
);
	
	-- Inserting data into items table
INSERT INTO items (order_id, item_name, price)
VALUES
    ((SELECT order_id FROM product_orders WHERE order_date = '2023-08-29'), 'Item 1', 10.00),
    --((SELECT order_id FROM product_orders WHERE order_date = '2023-08-29'), 'Item 2', 15.00),
    --((SELECT order_id FROM product_orders WHERE order_date = '2023-08-30'), 'Item 3', 20.00),
    --((SELECT order_id FROM product_orders WHERE order_date = '2023-08-30'), 'Item 4', 5.00),
    --((SELECT order_id FROM product_orders WHERE order_date = '2023-08-30'), 'Item 5', 8.00);

select * from items
	
	
	-- Function to calculate total price for a given order
CREATE FUNCTION calculate_order_total(p_order_id INT) RETURNS DECIMAL(10, 2) AS
$Total_price_for_a_given_order$
DECLARE
    v_total DECIMAL(10, 2);
BEGIN
    SELECT SUM(price) INTO v_total FROM items WHERE order_id = p_order_id;
    RETURN v_total;
END;
$Total_price_for_a_given_order$ LANGUAGE plpgsql;



-- Calculate the total price for order with order_id 1
SELECT * from calculate_order_total(1)




-- Create the users table
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL
);
	