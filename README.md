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

- `animation.tsx` ... ページ読み込み時のフェードアニメーションを制御する親コンポーネント
- `external-link.tsx` ... `next/link`の遷移先を新規タブにする際の設定をまとめたコンポーネント
- `link-card.tsx` ... リンクカードの枠組み部分
- `link-card-name.tsx` ... リンクカードの名前・ID部分
- `link-card-icon.tsx` ... リンクカードのアイコン部分
- `theme-toggle.tsx` ... ダークテーマ・ライトテーマの切り替えボタン
