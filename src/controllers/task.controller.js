const {retrieveSingleTask, createNewTasks,getAllTasks,getTaskByUser} = require ('../services/task.service');


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {object} next 
 * @returns {JSON | Error}
 */

const  createATask= async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await createNewTasks(req.body, id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };

  const fetchAsingleTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await retrieveSingleTask(id)
;
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
};
const fetchAllTasks = async (req, res, next) => {
    try {
      const result = await getAllTasks();
      return res.status(result.code).json(result);
    } catch (error) {
      return next(error);
    }
  };
  const fetchTasksByUser = async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await getTaskByUser(id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
module.exports ={
    createATask,
    fetchAsingleTask,
    fetchAllTasks,
    fetchTasksByUser
};

