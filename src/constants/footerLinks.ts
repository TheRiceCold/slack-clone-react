const slackLink = "https://slack.com/";
const slackDemoLink = "https://slackdemo.com?vst=4db17399504019b316c6a53d10228307";

const footerLinks = {
  top: [
    {
      title: "why slack?",
      links: [
        { label: "Slack vs. Email", link: slackLink+"why/slack-vs-email" },
        { label: "Channels", link: slackLink+"features/channels" },
        { label: "Engagement", link: slackLink+"engage-users" },
        { label: "Scale", link: slackLink+"scale" },
        { label: "Watch the demo", link: slackDemoLink },
      ]
    },
    {
      title: "product",
      links: [
        { label: "Features", link: slackLink+"features" },
        { label: "Integrations", link: slackLink+"integrations" },
        { label: "Enterprise", link: slackLink+"enterprise" },
        { label: "Solutions", link: slackLink+"solutions" },
      ]
    },
    {
      title: "pricing",
      links: [
        { label: "Plans", link: slackLink+"pricing" },
        { label: "Paid vs. Free", link: slackLink+"pricing/paid-vs-free" },
      ]
    },
    {
      title: "resources",
      links: [
        { label: "Partners", link: slackLink+"partners" },
        { label: "Developers", link: "https://api.slack.com" },
        { label: "Community", link: slackLink+"community" },
        { label: "Apps", link: slackLink+"apps" },
        { label: "Blog", link: slackLink+"blog" },
        { label: "Help Center", link: slackLink+"help" },
        { label: "Events", link: slackLink+"events" },
      ]
    },
    {
      title: "company",
      links: [
        { label: "About Us", link: slackLink+"about" },
        { label: "Leadership", link: slackLink+"about/leadership" },
        { label: "Investor Relations", link: "https://investor.slackhq.com/home/default.aspx" },
        { label: "News", link: slackLink+"blog/news" },
        { label: "Media Kit", link: slackLink+"media-kit" },
        { label: "Careers", link: slackLink+"careers" },
      ]
    },
  ],
  bottom: [
    { label: "status", link: "https://status.slack.com" },
    { label: "privacy", link: slackLink+"trust/privacy/privacy-policy" },
    { label: "terms", link: slackLink+"legal" },
    { label: "cookie preferences", link: "" },
    { label: "contact us", link: slackLink+"help/requests/new" },
    { label: "change region", link: "" },
  ]
};

export default footerLinks;
