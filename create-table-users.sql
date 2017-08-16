DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id                  serial,
  firstname           text,
  lastname            text,
  username            varchar,
  hashedPassword      varchar,
  email               varchar
);
