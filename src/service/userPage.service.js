const { Reason } = require('../models');

const userPageService = async ({ userId }) => {
  const reason = await Reason.findOne({ where: { userId } });
  return { status: 200, data: reason.reason };
};

module.exports = {
  userPageService,
};
