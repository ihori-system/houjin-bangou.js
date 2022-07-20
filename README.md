houjin-bangou.js
===

法人番号システム Web-API クライアント

[![CI](https://github.com/ihori-system/houjin-bangou.js/actions/workflows/ci.yml/badge.svg)](https://github.com/ihori-system/houjin-bangou.js/actions/workflows/ci.yml)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Getting started

#### 1) GitHub Packages の設定を行う（GitHub Packagesを使うのが初めての場合）

##### 1.1) Personal access token を発行する

参考：https://github.com/settings/tokens

##### 1.2) 各.npmrc ファイルへ以下を追記する

`~/.npmrc`:

```
//npm.pkg.github.com/:_authToken={{手順1.1で発行したアクセストークン}}
```

`{{package.jsonが配置されているディレクトリ}}/.npmrc`:

```
@ihori-system:registry=https://npm.pkg.github.com
```

#### 2) アプリケーションID発行届出を行い、APIトークンを取得する

参考：https://www.invoice-kohyo.nta.go.jp/web-api/pre-reg

#### 3) ライブラリをインストールする

```
$ npm install @ihori-system/houjin-bangou
```

## API ドキュメント

https://ihori-system.github.io/houjin-bangou.js/

## References
- [法人番号システム Web-API](https://www.houjin-bangou.nta.go.jp/webapi/)
- [Web-API のリクエストの設定方法及び提供データの内容について（概要編）](https://www.houjin-bangou.nta.go.jp/documents/k-web-api-kinou-gaiyo.pdf)
- [リソース定義書（ダウンロードファイル、Web-API）](https://www.houjin-bangou.nta.go.jp/documents/k-resource-dl.pdf)
