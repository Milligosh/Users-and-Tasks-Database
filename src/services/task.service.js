const {  createTasks, fetchTasksById,fetchAllTasksListed,fetchTaskByUser } = require('../queries/tasks');
const {runQuery} = require('../config/database.config');

/**
 * Create Task
 */

   /**
 * Creates a new post in the db
 * @param {object} body
 * @param {number} id
 * @returns {Response}
 */

const createNewTasks = async (body, id) => {
    const { title, description,completed,user_id } = body;
    const post = await runQuery(createTasks, [title, description,completed,user_id]);
    return {
        code: 201,
        status: 'success',
        message: 'Task created successfully!',
        data: {
        post,
      },
    };
  };
 
  const retrieveSingleTask = async (id)=> {
    const result = await runQuery(fetchTasksById, [id]);
    return {
        code: 200,
        status: 'success',
        message: 'Single task fetched successfully',
        data: result[0]
    }
};
/**
 * Fetches all posts from the db
 * @returns {Response}
 */
const getAllTasks = async () => {
    const result = await runQuery(fetchAllTasksListed);
    return {
      status: 'success',
      message: 'Tasks fetched successfully!',
      code: 200,
      data: {
        result,
      },
    };
  };
  const getTaskByUser = async (id) => {
    const result = await runQuery(fetchTaskByUser, [id]);
    return {
      status: 'success',
      message: 'Tasks fetched successfully!',
      code: 200,
      data: {
        result,
      },
    };
  };
module.exports = {
    retrieveSingleTask,
    createNewTasks,
    getAllTasks,
    getTaskByUser
}