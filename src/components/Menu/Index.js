import styles from './Menu.module.css'
import MenuLink from '../MenuLink'

const Menu = () => {
    return(
        <>
            <header>
                <nav className={styles.navegacao}>
                    <MenuLink link='/' nomeLink='Início'/>
                    <MenuLink link='/sobremim' nomeLink='Sobre Mim'/>
                </nav>
            </header>
        </>
    )
}

export default Menu