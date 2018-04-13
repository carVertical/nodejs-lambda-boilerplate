import { action } from '../handler';

describe('handler.action', () => {
  test('should be called', async () => {
    const cb = jest.fn();
    await action({}, null, cb);
    expect(cb.mock.calls.length).toBe(1);
  });
});
