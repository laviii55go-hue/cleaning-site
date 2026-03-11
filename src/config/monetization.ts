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
const rakutenAffiliateId = String(import.meta.env.PUBLIC_RAKUTEN_AFFILIATE_ID ?? '').trim();

export const affiliate = {
  disclosureRequired: true,
  // 楽天ウィジェット用アフィリエイトID
  rakutenId: rakutenAffiliateId,
};
