import Head from "next/head";
import Container from "@/components/Container";
import { NextSeo } from "next-seo";
import LayoutGA from '@/components/LayoutGA';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-700 transition hover:text-gray-500"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function project() {
  return (
    <Container>
      <Head>
        <title>jacklatimer.dev</title>
        <link rel="icon" href="./favicon.webp" />
        <meta
          name="keywords"
          content="Jack Latimer, css buttons, cssbuttons, r1"
        ></meta>
      </Head>
      <NextSeo
        title="Jack Latimer - cssbuttons"
        description="CSSBUTTONS - Collection of HTML & CSS Buttons"
      />
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h3 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          CSSBUTTONS V2
        </h3>
        <h2 className="mb-10 text-gray-600 dark:text-gray-400">
          cssbuttons is an MIT-licensed open source project full of pure CSS &
          HTML buttons for developers built-in React hosted on ▲Vercel.
        </h2>
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-3xl dark:text-white">
          CSSBUTTONS V2:
        </h3>
        <img src="./images/cssbuttonsv2.png"></img>
        <br />
        <img src="./images/cssbuttonsv2_button.png"></img>
        <br />
        <h3 className="text-2xl font-bold tracking-tight text-black md:text-3xl dark:text-white">
          CSSBUTTONS V1:
        </h3>
        <h2 className="mt-5 mb-10 space-x-4 text-gray-900 dark:text-gray-400">
          When I started thinking about cssbuttons I always needed a
          collection of buttons on a site which I could simply go to and paste
          the code when I needed. Before I had this idea I had to go to multiple
          different sites to find a button I liked and wanted to use for my
          project. I started having a bunch of different websites piled up in my
          notes from what buttons to use on the website I was working on at the
          time. So I came up with an idea to have a huge collection of buttons
          that I could simply copy & paste into my website.
        </h2>
        <img src="./images/cssbuttons_grid.webp"></img>
        <h2 className="mt-5 mb-10 space-x-4 text-gray-900 dark:text-gray-400">
          The design of the site was fairly simple. I wanted a grid layout where
          I could showcase each button in a box that I could simply click on
          then it would show me the code and the button.
        </h2>
        <img src="./images/cssbuttons_panel.webp"></img>
        <h2 className="mt-5 mb-10 space-x-4 text-gray-900 dark:text-gray-400">
          Then I added a side panel where I could put all of the links to the
          project and how to contribute as well as a logo for the top part of
          the site plus a few video tutorials on how to get started with CSS &
          HTML.
        </h2>
        <img src="./images/cssbuttons_layout.webp"></img>
        <h2 className="mt-5 mb-10 space-x-4 text-gray-900 dark:text-gray-400">
          So now I have the complete design where I could put buttons in the
          boxes and simply add the HTML button to with the corresponding CSS
          classes.
        </h2>
        <img src="./images/cssbuttons_code.webp"></img>
        <h2 className="mt-5 mb-10 space-x-4 text-gray-900 dark:text-gray-400">
          With the main part of the website done I had to make a page for the
          buttons code. For the code snippets I used preformatted text{" "}
          {"( <pre> )"} with code-prettify so I could colour the code.
        </h2>
        <img src="./images/cssbuttons_final.webp"></img>
        <h2 className="mt-5 mb-10 space-x-4 text-gray-900 dark:text-gray-400">
          With the final design done and the buttons added I then shared it to
          some websites where I could get the overall feedback for the site and
          it was very popular to my surprise. I have since gotten over 10000
          visitors to the site and great feedback.
        </h2>
        <img src="./images/cssbuttons_all.webp"></img>
        <h2 className="mt-2 mb-10 space-x-6 text-gray-900 dark:text-gray-400">
          You can find the project{" "}
          <a href="https://cssbuttons.vercel.app" target="_blank">
            if you click here
          </a>
          .
        </h2>
      </div>
    </Container>
  );
}
