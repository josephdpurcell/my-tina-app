import { defineConfig, LocalAuthProvider } from "tinacms";
import Post from "./collections/post";

// const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const accessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN as string;
const owner = process.env.GITHUB_OWNER as string;
const repo = process.env.GITHUB_REPO;
const branch = process.env.GITHUB_BRANCH;

const auth = new LocalAuthProvider();

export default defineConfig({
  contentApiUrlOverride: "/api/tina/gql",
  authProvider: auth,
  // clientId: process.env.TINA_CLIENT_ID!,
  // branch: branch,
  // token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [Post],
  },

  // contentApiUrlOverride: "/api/tina/gql",
  // build: {
  //   publicFolder: "public",
  //   outputFolder: "admin",
  // },
  // media: {
  //   tina: {
  //     mediaRoot: "",
  //     publicFolder: "public",
  //     static: true,
  //   },
  // },
  // schema: {
  //   collections: [TinaUserCollection, PageCollection],
  // },
});
