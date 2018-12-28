const { body, check, validationResult } = require("express-validator/check");

module.exports = {
  registerValidation: [
    check("username")
      .matches(/^[A-Za-z0-9_-]+$/, "i")
      .withMessage("Username can only contain letters, numbers, or underscores")
      .isLength({ min: 4, max: 24 })
      .withMessage("Username must be between 4 and 24 characters"),
    check("email")
      .isEmail()
      .withMessage(
        "The email address you entered is invalid, please try again."
      )
      .isLength({ min: 8, max: 100 })
      .withMessage("Password must be between 8-100 characters long."),
    check("password")
      .isLength({ min: 8, max: 100 })
      .withMessage("Password must be between 8-100 characters long.")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/,
        "i"
      )
      .withMessage(
        "Password must include one lowercase character, one uppercase character, a number, and a special character"
      ),
    body("passwordMatch").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation does not match password");
      } else {
        return true;
      }
    })
  ],
  registerErrors: ({ location, msg, param, value, nestedErrors }) => {
    return {
      type: "Error",
      name: "Registration Error",
      location: location,
      message: msg,
      param: param,
      value: value,
      nestedErrors: nestedErrors
    };
  }
};
