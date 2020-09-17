import { useRouter } from 'next/router'
import VideoPlayer from '../../components/VideoPlayer'
import styles from '../../styles.module.css'
import Rating from '../../components/Rating'

export default function Video() {
  const { query } = useRouter()

  return (
    <div className={styles.center}>
      <div >
        { VideoPlayer( 'https://www.youtube.com/watch?v=fBJ2WyYP2uU' )}
      </div>
      <div>
        {Rating( '5', '80')}
      </div>
    </div>
  )
}
