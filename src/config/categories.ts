/**
 * カテゴリ（場所・汚れ・季節）のID・日本語名・リンク先
 */

export const places = [
  { id: 'kitchen', name: 'キッチン', icon: '🍳' },
  { id: 'bathroom', name: '浴室', icon: '🛁' },
  { id: 'living', name: 'リビング', icon: '🛋️' },
  { id: 'bedroom', name: '寝室', icon: '🛏️' },
  { id: 'entrance', name: '玄関', icon: '🚪' },
  { id: 'toilet', name: 'トイレ', icon: '🚽' },
] as const;

export const stains = [
  { id: 'oil', name: '油汚れ', icon: '🛢️' },
  { id: 'water-scale', name: '水垢', icon: '💧' },
  { id: 'mold', name: 'カビ', icon: '🦠' },
  { id: 'dust', name: 'ホコリ', icon: '🌫️' },
  { id: 'stain', name: 'シミ・汚れ', icon: '🧴' },
] as const;

export const seasons = [
  { id: 'spring', name: '春', icon: '🌸' },
  { id: 'summer', name: '夏', icon: '☀️' },
  { id: 'autumn', name: '秋', icon: '🍂' },
  { id: 'winter', name: '冬', icon: '❄️' },
  { id: 'year-end', name: '年末', icon: '🎍' },
  { id: 'gw', name: 'GW', icon: '🌿' },
] as const;

export function getPlaceInfo(id: string) {
  return places.find((p) => p.id === id);
}

export function getStainInfo(id: string) {
  return stains.find((s) => s.id === id);
}

export function getSeasonInfo(id: string) {
  return seasons.find((s) => s.id === id);
}

export function getPlaceUrl(id: string) {
  return `/place/#${id}`;
}

export function getStainUrl(id: string) {
  return `/stain/#${id}`;
}

export function getSeasonUrl(id: string) {
  return `/season/#${id}`;
}
