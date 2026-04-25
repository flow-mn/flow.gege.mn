# Flow — Ground-Truth Knowledge

A reference of how the Flow expense-tracker app actually behaves, established by the maintainer during proofreading of the `/guide` articles. Use this when writing or editing guide content; if a claim isn't supported here (or by the app itself), don't assume it.

> Stats does **not** respect the active filter. Filters are home-only. Don't write copy that contradicts this.

---

## Accounts

- **Six account types** (exact labels from `assets/l10n/en.json`):
  Checking · Savings · Credit (e.g., card) · Loan · Asset · Other.
- An account holds **one currency**. Multi-currency means multiple accounts.
- There is **no stored "current balance"**. The balance is the running sum of every transaction in the account.
  - The **Update balance** action does not overwrite a field — it computes the delta between the target and the current sum, then inserts an income or expense transaction for that delta on a date you choose.
- **Exclude from balance** toggle — keep an account out of the home-screen total.
- **Archive** — hides the account from picker lists; history kept intact.
- Account creation entry point: **Accounts tab → its own + button → ✓ at top right to save.** Not from the FAB.

## Categories and tags

- **Category**: optional, at most one per transaction.
- **Tag**: zero, one, or many per transaction. **No `#` prefix** — type plain text.
- **Three tag types**:
  - Regular — free-form label.
  - Contact — a person.
  - Location — a place. Suggested by **proximity** when creating a transaction near a previously-used place. Proximity suggestions require geolocation to be turned on at **Profile → Preferences → Transaction location**. Without that, location tags still work — just no proximity-based suggestions.

## Transactions

- **Three types**: Expense · Income · Transfer.
- **FAB (the round + button at the bottom) is exclusively for creating new transactions.** Nothing else uses it.
- **Transaction entry flow is user-configurable** at **Profile → Preferences → Transaction Entry** — add, remove, and reorder the steps Flow walks you through.
- **Numpad behavior**: tapping the **✓** on the numpad commits the typed amount. Dismissing the numpad without ✓ **discards** whatever was typed (it's not a special new-transaction case — it always discards).
- **Cross-currency transfers** record the exact amount on each side, not the exchange rate.
- **Duplicate is a swipe-right gesture**. Swipe a transaction left-to-right in the list — a gray slide-action panel reveals a copy icon. Long-press does **not** duplicate.
- **All list-tile swipe gestures across Flow are pre-configured per-row**: left and right reveal specific actions. Not user-customisable.
- **Backdating** a transaction just sets the date — nothing else changes.
- **Future-dating**: when the user picks a future date, Flow **silently auto-toggles the transaction to Pending** so it can't inflate today's balance. The Pending toggle on the edit page reflects the change. Turning Pending off marks it **Pre-approved** — the home-list tile shows that literal "Pre-approved" label and the entry auto-confirms when its date arrives.

## Pending transactions

- All pending transactions are gathered into a single **Pending** group at the top of the home feed, regardless of date — they are **not** sub-grouped by today / tomorrow / next week.
- **Pre-approved** items show a "Pre-approved" label inside the list tile.
- A **Confirm** button appears beneath the tile only when a pending transaction is in the past or close to due. That's the only pending-specific UI control on the tile.
- Pending tiles support the same swipe gestures as any other transaction (duplicate / delete / etc.).
- Settings live at **Profile → Preferences → Pending transactions**:
  - Require confirmation — when on, recurring look-aheads land as pending.
  - Update date upon confirmation — uses today's date instead of the originally scheduled date.
  - Notifications — 5 minutes to a week ahead.
  - Home feed window — how far into the future pending shows on home.

## Recurring transactions

- Recurrence is a **section on the transaction itself** (the Recurrence row inside the edit page). The transaction becomes the template.
- **Schedule presets** (literal labels): Every day · Every week · Every 2 weeks · Every month · Every year.
- **End modes**: Never · On a date · After N occurrences.
- **Generation rule** (important): on app open, Flow generates **everything up through today plus exactly one occurrence in the future**, regardless of how many occurrences are owed. The next future occurrence is generated only after the current future one moves into the past. So at any given moment a rule has at most one future-dated row visible.
- Whether generated occurrences land as pending or auto-confirm is controlled by **Profile → Preferences → Pending transactions → Require confirmation**.
- Editing a recurring template changes future occurrences only; past generations are immutable.

## Stats / Reports

- The Stats tab has **only a time-period control**. No category, account, or other filter — and it does not respect the home-feed filter. Filters are home-only.
- UI elements: period header with ‹ › arrows, "By month / More options" row, headline total (with delta vs. previous period), trend chart (current period overlaid on previous), and per-day Expense / Income average cards.
- Drill: tap a chart point or an average card to see contributing transactions and sub-breakdowns.
- Transfers are excluded from Expense and Income averages.
- All values rendered in the primary currency, converted at the latest cached exchange rate.

## Filters and presets (home feed)

- Filters apply to **the home feed only** (never Stats).
- The chips at the top of the home tab (Search · This month · Attachments · …) are **individual filters** — tapping each refines the list.
- The leftmost icon in that row is a **funnel with a count** (0 when nothing's filtered, otherwise the number of active filters). Tapping it opens the **filter presets sheet**.
- **Saving a preset is two-step**:
  1. Adjust the chips so the active filter differs from the default preset.
  2. Open the funnel sheet — **Save as new** appears at the bottom only when current filters differ from the default. Tap it and name the preset.
- **Presets aren't editable in place.** To change one, create a new preset and delete the old.
- **Swipe gestures on a preset row**: swipe left → delete; swipe right → set as default.

## Backup / Export

- Path: **Profile → Backup**, lands on a screen titled **Export**, a stack of cards.
- Formats:
  - **As CSV** — read-only spreadsheet dump. The card itself says _"Cannot be used for restore/import! Ideal for opening in software like Google Sheets"_.
  - **As backup (zip)** — full safety net (JSON + attachments). For moving devices.
  - **As backup (json)** — essential data only, no attachments. Restorable.
  - **Statements (PDF)** — printable, not restorable.
  - **Backup history** — list of past exports.
- **Restore is replace, not merge.** No deduplicating merge mode.

## Import

- Path: **Profile → Import**.
- One big **Select a file** card (auto-detects ZIP / JSON / CSV) plus an **Other options** section with **Ivy Wallet (CSV)** and **Get CSV template**.
- Schema versioning is in place — Flow supports older JSON exports indefinitely.

## iCloud auto-backup

- Path: **Profile → Preferences → Sync**. Three controls:
  1. **Backup interval** — chips: Disable · 12 hours · a day · 2 days · 3 days · 7 days · 14 days · 30 days. Backups trigger on app open if the interval has elapsed.
  2. **Sync to iCloud** — toggle that uploads the backup to iCloud Drive.
  3. **Number of backups to keep** — chips: 3 · 5 · 10 · 20 · 30 · 100 · Infinite. Older backups trimmed at startup.
- The Sync page also shows the last successful sync time.
- Files land in **iOS Files → iCloud Drive → Flow** as timestamped ZIPs.
- **Flow does not encrypt anything**, anywhere — not the backup ZIP, not local data. Don't write copy that mentions encryption (Flow side or otherwise). Users who want it are expected to handle it themselves outside Flow.

## Attachments

- Each attachment is **copied into Flow's app storage** when attached (originals on camera roll / Files are untouched).
- Attachments are part of every backup — manual or automatic — until the attachment is deleted.
- There is **no "Compress images" preference**. (Don't write about one.)

## iOS Shortcuts integration

- Trigger: **Wallet** automation in Apple's Shortcuts app, fired by Apple Pay charges.
- Action: Flow's **Record an Expense**.
- Wire **Amount** = Shortcut Input → Amount sub-field. Optionally type an exact account name (falls back to default account if empty / not matched).
- Pre-v0.19.2: empty fields can break the action — drop a `-` placeholder. v0.19.2+ handles empty fields.
- Guide assumes Flow v0.19.3+.

## Eny integration (first-party AI receipt scanner)

- Eny is a separate paid product (`eny.gege.mn`) by the same team as Flow. 10 free scans on signup, paid after that.
- **Connection** is initiated from the Eny dashboard's **Connect with Flow** button. On phone it deep-links to Flow; on desktop it shows a QR code → scan with the phone where Flow lives. An API key is generated in the background and stored locally on the device. **The API key is not included in backups.**
- **Settings live at** `Profile → Preferences → Eny`. Top of the screen shows a privacy disclosure, links to Eny ToS / Privacy Policy, and notes that data is sent to **Eny** and **Google** (Eny's underlying vision provider).
- The settings screen surfaces: an **Eny Dashboard** link, **Connected** status with the account email, **Credits Remaining**, two toggles, and a red **Disconnect Eny** button at the bottom.
- **Toggles** (exact labels):
  - **Create a transaction per item** — off (default) = one transaction per receipt with line items dumped into the notes field; on = one transaction per line item. Subtitle warns "Maybe chaotic for long receipts."
  - **Mark transactions as pending** — when on, parsed transactions go into the Pending group. Even when off, parsed transactions whose date is more than **6 hours old** are still marked pending as a safety net.
- **Scanning** uses an optional camera button on the FAB (off by default; user enables it after connecting). Tap → take photo or pick up to **5 images** from the gallery. Parsing happens server-side at Eny.
- Result delivery: **toast inside Flow** when parsing finishes if the app is open; otherwise the transactions appear next time Flow is opened. **No push notifications.**
- AI parsing is sometimes inaccurate; treat results as a draft.

## Encryption — Flow does not do it

- Flow does **not** encrypt anything: not the backup ZIP, not local app data, nothing. Users who want encryption are expected to handle it outside Flow.
- **Don't write copy that mentions encryption** (neither claiming Flow encrypts, nor recommending users encrypt). Treat encryption as out-of-scope for this app's voice — it's a personal-finance tracker, not a security product.

## Misc

- iOS bundle id: `mn.flow.flow`.
- App is offline-first; the only thing that needs internet is fetching exchange rates (and iCloud sync, of course).
