DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id            serial,
  review        varchar,
  rating        decimal,
  user_id       integer
);
