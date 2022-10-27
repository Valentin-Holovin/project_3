/* eslint-disable unicorn/better-regex */
import * as yup from 'yup';

import * as MESSAGES from '../messages';

export const projectSchema = yup.object().shape({
  title: yup.string().required(MESSAGES.REQUIRE_MESSAGE),
});

export const updateProjectSchema = yup.object().shape({
  title: yup.string().required(MESSAGES.REQUIRE_MESSAGE),
  number: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
});
