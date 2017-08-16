DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id            serial,
  review        varchar,
  rating        decimal,
  userId        integer
);
