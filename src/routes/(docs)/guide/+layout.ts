import { m } from "$lib/paraglide/messages";
import type { LayoutLoad } from "./$types";

export interface GuideArticle {
  title: string;
  description: string;
  href: string;
  emoji: string;
  youtube?: {
    id: string;
    /**
     * Used more as an aspect ratio
     */
    width: number;
    /**
     * Used more as an aspect ratio
     */
    height: number;
  };
  screenshots?: string[];
}

export interface GuideSection {
  title: string;
  articles: GuideArticle[];
}

export const load: LayoutLoad = () => {
  const sections: GuideSection[] = [
    {
      title: m["guide.sections.basics"](),
      articles: [
        {
          title: m["guide.articles.getting_started.title"](),
          description: m["guide.articles.getting_started.description"](),
          href: "/guide/getting-started",
          emoji: "🚀",
        },
        {
          title: "Accounts & currencies",
          description: "Track cash, cards, savings, loans, and more — across multiple currencies.",
          href: "/guide/accounts",
          emoji: "🏦",
        },
        {
          title: "Categories & tags",
          description: "Organize transactions with categories and free-form tags.",
          href: "/guide/categories-and-tags",
          emoji: "🏷️",
        },
        {
          title: "Recording transactions",
          description: "Log expenses, income, and transfers between accounts.",
          href: "/guide/transactions",
          emoji: "✍️",
        },
        {
          title: "Attachments",
          description: "Attach receipts and photos to any transaction.",
          href: "/guide/attachments",
          emoji: "📎",
        },
      ],
    },
    {
      title: "Scheduling",
      articles: [
        {
          title: "Recurring transactions",
          description: "Set a transaction to repeat on a schedule — subscriptions, salaries, and bills.",
          href: "/guide/recurring",
          emoji: "🔁",
        },
        {
          title: "Pending transactions",
          description: "Transactions in the future or awaiting your approval before they hit the books.",
          href: "/guide/pending",
          emoji: "⏳",
        },
      ],
    },
    {
      title: "Insights",
      articles: [
        {
          title: "Reports & stats",
          description: "Understand where your money goes with charts and breakdowns.",
          href: "/guide/reports",
          emoji: "📊",
        },
        {
          title: "Filters & presets",
          description: "Narrow down transactions and save filters for one-tap reuse.",
          href: "/guide/filters",
          emoji: "🔍",
        },
      ],
    },
    {
      title: "Import & Export",
      articles: [
        {
          title: "Importing data",
          description: "Restore Flow backups, or bring transactions in from Ivy Wallet.",
          href: "/guide/import-csv",
          emoji: "📥",
        },
        {
          title: "Backup & restore",
          description: "Export everything and restore it on another device.",
          href: "/guide/backup",
          emoji: "💾",
        },
        {
          title: "Auto-backup to iCloud",
          description: "Drop a fresh backup ZIP into iCloud Drive on a schedule.",
          href: "/guide/icloud-backup",
          emoji: "☁️",
        },
      ],
    },
    {
      title: m["guide.sections.integrations"](),
      articles: [
        {
          title: "Eny — AI receipt scanner",
          description: "Snap a receipt, get a Flow transaction (or several). The first-party AI scanner.",
          href: "/guide/eny",
          emoji: "🧾",
        },
        {
          title: m["guide.articles.ios_shortcuts.title"](),
          description: m["guide.articles.ios_shortcuts.description"](),
          href: "/guide/ios-shortcuts",
          emoji: "📱",
          youtube: {
            id: "KuTuBJoiB5c",
            width: 9,
            height: 16,
          },
        },
      ],
    },
    {
      title: "Updates",
      articles: [
        {
          title: "What's new",
          description: "Release notes and changelog from every Flow version.",
          href: "/guide/changelog",
          emoji: "🆕",
        },
      ],
    },
  ];

  return {
    sections,
  };
};
