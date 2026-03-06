<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import DocHeader from "$lib/components/DocHeader.svelte";
  import FlexDownloadButtons from "$lib/components/FlexDownloadButtons.svelte";
  import { copyBankAccNo } from "$lib/copyBankAccNo";
</script>

<svelte:head>
  <title>{m["faq.title"]()}</title>
</svelte:head>

{#snippet beggingEntry()}
  <ul class="list-inside list-disc opacity-70">
    <li>
      <a href="https://buymeacoffee.com/sadespresso">{m["faq.begging.bmac"]()}</a>
    </li>
    <li>
      {m["faq.begging.github"]()}
      <iframe
        src="https://github.com/sponsors/flow-mn/button"
        title="Sponsor flow-mn"
        height="32"
        width="114"
        style="border: 0; border-radius: 6px;"
      ></iframe>
    </li>
    <li>
      {m["faq.begging.golomt"]()}<br />
      <button
        class="text-primary cursor-pointer appearance-none font-bold"
        type="button"
        title={m["faq.begging.copy_title"]()}
        onclick={copyBankAccNo}
      >
        MN17 0015 0011 0541 5662
      </button>
      ({m["faq.begging.golomt_name"]()})
    </li>
  </ul>
{/snippet}

<section class="flex flex-col items-center gap-4 px-4">
  <div class="w-full max-w-2xl">
    <div class="text-primary mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">{m["faq.label"]()}</div>
    <h1 class="mb-10 text-4xl font-bold">{m["faq.heading"]()}</h1>

    <div class="flex flex-col [&_details]:mt-2 [&_p]:mt-2 [&_p]:max-w-prose [&_p]:leading-relaxed">
      <DocHeader id="what-is-flow">{m["faq.what_is_flow.q"]()}</DocHeader>

      <p class="opacity-70">
        {m["faq.what_is_flow.a"]()}
      </p>

      <DocHeader id="where-do-i-download-flow">{m["faq.where_download.q"]()}</DocHeader>

      <p class="opacity-70">{m["faq.where_download.a"]()}</p>
      <br />
      <FlexDownloadButtons />
      <br />

      <DocHeader id="can-i-export-all-of-my-data">{m["faq.can_export.q"]()}</DocHeader>

      <p class="opacity-70">
        {m["faq.can_export.a"]()}
      </p>

      <DocHeader id="importing-erased-my-data-how-to-recover">{m["faq.import_erased.q"]()}</DocHeader>

      <p class="opacity-70">
        {m["faq.import_erased.a_before"]()} <b>{m["faq.import_erased.a_path"]()}</b>.
      </p>
      <br />
      <ul class="list-inside list-disc opacity-70">
        <li>{m["faq.import_erased.note_1"]()}</li>
        <li>{m["faq.import_erased.note_2"]()}</li>
      </ul>

      <DocHeader id="does-flow-have-online-sync">{m["faq.online_sync.q"]()}</DocHeader>
      <p class="opacity-70">{m["faq.online_sync.a"]()}</p>

      <DocHeader id="does-flow-have-autobackup">{m["faq.auto_backup.q"]()}</DocHeader>
      <p class="opacity-70">
        {m["faq.auto_backup.a"]()}
      </p>

      <DocHeader id="why-icloud-sync-isnt-working">{m["faq.icloud_not_working.q"]()}</DocHeader>

      <ul class="list-inside list-disc opacity-70 [&>li]:mt-1">
        <li>{m["faq.icloud_not_working.step_1"]()}</li>
        <li>{m["faq.icloud_not_working.step_2"]()}</li>
        <li>{m["faq.icloud_not_working.step_3"]()}</li>
        <li>{m["faq.icloud_not_working.step_4"]()}</li>
      </ul>

      <DocHeader id="does-flow-work-offline">{m["faq.works_offline.q"]()}</DocHeader>

      <p class="opacity-70">{m["faq.works_offline.a"]()}</p>
      <br />
      <ul class="list-inside list-disc opacity-70">
        <li>{m["faq.works_offline.item_1"]()}</li>
        <li>{m["faq.works_offline.item_2"]()}</li>
      </ul>

      <DocHeader id="does-flow-support-multi-currency">{m["faq.multi_currency.q"]()}</DocHeader>

      <p class="opacity-70">
        {m["faq.multi_currency.a_1"]()}
        <br />
        {m["faq.multi_currency.a_2"]()}
        <br />
        <span class="text-sm opacity-60">{m["faq.multi_currency.a_note"]()}</span>
      </p>

      <DocHeader id="can-i-make-transfers-between-different-currency-accounts">
        {m["faq.currency_transfers.q"]()}
      </DocHeader>

      <p class="opacity-70">{m["faq.currency_transfers.a"]()}</p>

      <DocHeader id="how-to-import-from-other-apps">{m["faq.import_from_other.q"]()}</DocHeader>

      <details open>
        <summary class="cursor-pointer opacity-60 transition-opacity hover:opacity-100"
          >{m["faq.import_from_other.ivy_summary"]()}</summary
        >
        <p class="opacity-70">
          {m["faq.import_from_other.ivy_detail"]()}
        </p>
      </details>
      <details open>
        <summary class="cursor-pointer opacity-60 transition-opacity hover:opacity-100"
          >{m["faq.import_from_other.other_summary"]()}</summary
        >
        <div class="mt-2 opacity-70">
          <ol class="list-inside list-decimal [&>li]:mt-1">
            <li>{m["faq.import_from_other.other_step_1"]()}</li>
            <li>
              <div class="inline-block">
                {m["faq.import_from_other.other_step_2_prefix"]()}<br /><br />
                <a
                  target="_blank"
                  referrerpolicy="no-referrer"
                  rel="noopener"
                  href="https://docs.google.com/spreadsheets/d/1wxdJ1T8PSvzayxvGs7bVyqQ9Zu0DPQ1YwiBLy1FluqE/edit?usp=sharing"
                  >{m["faq.import_from_other.other_step_2_link"]()}</a
                >
                <br />
                {m["faq.import_from_other.other_step_2_note"]()}
              </div>
            </li>
            <li>{m["faq.import_from_other.other_step_3"]()}</li>
          </ol>
        </div>
      </details>

      <DocHeader id="is-flow-free">{m["faq.is_free.q"]()}</DocHeader>

      <p class="opacity-70">
        {m["faq.is_free.a"]()}
      </p>
      <br />
      {@render beggingEntry()}

      <DocHeader id="how-many-accounts-can-i-have-at-max">{m["faq.max_accounts.q"]()}</DocHeader>

      <p class="opacity-70">{m["faq.max_accounts.a"]()}</p>

      <DocHeader id="i-dont-find-x-features-will-it-be-implemented">
        {m["faq.feature_request.q"]()}
      </DocHeader>

      <p class="opacity-70">
        {m["faq.feature_request.a_before"]()}
        <a
          href="https://github.com/flow-mn/flow/issues"
          target="_blank">{m["faq.feature_request.a_link"]()}</a
        >{m["faq.feature_request.a_after"]()}
      </p>

      <DocHeader id="why-is-flow-free-and-or-open-source">{m["faq.why_free.q"]()}</DocHeader>

      <p class="opacity-70">
        {m["faq.why_free.a"]()}
      </p>
      <br />
      {@render beggingEntry()}

      <DocHeader id="can-i-add-recurring-transactions">{m["faq.recurring.q"]()}</DocHeader>

      <p class="opacity-70">{m["faq.recurring.a"]()}</p>

      <DocHeader id="how-does-recurring-transactions-work">{m["faq.how_recurring.q"]()}</DocHeader>

      <p class="opacity-70">{m["faq.how_recurring.a"]()}</p>

      <DocHeader id="how-does-icloud-sync-work">{m["faq.icloud_how.q"]()}</DocHeader>

      <p class="opacity-70">
        {m["faq.icloud_how.a_1"]()}<br /><br />
        {m["faq.icloud_how.a_2"]()}<br /><br />
        {m["faq.icloud_how.a_3"]()}
      </p>

      <DocHeader id="how-do-i-contact-the-maintainer">{m["faq.contact.q"]()}</DocHeader>

      <p class="opacity-70">{m["faq.contact.a"]()}</p>
      <br />
      <ul class="list-inside list-disc opacity-70">
        <li>
          <a
            href="mailto:batmend@gege.mn"
            target="_blank">batmend@gege.mn</a
          >
        </li>
        <li>
          <a
            href="mailto:flow@gege.mn"
            target="_blank">flow@gege.mn</a
          >
        </li>
        <li>
          <a
            href="https://discord.gg/Ndh9VDeZa4"
            target="_blank">{m["faq.contact.discord"]()}</a
          >
        </li>
        <li>
          {m["faq.contact.more_before"]()}
          <a
            href="https://dev.gege.mn/#contact"
            target="_blank">dev.gege.mn</a
          >
        </li>
      </ul>
    </div>
  </div>
</section>
