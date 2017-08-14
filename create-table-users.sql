DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id            serial,
  first_name    text,
  last_name     text,
  user_name     varchar,
  email         varchar
);
