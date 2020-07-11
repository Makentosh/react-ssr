import React from 'react';
import Link from 'next/link';

export default function MainLayout({children, title}) {
  return (
      <>
        <nav>
          <p>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
          </p>
          <p>
            <Link href={'/about'}>
              <a>About</a>
            </Link>
          </p>

          <p>
            <Link href={'/posts'}>
              <a>Posts</a>
            </Link>
          </p>
        </nav>

        <main>
          <h1>{title}</h1>
          {children}
        </main>

        <style jsx>
          {`
            nav {
              position: fixed;
              height: 60px;
              left: 0;
              top: 0;
              right: 0;
              background: darkblue;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
            
            nav a {
              color: white;
              text-decoration: none;
            }
            
            main {
              padding-top: 60px;
            }
          `}
        </style>
      </>
  )
}
