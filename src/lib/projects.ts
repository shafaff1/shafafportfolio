import juiceLabel from "@/assets/design_orange_LABEL_1.jpg.asset.json";
import juiceCan from "@/assets/mockup_3_own_tin_1_1.jpg.asset.json";
import card from "@/assets/mockup_1_card_1.jpg.asset.json";
import brochure from "@/assets/mockup_2_without_alo_1.jpg.asset.json";
import travel from "@/assets/TASK_6_1.jpg.asset.json";
import sneaker from "@/assets/task_11_flyer_1.jpg.asset.json";
import chicken from "@/assets/TASK_9_1.jpg.asset.json";
import business from "@/assets/TASK_12_1.jpg.asset.json";
import agency from "@/assets/TASK_13_1.jpg.asset.json";
import gadgets from "@/assets/TASK_14_1.jpg.asset.json";

export const CATEGORIES = ["All", "Branding", "Print", "Social Media", "Product Design"] as const;
export type Category = (typeof CATEGORIES)[number];

export type ProjectImage = { url: string; alt: string; label: string };

export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  services: string;
  description: string;
  images: ProjectImage[];
  /** grid emphasis */
  wide?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "orange-juice",
    title: "Fresh Orange Juice — Packaging",
    category: "Product Design",
    services: "Packaging Design, Label Design, Product Mockup",
    description:
      "A playful yet clean packaging system for a fresh orange juice drink, built around bold rounded lettering, fruit illustration and a warm orange palette. The artwork covers the full label layout including nutrition panel and product details, presented on a can mockup.",
    wide: true,
    images: [
      {
        url: juiceLabel.url,
        alt: "Fresh Orange Juice label artwork with nutrition facts panel, rounded logotype and orange slices",
        label: "Label artwork",
      },
      {
        url: juiceCan.url,
        alt: "Two Fresh Orange Juice cans resting on crushed ice showing the label design applied",
        label: "Can mockup",
      },
    ],
  },
  {
    id: "media-identity",
    title: "Media — Business Card Identity",
    category: "Branding",
    services: "Brand Identity, Business Card Design, Print Mockup",
    description:
      "A black and gold business card identity using a flowing ribbon motif across both sides. The layout keeps contact details clearly structured while the gold curve carries the brand mark.",
    images: [
      {
        url: card.url,
        alt: "Black and gold Media business card design shown front and back on a wooden surface",
        label: "Front & back",
      },
    ],
  },
  {
    id: "trifold-brochure",
    title: "IT Solutions — Trifold Brochure",
    category: "Print",
    services: "Print Layout, Brochure Design, Editorial Design",
    description:
      "A trifold business brochure for an IT services company using a blue and black colour system, curved photo cutouts and a clear information hierarchy across cover, features and contact panels.",
    wide: true,
    images: [
      {
        url: brochure.url,
        alt: "Blue and black trifold business brochure design for an IT solutions company shown as a folded mockup",
        label: "Trifold layout",
      },
    ],
  },
  {
    id: "travel-flyer",
    title: "Travel Flyer Layout",
    category: "Print",
    services: "Flyer Design, Print Layout, Typography",
    description:
      "A travel flyer built on strong diagonal blocks and numbered content sections, balancing a large photographic focal point with amber accents and structured supporting information.",
    images: [
      {
        url: travel.url,
        alt: "Travel flyer design with a traveller photo, amber diagonal panels and numbered information blocks",
        label: "Flyer",
      },
    ],
  },
  {
    id: "sneaker-promo",
    title: "Sneaker New Arrival Promo",
    category: "Social Media",
    services: "Social Media Design, Advertising Design",
    description:
      "A dark, high-contrast product promotion post for a sneaker launch. Outlined display typography frames the product cutout while the discount and call to action anchor the lower corners.",
    images: [
      {
        url: sneaker.url,
        alt: "Dark sneaker new arrival social media post with red accents, outlined typography and an order now button",
        label: "Post design",
      },
    ],
  },
  {
    id: "chicken-offer",
    title: "Fried Chicken Offer Post",
    category: "Social Media",
    services: "Social Media Design, Food Promotion Design",
    description:
      "A food promotion post combining a blue and yellow palette, halftone texture and diagonal bands to spotlight the dish and the discount badge.",
    images: [
      {
        url: chicken.url,
        alt: "Blue and yellow fried chicken promotional post with fifty percent off badge and order now button",
        label: "Post design",
      },
    ],
  },
  {
    id: "grow-business",
    title: "Grow Business — Instagram Ad",
    category: "Social Media",
    services: "Instagram Advertising Design, Layout Design",
    description:
      "A light, corporate advertising creative using rounded outline containers, a red accent colour and a cut-out portrait. Contact details and a QR code sit in a clearly separated footer block.",
    images: [
      {
        url: business.url,
        alt: "Grow Business Faster Instagram advertisement design with a businessman portrait, red accents and QR code",
        label: "Ad creative",
      },
    ],
  },
  {
    id: "marketing-agency",
    title: "Digital Marketing Agency Post",
    category: "Social Media",
    services: "Social Media Design, Typography, Layout Design",
    description:
      "A clean agency promotion post led by large stacked typography and a circular portrait treatment in green. A single call-to-action button and contact bar keep the message direct.",
    images: [
      {
        url: agency.url,
        alt: "Digital marketing agency social media post with large typography, green circular portrait frame and book a call button",
        label: "Post design",
      },
    ],
  },
  {
    id: "gadget-store",
    title: "Gadget Store Question Mark Concept",
    category: "Social Media",
    services: "Social Media Design, Concept Design",
    description:
      "A minimal concept post where the subject and background shapes form a question mark, matching the headline. Generous white space keeps the store details easy to read.",
    images: [
      {
        url: gadgets.url,
        alt: "Minimal gadget store social media post where a portrait and green shapes form a question mark",
        label: "Post design",
      },
    ],
  },
];

export const WHATSAPP_NUMBER = "919445750889";
export const WHATSAPP_MESSAGE =
  "Hi Shafaf, I came across your portfolio and would like to discuss a design project.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const EMAIL = "shafaf.cool2008@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/shafafl";
