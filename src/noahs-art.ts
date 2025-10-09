// src/noahs-art.ts

export interface Episode {
  id: number;
  title: string;
  releaseDate: string;
  description: string;
  aura?: string;
  access?: string;
}

export interface Character {
  name: string;
  description: string;
  coin?: string;
  specialAbilities?: string[];
}

export const characters: Character[] = [
  {
    name: "Feathers",
    description:
      "A blues-wailing peacock inspired by Muddy Waters and Howlin’ Wolf. His feathers contain tiny blockchain blocks.",
    coin: "Ark Coin",
    specialAbilities: ["Musical NFT drops", "Narrative influence"],
  },
  {
    name: "Hoodlum",
    description:
      "A rooster with deep, husky rap style, uniquely his own. Influences story arcs and stakes Ark Coin.",
    coin: "Ark Coin",
    specialAbilities: ["Performance episodes", "NFT-gated content"],
  },
  {
    name: "Guardian",
    description:
      "The watchful owl, embodies wisdom and network security. Protects Noah’s Protocol with PQC.",
    coin: "Guardian Coin",
    specialAbilities: ["Network security", "Governance", "Staking"],
  },
  {
    name: "Knight",
    description:
      "The black stallion representing speed and efficiency in the network. Helps accelerate platform interactions.",
    coin: "Knight Coin",
    specialAbilities: ["Staking", "Governance", "Network acceleration"],
  },
];

export const episodes: Episode[] = [
  {
    id: 0,
    title: "Genesis Wave",
    releaseDate: "TBA",
    description:
      "Ark Signal Detected. The Ark awakens and broadcasts coordinates hidden inside a spectrum no human eye has seen.",
  },
  {
    id: 1,
    title: "Fractal Current",
    releaseDate: "TBA",
    description:
      "Meme Coin Bloom. Each character crystallizes into a living manifesto, minting coins and unlocking NFT content.",
  },
  {
    id: 2,
    title: "Chromatic Rift",
    releaseDate: "TBA",
    description:
      "Splintered Alliances. Holders choose alignments and fund missions that alter Noah's Art physics.",
  },
  {
    id: 3,
    title: "Aurora Assembly",
    releaseDate: "TBA",
    description:
      "Ark Council Convenes. Validators gather over a prism sea drafting treaties that shape destinies.",
  },
  {
    id: 10,
    title: "Chorus of Mirrors",
    releaseDate: "Aug 02, 2025",
    description:
      "Collectors co-compose a ritual chant that splinters into eight mirror-verses. Decisions determine which realities survive and which collapse.",
    aura: "Refraction",
    access: "NFT Reserve",
  },
  {
    id: 11,
    title: "Arkfall Bazaar",
    releaseDate: "Sep 13, 2025",
    description:
      "A floating marketplace over the Prism Sea where meme coins manifest as familiars guiding new collectors.",
    aura: "Marketplace",
    access: "NFT Reserve",
  },
  {
    id: 12,
    title: "The Silent Orbit",
    releaseDate: "Oct 21, 2025",
    description:
      "Ark validators go offline for 12 minutes, letting holders pilot the Ark alone. Collective choices ripple across the multiverse.",
    aura: "Resonance",
    access: "NFT Reserve",
  },
];
