import { ValidationMessages } from "./interfaces.ts";

export const defaultMessages: ValidationMessages = {
  "fileExists:pathCheck": "file :value doesn't exists",
  "fileExists:stringCheck": "file path must be a string",
  "isArray": ":attr must be an array",
  "isBool": ":attr must be a boolean",
  "isEmail": ":attr is not a valid email address",
  "isFloat": ":attr must be a float number",
  "isIn": ":value is not allowed",
  "isInt": ":attr must be an integer",
  "isNumber": ":attr must be a number",
  "isNumeric": ":attr must be numeric",
  "isString": ":attr must be a string",
  "maxNumber": ":attr cannot be higher than :maxValue",
  "minNumber": ":attr cannot be lower than :minValue",
  "notIn": ":value is not allowed",
  "notNull": ":value cannot be null",
  "numberBetween": ":value must be between :minValue - :maxValue",
  "required": ":attr is required",
};
