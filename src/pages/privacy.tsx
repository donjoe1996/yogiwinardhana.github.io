import React from "react";
import {LegalSection} from "gatsby-theme-portfolio-minimal/src/sections/Legal";
import {Page} from "gatsby-theme-portfolio-minimal/src/components/Page";
import {Seo} from "gatsby-theme-portfolio-minimal/src/components/Seo";

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
      </Page>
    </>
  );
}
