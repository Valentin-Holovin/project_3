import * as yup from 'yup';

import * as MESSAGES from '../messages';

export const addTaskSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .min(3, MESSAGES.INCORRECT_MIN_LENGTH_3)
    .max(255, MESSAGES.TITLE_TOO_LONG)
    .required(MESSAGES.REQUIRE_MESSAGE),
  project: yup.object().shape({
    id: yup.number(),
    name: yup.string(),
    number: yup.number(),
  }),
});
