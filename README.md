# Website Artifacts

This folder is the publishable static website root for App Review support/legal
URLs. Old landing-page drafts with outdated trial, pricing, or sales-copy
experiments were removed from the website tree so they cannot be published by
accident.

| File | Status |
|---|---|
| `index.html` | Minimal publishable root page with links to Support, Privacy, and Terms. |
| `privacy/index.html` | Current hosted Privacy page. Keep aligned with in-app Privacy copy. |
| `terms/index.html` | Current hosted Terms page. Keep aligned with in-app Terms copy. |
| `help/index.html` | Current hosted Help & Support page for App Store Support URL. |
| `.well-known/apple-app-site-association` | Production AASA for `applinks:eloquentum.com` and `webcredentials:eloquentum.com`. |

Do not add website drafts to this publish root unless each page has been
reviewed against current App Store pricing, trial, legal, and IAP rules.

## Apple Review Publication Checklist

Before submitting to App Review, publish this folder so the following URLs return HTTP 200 without authentication:

- `https://eloquentum.com/privacy`
- `https://eloquentum.com/terms`
- `https://eloquentum.com/help`
- `https://eloquentum.com/.well-known/apple-app-site-association`

The AASA file must be served with `Content-Type: application/json`, no redirect, no `.json` extension, and the exact path above. After publishing, verify with:

```bash
curl -I https://eloquentum.com/privacy
curl -I https://eloquentum.com/terms
curl -I https://eloquentum.com/help
curl -I https://eloquentum.com/.well-known/apple-app-site-association
```
