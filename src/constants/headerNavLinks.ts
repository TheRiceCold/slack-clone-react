const slackLink = "https://slack.com/";

const headerNavLinks = {
  left: [
    { label: "Product", link: slackLink+"solutions" },
    { label: "Solutions", link: slackLink+"solutions" },
    { label: "Enterprise", link: slackLink+"enterprise" },
    { label: "Resources", link: slackLink+"resources" },
    { label: "Pricing", link: slackLink+"pricing" }
  ],

  right: [
    { label: "Sign In", link: "/login" },
    { label: "TALK TO SALES", link: slackLink+"contact-sales" },
    { label: "TRY IT FOR FREE", link: "/login" }
  ]
};

export default headerNavLinks;
