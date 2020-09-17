import useSWR from 'swr'
import Person from '../components/Person'
import UrlLink from '../components/UrlLink'
import styles from '../styles.module.css'
import Loading from '../components/Loading'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {

  const { data, error } = useSWR('/api/people', fetcher)

 


  if (error) return <div>Failed to load</div>
  if (!data) return <div>{Loading()}</div>


  return (
    <ul>
      <li className={styles.hello}>
      { UrlLink('/info/video', 'Info')}
      </li>
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
  )
}
