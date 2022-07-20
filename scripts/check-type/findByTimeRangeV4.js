const assert = require('assert')
const { HoujinBangouClient } = require('../..')

require('dotenv').config()

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const targetDate = new Date('2021-04-01')

const client = new HoujinBangouClient({ applicationId: process.env.APPLICATION_ID })

const main = async () => {
  for (const interval of Array(100).fill(1)) {
    const data = await client.findByTimeRangeV4({
      from: new Date(targetDate),
      to: new Date(targetDate)
    })

    console.log('processing:', targetDate)

    await sleep(3000)

    targetDate.setDate(targetDate.getDate() + interval)

    if (data.corporation == null) {
      continue
    }

    data.corporation.forEach((c) => {
      if (c.addressImageId != null) {
        assert.strictEqual(typeof c.addressImageId, 'number')
      }
      if (c.addressOutside != null) {
        assert.strictEqual(typeof c.addressOutside, 'string')
      }
      if (c.addressOutsideImageId != null) {
        assert.strictEqual(typeof c.addressOutsideImageId, 'number')
      }
      if (c.assignmentDate != null) {
        assert.strictEqual(typeof c.assignmentDate, 'string')
      }
      if (c.changeCause != null) {
        assert.strictEqual(typeof c.changeCause, 'string')
      }
      if (c.changeDate != null) {
        assert.strictEqual(typeof c.changeDate, 'string')
      }
      if (c.cityCode != null) {
        assert.strictEqual(typeof c.cityCode, 'number')
      }
      if (c.cityName != null) {
        assert.strictEqual(typeof c.cityName, 'string')
      }
      if (c.closeCause != null) {
        assert.strictEqual(typeof c.closeCause, 'number')
      }
      if (c.closeDate != null) {
        assert.strictEqual(typeof c.closeDate, 'string')
      }
      assert.notStrictEqual(c.corporateNumber, '')
      assert.strictEqual(typeof c.corporateNumber, 'number')
      if (c.correct != null) {
        assert.strictEqual(typeof c.correct, 'number')
      }
      if (c.enName != null) {
        assert.strictEqual(typeof c.enName, 'string')
      }
      if (c.enPrefectureName != null) {
        assert.strictEqual(typeof c.enPrefectureName, 'string')
      }
      if (c.enCityName != null) {
        assert.strictEqual(typeof c.enCityName, 'string')
      }
      if (c.enAddressOutside != null) {
        assert.strictEqual(typeof c.enAddressOutside, 'string')
      }
      if (c.furigana != null) {
        assert.strictEqual(typeof c.furigana, 'string')
      }
      if (c.hihyoji != null) {
        assert.strictEqual(typeof c.hihyoji, 'number')
      }
      if (c.kind != null) {
        assert.strictEqual(typeof c.kind, 'number')
      }
      if (c.latest != null) {
        assert.strictEqual(typeof c.latest, 'number')
      }
      if (c.name != null) {
        assert.strictEqual(typeof c.name, 'string')
      }
      if (c.nameImageId != null) {
        assert.strictEqual(typeof c.nameImageId, 'number')
      }
      if (c.prefectureName != null) {
        assert.strictEqual(typeof c.prefectureName, 'string')
      }
      assert.strictEqual(typeof c.process, 'number')
      if (c.prefectureCode != null) {
        assert.strictEqual(typeof c.prefectureCode, 'number')
      }
      if (c.postCode != null) {
        assert.strictEqual(typeof c.postCode, 'number')
      }
      assert.strictEqual(typeof c.sequenceNumber, 'number')
      if (c.streetNumber != null) {
        assert.strictEqual(typeof c.streetNumber, 'string')
      }
      if (c.successorCorporateNumber != null) {
        assert.strictEqual(typeof c.successorCorporateNumber, 'number')
      }
      assert.notStrictEqual(c.updateDate, '')
      assert.strictEqual(typeof c.updateDate, 'string')
    })
  }
}

main()
