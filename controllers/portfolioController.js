const sendEmailController = () => {
  try {
    return res.status(200).send({
      success: true,
      message: "Your Message Sent Succcesfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email Api Error",
      error,
    });
  }
};

module.exports = sendEmailController;
