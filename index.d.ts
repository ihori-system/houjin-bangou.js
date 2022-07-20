/**
 * 法人番号システム Web-API クライアント
 * [API Document](https://www.houjin-bangou.nta.go.jp/webapi/)
 */
export class HoujinBangouClient {
  constructor(options: HoujinBangouClientOption)
  /**
   * 法人番号を指定して情報を取得
   * @param options オプション
   */
  findByCorporateNumberV4(options: FindByCorporateNumberV4Option): Promise<Corporations>
  findByCorporateNumberV4Raw(options: FindByCorporateNumberV4RawOption): Promise<unknown>
  /**
   * 取得期間を指定して情報を取得
   * @param options オプション
   */
  findByTimeRangeV4(options: FindByTimeRangeV4Option): Promise<Corporations>
  findByTimeRangeV4Raw(options: FindByTimeRangeV4RawOption): Promise<unknown>
  /**
   * 法人名を指定して情報を取得
   * @param options オプション
   */
  findByNameV4(options: FindByNameV4Option): Promise<Corporations>
  findByNameV4Raw(options: FindByNameV4RawOption): Promise<unknown>
}

/**
 * 法人等要素
 */
export interface Corporation {
  /**
   * 国内所在地イメージID
   */
  addressImageId: number | null
  /**
   * 国外所在地
   */
  addressOutside: string
  /**
   * 国外所在地イメージID
   */
  addressOutsideImageId: string
  /**
   * 法人番号指定年月日
   */
  assignmentDate: string
  /**
   * 変更事由の詳細
   */
  changeCause: string
  /**
   * 変更年月日
   */
  changeDate: string
  /**
   * 市区町村コード
   */
  cityCode: number
  /**
   * 国内所在地（市区町村）
   */
  cityName: string
  /**
   * 登記記録の閉鎖等の事由
   */
  closeCause: string
  /**
   * 登記記録の閉鎖等年月日
   */
  closeDate: string
  /**
   * 法人番号
   */
  corporateNumber: number
  /**
   * 訂正区分
   */
  correct: number
  /**
   * 商号又は名称（英語表記）
   */
  enName: string
  /**
   * 国内所在地（都道府県）（英語表記）
   */
  enPrefectureName: string
  /**
   * 国内所在地（市町村丁目番地等）（英語表記）
   */
  enCityName: string
  /**
   * 国外所在地（英語表記）
   */
  enAddressOutside: string
  /**
   * フリガナ
   */
  furigana: string
  /**
   * 検索対象除外
   */
  hihyoji: number
  /**
   * 法人種別
   */
  kind: number
  /**
   * 最新履歴
   */
  latest: number
  /**
   * 商号又は名称
   */
  name: string
  /**
   * 商号又は名称イメージID
   */
  nameImageId: string
  /**
   * 国内所在地（都道府県）
   */
  prefectureName: string
  /**
   * 処理区分
   */
  process: number
  /**
   * 都道府県コード
   */
  prefectureCode: number
  /**
   * 郵便番号
   */
  postCode: number
  /**
   * 一連番号
   */
  sequenceNumber: number
  /**
   * 国内所在地（丁目番地等）
   */
  streetNumber: string
  /**
   * 承継先法人番号
   */
  successorCorporateNumber: string
  /**
   * 更新年月日
   */
  updateDate: string
}

/**
 * ルート要素
 */
export interface Corporations {
  /**
   * 総件数
   */
  count: number
  /**
   * 法人等要素
   */
  corporation: Corporation | Corporation[]
  /**
   * 分割番号
   */
  divideNumber: number
  /**
   * 分割数
   */
  divideSize: number
  /**
   * 最終更新年月日
   */
  lastUpdateDate: string
}

export interface FindByCorporateNumberV4Option {
  /**
   * 法人番号
   */
  number: string[]
  /**
   * 変更履歴要否
   */
  history?: 0 | 1
}


export interface FindByCorporateNumberV4RawOption {
  /**
   * 法人番号
   */
  number: string[]
  /**
   * 変更履歴要否
   */
  history?: 0 | 1
  /**
   * 応答形式
   */
  type: '01' | '02' | '12'
}

export interface FindByTimeRangeV4Option {
  /**
   * 所在地
   */
  address?: string
  /**
   * 分割番号
   */
  divide?: number
  /**
   * 取得期間開始日
   */
  from: Date
  /**
   * 法人種別
   */
  kind?: '01' | '02' | '03' | '04'
  /**
   * 取得期間終了日
   */
  to: Date
}

export interface FindByTimeRangeV4RawOption {
  /**
   * 所在地
   */
  address?: string
  /**
   * 分割番号
   */
  divide?: number
  /**
   * 取得期間開始日
   */
  from: string
  /**
   * 法人種別
   */
  kind?: '01' | '02' | '03' | '04'
  /**
   * 取得期間終了日
   */
  to: string
  /**
   * 応答形式
   */
  type: '01' | '02' | '12'
}

export interface FindByNameV4Option {
  /**
   * 所在地
   */
  address?: string
  /**
   * 変更履歴
   */
  change?: 0 | 1
  /**
   * 登記記録の閉鎖等
   */
  close?: 0 | 1
  /**
    * 分割番号
   */
  divide?: number
  /**
   * 法人番号指定年月日開始日
   */
  from?: Date
  /**
   * 法人種別
   */
  kind?: '01' | '02' | '03' | '04'
  /**
   * 商号又は名称検索方式
   */
  mode?: 1 | 2
  /**
   * 商号又は名称
   */
  name: string
  /**
   * 商号又は名称検索対象
   */
  target?: 1 | 2 | 3
  /**
   * 法人番号指定年月日終了日
   */
  to?: Date
}

export interface FindByNameV4RawOption {
  /**
   * 所在地
   */
  address?: string
  /**
   * 変更履歴
   */
  change?: 0 | 1
  /**
   * 登記記録の閉鎖等
   */
  close?: 0 | 1
  /**
   * 分割番号
   */
  divide?: number
  /**
   * 法人番号指定年月日開始日
   */
  from?: string
  /**
   * 法人種別
   */
  kind?: '01' | '02' | '03' | '04'
  /**
   * 商号又は名称検索方式
   */
  mode?: 1 | 2
  /**
   * 商号又は名称
   */
  name: string
  /**
   * 商号又は名称検索対象
   */
  target?: 1 | 2 | 3
  /**
   * 法人番号指定年月日終了日
   */
  to?: string
  /**
   * 応答形式
   */
  type: '01' | '02' | '12'
}

export interface HoujinBangouClientOption {
  /**
   * アプリケーションID
   *
   * [アプリケーションID発行届出仮登録](https://www.invoice-kohyo.nta.go.jp/web-api/pre-reg)
   */
  applicationId: string
}
