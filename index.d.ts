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
}

export interface HoujinBangouClientOption {
  /**
   * アプリケーションID
   *
   * [アプリケーションID発行届出仮登録](https://www.invoice-kohyo.nta.go.jp/web-api/pre-reg)
   */
  applicationId: string
}
