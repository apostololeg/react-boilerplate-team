# react-boilerplate-default

## Customization
All changes are recommended in the `.env` file

If you need customize `.editorconfig` on local machine, create `.editorconfig` file in `./src` folder

## Code Style Guide
The project uses [Airbnb](https://github.com/airbnb/javascript) style guide for JavaScript

## Code Linting
The project uses eslint with a set of configs:
 - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
 - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)


## Deploing app

### production
```bash
npm run build
# or
yarn build
```

### develop
```bash
npm start
# or
yarn start
```
### format
```bash
npm run prettier
# or
yarn prettier
```

## Used packages

### Styling:
- [PostCSS](http://postcss.org/)
- [SugarSS](https://github.com/postcss/sugarss)

### Coding:
- [decko](https://github.com/developit/decko)
- [prop-types](https://github.com/facebook/prop-types)

### Polyfill:
- [babel-polyfill](https://babeljs.io/docs/usage/polyfill/)
- [whatwg-fetch](https://github.com/github/fetch)

### Formating
- [EditorConfig](http://editorconfig.org/)
- [Prettier](https://prettier.io/)
