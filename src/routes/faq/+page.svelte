<script lang="ts">
  import DocHeader from "$lib/components/DocHeader.svelte";
  import FlexDownloadButtons from "$lib/components/FlexDownloadButtons.svelte";
  import copyBankAccountNumber from "$lib/copyBankAccNo";
</script>

<svelte:head>
  <title>Frequently Asked Questions</title>
</svelte:head>

{#snippet beggingEntry()}
  <ul class="list-inside list-disc">
    <li>
      <a href="https://buymeacoffee.com/sadespresso">Buy me a coffee</a>
    </li>
    <li>
      Sponsor on GitHub: <iframe
        src="https://github.com/sponsors/flow-mn/button"
        title="Sponsor flow-mn"
        height="32"
        width="114"
        style="border: 0; border-radius: 6px;"
      ></iframe>
    </li>
    <li>
      Golomt Bank (of Mongolia)<br />
      <button
        class="appearance-none font-bold"
        type="button"
        title="Click to copy IBAN"
        onclick={copyBankAccountNumber}
      >
        MN17 0015 0011 0541 5662
      </button> (Batmend Ganbaatar)
    </li>
  </ul>
{/snippet}

<section class="flex flex-col items-center justify-center gap-4">
  <div class="max-w-(--breakpoint-md) flex flex-col [&_details]:mt-2 [&_p]:mt-2 [&_p]:max-w-prose">
    <h1 class="mb-8">Frequently Asked Questions</h1>

    <DocHeader id="what-is-flow">What is Flow?</DocHeader>

    <p>
      Flow is a free and open-source personal finance tracking app. As Flow is offline, you are in control of your data.
    </p>

    <DocHeader id="where-do-i-download-flow">Where do I download Flow?</DocHeader>

    <p>You can download Flow from:</p>
    <br />
    <FlexDownloadButtons />
    <br />

    <DocHeader id="can-i-export-all-of-my-data">Can I export all of my data?</DocHeader>

    <p>
      Yes, you can export JSON/ZIP backups which you can import it to another device, and CSV files for analyzing your
      data in spreadsheet software (i.e., Excel, Google Sheets), which is not recoverable like JSON/ZIP backups.
    </p>

    <DocHeader id="importing-erased-my-data-how-to-recover">Importing erased my data, how to recover?</DocHeader>

    <p>
      Flow does a precaution backup before starting to import. You can find the backup in <b
        >Profile tab &gt; Backup &gt; Backup history</b
      >.
    </p>
    <br />
    <ul class="list-inside list-disc">
      <li>Please note that the precaution isn't guaranteed to succeed</li>
      <li>
        Also iOS clears the temporary storage periodically, so you may find the backup file deleted if too much time has
        passed.
      </li>
    </ul>

    <DocHeader id="does-flow-have-online-sync">Does Flow have online sync?</DocHeader>
    <p>No.</p>

    <DocHeader id="does-flow-have-autobackup">Does Flow have auto backup?</DocHeader>
    <p>
      Yes. If you're using Flow on iOS, you can also enable iCloud to save your backups. If you're using other OS,
      you're advised to download your manual and auto backups and save them elsewhere.
    </p>
    <!-- <details open>
      <summary> For users on Android, Windows, or Linux </summary>
      <p>
        It's not available at the moment. It's planned, and may take some time to be ready for use.
        I recommend doing periodic backups to avoid data loss.
      </p>
    </details>
    <br />
    <details open>
      <summary> For users on iOS, or macOS </summary>
      <p>
        If you have Flow 0.15.0 or later on iOS, iPadOS, or macOS, you can use iCloud. This required
        iCloud Drive sync to be enabled on your device. This feature does not support multiple
        devices syncing. Flow will attempt to save your manual backups to your iCloud Drive too.
      </p>
    </details> -->

    <DocHeader id="why-icloud-sync-isnt-working">Why iCloud sync isn't working?</DocHeader>

    <ul class="list-inside list-disc">
      <li>Ensure you've logged into your Apple Account on your device (in System Settings, not on Flow)</li>
      <li>
        Ensure you've enabled iCloud Drive sync in System Settings &gt; Apple Account &gt; iCloud &gt; iCloud Drive &gt;
        Sync this iPhone (or your device's name)
      </li>
      <li>
        Ensure you've allowed Flow to access iCloud in System Settings &gt; Apple Account &gt; iCloud &gt; iCloud Drive
        &gt; Apps Syncing to iCloud Drive
      </li>
      <li>
        Flow refuses to upload the backup if it's older than the current file on iCloud. You may want to check your
        device's date and time settings.
      </li>
    </ul>

    <DocHeader id="does-flow-work-offline">Does Flow work offline?</DocHeader>

    <p>Yes, but there are some occurances where Flow might use internet connection. Here are few examples:</p>
    <br />
    <ul class="list-inside list-disc">
      <li>Downloading exchange rates information (only if you use more than one currencies)</li>
      <li>Clicking on buttons that lead to external internet resource (Discord, GitHub, etc.)</li>
    </ul>

    <DocHeader id="does-flow-support-multi-currency">Does Flow support multi-currency</DocHeader>

    <p>
      Yes. Flow can generate reports, summaries involving accounts with different currency.
      <br />
      Reports are always displayed in your primary currency.
      <br />
      <span class="opacity-60">Cross-currency transfers are available on version 0.13.0 and later</span>
    </p>

    <DocHeader id="can-i-make-transfers-between-different-currency-accounts">
      Can I make transfers between different currency accounts?
    </DocHeader>

    <p>Yes. Requires Flow version 0.13.0 or later</p>

    <DocHeader id="how-to-import-from-other-apps">How to import data from other apps?</DocHeader>

    <details open>
      <summary>Migrating from Ivy Wallet</summary>
      <p>Export a CSV backup from Ivy Wallet, and choose "Ivy Wallet" option in the import menu.</p>
    </details>
    <details open>
      <summary>Migrating from other apps</summary>
      <div>
        <ol class="list-inside list-decimal">
          <li>Export your data as CSV, or any other Google Sheets/Excel compatible format</li>
          <li>
            <div class="inline-block">
              Format your file to match Flow's CSV format.<br /><br />
              <a
                target="_blank"
                referrerpolicy="no-referrer"
                rel="noopener"
                href="https://docs.google.com/spreadsheets/d/1wxdJ1T8PSvzayxvGs7bVyqQ9Zu0DPQ1YwiBLy1FluqE/edit?usp=sharing"
                >View template on Google Sheets</a
              >
              <br />
              Make sure you download the "Template" sheet
            </div>
          </li>
          <li>Export the file as CSV.</li>
        </ol>
      </div>
    </details>

    <DocHeader id="is-flow-free">Is Flow free?</DocHeader>

    <p>
      Yes, Flow is absolutely free. All of the features are available for free without any limitations. Please consider
      supporting if you can as I make Flow on the side, and does not generate money off of it ^^
    </p>
    <br />
    {@render beggingEntry()}

    <DocHeader id="how-many-accounts-can-i-have-at-max">How many accounts can I have at max?</DocHeader>

    You can have as many accounts as you want.

    <DocHeader id="i-dont-find-x-features-will-it-be-implemented">
      I don't find X features, will it be implemented?
    </DocHeader>

    <p>
      If you have ideas to make Flow better, please submit it to our GitHub
      <a
        href="https://github.com/flow-mn/flow/issues"
        target="_blank">issue tracker</a
      >. As long as it aligns with Flow's vision, it will be implemented.
    </p>

    <DocHeader id="why-is-flow-free-and-or-open-source">Why is Flow free and/or open-source?</DocHeader>

    <p>
      Many benefit from open source, including me. And this is my small contribution. Please consider supporting if you
      can as I make Flow on the side, and does not generate money off of it ^^
    </p>
    <br />
    {@render beggingEntry()}

    <DocHeader id="can-i-add-recurring-transactions">Can I add recurring transactions?</DocHeader>

    <p>Recurring transactions feature is available on Flow 0.14.0 or later.</p>

    <DocHeader id="how-does-recurring-transactions-work">How does the recurring transactions work?</DocHeader>

    <p>It's complicated.</p>

    <DocHeader id="how-does-icloud-sync-work">How does iCloud sync work?</DocHeader>

    <p>
      This section is not specific to Flow.<br /><br />

      TL;DR Flow saves to iCloud, and the operating system uploads the file. This process cannot be sped up, or altered.<br
      /><br />

      Enabling iCloud sync on Flow will not immediately upload the data to iCloud. The operating system decides when it
      gets uploaded, and the decision is affected by many factors, including network connection, battery level, time of
      the day, and so on. This is not official Apple documentation, so you should refer to Apple's documentation for
      more accurate information.<br /><br />

      Interestingly enough, you don't need an internet connection for Flow to save to iCloud.
    </p>

    <DocHeader id="how-do-i-contact-the-maintainer">How do I contact the maintainer?</DocHeader>

    <p>You can contact through any of the following channels:</p>
    <br />
    <ul class="list-inside list-disc">
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
          target="_blank">Flow's discord channel</a
        >
      </li>
      <li>
        More contact information on <a
          href="https://dev.gege.mn/#contact"
          target="_blank">https://dev.gege.mn</a
        >
      </li>
    </ul>
  </div>
</section>
