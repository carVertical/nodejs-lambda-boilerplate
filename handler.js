import { handlerWrapper } from './lib';

const _action = async (event, context) => {
  return null;
};

const action = handlerWrapper(_action);

export { action };
