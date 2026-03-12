# Google検索に表示されるための設定

お掃除ナビをGoogle検索結果に表示するための手順です。

---

## 1. 事前準備（必須）

### 1-1. サイトURLの設定

**Vercelの場合：**

1. [Vercel](https://vercel.com) → プロジェクト → **Settings** → **Environment Variables**
2. 以下を追加：

| 変数名 | 値 | 説明 |
|--------|-----|------|
| `PUBLIC_SITE_URL` | `https://あなたのサイト.vercel.app` | 本番の絶対URL |

※ カスタムドメインを使う場合はそのURLを設定

3. **Redeploy** で再デプロイ

### 1-2. 確認事項

デプロイ後、以下が正しく動作するか確認してください：

- **サイトマップ**: `https://あなたのサイト/sitemap-index.xml` にアクセスしてXMLが表示される
- **robots.txt**: `https://あなたのサイト/robots.txt` にアクセスしてSitemap行が含まれる

---

## 2. Google Search Console への登録

### 2-1. アカウント作成

1. [Google Search Console](https://search.google.com/search-console) にアクセス
2. Googleアカウントでログイン
3. 「プロパティを追加」をクリック

### 2-2. プロパティの追加

**URLプレフィックス**（推奨）を選択し、サイトのURLを入力：

```
https://あなたのサイト.vercel.app
```

### 2-3. 所有権の確認

以下のいずれかの方法で確認：

| 方法 | 手順 |
|------|------|
| **HTMLタグ** | 管理画面で表示されるmetaタグを `BaseLayout.astro` の `<head>` 内に追加 |
| **HTMLファイル** | 表示されるファイルをダウンロードし、`public/` に配置してデプロイ |
| **Google Analytics** | 既にGAを設置している場合、同じアカウントで確認可能 |
| **DNS** | カスタムドメインの場合、TXTレコードを追加 |

※ 静的サイトのため、**HTMLタグ**または**HTMLファイル**が簡単です。

### 2-4. サイトマップの送信

1. 左メニュー「サイトマップ」をクリック
2. 「新しいサイトマップの追加」に `sitemap-index.xml` と入力
3. 「送信」をクリック

数日〜数週間でインデックスが進み、検索結果に表示され始めます。

---

## 3. インデックス促進（任意）

### URL検査ツール

1. Search Console → 「URL検査」をクリック
2. インデックスさせたいページのURLを入力
3. 「インデックス登録をリクエスト」をクリック

重要なページ（トップ、人気記事など）を優先的に登録できます。

---

## 4. 本サイトで実施済みのSEO対策

- **サイトマップ**: ビルド時に自動生成（`/sitemap-index.xml`）
- **robots.txt**: クロール許可 + サイトマップ参照
- **canonical URL**: 各ページに正規URLを指定
- **meta description**: 各ページに説明文を設定
- **OGP（Open Graph）**: SNSシェア時のプレビュー用（`og:image` / `og:title` / `og:description`）
- **Twitterカード**: `summary_large_image`、タイトル・説明・画像を指定
- **パンくずリスト**: 全ページ（トップ以外）で表示。schema.org BreadcrumbList 対応
- **記事の構造化データ**: 記事ページに JSON-LD（Article）を出力

### OGP画像について

- デフォルトで `https://あなたのサイト/ogp.png` を参照します。
- **推奨**: `public/ogp.png` に 1200×630 ピクセルの画像を配置してください（SNSシェア時のプレビュー用）。
- 記事のフロントマターで `image: /images/xxx.jpg` を指定すると、その記事だけ別の OGP 画像を使えます。

---

## 5. トラブルシューティング

| 現象 | 対処 |
|------|------|
| サイトマップが404 | `PUBLIC_SITE_URL` が設定されているか確認。再デプロイ |
| インデックスされない | Search Consoleで「カバレッジ」を確認。エラーがあれば修正 |
| 検索に表示されるまで時間がかかる | 通常1〜4週間。サイトマップ送信後、定期的にクロールされる |
