CREATE database user_task;
\c user_task



CREATE table users(
  user_id serial primary key,
  first_name varchar not null,
  last_name varchar not null,
  email varchar unique not null,
  gander varchar not null,
  password varchar unique not null,
  created_at date DEFAULT CURRENT_TIMESTAMP,
  status varchar DEFAULT('active')
);

