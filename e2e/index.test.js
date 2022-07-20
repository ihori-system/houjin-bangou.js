/* eslint-env jest */

const { HoujinBangouClient } = require('..')

require('dotenv').config()

describe('findByCorporateNumberV4', () => {
  test('find a corporation', async () => {
    const client = new HoujinBangouClient({ applicationId: process.env.APPLICATION_ID })
    const actual = await client.findByCorporateNumberV4(['8000012010038'])
    expect(actual.corporation.corporateNumber).toEqual(8000012010038)
  })

  test('find corporations', async () => {
    const client = new HoujinBangouClient({ applicationId: process.env.APPLICATION_ID })
    const actual = await client.findByCorporateNumberV4(['8000012010038', '4000012090001'])
    expect(actual.corporation.length).toEqual(2)
  })
})

describe('findByTimeRangeV4', () => {
  test('find by time range', async () => {
    const client = new HoujinBangouClient({ applicationId: process.env.APPLICATION_ID })
    const actual = await client.findByTimeRangeV4(new Date('2021-04-01'), new Date('2021-04-01'))
    expect(actual.count).toEqual(2232)
    expect(actual.divideNumber).toEqual(1)
    expect(actual.divideSize).toEqual(2)
    expect(actual.corporation.length).toEqual(2000)
  })
})

describe('findByNameV4', () => {
  test('find a corporation', async () => {
    const client = new HoujinBangouClient({ applicationId: process.env.APPLICATION_ID })
    const actual = await client.findByNameV4('デジタル庁')
    expect(actual.corporation.corporateNumber).toEqual(8000012010038)
  })
})
