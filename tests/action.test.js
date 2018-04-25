import nock from 'nock';

import action from '../handler';

class ContextMock {
  constructor(callback) {
    this.done = callback;
  }

  done;
  getRemainingTimeInMillis = () => 30000;
}

describe('handler.action', () => {
  let ctx;
  let cb;

  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.enableNetConnect();
  });

  beforeEach(() => {
    cb = jest.fn();
    ctx = new ContextMock(cb);
  });

  test('should be called', async () => {
    await action({}, ctx, cb);
    expect(cb.mock.calls.length).toBe(1);
  });
});
