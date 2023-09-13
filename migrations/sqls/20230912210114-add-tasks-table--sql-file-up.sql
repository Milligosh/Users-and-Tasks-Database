/* Replace with your SQL commands */
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id)
 ON DELETE CASCADE,
    title VARCHAR(255),
    tasks VARCHAR,
    description VARCHAR,
    completed boolean,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
)



