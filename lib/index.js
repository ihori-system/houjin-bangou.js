const { request } = require('undici')
const { XMLParser } = require('fast-xml-parser')
const {
  API_ENDPOINT,
  PACKAGE_NAME
} = require('./constants')

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
}

module.exports.HoujinBangouClient = HoujinBangouClient
