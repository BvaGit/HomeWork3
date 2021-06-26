CREATE DATABASE books;

\c books

CREATE TABLE book(
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    img VARCHAR(500) NOT NULL,
    descript VARCHAR(500) NOT NULL,
    dateauth VARCHAR(50)
);


