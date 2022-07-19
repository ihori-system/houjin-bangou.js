/* eslint-env jest */

const { HoujinBangouClient } = require('..')

require('dotenv').config()

describe('findByCorporateNumberV4', () => {
  test('find a corporation', async () => {
    const client = new HoujinBangouClient({ applicationId: process.env.APPLICATION_ID })
    const actual = await client.findByCorporateNumberV4(['8000012010038'])
    expect(actual.corporations.corporation.corporateNumber).toEqual(8000012010038)
  })

  test('find corporations', async () => {
    const client = new HoujinBangouClient({ applicationId: process.env.APPLICATION_ID })
    const actual = await client.findByCorporateNumberV4(['8000012010038', '4000012090001'])
    expect(actual.corporations.corporation.length).toEqual(2)
  })
})
