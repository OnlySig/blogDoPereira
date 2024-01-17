import PostModelo from 'components/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'
import styles from './SobreMim.module.css'

const SobreMim = () => {
    return(
        <PostModelo fotoCapa={fotoCapa} titulo='Sobre mim'>
            <h3 className={styles.subtitulo}>Olá, eu sou Gabriel!</h3>
            <img className={styles.fotoSobreMim} src={fotoSobreMim} alt="Foto do pereira, em uma qualidade duvidosa"/>
            <p className={styles.paragrafo}>Oi, tudo bem? Eu sou um futuro dev Front-end hoje em dia estou estudando na Alura e estou feliz de te ver por aqui.</p>
            <p className={styles.paragrafo}>Minha história com programação começou em uma conversa com um grande amigo, na qual me recomendou estudar e me aprofundar na area. No começo estudei lógica de programação e o básico de várias linguagens, como Java, C, Javascript, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia se eu iria pegar o gosto ou so seria algo temporário.</p>
            <p className={styles.paragrafo}>No ensino técnico, escolhi cursar Análise e desenvolvimento de sistemas na Universidade Paulista (unip). Lá eu me aprofundei não apenas em programação, mas tambem na parte de segurança, qualidade, regras, leis e etc.</p>
            <p className={styles.paragrafo}>Ao mesmo tempo que estava na faculdade, continuei meus estudos em programação, sempre me aperfeiçoando e evoluindo.</p>
            <p className={styles.paragrafo}>Para mim não é mais uma escolha de sim ou não, se der certo continuar ou se não der tentar outra coisa, programar é o que eu sei fazer, é o meu lazer, é o meu ócio, é o meu sacerdôcio, é a minha terapia. É por isso que não é mais uma escolha, e sim uma caminhada que NÀO IMPORTE o quão distante eu esteja de um SIM, porem serão os NÃO que me darão a resiliência e disciplina para continuar e fazer meu sonho realidade.</p>
            <p className={styles.paragrafo}>Agradeço a Deus por tudo que ele ja me deu, pela sorte que eu tive até aqui. Deus abençoe a qualquer pessoa que esteja lendo essa histôria/desabafo de um humilde estudante.</p>
        </PostModelo>
    )
}

export default SobreMim