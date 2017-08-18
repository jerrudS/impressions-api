-- up
CREATE TABLE reviews (
  id            serial,
  review        varchar,
  rating        decimal,
  userId        integer
);

INSERT INTO reviews (rating, review, userId)
VALUES
  (3.53, 'Joe plays baseball with no shoes!', 1),
  (4.77, 'Shes really nice', 2),
  (3.33, 'Joe is cool.', 5),
  (4.00, 'Joe is the best.', 5)

---
DROP TABLE IF EXISTS reviews;

-- down
