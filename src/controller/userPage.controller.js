const service = require('../service/userPage.service');

const userPageController = async (req, res) => {
  try {
    const response = await service.userPageService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error validating register:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
    userPageController,
};
