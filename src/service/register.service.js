const { User, Reason } = require('../models');

const registerService = async ({ email, password, reason, name }) => {
  if (!email || !password || !reason || !name) {
    return { status: 400, data: { message: 'Invalid fields' } }
  }

  if (password.length < 8) {
    return { status: 400, data: { message: 'The password must contain at least 8 characters' } }
  }

  const userResponse = await User.create({ name: name, password: password, email: email });
  const reasonResponse = await Reason.create({ reason: reason, userId: userResponse.dataValues.id });

  const data = {
    id: userResponse.dataValues.id,
    name: userResponse.dataValues.name,
    email: userResponse.dataValues.email,
    reason: reasonResponse.dataValues,
  }

  return { status: 200, data: data };
};

module.exports = {
  registerService,
};