import { Link } from 'react-router-dom'
import styles from './Postagem.module.css'
import BotaoPrincipal from 'components/BotaoPrincipal'

const Postagem = ({postagem}) => {
    const fotoCapa = require(`/src/assets/posts/${postagem.id}/capa.png`)
    return(
        <Link to={`/posts/${postagem.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={fotoCapa} alt={postagem.titulo} />
                <h2 className={styles.titulo}>{postagem.titulo}</h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}
export default Postagem