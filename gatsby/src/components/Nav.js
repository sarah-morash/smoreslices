import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  margin: 3rem 0;

  .logo {
    transform: translateY(-25%);
  }

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -10rem;

    @media (max-width: 800px) {
      margin-top: -6rem;
    }

    @media (max-width: 768px) {
      margin-top: -10rem;
    }

    li {
      --rotate: -2deg;
      transform: rotate(var(--rotate));
      order: 1;
      --rotate: -2.5deg;

      &:hover {
        --rotate: 8deg;
      }
    }

    a {
      font-size: 3rem;
      text-decoration: none;
      display: block;

      &:hover {
        color: var(--red);
      }
    }
  }

  @media (max-width: 800px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    --columns: 2;
    margin-bottom: 4rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;

    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }

    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }

    .logo {
      transform: none;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li className="logo-item">
          <Link to="/"><Logo>LOGO</Logo></Link>
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
