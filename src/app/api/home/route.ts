import { NextResponse } from "next/server";

// StoryInfo is sample front page story info
interface StoryInfo {
  title: string;
  subtitle: string;

  subject: "biology" | "physics" | "computer science";

  authors: string[];

  date: number;

  titleImgSrc: string;

  format: "article" | "video" | "podcast";
}

export interface GetHomeResult {
  mainCard: StoryInfo;
  recentArticles: StoryInfo[];
}

const mainCardInfo: StoryInfo = {
  title: "The Wood Wide Web: Scientists Debate Whether Trees Really Talk",
  subtitle:
    "From Ted Lasso to TED Talks, the theory of the “wood-wide web” is everywhere, and some scientists argue that it is overblown and unproven.",

  subject: "biology",
  authors: ["Edward Chen"],
  date: Date.now(),
  titleImgSrc: "https://i.ibb.co/mBHqZXq/biology.jpg",
  format: "article",
};

const recentCardInfo: StoryInfo[] = [
  {
    title:
      "To Reignite the U.S. Chip Industry, Invite More Chefs into the Kitchen",
    subtitle:
      "A “more is merrier” approach to making computer chips would create the vibrant and fast breakthroughs that America needs to succeed",

    subject: "computer science",
    authors: ["Jane Doe"],
    date: Date.now(),
    titleImgSrc: "https://i.ibb.co/HFFq9Kv/compsci.jpg",
    format: "article",
  },
  {
    title:
      "Space photo of the week: Hubble spots a twisted 'train-wreck' galaxy that may hide a cosmic illusion",
    subtitle:
      "The Hubble Space Telescope's stunning image of the dusty 'train-wreck' galaxy NGC 4753 reveals what may be one of the greatest optical illusions in the nearby universe.",
    subject: "physics",
    authors: ["Jane Doe", "John Doe"],
    date: Date.now(),
    titleImgSrc: "https://i.ibb.co/3B94fnc/physics.jpg",
    format: "article",
  },
  {
    title:
      "miR-34 regulates larval growth and wing morphogenesis by directly modulating ecdysone signalling and cuticle protein in Bombyx mori",
    subtitle:
      "microRNAs (miRNA) are small non-coding RNAs that modulate the myriad biological activities by targeting genes, and many studies showed that miRNAs played a pivotal role in insect development. Here, we find that Bm-miRNA (miR-34) controls larval growth and wing morphology by targeting BmE74 and BmCPG4. Overexpression of miR-34 in the whole body caused a smaller body size, partially displays deformed wings and venation defects in adults.",
    subject: "biology",
    authors: ["Jane Doe", "John Doe"],
    date: Date.now(),
    titleImgSrc: "https://i.ibb.co/9Tz1g3H/biology-nmj.png",
    format: "article",
  },
];

export async function GET() {
  return NextResponse.json({
    mainCard: mainCardInfo,
    recentArticles: recentCardInfo,
  } as GetHomeResult);
}
