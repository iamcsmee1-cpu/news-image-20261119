# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/iamcsmee1-cpu/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/iamcsmee1-cpu/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One image that sums up Thursday 19 November 2026's world news: a one-page newspaper front page, "The World in One Image". The lead story is the first-ever Trump–Xi–Putin trilateral at the APEC summit in Shenzhen; around it sit Voyager 1 reaching one light-day from Earth, the worldwide GTA VI launch, Hakeem Jeffries' nomination for US House Speaker, Anthropic's record $81bn IPO, the EU's €45bn Ukraine loan proposal, and the day's wars, protests and sport — every headline checked against that day's reporting before it was set in type.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only, no network) validates `entry.png` — a whole PNG, 1024×1024, under 1 MiB — and copies it byte-for-byte to `/output/entry.png` (or to `$MAKEFUN_OUTPUT_DIR/entry.png` outside the grader). Both runs write identical bytes.

## How the image was made

- `front-page.html` is the front page itself: hand-set HTML/CSS in a broadsheet layout, written for this entry.
- `render.mjs` renders it once, locally, to `entry.png` with headless Chromium at exactly 1024×1024 (`npm i playwright && node render.mjs`). The graded program never renders anything — it copies the finished PNG, so the judge sees exactly the bytes in this repository.
- The page was revised in several passes: stories were added, cut and re-ordered until the whole day fit one page with nothing clipped.

---

Entered on [make.fun](https://make.fun/?ref=41jxdg5n&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards
