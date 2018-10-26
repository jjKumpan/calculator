const checkProps = require('./checkPropsinObject');

test('object prop values should return 0 if empty', () => {
  expect(checkProps.checkForEmptyPropValues({test:''})).toEqual({test:0})
});