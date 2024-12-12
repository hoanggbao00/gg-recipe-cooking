import { IRecipe } from "@/types/recipe";

export const recipes: IRecipe[] = [
  {
    id: '1',
    name: 'Spaghetti Carbonara',
    images: [
      '/images/spaghetti/Spaghetti-Carbonara-1.jpg',
      '/images/spaghetti/Spaghetti-Carbonara-2.jpeg',
      '/images/spaghetti/Spaghetti-Carbonara-3.jpg',
    ],
    ingredients: [
      { name: 'spaghetti', image: '/images/spaghetti/spaghetti.jpg', amount: '400g' },
      { name: 'eggs', image: '/images/spaghetti/eggs.webp', amount: '4 large' },
      { name: 'pancetta', image: '/images/spaghetti/pancetta.jpeg', amount: '150g' },
      { name: 'parmesan cheese', image: '/images/spaghetti/parmesan-cheese.webp', amount: '50g' },
      { name: 'black pepper', image: '/images/spaghetti/black-pepper.jpeg', amount: 'to taste' },
    ],
    instructions: [
      'Cook spaghetti according to package instructions.',
      'In a bowl, whisk eggs and grated parmesan cheese.',
      'Fry pancetta until crispy.',
      'Toss hot spaghetti with egg mixture and pancetta.',
      'Season with black pepper and serve immediately.'
    ],
    cuisine: 'Italian',
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    servings: 4,
    difficulty: 'Medium',
    description: 'A classic Roman pasta dish that combines crispy pancetta with a creamy egg sauce.'
  },
  {
    id: '2',
    name: 'Chicken Tikka Masala',
    images: [
      '/images/chicken/Chicken-Tikka-Masala.webp',
      '/images/chicken/Chicken-Tikka-Masala2.jpg',
      '/images/chicken/Chicken-Tikka-Masala3.jpg',
    ],
    ingredients: [
      { name: 'chicken', image: '/images/chicken/chicken.jpg', amount: '500g' },
      { name: 'yogurt', image: '/images/chicken/yogurt.jpg', amount: '1 cup' },
      { name: 'tomato sauce', image: '/images/chicken/tomato-sauce.jpg', amount: '400g' },
      { name: 'cream', image: '/images/chicken/cream.jpg', amount: '1 cup' },
      { name: 'spices', image: '/images/chicken/spices.jpg', amount: 'as needed' },
    ],
    instructions: [
      'Marinate chicken in yogurt and spices for 2 hours.',
      'Grill or bake the marinated chicken until cooked through.',
      'Prepare a sauce with tomato, cream, and additional spices.',
      'Combine grilled chicken with the sauce.',
      'Simmer for 10-15 minutes and serve with rice.'
    ],
    cuisine: 'Indian',
    prepTime: '2 hours 15 minutes',
    cookTime: '30 minutes',
    servings: 4,
    difficulty: 'Medium',
    description: 'A popular Indian dish featuring tender chicken pieces in a rich, creamy tomato-based sauce.'
  },
  {
    id: '3',
    name: 'Spaghetti Carbonara2',
    images: [
      '/images/spaghetti/Spaghetti-Carbonara-1.jpg',
      '/images/spaghetti/Spaghetti-Carbonara-2.jpeg',
      '/images/spaghetti/Spaghetti-Carbonara-3.jpg',
    ],
    ingredients: [
      { name: 'spaghetti', image: '/images/spaghetti/spaghetti.jpg', amount: '400g' },
      { name: 'eggs', image: '/images/spaghetti/eggs.webp', amount: '4 large' },
      { name: 'pancetta', image: '/images/spaghetti/pancetta.jpeg', amount: '150g' },
      { name: 'parmesan cheese', image: '/images/spaghetti/parmesan-cheese.webp', amount: '50g' },
      { name: 'black pepper', image: '/images/spaghetti/black-pepper.jpeg', amount: 'to taste' },
    ],
    instructions: [
      'Cook spaghetti according to package instructions.',
      'In a bowl, whisk eggs and grated parmesan cheese.',
      'Fry pancetta until crispy.',
      'Toss hot spaghetti with egg mixture and pancetta.',
      'Season with black pepper and serve immediately.'
    ],
    cuisine: 'Italian',
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    servings: 4,
    difficulty: 'Medium',
    description: 'A classic Roman pasta dish that combines crispy pancetta with a creamy egg sauce.'
  },
  {
    id: '4',
    name: 'Chicken Tikka Masala2',
    images: [
      '/images/chicken/Chicken-Tikka-Masala.webp',
      '/images/chicken/Chicken-Tikka-Masala2.jpg',
      '/images/chicken/Chicken-Tikka-Masala3.jpg',
    ],
    ingredients: [
      { name: 'chicken', image: '/images/chicken/chicken.jpg', amount: '500g' },
      { name: 'yogurt', image: '/images/chicken/yogurt.jpg', amount: '1 cup' },
      { name: 'tomato sauce', image: '/images/chicken/tomato-sauce.jpg', amount: '400g' },
      { name: 'cream', image: '/images/chicken/cream.jpg', amount: '1 cup' },
      { name: 'spices', image: '/images/chicken/spices.jpg', amount: 'as needed' },
    ],
    instructions: [
      'Marinate chicken in yogurt and spices for 2 hours.',
      'Grill or bake the marinated chicken until cooked through.',
      'Prepare a sauce with tomato, cream, and additional spices.',
      'Combine grilled chicken with the sauce.',
      'Simmer for 10-15 minutes and serve with rice.'
    ],
    cuisine: 'Indian',
    prepTime: '2 hours 15 minutes',
    cookTime: '30 minutes',
    servings: 4,
    difficulty: 'Medium',
    description: 'A popular Indian dish featuring tender chicken pieces in a rich, creamy tomato-based sauce.'
  },
  {
    id: '5',
    name: 'Spaghetti Carbonara3',
    images: [
      '/images/spaghetti/Spaghetti-Carbonara-1.jpg',
      '/images/spaghetti/Spaghetti-Carbonara-2.jpeg',
      '/images/spaghetti/Spaghetti-Carbonara-3.jpg',
    ],
    ingredients: [
      { name: 'spaghetti', image: '/images/spaghetti/spaghetti.jpg', amount: '400g' },
      { name: 'eggs', image: '/images/spaghetti/eggs.webp', amount: '4 large' },
      { name: 'pancetta', image: '/images/spaghetti/pancetta.jpeg', amount: '150g' },
      { name: 'parmesan cheese', image: '/images/spaghetti/parmesan-cheese.webp', amount: '50g' },
      { name: 'black pepper', image: '/images/spaghetti/black-pepper.jpeg', amount: 'to taste' },
    ],
    instructions: [
      'Cook spaghetti according to package instructions.',
      'In a bowl, whisk eggs and grated parmesan cheese.',
      'Fry pancetta until crispy.',
      'Toss hot spaghetti with egg mixture and pancetta.',
      'Season with black pepper and serve immediately.'
    ],
    cuisine: 'Italian',
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    servings: 4,
    difficulty: 'Medium',
    description: 'A classic Roman pasta dish that combines crispy pancetta with a creamy egg sauce.'
  },
  {
    id: '6',
    name: 'Chicken Tikka Masala3',
    images: [
      '/images/chicken/Chicken-Tikka-Masala.webp',
      '/images/chicken/Chicken-Tikka-Masala2.jpg',
      '/images/chicken/Chicken-Tikka-Masala3.jpg',
    ],
    ingredients: [
      { name: 'chicken', image: '/images/chicken/chicken.jpg', amount: '500g' },
      { name: 'yogurt', image: '/images/chicken/yogurt.jpg', amount: '1 cup' },
      { name: 'tomato sauce', image: '/images/chicken/tomato-sauce.jpg', amount: '400g' },
      { name: 'cream', image: '/images/chicken/cream.jpg', amount: '1 cup' },
      { name: 'spices', image: '/images/chicken/spices.jpg', amount: 'as needed' },
    ],
    instructions: [
      'Marinate chicken in yogurt and spices for 2 hours.',
      'Grill or bake the marinated chicken until cooked through.',
      'Prepare a sauce with tomato, cream, and additional spices.',
      'Combine grilled chicken with the sauce.',
      'Simmer for 10-15 minutes and serve with rice.'
    ],
    cuisine: 'Indian',
    prepTime: '2 hours 15 minutes',
    cookTime: '30 minutes',
    servings: 4,
    difficulty: 'Medium',
    description: 'A popular Indian dish featuring tender chicken pieces in a rich, creamy tomato-based sauce.'
  },
  {
    id: '7',
    name: 'Spaghetti Carbonara4',
    images: [
      '/images/spaghetti/Spaghetti-Carbonara-1.jpg',
      '/images/spaghetti/Spaghetti-Carbonara-2.jpeg',
      '/images/spaghetti/Spaghetti-Carbonara-3.jpg',
    ],
    ingredients: [
      { name: 'spaghetti', image: '/images/spaghetti/spaghetti.jpg', amount: '400g' },
      { name: 'eggs', image: '/images/spaghetti/eggs.webp', amount: '4 large' },
      { name: 'pancetta', image: '/images/spaghetti/pancetta.jpeg', amount: '150g' },
      { name: 'parmesan cheese', image: '/images/spaghetti/parmesan-cheese.webp', amount: '50g' },
      { name: 'black pepper', image: '/images/spaghetti/black-pepper.jpeg', amount: 'to taste' },
    ],
    instructions: [
      'Cook spaghetti according to package instructions.',
      'In a bowl, whisk eggs and grated parmesan cheese.',
      'Fry pancetta until crispy.',
      'Toss hot spaghetti with egg mixture and pancetta.',
      'Season with black pepper and serve immediately.'
    ],
    cuisine: 'Italian',
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    servings: 4,
    difficulty: 'Medium',
    description: 'A classic Roman pasta dish that combines crispy pancetta with a creamy egg sauce.'
  },
  {
    id: '8',
    name: 'Chicken Tikka Masala4',
    images: [
      '/images/chicken/Chicken-Tikka-Masala.webp',
      '/images/chicken/Chicken-Tikka-Masala2.jpg',
      '/images/chicken/Chicken-Tikka-Masala3.jpg',
    ],
    ingredients: [
      { name: 'chicken', image: '/images/chicken/chicken.jpg', amount: '500g' },
      { name: 'yogurt', image: '/images/chicken/yogurt.jpg', amount: '1 cup' },
      { name: 'tomato sauce', image: '/images/chicken/tomato-sauce.jpg', amount: '400g' },
      { name: 'cream', image: '/images/chicken/cream.jpg', amount: '1 cup' },
      { name: 'spices', image: '/images/chicken/spices.jpg', amount: 'as needed' },
    ],
    instructions: [
      'Marinate chicken in yogurt and spices for 2 hours.',
      'Grill or bake the marinated chicken until cooked through.',
      'Prepare a sauce with tomato, cream, and additional spices.',
      'Combine grilled chicken with the sauce.',
      'Simmer for 10-15 minutes and serve with rice.'
    ],
    cuisine: 'Indian',
    prepTime: '2 hours 15 minutes',
    cookTime: '30 minutes',
    servings: 4,
    difficulty: 'Medium',
    description: 'A popular Indian dish featuring tender chicken pieces in a rich, creamy tomato-based sauce.'
  },
]

