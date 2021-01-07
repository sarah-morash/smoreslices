import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 400px;

  @media (max-width: 1024px) {
    grid-auto-rows: auto auto 300px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
  }
`;

const PizzaStyles = styled.div`
  display: grid;

  /* Row sizing from parent div instead */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }

  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  max-height: 500px;

  @media (max-width: 1024px) {
    max-height: 400px;
  }

  h2,
  p {
    margin: 0;
  }
`;

export function SinglePizza({ pizza }) {
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name} 🍕</span>
        </h2>
      </Link>
      <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </PizzaStyles>
  );
}
export default function PizzaList({ pizzas }) {
  return (
    <PizzaGridStyles>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </PizzaGridStyles>
  );
}
