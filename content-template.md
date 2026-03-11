# 記事テンプレート

新しい記事を追加する際は、以下のフォーマットに従って `src/content/articles/` にMarkdownファイルを作成してください。

## 1記事＝3パートの構成

1つの記事は3つのMarkdownファイルに分けて作成します。
- `記事スラッグ-1.md`（1ページ目）
- `記事スラッグ-2.md`（2ページ目）
- `記事スラッグ-3.md`（3ページ目）

## フロントマター（各ファイル共通で揃える項目）

```yaml
---
title: 記事のタイトル
description: 記事の説明（検索結果やSNSで表示される）
pubDate: 2025-03-01
part: 1          # 1, 2, 3 のいずれか
totalParts: 3    # 常に 3
slug: article-slug   # 同じ記事の3パートは同じslugを使用
place: kitchen   # 任意: kitchen, bathroom, living, bedroom, entrance, toilet
stain: oil       # 任意: oil, water-scale, mold, dust, stain
season: spring   # 任意: spring, summer, autumn, winter, year-end, gw
image: /images/xxx.jpg  # 任意: アイキャッチ画像
---
```

## カテゴリの値

### place（場所）
- `kitchen` - キッチン
- `bathroom` - 浴室
- `living` - リビング
- `bedroom` - 寝室
- `entrance` - 玄関
- `toilet` - トイレ

### stain（汚れ）
- `oil` - 油汚れ
- `water-scale` - 水垢
- `mold` - カビ
- `dust` - ホコリ
- `stain` - シミ・汚れ

### season（季節）
- `spring` - 春
- `summer` - 夏
- `autumn` - 秋
- `winter` - 冬
- `year-end` - 年末
- `gw` - GW

## 本文の書き方

- 見出しは `##`（h2）、`###`（h3）を使用
- リストは `-` または `1.` を使用
- パート1：導入・概要
- パート2：具体的な手順・方法（アフィリエイト「おすすめグッズ」が表示される）
- パート3：まとめ・豆知識（アフィリエイト「関連商品」と広告が表示される）

## 例

`kitchen-water-scale-1.md` の内容：

```markdown
---
title: キッチンの水垢を落とす方法
description: シンクや蛇口の水垢を効率的に落とす方法を解説します。
pubDate: 2025-03-15
part: 1
totalParts: 3
slug: kitchen-water-scale
place: kitchen
stain: water-scale
---

水垢は放置すると固まって落ちにくくなります。こまめな手入れがポイントです。

## 水垢がつきやすい場所

- シンク
- 蛇口
- 食器洗い機のドア

...
```
