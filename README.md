## Stack:

- ReactJS 18
- CSS-Modules / SCSS

### Planned to add:

- Redux Toolkit
- React Router v6 (navigation)
- Axios + Fetch
-

## Project structure:

- src

  - assets (_global images, fonts_)
  - mock (_temporary data for testing, dummy database_)

  * components
    - UI (_reusable components_)
    - Layout (_page template - header {children} footer_)
    - Blocks (_other components_)

  - index.scss - _general styles_
  - variables.scss - _colors, shadows, media breakpoints, etc._

## Proposed Git workflow

Gitflow - https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow

---

### "Added Main Page Template" commit (+ fix commits):

- added project structure
  - assets
    - fonts
    - img
  - components
    - UI
      - Container (_site content positioning_)
      - Button
      - ItemCard
      - AddToFaavoriteBtn
      - svg icons
  - Layout
    - Header
    - Footer
  - Blocks
    - Banner
    - Brands
    - ItemsList (_block of product cards_)
  - mock
- added styles (scss modules)

### To do:

- complete ItemsList (big cards, versatility?)
