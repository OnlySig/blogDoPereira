import styles from './Rodape.module.css'
import svgMarca from 'assets/marca_registrada.svg'

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
            <img src={svgMarca} alt="Rodape" /> Desenvolvido por qualquer um
        </footer>
    )
}

export default Rodape