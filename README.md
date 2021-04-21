# アプリ説明

Vue 学習用 TODO 管理アプリ


## 環境構築

### Node.js のインストール

フロントエンドの開発に使用します。

[公式サイト](https://nodejs.org/ja/)の案内に沿って、インストールしてください。

バージョンは 12 以降。

### JDK のインストール

バックエンドの開発に使用します。

JDK はいくつかありますが、ここでは、OpenJDK の 1 つである AdoptOpenJDK(ver 11)をインストールします。

[公式サイト](https://adoptopenjdk.net/)の案内に沿って、インストールしてください。

### Maven のインストール

バックエンドの構成管理に使用します。

[公式サイト](https://maven.apache.org/download.cgi)の案内に沿って、ダウンロードおよび配置してください。

### Docker(Docker Compose)のインストール

バックエンドで参照する DB コンテナ構築のために使用します。

[公式サイト](https://docs.docker.com/docker-for-windows/install/)の案内に沿って、インストールしてください。


## 動作確認

### DB コンテナの起動

PostgreSQL を Docker コンテナで起動するため、backend ディレクトリで次のコマンドを実行します。

```JavaScript
docker-compose -f docker/docker-compose.dev.yml up -d
```

次のコマンドを実行し、コンテナが起動していることを確認します。

```
docker-compose -f docker/docker-compose.dev.yml ps
      Name                     Command              State           Ports
----------------------------------------------------------------------------------
docker_postgres_1   docker-entrypoint.sh postgres   Up      0.0.0.0:5432->5432/tcp
```

なお、停止時のコマンドは以下の通りです。

```
docker-compose -f docker/docker-compose.dev.yml down
```

### バックエンドアプリの起動

バックエンドアプリを起動するため、backend ディレクトリで次のコマンドを実行します。

```
mvn jetty:run
```

### フロントエンドアプリの起動

フロントエンドアプリを起動するため、frontend ディレクトリで次のコマンドを実行します。

```
npm run serve
```

[http://localhost:8080/](http://localhost:8080/)にブラウザでアクセスすると、フロントエンドアプリが開かれます。
