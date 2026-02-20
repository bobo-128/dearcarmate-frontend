export const getCarTypeByModel = (modelName: string): '세단' | 'SUV' | '경차' => {
  const modelLower = modelName.toLowerCase();

  // 1. SUV 판별
  const suvModels = ["투싼", "산타페", "싼타페", "팰리세이드", "코나", "스포티지", "쏘렌토", "카니발", "셀토스", "gv60", "gv70", "gv80", "model y", "model x"];
  if (suvModels.some(m => modelLower.includes(m.toLowerCase()))) {
    return 'SUV';
  }

  // 2. 경차 판별
  const compactModels = ["캐스퍼", "레이"];
  if (compactModels.some(m => modelLower.includes(m.toLowerCase()))) {
    return '경차';
  }

  // 3. 나머지는 세단으로 처리 (아반떼, K시리즈, G시리즈 등)
  return '세단';
};