import styles from './Postagem.module.css'

const Postagem = ({postagem}) => {
    return(
        <div className={styles.post}>
            <img className={styles.capa} src={require(`/src/assets/posts/${postagem.id}/capa.png`)} alt={postagem.titulo} />
            <h2 className={styles.titulo}>{postagem.titulo}</h2>
            <button className={styles.botaoLer}>Ler</button>
        </div>
    )
}
export default Postagem