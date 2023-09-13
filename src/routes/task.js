
const express= require('express')
const { createATask, fetchAsingleTask, fetchAllTasks,fetchTasksByUser } = require('../controllers/task.controller');
// const { isAuthenticated } = require('../middlewares/auth.middleware'); // 
// const {checkValidPost}=require('../middlewares/post.middleware');
const {checkToken}= require('../middlewares/auth.middleware')
const { checkIfIdExists } = require('../middlewares/user.middleware');
const router = express.Router();

router.post('/', checkToken, createATask,);

router.get('/:id', fetchAsingleTask);

router.get('/', fetchAllTasks);

router.get('/:user_id', checkIfIdExists, fetchTasksByUser);
module.exports = router;
