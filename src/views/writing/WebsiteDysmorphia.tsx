import React from "react";
import CustomMarkdown from "../../components/CustomMarkdown";

const markdown = `
# website dysmorphia

A little rant on my perfectionist struggle with balancing time and design of this website.

&nbsp;

&nbsp;

Does 16px spacing look good? 

##### *rerenders*

what about 8px?  

##### *rerenders*

7px

##### *rerenders*

6px

##### *rerenders*

6.5px

No, it still looks off?

&nbsp;

Building a website off a given design is easy, just copy the styles on Figma, do exactly what the designers want. But suddenly I want my own website, and I can't decide what font, color, spacing, format, navigation, or anything to use. Three days later and all I have is a \`<div/>\` and lorem ipsum that I call a hero section.

&nbsp;

I've studied human factors, biomedical design, human computer interaction, and did art for most of my early school life, but making things look good is hard. I want my website to embody that, to be a pleasant and perfect experience for every user to learn more about my work and my life. But I'm not sure how.

&nbsp;

It doesn't help that I'm red-green colour vision deficient (deuteranopia). My perception of color is and will always be skewed. At least with development, I have numbers assigned to colors, but picking a colour palette will always be difficult. Does it even look good? I think it looks good but do I trust what I see? 

&nbsp;

I finally settle on what you are seeing right now. Keep it simple, “minimalist”, a “less is more” kinda vibe. Grayscale to reduce the decisions and second guessing I need to make. I know I need make design choices and deploy this site, so that I can work on other projects or apply to jobs. I tell myself it's just a portfolio after all, it doesn't need to be perfect, just good enough. 

&nbsp;

Is that it? Am I finished my website once and for all? Is this 3rd time the charm? Or will I see other websites and their snazzy clean designs, end up disliking this one the longer I stare at it, and start over all again?

&nbsp;

Maybe its a bias because I've spent all this time building these pages, staring at them, adjusting them. Like how elite bodybuilders still edit their Instagram posts to make themselves look better despite being in the top 0.01% of human physiques.

&nbsp;

Maybe I'm just overthinking it and nobody will see this site.

&nbsp;

Maybe other people visit this page and think "damn this such an elegant personal site, what an interesting person" like I do when I see other portfolios.

&nbsp;

Or maybe I'm meant to redo my site every once in a while, change up the style, like a wardrobe change.

&nbsp;

Enjoy my website (please).
`;

const WebsiteDysmorphia = () => {
  return <CustomMarkdown markdown={markdown} />;
};

export default WebsiteDysmorphia;
