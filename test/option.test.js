/* eslint-env jest */

const { HoujinBangouClient } = require('..')

test('throws without option', () => {
  const options = undefined
  expect(() => new HoujinBangouClient(options)).toThrow()
})

test('throws without `applicationId` option', () => {
  expect(() => new HoujinBangouClient({})).toThrow()
})

test('not to throw with `applicationId` option', () => {
  expect(() => new HoujinBangouClient({ applicationId: 'xxxxx' })).not.toThrow()
})
