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

export {
  handlerWrapper
};
