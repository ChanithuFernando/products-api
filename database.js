CREATE TABLE customer (
  customerId SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  email VARCHAR(255),
  dateOfBirth DATE,
  gender VARCHAR(50),
  age INTEGER,
  cardHolderName VARCHAR(255),
  cardNumber VARCHAR(16),
  expiryDate VARCHAR(7),
  cvv VARCHAR(4),
  timeStamp TIMESTAMP
);
