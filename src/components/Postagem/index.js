import { Link } from 'react-router-dom'
import styles from './Postagem.module.css'

const Postagem = ({postagem}) => {
    const fotoCapa = require(`/src/assets/posts/${postagem.id}/capa.png`)
    return(
        <Link to={`/posts/${postagem.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={fotoCapa} alt={postagem.titulo} />
                <h2 className={styles.titulo}>{postagem.titulo}</h2>
                <button className={styles.botaoLer}>Ler</button>
            </div>
        </Link>
    )
}
export default Postagem