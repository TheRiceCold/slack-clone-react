import {Company, HeaderLinkType} from "@/types/homeTypes"

const slackUrl = "https://slack.com/"
const companiesUrl = slackUrl+"customer-stories/"

export const companiesData: Company[] = [
  { img: "fox",
    link: companiesUrl+"faster-real-time-coverage-fox-sports"
  },
  { img: "lonelyplanet", 
    link: companiesUrl+"/channeling-road-less-traveled-lonely-planet"
  },
  { img: "intuit", 
    link: companiesUrl+"intuit"
  },
  { img: "carvana", 
    link: companiesUrl+"carvana-slack-car-buying"
  },
  { img: "kiva", 
    link: companiesUrl+"kiva-slack-crowdfund-loans-underserved-communities"
  },
  { img: "target-logo", 
    link: companiesUrl+"target-unlocks-innovation-collaboration"
  },
  {
    img: "devacurl",
    link: companiesUrl+"devacurl-communication-tangle-free-slack"
  }
]

export const headerData = {
  right: [
    { label: "Product", link: slackUrl+"solutions" },
    { label: "Solutions", link: slackUrl+"solutions" },
    { label: "Enterprise", link: slackUrl+"enterprise" },
    { label: "Resources", link: slackUrl+"resources" },
    { label: "Pricing", link: slackUrl+"pricing" }
  ],

  left: [
    { label: "Sign In", link: "/login" },
    { label: "TALK TO SALES", link: slackUrl+"contact-sales" },
    { label: "TRY IT FOR FREE", link: "/login" }
  ]
}
