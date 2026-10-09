// O retry do provedor pode trazer espaço nas pontas ou caractere invisível (\p{Cf}, ex.: U+200B).
export function normalizeKey(key: string): string {
  return key.replace(/\p{Cf}/gu, "").trim().toLowerCase();
}
