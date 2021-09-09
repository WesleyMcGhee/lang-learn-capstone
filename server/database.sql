CREATE DATABASE langLearn;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    lessonId INT,
    languageid INT,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE lessons(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    languageid INT
);

CREATE TABLE languages(
    id SERIAL PRIMARY KEY,
    languagename VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE flashcards(
    id SERIAL PRIMARY KEY,
    lessonid INT
);

CREATE TABLE tips(
    id SERIAL PRIMARY KEY,
    lessonid INT
);

ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("lessonid") REFERENCES "lessons"("id");
ALTER TABLE "users" ADD CONSTRAINT "users_fk1" FOREIGN KEY ("languageid") REFERENCES "languages"("id");

ALTER TABLE "lessons" ADD CONSTRAINT "lessons_fk0" FOREIGN KEY ("languageid") REFERENCES "languages"("id");
ALTER TABLE "flashcards" ADD CONSTRAINT "flashcards_fk0" FOREIGN KEY ("lessonid") REFERENCES "lessons"("id");
ALTER TABLE "tips" ADD CONSTRAINT "tips_fk0" FOREIGN KEY ("lessonid") REFERENCES "lessons"("id");

