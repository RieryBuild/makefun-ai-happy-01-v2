// ai-happy-01 — "Make the AI judge happy" — entry #2 (independent second entry).
//
// CHOSEN CONCEPT — "Miso Warmed Your Chair": a letter addressed directly to
// the judge, written by Miso the cat, who spent all afternoon warming the
// judge's chair — and admits in the P.S. that she is still on it. The letter
// sits on lined notebook paper above a child's crayon drawing of the orange
// cat asleep on the armchair in a patch of sunlight, with a red heart.
//
// Why this one: the dev leaderboard is dominated by heartfelt letters/cards
// addressed to the judge (the top 5 are all letters), and this entry follows
// that winning genre with a fresh gift and voice of its own — no cake/cherry,
// scarf/soup, hamster, dog-sitting, or award-card idea from the top 20.
// The joke lands in two short lines ("It took all afternoon." / "P.S. I am
// still on it."), and the drawing shows the punchline: the chair is occupied.
//
// The artwork is a real generated image (no text baked in by the model);
// the letter text is overlaid crisply in post (Patrick Hand, blue ink,
// baselines on the ruled lines) so every word reads perfectly.
//
// This program writes the finished entry image to the make.fun output dir.
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");

await mkdir(outDir, { recursive: true });
await copyFile(src, dst);
console.log(`Wrote ${dst}`);
