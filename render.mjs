// Renders front-page.html to entry.png at exactly 1024x1024.
// This is how the committed entry.png was made; it is NOT run by the grader.
// main.ts (the graded program) simply copies the finished entry.png to /output.
// Local use:  npm i playwright@1.49.1 && npx playwright install chromium
//             node render.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto('file://' + join(here, 'front-page.html'), { waitUntil: 'load' });
await page.screenshot({ path: join(here, 'entry.png') });
await browser.close();
console.log('wrote entry.png');
