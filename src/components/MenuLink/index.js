import { Link, useLocation } from 'react-router-dom'
import styles  from './MenuLink.module.css'

const MenuLink = ({link, nomeLink}) => {
    const localizacao = useLocation()

    return(
        <Link to={link} className={`${styles.link} ${localizacao.pathname === link ? styles.linkDestacado : ''}`}>
            {nomeLink}
        </Link>
    )
}

export default MenuLink