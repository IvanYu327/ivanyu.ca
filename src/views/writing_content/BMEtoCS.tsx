import React from "react";

import CustomMarkdown from "../../components/CustomMarkdown";

const markdown = `
# Biomedical Engineering to Computer Science. Why?

I started my university education in Biomedical Engineering (BME), but transferred to Computer Science halfway through my second year. I get asked why a lot, so here's my brief answer.

&nbsp;

##### Why are you applying for this job as a Biomedical Engineer?

I got asked this question a lot in interviews. You're a biomedical engineer, why are you applying for this software engineering job? I would always answer with something along the lines of "I love software engineering and I want to learn more about it". 

Truth is, the BME courseload starts with 2 CS courses before even touching a biology course. In that time and my panic of not knowing how to code when I started university, I did projects and taught myself to code and found that I really enjoyed software engineering and the variety of fields it could be applied to.

&nbsp;

##### You didn't like Biomedical Engineering?

No. I loved Biomedical Engineering. The program was an interseciton of every subject I excelled at and enjoyed in high school. Biology, math, physics, chemistry, problem solving. The course content was fascinating, especially the design courses, that gave a very in-depth study of the implications of our work as an engineer and how it can save or cost lives.

I'd like to think my short background in Biomedical Engineering is an asset. I've found that in my internships, my studies in human factors engineering shines through, enabling me to draw on scientific evidence to make design decisions. I also have a better understanding of the implications of my work as a software engineer, and how it can affects a user's lives.

&nbsp;

##### So why did you transfer?

I think that Biomedical Engineering at uWaterloo is an amazing program if you are interested in pursuing that field. But as I explored my interests, I spent most of my time and work in software engineering. Objectively, a Computer Science degree would be more relevant to my interests and career goals. I applied, was accepted to transfer, and I took the risk.

&nbsp;

##### Final thoughts

Transferring to CS was a risk. I had friends in Biomedical Engineering. I loved the program content and projects. CS could suck, I could fail my classes, I could hate it. A CS degree could be worthless when I graduate. Maybe BME degrees will boom in 5 or 10 years. Who knows? 

But so far it's been great, I have new friends, I love my classes, and I'm excited to see where it takes me.

And on the plus side, I now have space to take ceramics and fine arts courses, which is quite fun to re-explore my childhood art interests.

&nbsp;

Hopefully this somewhat answers those questions. If not, I hope it encourages you to try new things and take risks.
`;

const BMEtoCS = () => {
  return <CustomMarkdown markdown={markdown} />;
};

export default BMEtoCS;
