const { request } = require('undici')
const { XMLParser } = require('fast-xml-parser')
const {
  API_ENDPOINT,
  PACKAGE_NAME
} = require('./constants')
const {
  convertToCorporations
} = require('./converters')
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

  findByCorporateNumberV4 (options) {
    if (options == null) {
      throw new TypeError(`[${PACKAGE_NAME}] options引数が指定されていません`)
    }
    if (options.number == null) {
      throw new TypeError(`[${PACKAGE_NAME}] numberオプションが指定されていません`)
    }
    if (Array.isArray(options.number) === false) {
      throw new TypeError(`[${PACKAGE_NAME}] numberオプションに配列ではない値が指定されています`)
    }
    if (options.number.length > 10) {
      throw new TypeError(`[${PACKAGE_NAME}] numberオプションに指定できる最大件数は10件までです`)
    }
    if (options.history != null && typeof options.history !== 'number') {
      throw new TypeError(`[${PACKAGE_NAME}] historyオプションに数値ではない値が指定されています`)
    }
    return this.findByCorporateNumberV4Raw({
      history: options.history != null ? options.history : undefined,
      number: options.number,
      type: 12
    })
      .then((data) => this.parser.parse(data))
      .then((json) => convertToCorporations(json.corporations))
  }

  findByCorporateNumberV4Raw (options) {
    return request(`${API_ENDPOINT}/4/num`, {
      query: {
        ...options,
        id: this.applicationId
      }
    })
      .then(({ body }) => body.text())
  }

  findByTimeRangeV4 (options) {
    if (options == null) {
      throw new TypeError(`[${PACKAGE_NAME}] options引数が指定されていません`)
    }
    if (options.from == null) {
      throw new TypeError(`[${PACKAGE_NAME}] from引数が指定されていません`)
    }
    if (options.from instanceof Date === false) {
      throw new TypeError(`[${PACKAGE_NAME}] fromがDateオブジェクトではありません`)
    }
    if (options.to == null) {
      throw new TypeError(`[${PACKAGE_NAME}] to引数が指定されていません`)
    }
    if (options.to instanceof Date === false) {
      throw new TypeError(`[${PACKAGE_NAME}] toがDateオブジェクトではありません`)
    }

    return this.findByTimeRangeV4Raw({
      address: options.address != null ? options.address : undefined,
      divide: options.divide != null ? options.divide : undefined,
      from: formatYYYYMMDD(options.from),
      kind: options.kind != null ? options.kind : undefined,
      to: formatYYYYMMDD(options.to),
      type: 12
    })
      .then((data) => this.parser.parse(data))
      .then((json) => convertToCorporations(json.corporations))
  }

  findByTimeRangeV4Raw (options) {
    return request(`${API_ENDPOINT}/4/diff`, {
      query: {
        ...options,
        id: this.applicationId
      }
    })
      .then(({ body }) => body.text())
  }

  findByNameV4 (options) {
    return this.findByNameV4Raw({
      address: options.address != null ? options.address : undefined,
      change: options.change != null ? options.change : undefined,
      close: options.close != null ? options.close : undefined,
      divide: options.divide != null ? options.divide : undefined,
      from: options.from != null ? formatYYYYMMDD(options.from) : undefined,
      kind: options.kind != null ? options.kind : undefined,
      mode: options.mode != null ? options.mode : undefined,
      name: options.name,
      target: options.target != null ? options.target : undefined,
      to: options.to != null ? formatYYYYMMDD(options.to) : undefined,
      type: 12
    })
      .then((data) => this.parser.parse(data))
      .then((json) => convertToCorporations(json.corporations))
  }

  findByNameV4Raw (options) {
    return request(`${API_ENDPOINT}/4/name`, {
      query: {
        ...options,
        id: this.applicationId
      }
    })
      .then(({ body }) => body.text())
  }
}

module.exports.HoujinBangouClient = HoujinBangouClient
