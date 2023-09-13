/**
 * Add New User
 */
const addUser = `
  INSERT INTO users(
    email,
    password
  )
  VALUES ($1,$2) RETURNING id, email, created_at
`;

const findUserByEmail = `
 SELECT id, email, password FROM users WHERE email=$1
`

module.exports = {
    addUser,
    findUserByEmail
}