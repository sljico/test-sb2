import {
  getStoryblokApi,
  StoryblokClient,
  ISbStoriesParams,
  StoryblokStory,
  storyblokInit,
  apiPlugin,
} from "@storyblok/react/rsc";
import Teaser from "../components/Teaser";
import Page from "../components/Page";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
  },
});

export default function RootLayout({ children }) {
  const bridgeOptions = { resolveRelations: ["article.author"] };

  return (
    <html lang="en">
      <body>{children}</body>
      {/* <StoryblokBridgeLoader options={bridgeOptions} /> */}
    </html>
  );
}
