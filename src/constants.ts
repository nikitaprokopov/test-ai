export const ROUTES = {
  HELP_CENTER: "/help-center",
  TRY_FREE: "/try-free",
  HOME: "/",
} as const;

export interface Girl {
  imgSrc: string;
  name: string;
  text: string;
}

export const GIRLS: Record<string, Girl> = {
  NASTYA: {
    name: "Nastya",
    imgSrc:
      "https://drblhamzrmg7zjvc.public.blob.vercel-storage.com/imgs/v5k4wa5l08mt6o9af526sw9xkr-C84AJffyGT9cKi08p2fUsQdl6dlgjr.webp",
    text: "Hey guys Nastya here, i love gaming, streaming and meeting new people! Lets chat!",
  },
  JENNA: {
    name: "Jenna",
    imgSrc:
      "https://drblhamzrmg7zjvc.public.blob.vercel-storage.com/imgs/v5k4wa5l08mt6o9af526sw9xkr-C84AJffyGT9cKi08p2fUsQdl6dlgjr.webp",
    text: "Hey guys Jenna here, i love gaming, streaming and meeting new people! Lets chat!",
  },

  LIZA: {
    name: "Liza",
    imgSrc:
      "https://drblhamzrmg7zjvc.public.blob.vercel-storage.com/imgs/v5k4wa5l08mt6o9af526sw9xkr-C84AJffyGT9cKi08p2fUsQdl6dlgjr.webp",
    text: "Hey guys Liza here, i love gaming, streaming and meeting new people! Lets chat!",
  },

  KATYA: {
    name: "Katya",
    imgSrc:
      "https://drblhamzrmg7zjvc.public.blob.vercel-storage.com/imgs/v5k4wa5l08mt6o9af526sw9xkr-C84AJffyGT9cKi08p2fUsQdl6dlgjr.webp",
    text: "Hey guys Katya here, i love gaming, streaming and meeting new people! Lets chat!",
  },
};
