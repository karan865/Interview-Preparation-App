import { SeedQuestion } from '../types';
import { expressFundamentalsQuestions } from './fundamentals';
import { routingQuestions } from './routing';
import { middlewareQuestions } from './middleware';
import { requestResponseQuestions } from './requestResponse';
import { errorHandlingQuestions } from './errorHandling';
import { authenticationQuestions } from './authentication';
import { authorizationQuestions } from './authorization';
import { validationQuestions } from './validation';
import { apiDesignQuestions } from './apiDesign';
import { securityQuestions } from './security';

export {
  expressFundamentalsQuestions,
  routingQuestions,
  middlewareQuestions,
  requestResponseQuestions,
  errorHandlingQuestions,
  authenticationQuestions,
  authorizationQuestions,
  validationQuestions,
  apiDesignQuestions,
  securityQuestions
};

export const expressQuestions: SeedQuestion[] = [
  ...expressFundamentalsQuestions,
  ...routingQuestions,
  ...middlewareQuestions,
  ...requestResponseQuestions,
  ...errorHandlingQuestions,
  ...authenticationQuestions,
  ...authorizationQuestions,
  ...validationQuestions,
  ...apiDesignQuestions,
  ...securityQuestions
];
