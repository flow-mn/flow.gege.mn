import type { PageLoad } from "./$types";

export const prerender = true;

interface Release {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
  body: string;
  prerelease: boolean;
  draft: boolean;
}

export const load: PageLoad = async ({ fetch }) => {
  let releases: Release[] = [];
  try {
    const res = await fetch("https://api.github.com/repos/flow-mn/flow/releases?per_page=100");
    if (res.ok) {
      const data: Release[] = await res.json();
      releases = data.filter((r) => !r.draft);
    }
  } catch {
    // Build-time fetch failure: render an empty changelog rather than failing the build.
  }

  return { releases };
};
