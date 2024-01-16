import styles from './Inicio.module.css'
import posts from 'json/posts.json'
import Postagem from 'components/Postagem'

const Inicio = () => {
    return(
        <ul className={styles.posts}>
            {posts.map(post => <li key={post.id}><Postagem postagem={post}/></li>)}
        </ul>
    )
}

export default Inicio