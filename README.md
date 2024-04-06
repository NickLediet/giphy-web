# React + TypeScript + Vite

## Setup

1. Copy `env/.env.example` to `env/.env`
2. Update `env/.env` with your credentials
3. Run `npm run dev`

## Todos:
- [ ] Data service layer
- [ ] Components
  - [ ] QuerySection
    - [ ] EVENT: selected (emits: String query, String text, Postion:Enum position)
  - [ ] Result Section
    - [ ] States
      - [ ] Loading
      - [ ] Error
      - [ ] Content/PreviewImageList
    - [ ] Props
      - [ ] String query
      - [ ] String text
      - [ ] Position:Enum position
      - [ ] String[] imageUrls
  - [ ] PreviewImageList
    - [ ] 
  - [x] PreviewImage
    - [x] props
      - [x] String text
      - [x] Position:Enum position
      - [x] String imageUrl
    - [x] Functionality
      - [x] Renders alt text

  - [ ] Pagination => Just use one from Radix (maybe just buttons)

## To be removed

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
