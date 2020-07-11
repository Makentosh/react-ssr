import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import MainLayout from '../../components/MainLayout';

export default function Post({post: serverPost}) {
  const router = useRouter();

  const [post, setPost] = useState(serverPost);

  useEffect(() => {

    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await response.json();

      setPost(data)
    }

    if(!serverPost) {
      load()
    }


  }, []);

  if(!post) {
    return (
        <MainLayout>
          <div>Loading.....</div>
        </MainLayout>
    )
  }
  return (
      <MainLayout>
        <h1>post {router.query.id}</h1>
          <div>{post.id}</div>
          <div>{post.title}</div>
          <div>{post.body}</div>
      </MainLayout>
  )
}


Post.getInitialProps = async ({query, req}) => {
  if (!req) {
    return { post: null}
  }

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return {
    post
  }
};
