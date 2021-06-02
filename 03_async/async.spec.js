const axios = require('axios');
const Ajax = require('./async');

jest.mock('axios');

describe('Ajax: echo', () => {
  test('should return value async', async () => {
    const result = await Ajax.echo('data');
    expect(result).toBe('data');
  });

  test('should return value async with promise', () => Ajax.echo('data').then((result) => {
    expect(result).toBe('data');
  }));

  // ??????
  test('should catch error with promise', () => Ajax.echo('gerg')
    .catch((err) => {
      console.log(typeof err);
      expect(err).toBeInstanceOf(Error);
    }));

  test('should catch error with try / catch', async () => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe('request error');
    }
  });
});

describe('Ajax: GET', () => {
  let todos;
  let response;

  beforeEach(() => {
    todos = [{ id: 1, title: 'todo 1', completed: false }];
    response = {
      data: { todos },
    };
  });

  test('should return data from server', () => {
    // jest will not send request. just returns response variable
    axios.get.mockReturnValue(response);
    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
