import { readFileSync } from "node:fs";

const words = JSON.parse(readFileSync(new URL("../src/data/hsk1.json", import.meta.url), "utf8"));
const characters = new Set(words.flatMap(({ word }) => [...word]));

if (words.length !== 150) throw new Error(`Expected 150 HSK 1 words, found ${words.length}.`);
if (new Set(words.map(({ word }) => word)).size !== 150) throw new Error("HSK 1 words must be unique.");
if (characters.size !== 178) throw new Error(`Expected 178 distinct characters, found ${characters.size}.`);

for (const entry of words) {
  if (entry.word.length !== entry.syllables.length || entry.word.length !== entry.tones.length) {
    throw new Error(`Character, pinyin, and tone counts do not match for ${entry.word}.`);
  }
  if (entry.tones.some((tone) => ![1, 2, 3, 4, 5].includes(tone))) {
    throw new Error(`Invalid tone in ${entry.word}.`);
  }
}

console.log(`Validated ${words.length} words and ${characters.size} distinct characters.`);
