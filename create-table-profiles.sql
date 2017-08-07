DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
  id            serial,
  first_name    text,
  last_name     text,
  user_name     varchar,
  rating        decimal
);
