import React, {useEffect, useState} from 'react';
import MainLayout from '../components/MainLayout';
import Link from 'next/link';

export default function Posts({postes}) {
  // const [posts, setPosts] = useState([]);


  // useEffect(() => {
  //
  //   // setPosts(postes)
  //   // async function load() {
  //   //   const response = await fetch('http://localhost:4200/posts')
  //   //   const json = await response.json()
  //   //
  //   //   setPosts(json)
  //   // }
  //   //
  //   // load()
  // },[]);


  return (
      <MainLayout>
        <div> posts page </div>

        <ul>
          {postes.map(post => (
              <li key={post.id}>
                <Link href={'/post/[id]'} as={`/post/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
          ))}

        </ul>
      </MainLayout>
  )
}

Posts.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/posts')
  const posts = await response.json()

  return {
    postes: posts
  }
};
