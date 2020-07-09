import {useRouter} from 'next/router';
import React from 'react';
import MainLayout from '../../components/MainLayout';

export default function Post({post}) {
  const router = useRouter();

  return (
      <MainLayout>
        <h1>post {router.query.id}</h1>
          <div>{post.id}</div>
          <div>{post.title}</div>
          <div>{post.body}</div>
      </MainLayout>
  )
}


Post.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();

  return {
    post
  }
};
