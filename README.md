# Blog de receitas

## Backend

### To start the backend

```
node backenc/src/index.js
```

## Frontend

### To start the frontend

```
cd frontend/ && yarn run dev
```

## SQL Script

```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE receitas (
    recipeid uuid DEFAULT uuid_generate_v4 (),
    title VARCHAR NOT NULL,
    ingredients VARCHAR[] NOT NULL,
    content VARCHAR NOT NULL,
    category VARCHAR NOT NULL,
    imageurl VARCHAR NOT null,
    createdat timestamp default current_timestamp,
    PRIMARY KEY (recipeid)
);

select * from receitas;
```

## Developers

Frontend: [Lauane Oliveira](https://github.com/Lauaneoc)

Backend: [Hermando Thiago](https://github.com/HermandoThiago)
