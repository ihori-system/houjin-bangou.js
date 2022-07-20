/* eslint-env jest */

const { HoujinBangouClient } = require('..')

jest.mock('undici')
const undici = require('undici')

describe('findByCorporateNumberV4', () => {
  test('throws without options', async () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByCorporateNumberV4()).toThrow()
  })

  test('throws without `corporateNumbers` option', async () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByCorporateNumberV4({})).toThrow()
  })

  test('throws when `corporateNumbers` is not array', async () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByCorporateNumberV4({
      number: true
    })).toThrow()
  })

  test('throws when `corporateNumbers` has more than 10 elements', async () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByCorporateNumberV4({
      number: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    })).toThrow()
  })

  test('throws when `corporateNumbers` is not array', async () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByCorporateNumberV4({
      history: true,
      number: []
    })).toThrow()
  })

  test('find by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        text: () => {
          return Promise.resolve(`
<?xml version="1.0" encoding="UTF-8"?>
<corporations>
  <corporation>
    <addressImageId>12345</addressImageId>
    <corporateNumber>8000012010038</corporateNumber>
  </corporation>
</corporations>
          `)
        }
      }
    }))
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    const actual = await client.findByCorporateNumberV4({
      number: ['8000012010038']
    })
    expect(actual.corporation.corporateNumber).toEqual(8000012010038)
  })

  test('find by corporate number with history', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        text: () => {
          return Promise.resolve(`
<?xml version="1.0" encoding="UTF-8"?>
<corporations>
  <corporation>
    <addressImageId></addressImageId>
    <corporateNumber>8000012010038</corporateNumber>
  </corporation>
</corporations>
          `)
        }
      }
    }))
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    const actual = await client.findByCorporateNumberV4({
      history: 1,
      number: ['8000012010038']
    })
    expect(actual.corporation.corporateNumber).toEqual(8000012010038)
  })
})

describe('findByTimeRangeV4', () => {
  test('throws without argument option', async () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByTimeRangeV4()).toThrow()
  })

  test('throws without `from` option', async () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByTimeRangeV4({})).toThrow()
  })

  test('throws when `from` is not Date', () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByTimeRangeV4({ from: '2021-04-01' })).toThrow()
  })

  test('throws without argument `to`', () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByTimeRangeV4({ from: new Date('2021-04-01') })).toThrow()
  })

  test('throws when `to` is not Date', async () => {
    const client = new HoujinBangouClient({ applicationId: 'xxxxx' })
    expect(() => client.findByTimeRangeV4({
      from: new Date('2021-04-01'),
      to: '2021-04-01'
    })).toThrow()
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
    const actual = await client.findByTimeRangeV4({
      from: new Date('2021-04-01'),
      to: new Date('2021-04-01')
    })
    expect(actual.corporation.length).toEqual(2)
  })

  test('find by time range with full option', async () => {
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
    const actual = await client.findByTimeRangeV4({
      address: '01101',
      divide: 2,
      from: new Date('2021-04-01'),
      kind: '01',
      to: new Date('2021-04-01')
    })
    expect(actual.corporation.length).toEqual(2)
  })
})

describe('findByNameV4', () => {
  test('find by name', async () => {
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
    const actual = await client.findByNameV4({
      name: 'デジタル庁'
    })
    expect(actual.corporation.corporateNumber).toEqual(8000012010038)
  })

  test('find by name with full option', async () => {
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
    const actual = await client.findByNameV4({
      address: '01',
      change: 0,
      close: 0,
      divide: 1,
      from: new Date('2021-04-01'),
      kind: '01',
      mode: 1,
      name: 'デジタル庁',
      target: 1,
      to: new Date('2021-04-01')
    })
    expect(actual.corporation.corporateNumber).toEqual(8000012010038)
  })
})
