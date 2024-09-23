import { defineConfig, LocalAuthProvider } from "tinacms";
import Post from "./collections/post";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const auth = new LocalAuthProvider();

// A hack to allow only setting the prop non-locally but preserve typing
const hack = {};
if (!isLocal) {
  hack["contentApiUrlOverride"] = "/api/tina/gql";
}

export default defineConfig({
  ...hack,
  authProvider: auth,
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

  // media: {
  //   tina: {
  //     mediaRoot: "",
  //     publicFolder: "public",
  //     static: true,
  //   },
  // },
});
