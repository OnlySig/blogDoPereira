import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import posts from 'json/posts.json'
import PostModelo from 'components/PostModelo'
import "./Post.css"
import NotFound from 'components/Paginas/NotFound'

const Post = () => {
    const params = useParams()
    const postAchado = posts.find(post => post.id === Number(params.id))
    if(!postAchado) {
        return <NotFound/>
    }
    const fotoCapa = require(`assets/posts/${postAchado.id}/capa.png`)
    return(
        <PostModelo fotoCapa={fotoCapa} titulo={postAchado.titulo}>
            <div className='post-markdown-container'>
                <ReactMarkdown>
                    {postAchado.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}

export default Post