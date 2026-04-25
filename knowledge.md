# Flow — Reference

Flow is a free, open-source, offline-first personal-finance tracker for iOS and Android. No sign-up, no subscription, no ads. All transaction data lives on the device; the only network calls are for fetching exchange rates and (optionally) iCloud sync or the Eny integration.

This document is a feature-by-feature reference of how the app actually behaves. It mirrors the public `/guide` articles and is intended for both human contributors and AI agents reasoning about Flow.

---

## Accounts and currencies

An **account** in Flow represents a real-world container of money — a bank account, a wallet, a credit card, a savings jar, even someone who owes you money. Every transaction belongs to exactly one account.

### Account types

Flow supports six account types (exact labels):

- **Checking** — a regular bank or wallet balance you spend down. The default.
- **Savings** — a balance you mostly grow.
- **Credit (e.g., card)** — a credit card or other credit line.
- **Loan** — money you owe or are owed.
- **Asset** — a non-liquid store of value, like an investment account.
- **Other** — anything that doesn't fit the above.

The type is editable any time and influences whether the account is rolled into the home-screen total, how the running balance is displayed, and how debt vs. assets are colored in reports.

### Creating an account

Path: **Accounts tab → its own + button.** (The bottom FAB is exclusively for new transactions and never creates accounts.)

The new-account form takes a name, a wallet icon, an **Update balance** action to set today's balance, a currency, an account type, and an optional color. Save with the **✓** at the top right.

### There is no "current balance" field

An account's balance is the **running sum of every transaction in that account** — Flow doesn't store a separate balance number anywhere, so there's nothing to drift out of sync.

This is why **Update balance** doesn't overwrite a field. The user enters what the balance *should* be; Flow computes the difference between that target and the current sum and inserts a single income or expense transaction for the delta on a chosen date. The same mechanism is used both at account-creation time and to re-sync after real-life drift (forgotten ATM withdrawals, fees, rounding).

### Multi-currency

Each account holds **one** currency. Multiple currencies = multiple accounts. Transactions are stored in their account's native currency and converted to the user's primary currency on the fly for reports.

### Exclude from balance / archive

- **Exclude from balance** toggle on the edit page keeps an account out of the home-screen total — useful for shared, business, or test accounts.
- **Archive** an account when it's closed in real life (transfer the remainder out first). Archived accounts hide from picker lists but keep history intact for reports.

### Transfers

Moving money between two of the user's own accounts is a **transfer**, not an expense. Flow has a dedicated transaction type for this so transfers don't pollute spending reports.

---

## Categories and tags

Two complementary ways to label a transaction:

- **Category** — at most one per transaction, optional. Categories are the backbone of reports ("Groceries", "Rent", "Coffee", "Salary").
- **Tag** — zero, one, or many per transaction. Free-form labels for context. **No `#` prefix** — type plain text.

Rule of thumb: if it should be a slice in a spending pie chart, it's a category; if it answers "show me everything related to X", it's a tag.

### Creating a category

Path: **Profile tab → Categories → +**. Form takes an icon, a category name, and a color. Save with **✓** at the top right.

Practical advice: start with 8–12 broad buckets, split only when one gets uncomfortably large in reports.

### Three tag types

- **Regular tag** — a free-form label (default). Examples: *trip tokyo*, *reimbursable*, *gift*, *kid*, *partner*.
- **Contact tag** — a person. Useful for "who did I split this with" or "who owes me money".
- **Location tag** — a place. Suggested by **proximity** when recording a transaction near a previously-used place.

Proximity suggestions for location tags require geolocation to be turned on at **Profile → Preferences → Transaction location** (and the Flow location permission). Without that, location tags still work — they just don't get proximity-based suggestions.

### Renaming and merging

Editing a category or tag updates every transaction that uses it instantly. There's no native merge — to merge two tags, edit each transaction with the old tag, swap it for the new one, then delete the old tag.

---

## Transactions

### The three types

- **Expense** — money leaving an account; decreases the balance.
- **Income** — money entering an account; increases the balance.
- **Transfer** — money moving between two of the user's accounts; counts as neither spending nor earning.

### Recording an expense

1. Tap the bottom **+** FAB (transactions only — nothing else uses it).
2. Pick **Expense** from the type chip at the top (the default).
3. Type the amount on the numpad. A calculator icon enables arithmetic.
4. Tap the numpad **✓** to commit the amount. Dismissing the numpad without ✓ **discards** whatever was typed (always — not a special new-transaction case).
5. Optionally type a title in the **Untitled transaction** field above.
6. Tap the **Account** row to switch accounts; category and tag rows are immediately below.
7. Tap **✓** at the top right to save.

### Customizing the entry flow

The order and presence of the steps Flow walks the user through is configurable at **Profile → Preferences → Transaction Entry**. Steps can be added, removed, and reordered.

### Income

Identical flow with the **Income** type chip. Income transactions show in green and roll up separately from expenses in reports.

### Transfers

Pick the **Transfer** type, then **From** and **To** accounts and an amount. For cross-currency transfers, Flow asks for the converted amount on each side rather than computing from a rate — so the recorded amounts match exactly what the bank moved, even if the bank used a worse-than-market rate.

### Editing and deleting

Tap any transaction in the list to open it; tap any field to edit. The edit page has a **Delete** at the bottom; deleted transactions go to a trash bin where they can be restored or purged.

### Title vs. note

- **Title** is short and shows in the transaction list (e.g. "Coffee at Tim Hortons").
- **Note** is hidden until the transaction is opened — use it for the long stuff (e.g. "Split with Alex, they owe me 12,000").

### Backdating and future-dating

- **Backdating** simply sets the date and re-sorts the entry. Nothing else changes.
- **Future-dating** is treated specially. As soon as a future date is picked, Flow **silently auto-toggles** the transaction to Pending so it doesn't inflate today's balance. The Pending toggle on the edit page reflects this change. Turning Pending off manually marks the entry **Pre-approved** — the home-list tile shows that literal "Pre-approved" label and the entry auto-confirms when its date arrives.

### Speed tips

- **Swipe-right to duplicate** — swipe a transaction left-to-right in the list; a gray slide-action panel reveals a copy icon. (Long-press doesn't do this.)
- For anything recorded more than twice a month, set up a **recurring transaction** instead.
- For Apple Pay charges, use the **iOS Shortcuts** integration.

### Swipe gestures across the app

Most list rows in Flow — transactions, presets, accounts, pending — use the same pattern: swipe in one direction for the primary action, the other for the secondary. Per-row actions are pre-configured (not user-customizable), but the gesture pattern is consistent.

---

## Attachments

Every transaction can hold one or more files. Receipts are the obvious use; the same feature works for invoices, contracts, screenshots of confirmation pages.

### Adding

Open the transaction → scroll to the **Attachments** section → tap **+ Add** → choose **Camera**, **Photo Library**, or **Files**. The file is copied into Flow's app storage when attached (originals on the camera roll or Files app are untouched).

### Viewing and sharing

Tap an attached file to view full-screen. From there: share, save back to the system Files app, or delete the attachment. Deleting an attachment doesn't delete the transaction.

### Storage

Attachments are stored locally and are **part of every backup — manual or iCloud — until deleted**. There is no compression preference.

---

## Recurring transactions

Recurrence isn't a separate screen; it's a **section on the transaction itself**. Open or create a transaction, scroll past the basic fields, find the **Recurrence** section, and tap **Recurrence setup** to open the schedule editor. The transaction becomes the template Flow uses to generate copies.

### Schedule presets

- Every day
- Every week
- Every 2 weeks
- Every month
- Every year

### End modes

- **Never** — runs forever (until turned off).
- **On a date** — stops after that date.
- **After N occurrences** — Flow shows the total it'll generate.

### How generation works

Flow doesn't pre-generate every future occurrence. On app open, it walks the rule forward and creates transactions **up through today, plus exactly one occurrence in the future** — regardless of how far behind the rule is. So at any moment a rule has at most one future-dated row visible.

The next future occurrence is generated only after the current future one's date passes. Catch-up after a long absence: every missed occurrence is back-dated to the right day on the next launch, plus one fresh look-ahead.

### Pending vs. auto-confirm

Whether generated occurrences land as pending or auto-confirm is controlled by **Profile → Preferences → Pending transactions → Require confirmation**.

### Editing and stopping

- Editing a recurring template changes **future** occurrences only; past generations keep their original values, so a rent increase doesn't silently rewrite the past.
- Stop a rule by setting its end date to today/the past, removing the recurrence from the transaction, or deleting the source transaction (past generations are kept; no new ones run).

### Recurring transfers

Transfers can recur too — useful for automatic monthly savings deposits.

---

## Pending transactions

A pending transaction is a real transaction record that's been created but isn't yet counted toward balances or totals. It's waiting for confirmation.

### How they appear on the home feed

- All pending transactions are gathered into a single **Pending** group at the top of the feed, regardless of date — they are *not* sub-grouped by today / tomorrow / next week.
- Pending transactions explicitly approved ahead of time show a **Pre-approved** label inside the list tile and auto-confirm when their date arrives.

### Two situations that create pending

1. A recurring rule generates a future-dated occurrence and **Require confirmation** is on.
2. The user sets a future date when creating or editing a transaction. Flow auto-toggles Pending on so it can't silently inflate today's balance.

### Approving

When a pending transaction is in the past or close to due, a **Confirm** button appears under its list tile. Tap it to promote the transaction to a regular one — it then affects balances immediately. Pending list tiles also support the standard swipe gestures (duplicate, delete).

### Settings

Path: **Profile → Preferences → Pending transactions**.

- **Require confirmation** — when on, future recurring occurrences land as pending; when off, they auto-confirm.
- **Update date upon confirmation** — when on, confirming uses today's date as the transaction date instead of the originally scheduled date.
- **Notifications** — get reminded before a pending transaction comes due. Pick how early: 5 minutes to a week ahead.
- **Home feed window** — how many days into the future Flow shows pending on the home feed.

### If ignored

Pending transactions don't expire and don't auto-confirm just because their date passed. They pile up until confirmed, and don't affect balances in the meantime.

---

## Stats (Reports)

The **Stats** tab is Flow's report room. Everything is computed locally from transactions — no server, no delay.

### What's on the screen

- A period header with **‹ ›** arrows for stepping back / forward through periods.
- A granularity row: **By month / More options**. The full set of modes is **By week**, **By month**, **By year**, and **Custom** (user-picked start/end dates).
- A **headline total** for the period, with a delta vs. the previous period.
- A **trend chart**: current period overlaid on the previous period for comparison.
- **Averages, by day** — Expense and Income cards summarizing the period's daily mean. Transfers are excluded from both by design.

### Drill-down

Tap a point on the trend chart, or one of the average cards, to see:

- Just the transactions that contributed.
- A sub-breakdown by category or account.

From there, tap any individual transaction to inspect or edit it.

### Time only — no other filters

The Stats tab has only a **time-period control**. It does not respect the home feed's active filter. Filters are home-only (see below).

### Currency in reports

Reports are always rendered in the user's primary currency, converted at the latest cached exchange rate. The Stats tab shows the rate date at the bottom. Without internet, Flow uses the most recent rates it cached. Drilling down to the transaction list shows individual transactions in their native currency.

---

## Filters and presets (home feed)

Filters apply to the **home feed only**. The Stats tab is unaffected.

### The filter row

The chips at the top of the home tab — **Search**, **This month**, **Attachments**, etc. — are individual filters. Tap any to refine the list.

On the leftmost side of that row is a **funnel icon** with a number next to it (0 when nothing's filtered, otherwise the active-filter count). Tapping it opens the **filter presets sheet** — saved combinations plus the default.

### Saving a preset

Saving works a little differently from "save current settings":

1. Close the presets sheet if open.
2. Adjust the chips so the active filter is *different* from the default preset.
3. Open the funnel sheet again — at the bottom, **Save as new** appears (only when current filters differ from the default). Tap and name.

### Editing and deleting

Presets aren't editable in place — to change one, create a new preset and delete the old. Both actions live behind swipe gestures on a preset row:

- **Swipe left** — delete.
- **Swipe right** — set as the default.

---

## Backup and restore

Path: **Profile → Backup**, lands on a screen titled **Export** — a stack of cards, one per format.

### Formats

- **As CSV** — read-only spreadsheet dump. The card itself says: *"Cannot be used for restore/import! Ideal for opening in software like Google Sheets."*
- **As backup (zip)** — full safety net (JSON + attached files). Use this for moving devices.
- **As backup (json)** — essential data only, no images or attached files. Restorable.
- **Statements (PDF)** — a printable statement view, not an official statement and not restorable. Useful for sharing with an accountant.
- **Backup history** — a list of past exports with timestamps for re-sharing or comparison.

CSV and PDF are one-way: only ZIP or JSON will bring data back, and only ZIP preserves attachments. (For an importable CSV, see **Get CSV template** under Import.)

### Exporting

**Profile → Backup**, pick a format, the system share sheet appears — save the file somewhere durable (iCloud Drive, Google Drive, AirDrop, email).

### Restoring

1. Install Flow on the device.
2. Go to **Profile → Import**.
3. Tap **Select a file** and pick the ZIP or JSON. Flow auto-detects format.
4. Confirm. **Restoring replaces the current data.**

There is no deduplicating merge — restore is destructive on purpose.

### How often

If iCloud auto-backup is enabled, Flow handles it. Otherwise: any time before switching phones, reinstalling, or experimenting with risky imports. A monthly manual ZIP export to a cloud drive is a sensible floor.

---

## Import

Path: **Profile → Import**.

The screen has one big **Select a file** card and an **Other options** section underneath.

- **Select a file** (ZIP / JSON / CSV) — Flow auto-detects which of the three. ZIP and JSON are full backups produced by another Flow install; CSV is Flow's own shape.
- **Ivy Wallet (CSV)** — dedicated path for migrating from Ivy Wallet (different column shape).
- **Get CSV template** — saves an empty CSV with the columns Flow expects. Fill it in (in a spreadsheet app or by script), then bring it back via **Select a file**.

### Replace, not merge

Importing a ZIP or JSON **replaces** the current data. Back up first if a rollback might be needed.

### Moving between devices

ZIP carries accounts, categories, tags, transactions, recurring rules, and attachments. CSV does not.

### Schema versioning

Older JSON exports are supported indefinitely — schema versioning is in place.

### Common failure causes

- Wrong file format — Flow only accepts ZIP, JSON, or its own CSV shape.
- CSV columns don't match the template — easiest fix is to re-export the template and copy data into it.

---

## iCloud auto-backup (iOS / macOS)

Auto-backup uses Apple's iCloud Drive APIs and is available on iPhone, iPad, and Mac. Android users use a manual export to their cloud storage of choice.

### What gets uploaded

The same full-backup ZIP from the Backup screen — every transaction, account, category, tag, and attachment, in one file. Each backup is stamped with the date and Flow version that created it.

### Setup

1. Make sure iCloud Drive is on (Settings → your name → iCloud), and that **Flow** is enabled in the apps list.
2. Open **Profile → Preferences → Sync**. Three controls:
   - **Backup interval** — chips: *Disable, 12 hours, a day, 2 days, 3 days, 7 days, 14 days, 30 days*. Backups are created automatically on app open if the interval has elapsed.
   - **Sync to iCloud** — toggle that pushes backups up to iCloud Drive.
   - **Number of backups to keep** — chips: *3, 5, 10, 20, 30, 100, Infinite*. Older backups beyond that count are deleted at startup.
3. Verify: Files app → iCloud Drive → Flow shows timestamped ZIPs. The Sync page also shows the last successful sync time.

### Restoring from iCloud

Install Flow on the new device (signed in to the same Apple ID), open **Profile → Import**, pick a ZIP from iCloud Drive's Flow folder via the file picker.

### iCloud quota

Each backup is a few MB to tens of MB depending on attachments. With many daily backups and lots of receipt photos, the Flow folder can grow into the hundreds of MB. Tune the keep-count if iCloud space is tight.

### Who can read the file

Flow doesn't add any protection to the backup ZIP — it's a plain archive. Anyone with access to the user's iCloud Drive can open it. Users with stricter requirements should store backups somewhere with stricter access and handle that protection themselves.

---

## iOS Shortcuts integration

Apple's Shortcuts app fires automations on system events; one of those events is "I just paid with a card in my Wallet." The integration wires that trigger to Flow's **Record an Expense** action so every Apple Pay purchase becomes an automatic Flow expense.

The guide assumes Flow **v0.19.3** or later — the *Record an Expense* action and its field layout were finalized in that release.

### Setup

1. **Shortcuts** app → **Automation** tab → **+**.
2. Pick the **Wallet** trigger. Optionally filter cards or merchant categories.
3. Choose **Run Immediately** (otherwise each automation needs a notification tap). Optionally toggle **Notify When Run**.
4. **Next** → **Create New Shortcut**.
5. Search **Flow** in the action picker → pick **Record an Expense**.
6. **Amount** field → source = **Shortcut Input** → drill down to the **Amount** sub-field so Flow gets just the number, not the whole transaction blob.
7. (Optional) **Account** field — type the account name. Match is exact; mismatches and empty values fall back to the default account, which is usually right for "card I always pay with" automations.
8. **Next** → **Done**.

### Older Flow versions

On Flow **older than v0.19.2**, empty fields can prevent the action from running — drop a single dash `-` placeholder into anything left blank. v0.19.2 and later handle empty fields gracefully.

---

## Eny integration (first-party AI receipt scanner)

[Eny](https://eny.gege.mn/) is a separate, paid product made by the same team as Flow. It uses an AI vision model to read photographed or uploaded receipts — line items, totals, dates — and turn them into Flow transactions via Flow's first-party integration.

Eny is optional. Flow works fully without it.

### Pricing

10 free scans on signup at eny.gege.mn; paid after that. Once connected, the in-app Eny screen shows credits remaining and the email/account they belong to.

### Connecting

The connection is initiated from the Eny dashboard, not Flow:

1. Sign up / log in at eny.gege.mn.
2. Tap **Connect with Flow** in the Eny dashboard. On a phone, this deep-links into Flow. On a computer, the dashboard shows a QR code — scan it with the phone where Flow is installed.

Eny generates an API key during the connection; Flow stores it locally on the device. **The API key is not included in backups.**

### Settings

Path: **Profile → Preferences → Eny**.

The screen surfaces a privacy disclosure (data is sent to **Eny** and **Google**, Eny's underlying vision provider; links to Eny's Terms of Service and Privacy Policy), an **Eny Dashboard** link, **Connected** status with the account email, **Credits Remaining**, two toggles, and a red **Disconnect Eny** button at the bottom.

The two toggles:

- **Create a transaction per item** — off (default) = one Flow transaction per receipt with line items dumped into the notes field. On = one Flow transaction per line item. Subtitle warns "Maybe chaotic for long receipts."
- **Mark transactions as pending** — when on, parsed transactions land in the Pending group for review. **Even when off**, transactions whose parsed date is more than 6 hours old are still marked pending — a safety net so a forgotten old receipt doesn't quietly rewrite the past.

### Scanning

After connecting, an optional **scan button** can be added to the FAB menu. Once enabled, opening the FAB shows a camera-icon entry alongside normal transaction creation.

Tap it to take a photo or upload from the gallery — up to **5 images at a time**. Parsing happens server-side at Eny.

### Result delivery

- If the user keeps Flow open, a toast appears when parsing finishes and transactions land immediately.
- If the user closes the app, Flow remembers what was sent. Parsed transactions appear next time Flow opens. **No push notifications** — only the in-app toast.

### Caveat: AI is sometimes wrong

Faded thermal paper, glare, unusual receipt formats, less-supported languages — all can produce wrong totals, wrong dates, or oddly split items. Treat new transactions from Eny as drafts.

### Disconnecting

Scroll to the bottom of **Profile → Preferences → Eny** and tap the red **Disconnect Eny** button. The locally-stored API key is wiped. Existing transactions Eny created stay in Flow.

---

## Profile tab

The Profile tab is Flow's "everything else" hub. Top to bottom:

- A **profile card** (avatar + display name).
- **Accounts**, **Categories**, **Tags**, **Pending transactions** — direct entries to those manager screens.
- **Community** section: Join Discord, Support Flow, Contributors, Recommend Flow (system share sheet), Visit GitHub repo. (No "Buy me a coffee" link — disallowed by Apple's policy. Sponsorship goes through GitHub.)
- **Other** section: **Recently Deleted** (the trash bin's contents), **Backup**, **Import**, **Preferences**.
- Footer: app version (`v…`) and a "with love from the creator" link to the maintainer's GitHub.

## Preferences

Path: **Profile → Preferences**. The page is grouped into sections:

**Top-level controls:**

- **Sync** — iCloud auto-backup configuration.
- **Reminders** — daily reminder to track expenses (only shown when the platform supports scheduled notifications). Toggle: **Remind daily** + a **Remind me at** time picker. The page warns: *"Reminders will stop if you don't open Flow for 7 consecutive days."*
- **Language** — locale selection.
- **Primary currency** — what reports convert to. Also asked during onboarding.
- **Transfer** — controls how transfers behave. **Layout** chooses between **Combine** (one row in the list) and **Separate** (two rows — one debit, one credit). The combined view warns *"Transfers will always be separated in some places"*. **Exclude from totals** decides whether transfers count toward total expense / income.
- **Trash bin** — retention period and trash management.
- **Money formatting** — three controls: **Prefer full amounts** (don't abbreviate large numbers), **Use currency symbol** (e.g. "$5" vs "5 USD"), and **Select a custom format** (an ICU pattern picker, with **Default** as the option for "let the locale decide").

**Integrations:**

- **Eny** — receipt-scanner integration.

**Transactions:**

- **Pending transactions** — Require confirmation, Update date upon confirmation, etc.
- **Transaction location** (geo) — two distinct features sharing the same permission. **Enable** turns on location-tag proximity suggestions (see Categories and tags). **Auto-attach** additionally stamps every new transaction with the user's current GPS automatically. With auto-attach off, the user can still manually pick a location on a map.
- **Transaction list tile** — how individual transaction rows render in the list. Controls include **Less dense layout** (relaxed density), **Leading icon** chooser (Account or Category), **Show category for untitled transactions** (fall back to the category name as the row title), **Show category after the account**, and **Show external sources (e.g., Eny)**. There's a live **Preview** at the top.
- **Transaction Entry Flow** — add, remove, and reorder the steps shown when creating a transaction.

**Appearance:**

- **Theme** — large library of color schemes organized into groups. The main groups are **Flow Light**, **Flow Dark**, and **Flow OLED** (each with ~16 named accents like `electricLavender`, `pinkQuartz`, `cottonCandy`, `simplyDelicious`, `seafairGreen`…), plus **Catppuccin** (Frappé / Macchiato / Mocha, ~14 each), and the standalone themes **Palenight** and **Monochrome**. Initially the app follows the system light/dark setting with the default purple theme; once the user picks a theme, the app stops auto-switching. Each Flow scheme has a matching iOS app icon name, and a separate "theme changes app icon" toggle controls whether picking a theme also swaps the icon (iOS only).
- **Numpad** — `preferences.numpad.layout` chooses between **Classic** and **Modern** layouts (modern is the phone-style numpad).
- **Transaction button order** ("Button placement") — drag-and-drop reorder of the bottom action buttons. The same order is reflected in the transaction-buttons home-screen widget.
- **Change visuals** ("Change") — controls how income / expense growth is rendered. Two sections: **Income growth** and **Expense growth**, each with an arrow-direction and a color picker; tap the arrow / color swatch to change. (Useful when the default red-up / green-down convention feels backwards.)

**Privacy:**

- A privacy section, plus a **Lock App** section that only appears when the device has biometrics or a passcode available. Lock App uses `LocalAuthService` (Face ID / Touch ID / device passcode).

**Haptics:**

- Haptic feedback toggles.

**Feedback / dev:**

- Clean up hanging files (orphaned attachments).
- Debug logs.

## Trash bin (Recently Deleted)

Two entry points: **Profile → Recently Deleted** for the items themselves, and **Profile → Preferences → Trash bin** for retention configuration plus See items / Empty bin actions.

Retention is configurable via presets: **7 days, 14 days, 30 days, 90 days, 180 days, 365 days**, or **Forever**. Items past the retention period are purged automatically; "Empty bin" purges everything immediately.

The trash holds **transactions, transaction tags, and recurring transactions**. (Accounts and categories are not soft-deleted via this mechanism.) Restoring is per-item from the transaction-edit page (`Restore` action) — there's no batch restore.

## App lock

Path: **Profile → Preferences → Lock App** (the section is hidden if the device has neither biometrics nor a passcode set). Uses Face ID / Touch ID / passcode via the OS's local-auth service.

## Languages

Flow ships these locales:

- English
- Mongolian — Монгол (Монгол)
- Czech — Čeština (Česko)
- Italian — Italiano (Italia)
- Turkish — Türkçe (Türkiye)
- French — Français (France)
- German — Deutsch (Deutschland)
- Russian — Русский (Россия)
- Spanish — Español (España)
- Polish — Polski (Polska)
- Belarusian — Беларуская (Беларусь)
- Ukrainian — Українська (Україна)
- Arabic — العربية *(RTL)*
- Persian — فارسی (ایران) *(RTL)*

On iOS, language selection opens the system app settings (per-app language is set by iOS itself).

## Widgets

Flow ships home-screen widgets on iOS and Android for:

- Quickly creating a transaction.
- Monthly expense / income summary.

There is no Apple Watch app, Wear OS app, or iOS Live Activities support.

## Numpad calculator

The numpad's calculator mode supports `+`, `-`, `×`, `÷`, and `%`. **No parentheses** — flatten expressions yourself.

## Notes field — Markdown

The transaction edit page's **Notes** label has a small **M↓** badge indicating the field accepts Markdown formatting. Markdown is rendered only on the transaction's own page (the description / notes section uses the `MarkdownView` widget) — it is **not** rendered inline in transaction list rows.

## Search

The Search chip on the home tab supports four modes (all case-insensitive):

- **Including description / notes** — extends search into the notes field.
- **Smart search** — fuzzy match with relevance scoring (the default behavior most users want).
- **Partial** — basic substring match without scoring.
- **Exact** — exact-string match.

## Bulk operations

There is currently **no multi-select for transactions** — operations like delete, edit, or change-category run one at a time. (Subject to change in future versions.)

## Support Flow page

Path: **Profile → Support Flow** (community section). It's an in-app page (`/support`) that lists ways to support the project:

- **Leave a review** — opens the App Store / Play Store in-app review prompt (iOS / iPadOS / macOS / Android).
- **Star on GitHub** — links to the repo.
- **Tip the creator** ("Buy creator a coffee") — third-party donation. The page is explicit that tipping does **not** unlock features; all functionality is free for everyone.
- **Contribute code** — for developers who want to get involved.
- **Give us ideas** — links to the issue tracker for feature requests / feedback.

This page is the home of the donation link; the Profile tab itself doesn't carry a "Buy me a coffee" entry, per Apple's policy on in-app monetization links.

## Onboarding

First-launch flow: pick a profile name (display name), set a primary currency, grant any optional permissions, then land on an empty home tab. New installs start empty — there's no "load demo data" option in normal use.

### Demo-mode easter egg

If the user types **`test`** (case-insensitive) as the profile name during onboarding, an **Enable demo mode** checkbox appears beneath the field. Ticking it pre-populates the database with sample data — intended for App Store / Play Store reviewers, not regular users. Useful to know exists, but generally not surfaced in user-facing copy.

## Backup file naming

iCloud / manual backup files are ZIPs named with a date stamp plus a random coffee-themed name (e.g. `…macchiato.zip`). The coffee suffix gives each backup a memorable identifier without colliding with timestamps from rapid back-to-back saves.

## Restore confirmation

When the user picks a file to import on top of an existing dataset, Flow shows an explicit confirmation modal warning that current data will be replaced. There is no silent overwrite.

## Privacy and security model

- All transaction data lives on the device. Conversion happens locally; no transaction data ever leaves the device for everyday operation.
- The only network calls in normal use are exchange-rate fetches and (optionally) iCloud Drive sync.
- The Eny integration sends scanned images and parsed data out to Eny's servers and Google's vision provider. This is opt-in via the connection flow.
- **Flow does not encrypt anything** — not the backup ZIP, not local app data. Users who require encryption are expected to handle it themselves.

## Technical bits

- iOS bundle ID: `mn.flow.flow`.
- Cross-platform: iPhone, iPad, Mac (via Catalyst / native), Android.
- Offline-first by design.
- Account-type localized labels in `assets/l10n/en.json`.
