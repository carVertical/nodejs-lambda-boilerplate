import Raven from 'raven';
import RavenLambdaWrapper from 'serverless-sentry-lib'

const handlerWrapper = (func) => async (event, context, callback) => {
  try {
    const result = await func(event, context);
    callback(null, result);
  } catch (err) {
    callback(err);
    throw err;
  } finally {
  }
};

const sentryWrapper = (func) => RavenLambdaWrapper.handler(Raven, func);

export {
  handlerWrapper,
  sentryWrapper
};
