module.exports = () => ({
  plugins: {
    stylelint: {
      /**
       *  https://stylelint.io/user-guide/rules/
       */
      "rules": {
        "at-rule-blacklist": [],
        "at-rule-empty-line-before": "always",
        "at-rule-name-case": "lower",
        "at-rule-name-newline-after": "always-multi-line",
        "at-rule-name-space-after": "always",
        "at-rule-no-unknown": true,
        "at-rule-no-vendor-prefix": true,
        "at-rule-semicolon-newline-after": "always",
        "at-rule-semicolon-space-before": "never",
        // "at-rule-whitelist": [],
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-space-after": "always-single-line",
        "block-closing-brace-space-before": "always",
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        "color-hex-case": "lower",
        "color-hex-length": "long",
        "color-named": "never",
        "color-no-invalid-hex": true,
        "comment-empty-line-before": "always",
        "comment-no-empty": true,
        "comment-whitespace-inside": "always",
        "comment-word-blacklist": [],
        "custom-property-empty-line-before": "never",
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": "never",
        // "declaration-property-unit-blacklist": {},
        // "declaration-property-unit-whitelist": {},
        // "declaration-property-value-blacklist": {},
        // "declaration-property-value-whitelist": {},
        "font-family-name-quotes": "always-where-recommended",
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        "font-weight-notation": "numeric",
        "function-blacklist": [],
        "function-calc-no-unspaced-operator": true,
        "function-comma-space-after": "always",
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "never-multi-line",
        "function-parentheses-space-inside": "never",
        "function-url-quotes": "always",
        // "function-url-scheme-blacklist": [],
        // "function-url-scheme-whitelist": [],
        // "function-whitelist": [],
        "function-whitespace-after": "always",
        "length-zero-no-unit": true,
        "max-empty-lines": 1,
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        // "media-feature-name-blacklist": [],
        "media-feature-name-case": "lower",
        "media-feature-name-no-unknown": true,
        "media-feature-name-no-vendor-prefix": true,
        // "media-feature-name-whitelist": [],
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        // "no-descending-specificity": true,
        "no-duplicate-at-import-rules": true,
        // "no-duplicate-selectors": true,
        "no-empty-source": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": true,
        "no-missing-end-of-source-newline": true,
        "no-unknown-animations": true,
        "number-leading-zero": "always",
        "number-max-precision": 10,
        "number-no-trailing-zeros": true,
        // "property-blacklist": [],
        "property-case": "lower",
        "property-no-unknown": true,
        "property-no-vendor-prefix": true,
        // "property-whitelist": string|[],
        "selector-attribute-brackets-space-inside": "never",
        // "selector-attribute-operator-blacklist": [],
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        // "selector-attribute-operator-whitelist": [],
        "selector-attribute-quotes": "never",
        // "selector-combinator-blacklist": [],
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        // "selector-combinator-whitelist": [],
        "selector-descendant-combinator-no-non-space": true,
        "selector-list-comma-newline-after": "always-multi-line",
        "selector-list-comma-newline-before": "never-multi-line",
        "selector-list-comma-space-after": "always-single-line",
        "selector-list-comma-space-before": "never",
        "selector-max-empty-lines": 0,
        "selector-no-vendor-prefix": true,
        // "selector-pseudo-class-blacklist": [],
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        // "selector-pseudo-class-whitelist": string|[],
        // "selector-pseudo-element-blacklist": string|[],
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        // "selector-pseudo-element-whitelist": string|[],
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "string-quotes": "double",
        "time-min-milliseconds": 0,
        // "unit-blacklist": [],
        // "unit-whitelist": [],
        "unit-case": "lower",
        "unit-no-unknown": true,
        "value-keyword-case": "lower",
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,
        "value-no-vendor-prefix": true
      }
    },
    /**
     * https://github.com/browserslist/browserslist#best-practices
     */
    autoprefixer: {
      "browsers": ["> 0.5%", "last 2 versions", "iOS >= 8", "IE 10", "IE 11"]
    },
    /**
     * http://cssnano.co/guides/optimisations/
     */
    cssnano: {
      "autoprefixer": false,
      "colormin": true,
      "discardComments": true,
      "discardDuplicates": true,
      "discardEmpty": true,
      "minifySelectors": true,
      "normalizeCharset": true,
      "normalizeDisplayValues": true,
      "normalizePositions": true,
      "normalizeRepeatStyle": true,
      "normalizeString": true,
      "normalizeWhitespace": true,
      "normalizeUrl": true,
      "orderedValues": true,
      "safe": true,
    }
  }
});
