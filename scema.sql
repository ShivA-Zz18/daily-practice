show tables;


create table if not exists users (
    id int primary key ,
    username varchar(255) not null,
    email varchar(255) not null ,
    password varchar(255) not null
);


insert into users (id, username, email, password) values
(1, 'admin', 'admin1@gmail.com', 'admin123');
