import { m } from "$lib/paraglide/messages";
import type { LayoutLoad } from "./$types";

export interface GuideArticle {
  title: string;
  description: string;
  href: string;
  emoji: string;
}

export interface GuideSection {
  title: string;
  articles: GuideArticle[];
}

export const load: LayoutLoad = () => {
  return {
    sections: [
      {
        title: m["guide.sections.basics"](),
        articles: [
          {
            title: m["guide.articles.getting_started.title"](),
            description: m["guide.articles.getting_started.description"](),
            href: "/guide/getting-started",
            emoji: "🚀",
          },
        ],
      },
      {
        title: m["guide.sections.integrations"](),
        articles: [
          {
            title: m["guide.articles.ios_shortcuts.title"](),
            description: m["guide.articles.ios_shortcuts.description"](),
            href: "/guide/ios-shortcuts",
            emoji: "📱",
          },
        ],
      },
    ] satisfies GuideSection[],
  };
};
