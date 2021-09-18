CREATE DATABASE langlearn
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'ja_JP.UTF8'
    LC_CTYPE = 'ja_JP.UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
    
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
    logo VARCHAR(255) NOT NULL,
    languageid INT
);

CREATE TABLE lessoncontent(
    id SERIAL PRIMARY KEY,
    lessonid INT,
    question VARCHAR(255) NOT NULL,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    option3 VARCHAR(255) NOT NULL,
    option4 VARCHAR(255) NOT NULL,
    answer VARCHAR(255)
);

CREATE TABLE languages(
    id SERIAL PRIMARY KEY,
    languagename VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE flashcards(
    id SERIAL PRIMARY KEY,
    cardfront VARCHAR(255),
    cardback1 VARCHAR(255),
    cardback2 VARCHAR(255),
    lessonid INT
);

CREATE TABLE tips(
    id SERIAL PRIMARY KEY,
    header VARCHAR(255) NOT NULL,
    content VARCHAR(10000) NOT NULL,
    lessonid INT
);

ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("lessonid") REFERENCES "lessons"("id");
ALTER TABLE "users" ADD CONSTRAINT "users_fk1" FOREIGN KEY ("languageid") REFERENCES "languages"("id");

ALTER TABLE "lessons" ADD CONSTRAINT "lessons_fk0" FOREIGN KEY ("languageid") REFERENCES "languages"("id");
ALTER TABLE "flashcards" ADD CONSTRAINT "flashcards_fk0" FOREIGN KEY ("lessonid") REFERENCES "lessons"("id");
ALTER TABLE "tips" ADD CONSTRAINT "tips_fk0" FOREIGN KEY ("lessonid") REFERENCES "lessons"("id");
ALTER TABLE "lessoncontent" ADD CONSTRAINT "lessoncontent_fk0" FOREIGN KEY ("lessonid") REFERENCES "lessons"("id");

INSERT INTO languages (languagename) VALUES ('Japanese');
INSERT INTO lessons (name, logo, languageid) VALUES ('ひらがな１', 'あ', 1);
INSERT INTO lessons (name, logo, languageid) VALUES ('ひらがな２', 'か', 1);
SELECT * FROM lessons;
INSERT INTO lessoncontent (lessonid, question, option1, option2, option3, option4, answer) VALUES (1, 'あ', 'E', 'A', 'I', 'O', 'A'),
(1, 'い', 'O', 'A', 'U', 'I', 'I'), (1, 'え', 'A', 'E', 'I', 'O', 'E'), (1, 'お', 'O', 'A', 'U', 'E', 'O'), (1, 'う', 'O', 'A', 'U', 'I', 'U'),
(1, 'あお', 'Yellow', 'Blue', 'Red', 'Purple', 'Blue'), (1, 'うえ', 'Up', 'Down', 'Right', 'Left', 'Up'), (1, 'いええ', 'Yes', 'Maybe', 'No', 'Thanks', 'No');

SELECT * FROM lessoncontent;

INSERT INTO lessoncontent (lessonid, question, option1, option2, option3, option4, answer) VALUES (2, 'か', 'Ke', 'Ki', 'Ko', 'Ka', 'Ka'),
(2, 'き', 'Ke', 'Ki', 'Ka', 'Ku', 'Ki'), (2, 'け', 'Ke', 'Ki', 'Ku', 'Ko', 'Ke'), (2, 'こ', 'Ka', 'Ku', 'Ko', 'Ki', 'Ko'),
(2, 'く', 'Ku', 'Ko', 'Ka', 'Ki', 'Ku'), (2, 'かき', 'Write', 'Draw', 'Print', 'Type', 'Draw'), (2, 'かお', 'Legs', 'Arms', 'Face', 'Eyes', 'Face');

SELECT * FROM lessoncontent;

INSERT INTO flashcards (lessonid, cardfront, cardback1, cardback2) VALUES (1, 'あ', 'A', '(Aw)ful'), (1, 'い', 'I', 'Cr(ee)k'), 
(1, 'え', 'E', '(E)gg'), (1, 'お', 'O', '(Oh)'), (1, 'う', 'U', '(U)ber'), (1, 'あお', 'Blue', 'Ao'), (1, 'うえ', 'Up', 'Ue'), (1, 'いええ', 'No', 'Iee');

SELECT * FROM flashcards;

INSERT INTO flashcards (lessonid, cardfront, cardback1, cardback2) VALUES (2, 'か', 'Ka', '(ka)rma'), (2, 'き', 'Ki', 'Key'), 
(2, 'け', 'Ke', 'Kay'), (2, 'く', 'Ku', '(Koo)-koo'), (2, 'こ', 'Ko', '(Co)la'), (2, 'かお', 'Face', 'Kao'), (2, 'かき', 'Draw', 'Kaki');

SELECT * FROM flashcards;

INSERT INTO tips (lessonid, header, content) VALUES (1, 'あ', 'あ is pronouced like the Aw in Awful, you can remember it by seeing the A in the center.'),
(1, 'い', 'い is pronouced like ee in eel, and you can remember it because it looks like two eels.'),
(1, 'え', 'え is pronouced like the e in egg, remember it like a bird about to lay an egg.'),(1, 'お', 'お is pronounced like Oh, and you can look and see the to Os at the bottom.'),
(1, 'う', 'う is pronounced like u in blue, and you can remember it by seeing the sideways U.'),(1, 'あお', 'あお means blue'),
(1, 'うえ', 'うえ means Above and the Kanji for this is 上.'), (1, 'いええ', 'いええ means no, but can also be dont mention it, or no problem.');

INSERT INTO tips (lessonid, header, content) VALUES (2, 'か', 'か is pronoucned like the ca in car. You can remember this like someone danceing the Can Can.'), (2, 'き', 'き is pronounced like key, and you can remember this because it looks like a key.'),
(2, 'け', 'け is pronounced like ca in cake, you can remember this on because it looks like a keg.'), (2, 'く', 'く is pronouced like coo in coo coo bird. and you can remember because it looks like the beak of a coo coo bird.'),
(2, 'こ', 'こ is pronounced like co in code, you can remember this one because it looks like a cup of cola.'), (2, 'かき', 'this mean draw, the kanji for this is 描き.'),
(2, 'かお', 'This means face, the kanji for this is 顔');