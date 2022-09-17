import React from "react";
import {Page} from "gatsby-theme-portfolio-minimal/src/components/Page";
import {Seo} from "gatsby-theme-portfolio-minimal/src/components/Seo";
import {AboutSection} from "gatsby-theme-portfolio-minimal/src/sections/About";
import {ContactSection} from "gatsby-theme-portfolio-minimal/src/sections/Contact";
import {HeroSection} from "gatsby-theme-portfolio-minimal/src/sections/Hero";
import {InterestsSection} from "gatsby-theme-portfolio-minimal/src/sections/Interests";
import {ProjectsSection} from "gatsby-theme-portfolio-minimal/src/sections/Projects";


export default function IndexPage() {
  return (
    <>
      <Seo title="I Made Yogi Winardhana" />
      <Page useSplashScreenAnimation>
        <>
          <HeroSection sectionId="hero" />
          <AboutSection sectionId="about" heading="I Made Yogi Winardhana" />
          <InterestsSection sectionId="skills" heading="Skills" />
          <ProjectsSection sectionId="projects" heading="Projects" />
          <ContactSection sectionId="contact" heading="Contact" />
        </>
      </Page>
    </>
  );
}
