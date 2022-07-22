import Company from "@/types/CompanyType";
import images from "./images";

const slackUrl = "https://slack.com/";
const companiesUrl = slackUrl+"customer-stories/";

const companies: Company[] = [
  { 
    image: images.foxLogo,
    link: companiesUrl+"faster-real-time-coverage-fox-sports"
  },
  { image: images.lonelyPlanetLogo, 
    link: companiesUrl+"/channeling-road-less-traveled-lonely-planet"
  },
  { image: images.intuitLogo, 
    link: companiesUrl+"intuit"
  },
  { image: images.carvanaLogo, 
    link: companiesUrl+"carvana-slack-car-buying"
  },
  { image: images.kivaLogo, 
    link: companiesUrl+"kiva-slack-crowdfund-loans-underserved-communities"
  },
  { image: images.targetLogo, 
    link: companiesUrl+"target-unlocks-innovation-collaboration"
  },
  {
    image: images.devaCurlLogo,
    link: companiesUrl+"devacurl-communication-tangle-free-slack"
  }
];

export default companies;
