# GitHub連携の手順

## 1. GitHubでリポジトリを作成

1. ブラウザで **https://github.com/new** を開く
2. 以下を設定：
   - **Repository name**: `cleaning-site`
   - **Description**: お掃除の方法・豆知識をまとめた総合サイト
   - **Public** を選択
   - ⚠️ **「Add a README file」にチェックを入れない**（既にローカルにあるため）
3. 「Create repository」をクリック

## 2. リモートを追加してプッシュ

GitHubのユーザー名を `YOUR_USERNAME` に置き換えて実行：

```bash
cd c:\Claude_09\cleaning-site
git remote add origin https://github.com/YOUR_USERNAME/cleaning-site.git
git push -u origin main
```

例：ユーザー名が `lavii` の場合
```bash
git remote add origin https://github.com/lavii/cleaning-site.git
git push -u origin main
```

## 3. VercelでGitHub連携

1. **https://vercel.com** にログイン
2. プロジェクト **cleaning-site** を開く
3. **Settings** → **Git** を開く
4. 「Connect Git Repository」で GitHub の `cleaning-site` を選択
5. 連携後、**main ブランチへのプッシュ**で自動デプロイされます

---

## 今後の運用

- 記事を追加・更新したら：
  ```bash
  git add .
  git commit -m "記事を追加"
  git push
  ```
- プッシュすると自動でVercelが再デプロイします
