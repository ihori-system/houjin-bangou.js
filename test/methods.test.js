/* eslint-env jest */

const { HoujinBangouClient } = require('..')

jest.mock('undici')
const undici = require('undici')

describe('findByCorporateNumber', () => {
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
    expect(actual.corporations.corporation.corporateNumber).toEqual(8000012010038)
  })
})
