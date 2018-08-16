import Joi from "joi-browser";

export function validate(data, schema) {
    const errors = {};
    const result = Joi.validate(data, schema, { abortEarly: false });

    if (!result.error) return null;

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message.replace(/\"\'/g, "");
    }
    return Object.keys(errors).length === 0 ? null : errors;
}
