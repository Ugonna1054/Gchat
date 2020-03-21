import { extend, localize } from "vee-validate";
import {
  min,
  required,
  email,
  numeric,
  confirmed,
  max,
  min_value,
  max_value,
  size,
  image,
  alpha
} from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

// Install rules
extend("required", required);
extend("min", min);
extend("email", email);
extend("numeric", numeric);
extend("confirmed", confirmed);
extend("max", max);
extend("min_value", min_value);
extend("max_value", max_value);
extend("size", size), extend("image", image);
extend("alpha", alpha);

//Ovewrite some default error messages
en.messages.confirmed = "The {_field_} do not match";
en.messages.required = "This field is required";
en.messages.min = "This field must be at least {length} characters"; // use {_field_} to indicate the name of the field
en.messages.max = "This field must be at most {length} characters"; // use {_field_} to indicate the name of the field
en.messages.numeric = "This field must only contain numeric characters only";
en.messages.email = "The email must be a valid email";
en.messages.min_value = "The amount must be {min} or more";
en.messages.max_value = "The {_field_}  must be {max} or less";
en.messages.image = "The {_field_} field must be an image";
en.messages.alpha = "The {_field_}  may only contain alphabetic characters";
en.messages.size = `The file must be less than 2mb`;

// Install messagess
localize({
  en
});
