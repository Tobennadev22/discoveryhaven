import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "../data/site";

function upsert(selector, create) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(attr, key, content) {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute(attr, key);
    return m;
  });
  if (content) el.setAttribute("content", content);
  else el.remove();
}

// Per-route title, description, canonical URL and share preview.
// `path` defaults to the current route.
export function Seo({ title, description, path }) {
  const { pathname } = useLocation();
  const canonicalPath = path || pathname;

  useEffect(() => {
    const fullTitle =
      title && title !== SITE.name ? `${title} | ${SITE.name}` : `${SITE.name} | Big ideas. Brave voices.`;
    const url = `${SITE.url}${canonicalPath === "/" ? "/" : canonicalPath}`;
    const image = SITE.shareImage
      ? new URL(SITE.shareImage, SITE.url).toString()
      : "";

    document.title = fullTitle;
    setMeta("name", "description", description);
    upsert('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    }).setAttribute("href", url);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE.name);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, canonicalPath]);

  return null;
}
