const { runQuery } = require('../config/database.config');
const { fetchTasksById } = require('../queries/tasks');

const checkValidPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [post = null] = await runQuery(fetchTasksById, [id]);
    if (!post) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Post does not exist!',
        data: null,
      });
    }

    return req.user.id === post.user_id
      ? next()
      : res.status(400).json({
          status: 'error',
          code: 400,
          message: 'You are not authorized to make this edit!',
          data: null,
        });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  checkValidPost,
};
