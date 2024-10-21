# Nuxt 3 ESLint Config

[ESlint](https://eslint.org/) config used for Nuxt.js 3.

## Usage

1. Add this package to your devDependencies

```bash
npm i -D https://github.com/wiopriph/nuxt3-eslint-config
```

2. Create a `.eslintrc.js` file

3. Extend our config:

```javascript
module.exports = {
    root: true,
    extends: [
        '@wiopriph/nuxt3-eslint-config',
    ],
};
```
