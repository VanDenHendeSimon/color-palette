import Head from "next/head";
import React from 'react';

import { defaultSeoProps } from "../data/DefaultSeoProps";
import { domain } from "../data/Globals";

/* https://www.linkedin.com/post-inspector/inspect/ */
/* https://developers.facebook.com/tools/debug/ */
/* https://cards-dev.twitter.com/validator */

export const SEO = ({ titleSuffix, description, pathName }: { titleSuffix?: string; description?: string; pathName?: string; }) => {
  return (
    <div>
      <Head>
        <title>{`${defaultSeoProps.title} ${titleSuffix ? titleSuffix : ""}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content={`${defaultSeoProps.title} ${titleSuffix ? titleSuffix : ""}`} />
        {/* 100-160 characters */}
        <meta property="og:description" content={description ? description : defaultSeoProps.description} />
        <meta property="og:image" content={defaultSeoProps.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:alt" content="Image of a billboard with the GoPubly logo inside" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="GoPubly" />
        <meta property="og:url" content={`https://${domain}/${pathName ? pathName : ""}`} />

        <meta name="googlebot" content="noodp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Simon Van Den Hende" />

      </Head>
    </div>
  );
};
