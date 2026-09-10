# QUQN website — v2

Static, bilingual, GitHub-Pages-ready site for **QUQN — Small Coq. Big Dreams.**

## What changed in v2

- QUQN name used consistently everywhere.
- Fair-mint facts are now central to the homepage: **no presale, no ICO, no fundraising, no creator mint fee, no personal data in exchange for tokens, no promised listing**.
- The legal page now explains the relevance of MiCA Article 4(3)(a) and Article 4(4) without claiming a guaranteed exemption.
- Homepage is English-first with French toggle.
- 28 existing QUQN visuals are included in an optimized WebP gallery.
- Six community ranks are configured: 1k / 10k / 50k / 100k / 500k / 1M.
- Manager supports copy, stats, social links, hero selection, gallery visibility and secure image upload.
- Live stats can be pulled from UniSat through the Worker without exposing the UniSat API key.

## Token facts configured

- Ticker: **QUQN**
- Network: Bitcoin mainnet
- Protocol: BRC-20
- Max supply: 21,000,000
- Mint limit: 1,000
- Fallback minted: 90,000
- Fallback holders: 1
- Fallback transactions: 91
- UniScan: https://uniscan.cc/brc20/QUQN
- Deployment: 2026-09-07 17:37:46
- Inscription number: #127329518

## Publish on GitHub Pages

1. Create a public GitHub repository, e.g. `quqn`.
2. Upload the **contents** of this folder to the repository root.
3. GitHub → Repository **Settings → Pages**.
4. Build and deployment → **Deploy from a branch** → `main` / root.
5. The site works without a custom domain.

## Secure PIN manager

A PIN stored only in browser JavaScript is not security. GitHub Pages is static, so `manager.html` uses a tiny Cloudflare Worker as the secure bridge.

Daily workflow once configured:

1. Open `/manager.html`.
2. Enter your 12-character PIN.
3. Edit the site.
4. Click **Save & publish**.

No GitHub login is needed for daily edits. The GitHub token and PIN remain Worker secrets.

### Worker setup

Deploy `worker/worker.js` as a Cloudflare Worker. Use `worker/wrangler.toml.example` as the variable template.

Variables:

- `GITHUB_OWNER`
- `GITHUB_REPO`
- `GITHUB_BRANCH=main`
- `ALLOWED_ORIGIN` = exact GitHub Pages origin, for example `https://username.github.io`

Secrets:

- `ADMIN_PIN` — exactly 12 random characters. Do not commit it and do not send it in chat.
- `SESSION_SECRET` — 32+ random characters.
- `GITHUB_TOKEN` — fine-grained token restricted to the QUQN repository with **Contents: Read and write**.
- `UNISAT_API_TOKEN` — UniSat Open API token.

Then edit `assets/config.json` and set:

```json
"apiBase": "https://YOUR-WORKER.workers.dev"
```

### Manager capabilities

- change fallback mint / holder / transaction figures;
- enable or disable live UniSat sync;
- update English/French announcement;
- update hero and story copy;
- add X and Telegram links;
- change the hero visual;
- show/hide gallery images;
- upload a new image from a phone or computer (client-side resized to max 1600 px, converted to WebP, then securely committed to GitHub);
- download `config.json` as a manual backup.

## Live QUQN stats

Public site → Worker `/api/token` → official UniSat Open API:

`GET https://open-api.unisat.io/v1/indexer/brc20/QUQN/info`

The Worker returns public fields only. The UniSat API key never reaches the browser. If sync fails, the site automatically uses fallback values in `assets/config.json`.

## Mint buttons

The site does **not** process a mint or connect a wallet. It links to:

- QUQN on UniScan: `https://uniscan.cc/brc20/QUQN`
- UniSat BRC-20 inscription interface: `https://unisat.io/inscribe/brc20`

UniScan's QUQN page can be used to verify the ticker and access its Mint action. Never replace these links with a payment address controlled by the project if you intend to keep the current fair-mint model.

## Fair-mint / MiCA design constraint

The website is written around the current factual model:

- no presale;
- no ICO;
- no primary sale by QUQN;
- no fundraising;
- no fees/commission received by QUQN from prospective holders in exchange for tokens;
- no personal data required by QUQN in exchange for tokens;
- no announced intention by QUQN to seek admission to trading;
- no promised market, liquidity or profit.

MiCA Article 4(3)(a) says Title II does not apply to an offer where the crypto-asset is offered for free, while defining situations in which an offer is *not* considered free. Article 4(4) limits exemptions where an intention to seek admission to trading is made known. **This repository does not claim or prove that a regulator has determined QUQN to be exempt.** If the mechanics change, review the legal text before promoting the change.

Official references are linked inside `legal.html`.

## Before launch

Recommended next steps:

1. Create official **X** and **Telegram** accounts.
2. Add those URLs in Manager.
3. Deploy the Cloudflare Worker and enable live stats.
4. Test every external mint/verification link on mobile.
5. Keep the factual fair-mint statements accurate over time.
6. If you later add creator fees, paid allocations, rewards, NFTs, a requested exchange listing, wallet collection or personal-data collection, pause and reassess the legal/technical setup first.
