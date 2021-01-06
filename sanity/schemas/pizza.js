import { MdLocalPizza as icon } from 'react-icons/md';

import PriceInput from '../components/PriceInput';

export default {
  // Computer Name
  name: 'pizza',
  // Visible title
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(1000),
      inputComponent: PriceInput,
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      toppings0: 'toppings.0.name',
      toppings1: 'toppings.1.name',
      toppings2: 'toppings.2.name',
      toppings3: 'toppings.3.name',
      vegetarian0: 'toppings.0.vegetarian',
      vegetarian1: 'toppings.1.vegetarian',
      vegetarian2: 'toppings.2.vegetarian',
      vegetarian3: 'toppings.3.vegetarian',
    },
    prepare: ({ title, media, ...toppings }) => {
      const toppingNames = Object.entries(toppings).filter(
        (top) => top[0].includes('toppings') && Boolean(top[1])
      );
      const nonVegetarianToppings = Object.entries(toppings).filter(
        (top) => top[0].includes('vegetarian') && top[1] === false
      );
      const toppingsToDisplay = toppingNames.map((top) => top[1]);

      return {
        title: `${title} ${nonVegetarianToppings.length === 0 ? '🌱' : ''}`,
        media,
        subtitle: toppingsToDisplay.join(', '),
      };
    },
  },
};
0;
