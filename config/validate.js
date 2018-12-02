const AJV = require('ajv');

const ajv = new AJV();

module.exports = schema => {
  const validate = ajv.compile(schema);

  return (req, res, next) => {
    if (validate(req.body)) {
      return next();
    }

    return res.status(400).json({
      error: validate.errors[0].message,
    });
  };
};
