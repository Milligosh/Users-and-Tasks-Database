const createTasks = `
INSERT INTO tasks(
    title,
    description,
    completed,
    user_id
)
VALUES ($1, $2, $3, $4) RETURNING id, title, description, completed, user_id, created_at
`;

const fetchTasksById = `SELECT user_id FROM tasks WHERE id=$1`;

const fetchAllTasksListed = `
SELECT t.id, t.title, t.description, 
json_build_object(
    'id', u.id,
    'email', u.email
    
) as user
FROM tasks t
INNER JOIN users u on t.user_id = u.id
`;
const fetchTaskByUser = `
SELECT id, title, description FROM tasks WHERE user_id=$1
`;
module.exports ={
    createTasks,
    fetchTasksById,
    fetchAllTasksListed,
    fetchTaskByUser
}