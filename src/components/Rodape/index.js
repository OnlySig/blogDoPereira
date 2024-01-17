import { Link } from 'react-router-dom'
import styles from './Rodape.module.css'
import svgMarca from 'assets/marca_registrada.svg'

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
            <img src={svgMarca} alt="Rodape" /> <span>Desenvolvido por <Link to="https://github.com/OnlySig" target='_blanck'>Pereira</Link></span>
        </footer>
    )
}

export default Rodape