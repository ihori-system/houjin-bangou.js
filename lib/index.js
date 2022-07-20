const { request } = require('undici')
const { XMLParser } = require('fast-xml-parser')
const {
  API_ENDPOINT,
  PACKAGE_NAME
} = require('./constants')
const {
  formatYYYYMMDD
} = require('./utils')

class HoujinBangouClient {
  constructor (options) {
    if (options == null) {
      throw new TypeError(`[${PACKAGE_NAME}] options引数が指定されていません`)
    }
    if (options.applicationId == null) {
      throw new TypeError(`[${PACKAGE_NAME}] applicationIdオプションが指定されていません`)
    }
    this.applicationId = options.applicationId
    this.parser = new XMLParser()
  }

  findByCorporateNumberV4 (corporateNumbers) {
    return this.findByCorporateNumberV4Raw(corporateNumbers)
      .then((data) => this.parser.parse(data))
      .then((json) => json.corporations)
  }

  findByCorporateNumberV4Raw (corporateNumbers) {
    return request(`${API_ENDPOINT}/4/num`, {
      query: {
        history: 0,
        id: this.applicationId,
        number: corporateNumbers,
        type: 12
      }
    })
      .then(({ body }) => body.text())
  }

  findByTimeRangeV4 (from, to) {
    if (from == null) {
      throw new TypeError(`[${PACKAGE_NAME}] from引数が指定されていません`)
    }
    if (from instanceof Date === false) {
      throw new TypeError(`[${PACKAGE_NAME}] fromがDateオブジェクトではありません`)
    }
    if (to == null) {
      throw new TypeError(`[${PACKAGE_NAME}] to引数が指定されていません`)
    }
    if (to instanceof Date === false) {
      throw new TypeError(`[${PACKAGE_NAME}] toがDateオブジェクトではありません`)
    }

    return this.findByTimeRangeV4Raw(formatYYYYMMDD(from), formatYYYYMMDD(to))
      .then((data) => this.parser.parse(data))
      .then((json) => json.corporations)
  }

  findByTimeRangeV4Raw (from, to) {
    return request(`${API_ENDPOINT}/4/diff`, {
      query: {
        from,
        id: this.applicationId,
        to,
        type: 12
      }
    })
      .then(({ body }) => body.text())
  }
}

module.exports.HoujinBangouClient = HoujinBangouClient
