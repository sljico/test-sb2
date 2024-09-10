import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)} className="text-center mt-4">
    {JSON.stringify(blok)}
  </main>
);

export default Page;
