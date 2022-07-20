const assert = require('assert')
const { HoujinBangouClient } = require('../..')
const {
  CORPORATION_PROPERTIES,
  CORPORATIONS_PROPERTIES
} = require('./constants')

require('dotenv').config()

const client = new HoujinBangouClient({ applicationId: process.env.APPLICATION_ID })

const main = async () => {
  const data = await client.findByCorporateNumberV4(['8000012010038'])

  const diff = Object.keys(data).filter((k) => CORPORATIONS_PROPERTIES.includes(k) === false)
  if (diff.length > 0) {
    console.log(data)
    console.log(diff)
  }
  assert.strictEqual(diff.length, 0)

  const corporation = data.corporation
  {
    const diff = Object.keys(corporation).filter((k) => CORPORATION_PROPERTIES.includes(k) === false)
    if (diff.length > 0) {
      console.log(data)
      console.log(diff)
    }
    assert.strictEqual(diff.length, 0)
  }
}

main()
