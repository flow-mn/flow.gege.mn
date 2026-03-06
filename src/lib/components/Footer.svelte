<script lang="ts">
  import Logo from "./Logo.svelte";
  import Header from "./Footer/Header.svelte";
  import Frame from "./Frame.svelte";
</script>

<footer class="bg-background shadow-footer w-screen py-12 md:py-16">
  <Frame>
    <div class="flex flex-col gap-10">
      <ul
        class="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-4"
        data-no-bullet
      >
        <li
          data-aos="fade-right"
          data-aos-delay="50"
          class="md:col-span-1"
        >
          <a
            href="/"
            class="visited:text-text text-text mb-3 inline-flex items-center gap-2"
          >
            <Logo size="1.75rem" />
            <span class="text-base font-bold tracking-tight">Flow</span>
          </a>
          <p class="mt-2 max-w-[16rem] text-xs opacity-50 leading-relaxed">
            A free, open-source, privacy-first expense tracker for everyone.
          </p>
        </li>

        <li
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <ul>
            <Header>Community</Header>
            <li>
              <a
                href="https://github.com/flow-mn/flow"
                target="_blank">Visit GitHub</a
              >
            </li>
            <li>
              <a
                href="https://discord.gg/Ndh9VDeZa4"
                target="_blank">Join Discord</a
              >
            </li>
            <li>
              <a
                href="https://www.reddit.com/r/flow_app/"
                target="_blank">Join r/flow_app</a
              >
            </li>
          </ul>
        </li>

        <li
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <ul>
            <Header>Support</Header>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a
                href="/privacy.html"
                target="_blank">Privacy Policy</a
              >
            </li>
            <li>
              <a
                href="/tos.html"
                target="_blank">Terms of Use</a
              >
            </li>
          </ul>
        </li>

        <li
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <ul>
            <Header>Contribute</Header>
            <li>
              <a
                href="https://github.com/flow-mn/flow/issues/new"
                target="_blank">Report an issue</a
              >
            </li>
            <li>
              <a
                href="https://buymeacoffee.com/sadespresso"
                target="_blank">Buy me a coffee</a
              >
            </li>
            <li>
              <a
                href="https://github.com/sponsors/flow-mn"
                target="_blank">Sponsor on GitHub</a
              >
            </li>
            <li>
              <a
                href="mailto:flow@gege.mn"
                target="_blank">Contact</a
              >
            </li>
          </ul>
        </li>
      </ul>

      <div class="border-t border-white/5 pt-6 text-xs opacity-40">
        &copy; {new Date().getFullYear()} Batmend Ganbaatar
      </div>
    </div>
  </Frame>
</footer>
