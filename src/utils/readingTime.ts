// src/utils/readingTime.ts
// Calcul du temps de lecture base sur 230 mots/min (standard francais)

export function calculateReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 230));
}
