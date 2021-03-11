exports.userInput = (req, res, next) => {
  const { firstName, lastName, age, fbw, email } = req.body;
  if (firstName && lastName && age && fbw && email) next();
  else {
    const error = new Error(
      `Not a valid user inputs`
    );
    error.status = 400;
    next(error);
  }
};

exports.userAge = (req, res, next) => {
  const { age } = req.body;
  if (Number(age) >= 18) next();
  else {
    const error = new Error(
      `We can not validate your user. They must be at least 18 years old.`
    );
    error.status = 400;
    next(error);
  }
};

exports.userFbw = (req, res, next) => {
  const { fbw } = req.body;
  if (Number(fbw) === 36) next();
  else {
    const error = new Error(
      `User not part of fbw 36.`
    );
    error.status = 400;
    next(error);
  }
};

exports.validateUser = (req, res) => {
  res.json({ message: "This user is valid!" });
};