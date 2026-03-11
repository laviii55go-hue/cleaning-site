# お掃除ナビ

お掃除の方法・豆知識をまとめた総合サイトです。

## 機能

- **場所で探す**：キッチン、浴室、リビングなど
- **汚れで探す**：油汚れ、水垢、カビなど
- **季節で探す**：春、夏、秋、冬、年末、GW
- **ブログ形式**：複数ページに分けた記事（1記事＝3ページ）
- **スマホ対応**：モバイルファーストデザイン
- **収益化**：広告・楽天アフィリエイト用プレースホルダー

## 開発

```bash
# 依存関係のインストール（初回のみ）
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm preview
```

## 記事の追加方法

1. `src/content/articles/` にMarkdownファイルを追加
2. 1記事＝3パートの構成で作成（`content-template.md` を参照）
3. フロントマターで `slug`、`part`、`totalParts` を正しく設定

## 技術スタック

- [Astro](https://astro.build/) - 静的サイトジェネレーター
- Markdown - コンテンツ管理
- TypeScript

## デプロイ（公開）

### Vercel（推奨）

1. [Vercel](https://vercel.com) でアカウント作成（GitHubでログイン可能）
2. ターミナルで以下を実行：

```bash
cd cleaning-site
npx vercel login    # 初回のみ：ブラウザでログイン
npx vercel          # デプロイ実行
```

3. 初回は質問に答える（すべてEnterでデフォルト可）
4. 完了後、表示されるURL（例：`https://cleaning-site-xxx.vercel.app`）でサイトが公開されます

### GitHub連携（自動デプロイ）

1. GitHubにリポジトリを作成し、コードをプッシュ
2. [Vercel](https://vercel.com) → 「Add New Project」→ GitHubリポジトリを選択
3. 設定は自動検出されるのでそのまま「Deploy」
4. 以降、mainブランチにプッシュするたびに自動で再デプロイされます

## 収益化について

- **Google AdSense**：環境変数で設定（`docs/MONETIZATION.md` 参照）
- **楽天アフィリエイト**：記事の `recommendedProducts` に商品を設定

詳細は [docs/MONETIZATION.md](docs/MONETIZATION.md) を参照してください。

## Google検索に表示する

- **サイトマップ**：ビルド時に自動生成
- **Google Search Console**：登録後、サイトマップを送信すると検索結果に表示されやすくなります

詳細は [docs/SEO.md](docs/SEO.md) を参照してください。
