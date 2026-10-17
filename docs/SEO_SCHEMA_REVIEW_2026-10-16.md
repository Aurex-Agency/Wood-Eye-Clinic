# SEO and schema review, 2026-10-16

Removed unsupported Optometric medicalSpecialty, typed North Mississippi as Place, and escaped less-than characters in inline JSON-LD. Retained explicit historical redirects; unknown .html URLs now return 404 instead of an unrelated homepage redirect.

Based on the verified Vercel production source `claude/wood-eye-clinic-seo-audit-qb3ew0` at `1b8aa2e0a85b`. Reviewed existing SEO work before making this focused follow-up.

Validation: Next.js production build; rendered schema validation; local legacy redirect/404 checks. The built-page validator parsed 52 JSON-LD blocks across 40 HTML files using the official Schema.org vocabulary and found no issues in the implemented checks. Representative homepage checks at desktop and mobile widths found no horizontal overflow, with primary conversion paths present. No production lead was submitted.

Remaining dependencies: Clinical changes and credentials require clinician review. Existing open PR #7 targets main and must be reconciled with the actual production branch before a broader release.

This PR is independently reviewable. After release, recrawl production and recheck Search Console; local validation does not guarantee Google indexing or rich-result display.

Also redirect confirmed legacy /frames and /sunglasses 404s to the matching eyewear and sunglasses services. The source URLs returned 404 in a live check on 2026-10-16; all replacement destinations returned 200.
