import { handlerWrapper, sentryWrapper } from './lib';

const action = async (event, context) => console.log(`${JSON.stringify(context)}-${JSON.stringify(event)}`);

const wrapped = sentryWrapper(handlerWrapper(action));

export default wrapped;
