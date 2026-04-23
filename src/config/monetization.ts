/**
 * 収益化設定
 * 環境変数で有効化・IDを設定してください
 */

// Google AdSense
const adsenseEnabled = String(import.meta.env.PUBLIC_ADSENSE_ENABLED ?? '').trim().toLowerCase();
const adsenseClientId = String(import.meta.env.PUBLIC_ADSENSE_CLIENT ?? '').trim();

export const adsense = {
  enabled: adsenseEnabled === 'true',
  clientId: adsenseClientId,
  slots: {
    small: import.meta.env.PUBLIC_ADSENSE_SLOT_SMALL ?? '',
    medium: import.meta.env.PUBLIC_ADSENSE_SLOT_MEDIUM ?? '',
    banner: import.meta.env.PUBLIC_ADSENSE_SLOT_BANNER ?? '',
  },
};

// 楽天アフィリエイト
// Vercel Hobby プラン 商用利用NG規約（Fair Use Guidelines）対応のため無効化（2026/04/23）
// 環境変数 PUBLIC_RAKUTEN_AFFILIATE_ID の値を無視して空文字を強制する
// → RakutenWidget.astro の showWidget=false で全ページ・全記事の楽天が非表示
// 収益化見込みが立った段階で Vercel Pro 切替＋下記コメントアウト行の復活
// const rakutenAffiliateId = String(import.meta.env.PUBLIC_RAKUTEN_AFFILIATE_ID ?? '').trim();
const rakutenAffiliateId = '';

export const affiliate = {
  disclosureRequired: true,
  // 楽天ウィジェット用アフィリエイトID
  rakutenId: rakutenAffiliateId,
};
