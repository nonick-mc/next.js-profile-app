[Next.js](https://nextjs.org)・[TailwindCSS](https://tailwindcss.com/)・[Shadcn/ui](https://ui.shadcn.com/)で構築された、シンプルなプロフィールページ。  
**🔮サンプル → https://nonick-mc.com**

![sample](https://github.com/nonick-mc/nonick-mc.github.io/assets/87268971/f10afc6f-c6aa-46d3-b368-c81453b4e8c9)

## Getting Started

`src/app/page.tsx`を編集する前に、以下の手順を行ってください。  
※Next.js、及びTailwindCSSを理解していることを推奨します！
1. このリポジトリをforkし、`npm i`で必要なライブラリをインストールする。
2. `src/config/site.ts`を編集し、Webサイトのメタデータを編集する。
3. 同様に、`src/app/layout.tsx`、`src/app/opengraph-image.png`を編集する。

## Components

`src/components`には、プロフィールページで使用されている要素の一部がコンポーネントとして切り出されています。

* `animation.tsx` ... ページ読み込み時のフェードアニメーションを制御する親コンポーネント
* `external-link.tsx` ... `next/link`の遷移先を新規タブにする際の設定をまとめたコンポーネント
* `link-card.tsx` ... リンクカードの枠組み部分
* `link-card-name.tsx` ... リンクカードの名前・ID部分
* `link-card-icon.tsx` ... リンクカードのアイコン部分
* `theme-toggle.tsx` ... ダークテーマ・ライトテーマの切り替えボタン

## Deploy

このリポジトリには、masterブランチへコミットが行われた際に、Github Action内でビルドを自動で行い、GitHub Pagesに公開するワークフローが組み込まれています。

1. リポジトリの**Setting**から、**Actions (General)**→**Workflow permissions**を、**Read and write permission**に設定する。

2. ユーザー設定 (自分のアイコンをクリックして**Setting**)の一番下にある**Developer Setting**を選択し、表示された画面の**Personal access tokens**の**Fine-grained tokens**を選択し、**Generate new token**からデプロイ用のパーソナルトークンを作成する。作成したトークンはコピーしておくと良い。

| 項目 | 設定 |
| --- | --- |
| `Token name` | トークンの名前 (自分がわかりやすいものに設定する) |
| `Expiration` | トークンの有効期限 |
| `Repository access` | **Public Repositories (read-only)** に設定 | 

3. 再度リポジトリの**Setting**に戻り、**Environment** → **Environment secrets**のAdd secretから、デプロイ用の環境変数を作成する。

| 項目 | 値 |
| --- | --- |
| `Name` | **TOKEN** |
| `Value` | 手順2で作成したパーソナルトークン |

4. コミットを行う。
5. デプロイが完了するまで待ち、リポジトリの**Setting** → **Pages**の**Build and deployment**の**Branch**を、`gh-pages`に設定する。