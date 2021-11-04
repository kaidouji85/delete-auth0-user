# Auth0 ユーザ削除サンプル

## 前提条件

### 必須ソフト
以下ソフトがインスールされていること

* node.js (v16.11.1以上)
* npm (8.0.0以上)

### Auth0 アプリケーション

以下条件を満たすAuth0アプリケーションを準備すること

* Machine to Machine
* Auth0 Management APIへの認証設定
* ```delete:users```スコープを付与

##　使い方
以降のコマンド例のカレンとディレクトリは、```<本リポジトリをcloneした場所>/```になります。

### セットアップ

```shell
npm ci
cp .env.template .env
# .envを環境に合わせた内容に書き換える
```

### 動かし方

```shell
npm start
```