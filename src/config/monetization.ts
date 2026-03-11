/**
 * 収益化設定
 * 環境変数で有効化・IDを設定してください
 */

// Google AdSense
export const adsense = {
  enabled: import.meta.env.PUBLIC_ADSENSE_ENABLED === 'true',
  clientId: import.meta.env.PUBLIC_ADSENSE_CLIENT ?? '',
  slots: {
    small: import.meta.env.PUBLIC_ADSENSE_SLOT_SMALL ?? '',
    medium: import.meta.env.PUBLIC_ADSENSE_SLOT_MEDIUM ?? '',
    banner: import.meta.env.PUBLIC_ADSENSE_SLOT_BANNER ?? '',
  },
};

// 楽天アフィリエイト（記事のrecommendedProductsで個別設定、ここは共通設定用）
export const affiliate = {
  // 楽天アフィリエイトの規約表示が必要な場合
  disclosureRequired: true,
};
