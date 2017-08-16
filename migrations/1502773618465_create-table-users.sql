-- up
CREATE TABLE users (
  id                  serial,
  firstname           text,
  lastname            text,
  username            varchar,
  hashedPassword      varchar,
  email               varchar
);
CREATE TABLE reviews (
  id            serial,
  review        varchar,
  rating        decimal,
  userId        integer
);
INSERT INTO users (firstname, lastname, username, email)
VALUES
  ('Joe', 'Jackson', 'J_Jack13', 'JJack55@san.rr.com'),
  ('Miranda', 'Talbert', 'Tal234', 'Talbert223@gmail.com'),
  ('Sam', 'Strong', 'MrStrong44', 'Sammy@apple.com'),
  ('Ace', 'Lundquist', 'Ace29', 'ace@yahoo.com');

INSERT INTO reviews (rating, review, userId)
VALUES
  (3.53, 'Joe plays baseball with no shoes!', 1),
  (4.77, 'Shes really nice', 2),
  (3.33, 'Joe is cool.', 5),
  (4.00, 'Joe is the best.', 5)

---
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;

-- down
