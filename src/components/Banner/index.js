import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/fotoGit.jpg'

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Gabriel Pereira, estudante e futuro dev em Front-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="circuloColorido" aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Gabriel Pereira" aria-hidden={true} />
            </div>
        </div>
    )
}
export default Banner