import { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://netflix-clone-martstech.vercel.app";

export const defaultSEO: DefaultSeoProps = {
  title: "Netflix Clone",
  description:
    "Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Netflix Clone",
    images: [
      {
        url: `${baseUrl}/meta/og-image.png`,
        alt: "Netflix Clone",
      },
    ],
  },
};
