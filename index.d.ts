/**
 * 法人番号システム Web-API クライアント
 * [API Document](https://www.houjin-bangou.nta.go.jp/webapi/)
 */
export class HoujinBangouClient {
  /**
   * 
   * @param options APIクライアントのオプション
   */
  constructor(options: HoujinBangouClientOption)

  findByCorporateNumberV4(corporateNumbers: string[]): Promise<Corporations>
  findByCorporateNumberV4Raw(corporateNumbers: string[]): Promise<unknown>
  findByTimeRangeV4(from: Date, to: Date): Promise<Corporations>
  findByTimeRangeV4Raw(from: string, to: string): Promise<unknown>
  findByNameV4(name: string): Promise<Corporations>
  findByNameV4Raw(name: string): Promise<unknown>
}

/**
 * 法人等要素
 */
export interface Corporation {
  /**
   * 国内所在地イメージID
   */
  addressImageId: string
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

export interface HoujinBangouClientOption {
  /**
   * アプリケーションID
   *
   * [アプリケーションID発行届出仮登録](https://www.invoice-kohyo.nta.go.jp/web-api/pre-reg)
   */
  applicationId: string
}
