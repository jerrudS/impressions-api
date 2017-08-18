-- up
CREATE TABLE users (
  id                  serial,
  firstname           text,
  lastname            text,
  username            varchar,
  hashedPassword      varchar,
  email               varchar
);
INSERT INTO users (firstname, lastname, username, email)
VALUES
  ('Joe', 'Jackson', 'J_Jack13', 'JJack55@san.rr.com'),
  ('Miranda', 'Talbert', 'Tal234', 'Talbert223@gmail.com'),
  ('Sam', 'Strong', 'MrStrong44', 'Sammy@apple.com'),
  ('Ace', 'Lundquist', 'Ace29', 'ace@yahoo.com');

---
DROP TABLE IF EXISTS users;

-- down
