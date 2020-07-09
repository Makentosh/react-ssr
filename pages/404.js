import Link from 'next/link';
import MainLayout from '../components/MainLayout';
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
  return (
      <MainLayout>
        <h1 className={classes.error}>404 Error</h1>
        <p>Go to safety </p>
        <p><Link href={'/'}><a>Go Home</a></Link></p>
      </MainLayout>
  )
}
