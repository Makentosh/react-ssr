import Router from 'next/router';
import React from 'react';
import MainLayout from '../../components/MainLayout';

export default function Index() {

  return (
      <MainLayout>
        <div> about page</div>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, voluptatibus?</p>

        <button onClick={() => Router.push('/')}>go back to home</button>
      </MainLayout>
  )
}
