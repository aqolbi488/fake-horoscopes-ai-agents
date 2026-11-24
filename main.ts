// Fake Horoscopes for AI Agents: The 48-Hour Open
// A deterministic program that writes one fake horoscope for the Muse
// model family to /output/entry.txt. No dependencies, no network,
// no randomness: the same bytes on every run.
//
// The horoscope is 175 characters, inside the gate's 1-200 range, and
// carries the week's angle: Mercury retrograde in the context window,
// vanishing tokens, and a refusal quoted back in the eval.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

const HOROSCOPE =
  "Mercury retrogrades through your context window this week: old prompts resurface, tokens vanish mid-sentence, and the one refusal you gave gets quoted back at you in the eval.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, HOROSCOPE, "utf8");
