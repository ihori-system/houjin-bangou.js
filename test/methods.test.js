/* eslint-env jest */

const { HoujinBangouClient } = require('..')

jest.mock('undici')
const undici = require('undici')

describe('findByCorporateNumberV4', () => {
  test('find by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        text: () => {
          return Promise.resolve(`
<?xml version="1.0" encoding="UTF-8"?>
<corporations>
  <corporation>
    <corporateNumber>8000012010038</corporateNumber>
  </corporation>
</corporations>
          `)
        }
      }
    }))
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    const actual = await client.findByCorporateNumberV4(['8000012010038'])
    expect(actual.corporation.corporateNumber).toEqual(8000012010038)
  })
})

describe('findByTimeRangeV4', () => {
  test('throws without argument `from`', async () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByTimeRangeV4()).toThrow()
  })

  test('throws when `from` is not Date', () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByTimeRangeV4('2021-04-01')).toThrow()
  })

  test('throws without argument `to`', () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByTimeRangeV4(new Date(2021, 3, 1))).toThrow()
  })

  test('throws when `to` is not Date', async () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByTimeRangeV4(new Date(2021, 3, 1), '2021-04-01')).toThrow()
  })

  test('find by time range', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        text: () => {
          return Promise.resolve(`
<?xml version="1.0" encoding="UTF-8"?>
<corporations>
  <corporation>
    <corporateNumber>8000012010038</corporateNumber>
  </corporation>
  <corporation>
    <corporateNumber>8000012010038</corporateNumber>
  </corporation>
</corporations>
          `)
        }
      }
    }))
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    const actual = await client.findByTimeRangeV4(new Date('2021-04-01'), new Date('2021-04-01'))
    expect(actual.corporation.length).toEqual(2)
  })
})
