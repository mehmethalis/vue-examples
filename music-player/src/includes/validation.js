import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  configure,
  ErrorMessage,
} from "vee-validate";
import {
  required,
  min,
  max,
  email,
  confirmed,
  alpha_spaces as alphaSpaces,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("confirmed", confirmed);

    defineRule("alpha_spaces", alphaSpaces);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          email: `The field ${ctx.field} must be a valid email.`,
          confirm_password: `The passwords don't match.`,
          tos: "You must accept the Terms of Service.",
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
    });
  },
};
