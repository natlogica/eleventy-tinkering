const { DateTime } = require("luxon");
const markdownIt = require("markdown-it"); // from binyamin, needed for backlinks

module.exports = function (eleventyConfig) {
  // This is from binyamin, needed for markdown links
  const markdownItOptions = {
    html: true,
    linkify: true,
  };

  // This block is from binyamin
  const md = markdownIt(markdownItOptions)
    .use(require("markdown-it-footnote"))
    .use(require("markdown-it-attrs"))
    .use(function (md) {
      // Recognize Mediawiki links ([[text]])
      md.linkify.add("[[", {
        validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
        normalize: (match) => {
          const parts = match.raw.slice(2, -2).split("|");
          parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
          match.text = (parts[1] || parts[0]).trim();
          match.url = `/notes/${parts[0].trim()}/`;
        },
      });
    });

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/icons"); // can I have two passthroughs?
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.setLibrary("md", md); // from binyamin

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // This from binyamin - use marndownify filter
  eleventyConfig.addFilter("markdownify", (string) => {
    return md.render(string);
  });

  eleventyConfig.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toLocaleString(
      DateTime.DATE_MED
    );
  });

  eleventyConfig.addFilter("randomItem", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      layouts: "_includes/layouts",
      partials: "_includes/partials",
    },
    // set default template engine to Nunjucks
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true, // copied from binyamin
  };
};
