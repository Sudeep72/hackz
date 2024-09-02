import TitleSponsorImage1 from "@/assets/tracks/blockchain.png";
import TitleSponsorImage2 from "@/assets/tracks/blockchain.png";
import GoldSponsorImage1 from "@/assets/tracks/blockchain.png";
import GoldSponsorImage2 from "@/assets/tracks/blockchain.png";
import SilverSponsorImage1 from "@/assets/tracks/blockchain.png";
import SilverSponsorImage2 from "@/assets/tracks/blockchain.png";
import AssociateSponsorImage1 from "@/assets/tracks/blockchain.png";
import AssociateSponsorImage2 from "@/assets/tracks/blockchain.png";
import ApparelSponsorImage from "@/assets/tracks/blockchain.png";
import RefreshmentSponsorImage from "@/assets/tracks/blockchain.png";

export const sponsorsData = [
  {
    category: "Title Sponsor",
    color: "text-blue-500",
    images: [
      { src: TitleSponsorImage1, link: "https://www.example.com/title1" },
      { src: TitleSponsorImage2, link: "https://www.example.com/title2" }
    ],
  },
  {
    category: "Associate Sponsor",
    color: "text-amber-900",
    images: [
      { src: AssociateSponsorImage1, link: "https://www.example.com/associate1" },
      { src: AssociateSponsorImage2, link: "https://www.example.com/associate2" }
    ],
  },
  {
    category: "Gold Sponsor",
    color: "text-yellow-500",
    images: [
      { src: GoldSponsorImage1, link: "https://www.example.com/gold1" },
      { src: GoldSponsorImage2, link: "https://www.example.com/gold2" }
    ],
  },
  {
    category: "Silver Sponsor",
    color: "text-gray-500",
    images: [
      { src: SilverSponsorImage1, link: "https://www.example.com/silver1" },
      { src: SilverSponsorImage2, link: "https://www.example.com/silver2" }
    ],
  },
  {
    category: "Apparel Sponsor",
    color: "text-green-500",
    images: [
      { src: ApparelSponsorImage, link: "https://www.example.com/apparel" }
    ],
  },
  {
    category: "Refreshment Sponsor",
    color: "text-red-500",
    images: [
      { src: RefreshmentSponsorImage, link: "https://www.example.com/refreshment" }
    ],
  },
];
