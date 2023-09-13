/* Replace with your SQL commands */

CREATE TABLE users (
    
    -- name varchar(100),
    -- email varchar(100) UNIQUE,
    -- password varchar(60),
    -- role role_type,
    id SERIAL PRIMARY KEY,
    email varchar (100) UNIQUE,
    password varchar (60),
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)