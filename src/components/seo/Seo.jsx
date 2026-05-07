import { Helmet } from "react-helmet-async";
import { siteSeo } from "../../data/seoData";

export default function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noIndex = false,
}) {
  const pageTitle = title || siteSeo.defaultTitle;
  const pageDescription = description || siteSeo.defaultDescription;
  const pageImage = image || siteSeo.defaultImage;

  const canonicalUrl = `${siteSeo.siteUrl}${path}`;
  const absoluteImageUrl = pageImage.startsWith("http")
    ? pageImage
    : `${siteSeo.siteUrl}${pageImage}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />
      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={siteSeo.siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {siteSeo.twitterHandle ? (
        <meta name="twitter:site" content={siteSeo.twitterHandle} />
      ) : null}
    </Helmet>
  );
}
