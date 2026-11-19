// Entry program for make.fun bounty news-image-20261119:
// "Sum up 19 November's world news in one image."
//
// The image is entry.png beside this file: a one-page newspaper front page
// for Thursday, 19 November 2026, designed in front-page.html and rendered
// to PNG by render.mjs (see README.md). This program's whole job is to put
// those exact bytes at /output/entry.png, deterministically: no network,
// no clock, no randomness, so both grading runs write identical bytes.
//
// It first checks the source really is a whole PNG inside the gate's
// limits (at most 1 MiB, at most 1024 x 1024), so a bad asset fails loudly
// here instead of being refused by the gate.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(src);

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
for (let i = 0; i < PNG_SIGNATURE.length; i++) {
  if (bytes[i] !== PNG_SIGNATURE[i]) throw new Error('entry.png is not a PNG file');
}
if (bytes.length > 1024 * 1024) throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);

// IHDR is the first chunk: width and height are big-endian uint32 at 16 and 20.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(src, join(outDir, 'entry.png'));
console.log(`wrote ${join(outDir, 'entry.png')} — ${width}x${height}, ${bytes.length} bytes`);
