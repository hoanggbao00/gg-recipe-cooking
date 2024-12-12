# Cooking Recipe App

Welcome to the Cooking Recipe App, a user-friendly and feature-rich platform for food enthusiasts. This app allows you to explore a vast collection of curated recipes, search and filter through them, and dive into the details of your favorite dishes.

## Folder Structure

The project's folder structure is as follows:

```
public/
src/
  ├── api/                          # Fake Data
  ├── components/                   # UI Components
  │   ├── common/                   
  │   ├── header/
  │   ├── ui/
  ├── config/                       # Config like axios, app settings...
  ├── pages/                        # Page's view, functional
  │   ├── homepage/
  │   │   ├── components/           # Page's components
  │   │   └── index.tsx             # Page's route define
  │   └── recipe/
  │       └── components/           # Page's components
  │       └── index.tsx             # Page's route define
  ├── routes/                       # All Routes with Lazy import
  ├── services/                     # Page's CRUD Services
  ├── types/                        # Type define
  └── lib/                          # Utils function
  App.tsx
  index.tsx
```

## Key Features

1. **Search and Filter**: Users can easily search for recipes by keywords, filter by cuisine, dietary preferences, and other criteria to find the perfect dish.

2. **Infinite Loading**: The app utilizes infinite scrolling, allowing users to seamlessly browse through a large number of recipes without needing to navigate through multiple pages.

3. **Hover Card Preview**: When users hover over a recipe card, they can get a preview of the dish, including the image, title, and a brief description, without having to navigate to the detail page.

4. **Recipe Detail Page**: Clicking on a recipe card takes the user to the detailed page, where they can find the full recipe, including ingredients, step-by-step instructions, and additional information such as cooking time, servings, and user ratings.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **@tanstack/react-query**: A powerful library for managing asynchronous state in React applications.
- **Shadcn/UI**: A collection of high-quality, accessible, and customizable UI components for React.
- **react-intersection-observer**: A library that provides a way to track when an element enters or exits the viewport.
- **Vite**: Template ReactJS