import Link from 'next/link'
import styles from '../styles.module.css'

export default function UrlLink( _url, _name) {
  return (
    <li className={styles.hello}>
      <Link href= {_url}>
        <a>{_name}</a>
      </Link>
    </li>
  )
}
