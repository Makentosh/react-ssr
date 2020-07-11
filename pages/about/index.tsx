import Router from 'next/router';
import React from 'react';
import MainLayout from '../../components/MainLayout';

export default function About({title}) {

  return (
      <MainLayout title={'About'}>

        <h1>{title}</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, voluptatibus?</p>

        <button onClick={() => Router.push('/')}>go back to home</button>
      </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch(`http://localhost:4200/about`);
  const data = await response.json();

  return {
    title: data.title
  }
};

