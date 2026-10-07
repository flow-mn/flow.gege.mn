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

Since **v0.25.0**, foreign-currency transactions also show an approximate amount in the primary currency (e.g. "≈ R$25") under the original amount in the transaction list and on the transaction page. It's hidden when no rate is available, and can be turned off with **Profile → Preferences → Money formatting → Show approximate amount**. v0.25.0 also fixed exchange rates being fetched for the wrong currency at startup and not refreshing after changing the primary currency.

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

### Icons

The **Change icon** sheet (used for categories and accounts) offers **Icon**, **Emoji/Letter**, and **Image** (pick or paste). **Icon** has a search field and two tabs: **Brands & Logos** (Simple Icons, 16.23.0 as of v0.25.0) and **Symbols** (Google Material Symbols, 4.2960.0). Brand icons are stored by slug (e.g. `paypal`) rather than by code point, because Simple Icons renumbers glyphs every release.

### Three tag types

- **Regular tag** — a free-form label (default). Examples: *trip tokyo*, *reimbursable*, *gift*, *kid*, *partner*.
- **Contact tag** — a person. Useful for "who did I split this with" or "who owes me money".
- **Location tag** — a place. Suggested by **proximity** — Flow proposes a previously-used location tag if it sits within ~50 m of either the transaction's saved location *or* the device's current GPS reading.

Proximity suggestions for location tags require geolocation to be turned on at **Profile → Preferences → Transaction location** (and the Flow location permission). Without that, location tags still work — they just don't get proximity-based suggestions.

Since **v0.22.0**, suggestions also fire when editing an existing transaction (not just at creation time), and Flow now considers the device's live GPS, not only the transaction's saved location. So you can open an old, location-less transaction at the same coffee shop and still be offered the right tag.

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

### Variable amounts

Since **v0.25.0**, a rule can have a varying amount (utility bills, metered plans). Turn on **Amount varies** ("Asks for the amount each time") under the schedule in the Recurrence section.

- Every generated occurrence lands as **pending** with an **estimate**, regardless of the **Require confirmation** setting. Estimates are shown with a "~" prefix (e.g. "~$42").
- Tapping **Confirm** opens the amount sheet pre-filled with the estimate; the entered amount is what gets recorded. Dismissing the sheet leaves the transaction pending.
- The estimate is the latest confirmed amount for that rule, falling back to the template transaction's amount.
- For a recurring transfer, the amount entered is the outgoing side; the incoming side follows the transfer's conversion rate.
- The **Recurring** insights tile and page mark totals that include an estimate with "~".
- Price-change observations are not raised for a rule tracked as variable.

### Recurring transfers

Transfers can recur too — useful for automatic monthly savings deposits.

### Fixes in v0.25.0

- Saving with the default recurrence now sets the rule up (it used to be skipped).
- Changing the start date no longer makes the rule repeat on the wrong day.
- The start date can be earlier than the transaction date; the transaction date moves with it.

### Spotting subscriptions

Since **v0.25.0**, the Stats tab's **Worth knowing** card suggests charges that look recurring (same title, weekly / monthly / yearly schedule) but aren't set up yet — steady amounts, and also bills that vary. **Track as recurring** opens the latest matching transaction with the recurrence pre-filled (and **Amount varies** switched on for a varying bill). The **Recurring** insights tile lists upcoming recurring charges and the committed outflow.

---

## Pending transactions

A pending transaction is a real transaction record that's been created but isn't yet counted toward balances or totals. It's waiting for confirmation.

### How they appear on the home feed

- All pending transactions are gathered into a single **Pending** group at the top of the feed, regardless of date — they are *not* sub-grouped by today / tomorrow / next week.
- Pending transactions explicitly approved ahead of time show a **Pre-approved** label inside the list tile and auto-confirm when their date arrives.

### Three situations that create pending

1. A recurring rule generates a future-dated occurrence and **Require confirmation** is on.
2. A recurring rule with **Amount varies** generates an occurrence (v0.25.0). These are always pending, whatever the setting, because the amount is an estimate.
3. The user sets a future date when creating or editing a transaction. Flow auto-toggles Pending on so it can't silently inflate today's balance.

### Approving

When a pending transaction is in the past or close to due, a **Confirm** button appears under its list tile. Tap it to promote the transaction to a regular one — it then affects balances immediately. For a variable-amount estimate (shown with "~"), Confirm first asks for the actual amount. Pending list tiles also support the standard swipe gestures (duplicate, delete).

### Settings

Path: **Profile → Preferences → Pending transactions**.

- **Require confirmation** — when on, future recurring occurrences land as pending; when off, they auto-confirm.
- **Update date upon confirmation** — when on, confirming uses today's date as the transaction date instead of the originally scheduled date.
- **Notifications** — get reminded before a pending transaction comes due. Pick how early: 5 minutes to a week ahead.
- **Home feed window** — how many days into the future Flow shows pending on the home feed.

### If ignored

Pending transactions don't expire and don't auto-confirm just because their date passed. They pile up until confirmed, and don't affect balances in the meantime.

---

## Budgets

Added in **v0.24.0**. A budget is a spending limit for a period, optionally scoped to categories.

### Where it lives

- **Profile → Budgets** lists every budget as a card (creation order), with **New budget** at the top. Tap a card for its detail page.
- The Stats tab has a **Budgets** tile ("Set a spending budget" / "All on track" / "{count} over limit" / "{count} nearing limit"). It opens **Budget overview**: Status, Recommendations, and Your budgets. There is deliberately **no combined total** — budgets can overlap.

### Fields

- **Amount** — must be more than zero. Currency chip defaults to the primary currency.
- **Budget name** — required and unique.
- **Scope** — multi-select categories. None selected = **All spending**. There is **no account scope**.
- **Period** — defaults to this month. **By week**, **By month**, **By year**, or **Custom range** (via **More options**).
- **Renew automatically** — on by default; the budget rolls into the next period (a July budget becomes an August budget). Disabled for custom ranges. Off = one-off budget.

### What counts

- **Expenses only** — income and transfers never count; trashed transactions don't count.
- Transactions dated inside the current period, in the scoped categories.
- **All accounts**, including excluded-from-balance ones.
- **Pending transactions count**, shown as a separate segment on the progress bar.
- Foreign-currency spending is converted with cached rates; amounts without a rate are skipped with a notice.

### Status and pace

- **On track** < 90% of the limit, **Nearing limit** ≥ 90%, **Over budget** ≥ 100%.
- The detail page shows spent / limit, a progress bar with a pace marker, days left (or "Period ended"), and a one-line pace insight, e.g. "At this pace, {name} will overshoot by {amount}." (projected > 105% after 20% of the period) or "{name} has plenty of room — {amount} unspent." (projected < 75% after half the period).

### Renewal and past periods

The saved period is only the starting point and is never rewritten; the current period is derived from it. Since v0.24.0, renewing no longer overwrites the period that just ended. **Recent periods** shows up to the last 6 periods (never before the budget was created). Past totals are recalculated from transactions, so editing an old transaction updates that period.

### Alerts and widgets

- An in-app card for the budget that most needs attention ("{name}: over budget" / "{name}: {percent}% used") with a **Review** button — at most once every 3 days.
- Home-screen widgets on iOS and Android: **Budgets** (how many need attention + the worst one) and **Budget** (one chosen budget, or whichever is closest to its limit). Both offer **Hide amounts**. Tapping opens the budget.

### Editing and deleting

Pencil button on the detail page. **Delete budget** is at the bottom of the editor and doesn't affect transactions. No archive. Budgets are included in backups (older backups without budgets still import).

---

## Stats (Reports)

The **Stats** tab was revamped in **v0.23.0** and extended in **v0.25.0**. Everything is computed locally from transactions — no server, no delay.

### Time range

Defaults to the current month. **‹ ›** arrows (or swipe) step through periods; tapping the month/year label opens a picker. **More options** has **Common options** (**This week**, **This month**, **This year**, **Last 30 days**, **All time**) and the modes **By week**, **By month**, **By year**, **Custom range**. The Stats tab has only a time control — it doesn't follow the home feed's filters and has no account/currency filter.

### Range-bound cards (top to bottom)

- **Worth knowing** — only when a single month is selected (see below).
- **Cash flow** — "In" / "Out".
- **Pace** — **Projected** (end-of-range projection) when the range includes today, otherwise **Total spent**; plus **Avg / day** and the trend vs. the previous period.
- **Top categories** — top 3 expense categories with bars in category colors. Tapping opens the ranked list.

Transfers are excluded from income and expense.

### Ranked list (categories)

Since v0.25.0, category stats open as a ranked list: its own time range selector, **Expense** / **Income** tabs, a **List** / **Chart** toggle (List default), and a summary card (total, number of categories, number of transactions). Each row shows the color, name, share % and amount, with a share bar scaled to the largest group. Tapping a row opens the category with the same range.

**Pie chart** (Chart view): slices use category colors; the center shows **Total** and the total, or the selected slice's name and amount. The selected slice gets a percent badge. Tapping an already-selected slice opens the category.

### Worth knowing

On-device observations about the selected month (v0.25.0). At most 3 are shown. Types:

- **Month comparisons** — "{month} is {value} above/below your usual by the {day}." (≥ 125% or ≤ 80% of the median through the same day).
- **Category spikes** — "{category} is {value} your usual." (≥ 1.5× median; category present in ≥ 3 baseline months; max 2).
- **Category drops** — "{category} is down {value}." (≤ 60% of median in a near-every-month category; current month only from day 20).
- **New categories** — "First {value} spending in {months} months."
- **Subscription suggestions** — "{value} looks like a monthly/weekly/yearly charge." Same title, steady amount (±10%), on a schedule (≥ 3 charges; yearly ≥ 2). Bills that vary (up to roughly 35%) are suggested too, but need ≥ 4 charges; those open with **Amount varies** on. Current month only, only if not already tracked, max 1. Action: **Track as recurring** opens the latest matching transaction with the recurrence pre-filled.
- **Price changes** — "{title} went from {previous} to {value}." plus "{amount} more/less a year".

Rules: the baseline is the median of the previous 6 complete months, and at least 3 of them need ≥ 10 expenses or nothing is shown. For the current month, nothing is flagged before the 7th (except subscription suggestions and price changes). An observation must be material (≥ 5% of a usual month or 3× the median expense, whichever is larger). The same observation isn't repeated for 28 days unless it grows 1.5×. Transfers, pending entries and matched refunds are left out. Empty state: "Nothing unusual in {month} so far."

Tapping an observation opens a detail sheet (history chart, "What moved it" / "Biggest entries", "See these transactions"). Each type can be hidden ("Don't show category spikes", etc.) and brought back from the eye icon in the Worth knowing header.

### Insights tiles

Below the range cards, an **Insights** header introduces tiles that use their own time windows regardless of the selected range: **Wrapped** ("Your {month}, wrapped" — month in review), **Net worth** (over time, by account), **Budgets**, **Calendar** (spending per day, priciest day), **Recurring** (upcoming recurring charges, committed outflow), and **Spending map**. The same tiles are on a separate **Insights** page reached from the top of the Profile tab.

### Currency in reports

Reports are always rendered in the primary currency, converted at the latest cached exchange rates. Amounts without a rate are skipped with a notice ("Some non-primary currency amounts were skipped (missing exchange rates)."). Without internet, Flow uses the most recent rates it cached. Drilling down to the transaction list shows individual transactions in their native currency.

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
2. Open **Profile → Preferences → Sync & backup** (Data section). Three controls:
   - **Backup interval** — chips: *Disable, 12 hours, a day, 2 days, 3 days, 7 days, 14 days, 30 days*. Backups are created automatically on app open if the interval has elapsed.
   - **Sync to iCloud** — toggle that pushes backups up to iCloud Drive.
   - **Number of backups to keep** — chips: *3, 5, 10, 20, 30, 100, Infinite*. Older backups beyond that count are deleted at startup.
3. Verify: Files app → iCloud Drive → Flow shows timestamped ZIPs. The Sync & backup page also shows the last successful sync time.

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

- An **Insights** entry (the Stats tab's insight tiles on their own page).
- **Accounts**, **Categories**, **Budgets**, **Tags**, **Pending transactions** — direct entries to those manager screens.
- **Community** section: Support Flow, Contributors, Recommend Flow (system share sheet), Visit GitHub repo.
- **Other** section: **Recently Deleted** (the trash bin's contents), **Backup**, **Import**, **Preferences**.
- Footer: app version (`v…`) and a "with love from the creator" link to the maintainer's GitHub.

## Preferences

Path: **Profile → Preferences**. Reorganized in **v0.25.0** into these sections:

**General:**

- **Language** — locale selection (on iOS, opens the system app settings).
- **Primary currency** — what reports convert to. Also asked during onboarding.
- **Money formatting** — **Prefer full amounts** (don't abbreviate large numbers), **Use currency symbol** (e.g. "$5" vs "5 USD"), **Show approximate amount** ("Also show foreign amounts in your primary currency"; on by default, v0.25.0), **Hide zero decimals** (e.g. "3" instead of "3.00"; v0.25.0), and **Select a custom format** (an ICU pattern picker, with **Default** as "let the locale decide").
- **Date format** (v0.25.0) — **Language default**, `YYYY-MM-DD`, `DD/MM/YYYY`, `MM/DD/YYYY`, `DD.MM.YYYY`, or `D MMM YYYY`, with a live preview. Plus **Show exact dates in list headers** (off by default): day headers show e.g. "Sep 26, 2026" instead of "Today" / "Yesterday". Tapping a header still flips between the two.
- **Reminder** — daily reminder to track expenses (only where scheduled notifications are supported). **Remind daily** + a time picker. Reminders stop if Flow isn't opened for 7 consecutive days.
- **Sound/haptic feedback upon click** — switch.

**Transactions:**

- **Transaction Entry** — add, remove, and reorder the steps shown when creating a transaction.
- **Transfers** — **Layout**: **Combine** (one row) or **Separate** (two rows); **Exclude from totals** decides whether transfers count toward total expense / income.
- **Pending transactions** — **Require confirmation**, **Update date on confirm**, **Show on home**, **Notify**, **Early reminder**.
- **Transaction location** — **Enable** turns on location-tag proximity suggestions; **Auto-attach** stamps every new transaction with the current GPS. Without auto-attach you can still pick a location on a map; since v0.23.2 the map sheet has a **Use current location** button (iOS / Android).
- **List item appearance** — **Leading icon** (Account or Category), **Show category after the account**, **Show category for untitled transactions**, **Less dense layout**, **Show external sources (e.g., Eny)**, with a live preview.

**Appearance:**

- **Theme** — **Dynamic theme**, **Use OLED theme**, **Other themes**, **App icon follows theme** (iOS). Theme groups are **Flow Light**, **Flow Dark**, and **Flow OLED** (each with ~16 named accents), **Catppuccin** (Frappé / Macchiato / Mocha), plus **Palenight** and **Monochrome**. Initially the app follows the system light/dark setting.
- **Numpad** — **Classic** or **Modern** (phone-style) layout.
- **Button placement** — drag-and-drop reorder of the new-transaction buttons (also used by the transaction-buttons widget).
- **Trend indicators** (formerly "Change") — arrow direction and color for **Income growth** and **Expense growth**.

**Privacy & security:**

- **Mask numbers (\*) at startup** and **Mask numbers (\*) when shaking the device**. (v0.25.0 fixed the startup option not taking effect.)
- **Lock app** and **Lock after closing** — only when the device has biometrics or a passcode (Face ID / Touch ID / passcode).

**Data:**

- **Sync & backup** — iCloud auto-backup: **Backup interval**, **Sync to iCloud**, **Number of backups to keep** (see the iCloud section).
- **Eny** — receipt-scanner integration.
- **Trash bin** — **Retention period**, **View items**, **Empty trash bin**.
- **Delete unused files** — cleans up orphaned attachments.

**Problems and feedback:**

- **View debug logs**.

What moved in v0.25.0: Sync and Reminder no longer sit headerless at the top (Sync → Data as "Sync & backup", Reminder → General); Transfers → Transactions; Trash bin and Eny → Data (the "Integrations" header is gone); the haptics switch → General; "Change" → "Trend indicators"; "Privacy" → "Privacy & security"; "Delete unused files" → Data.

## Trash bin (Recently Deleted)

Two entry points: **Profile → Recently Deleted** for the items themselves, and **Profile → Preferences → Trash bin** (Data section) for retention configuration plus View items / Empty trash bin actions.

Retention is configurable via presets: **7 days, 14 days, 30 days, 90 days, 180 days, 365 days**, or **Forever**. Items past the retention period are purged automatically; "Empty bin" purges everything immediately.

The trash holds **transactions, transaction tags, and recurring transactions**. (Accounts and categories are not soft-deleted via this mechanism.) Restoring is per-item from the transaction-edit page (`Restore` action) — there's no batch restore.

## App lock

Path: **Profile → Preferences → Privacy & security → Lock app** (hidden if the device has neither biometrics nor a passcode set). Uses Face ID / Touch ID / passcode via the OS's local-auth service.

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
- Chinese (Simplified) — 简体中文
- Chinese (Traditional, Taiwan) — 正體中文 (台灣) *(added in v0.23.0)*

On iOS, language selection opens the system app settings (per-app language is set by iOS itself).

## Widgets

Flow ships home-screen widgets on iOS and Android for:

- Quickly creating a transaction.
- Monthly expense / income summary.
- **Budgets** (v0.24.0) — how many budgets need attention, and the one that needs it most.
- **Budget** (v0.24.0) — one chosen budget, or whichever is closest to its limit.

Budget widgets have a **Hide amounts** option (progress and status only).

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

Multi-select shipped in **v0.22.0**.

### Entering selection mode

Tap the **leading icon** (the account or category icon) on any transaction row. The row becomes selected; the rest of the rows now have tappable areas anywhere to toggle them in or out of the selection.

### Exiting

Use the system back gesture / back button. That clears the selection without leaving the page.

### Available actions

A bottom action sheet exposes:

- **Confirm all** — only when every selected transaction is pending.
- **Delete** — moves the selection to the trash bin. (Becomes **Recover** when viewing the trash.)
- **Change category** — disabled if the selection includes a transfer, or if the selected transactions span multiple currencies.
- **Change account** — same disable rules as Change category.
- **Recover** — only when viewing the trash bin.

### Where it works

The home feed, the transaction list inside an account, the transaction list inside a category, and the full Transactions page (trash bin / pending). It is **not** available in Stats drill-downs.

## Support Flow page

Path: **Profile → Support Flow** (community section). It's an in-app page (`/support`) that lists ways to support the project:

- **Leave a review** — opens the App Store / Play Store in-app review prompt.
- **Star on GitHub** — links to the repo.
- **Tip the creator** — on **iOS**, three in-app purchase tips (small / medium / large, shown at local App Store prices; added in v0.23.2). On Android and other platforms it's a **Buy creator a coffee** link to Ko-fi instead; macOS shows neither. The card is explicit that tipping does **not** unlock features — all functionality is free for everyone.
- **Contribute code** — for developers who want to get involved.

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
- Cross-platform: iPhone, iPad, Mac (via Catalyst / native), Android. Since **v0.25.0**, iOS 15 or later is required.
- Offline-first by design.
- Account-type localized labels in `assets/l10n/en.json`.
