<script lang="ts">
  import Header from "./Footer/Header.svelte";
  import Frame from "./Frame.svelte";
</script>

<footer class="bg-background shadow-footer w-screen py-8 md:py-16">
  <Frame>
    <div class="flex flex-col gap-8">
      <ul
        class="grid grid-cols-1 gap-x-40 gap-y-6 md:grid-cols-3 md:gap-y-16 xl:grid-cols-4"
        data-no-bullet
      >
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
          data-aos-delay="200"
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
          data-aos-delay="300"
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
          </ul>
        </li>
        <li
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <ul>
            <Header>Contact</Header>
            <li>
              <a
                href="mailto:flow@gege.mn"
                target="_blank">flow@gege.mn</a
              >
            </li>
            <li>
              <a
                href="https://www.instagram.com/sadespresso/"
                target="_blank">Instagram</a
              >
            </li>
          </ul>
        </li>
      </ul>
      <div class="row">
        &copy; {new Date().getFullYear()} Batmend Ganbaatar
      </div>
    </div>
  </Frame>
</footer>
