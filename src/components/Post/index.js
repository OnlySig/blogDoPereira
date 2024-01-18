import { Route, Routes, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import posts from 'json/posts.json'
import PostModelo from 'components/PostModelo'
import "./Post.css"
import NotFound from 'components/Paginas/NotFound'
import PaginaPadrao from 'components/PaginaPadrao'
import Postagem from 'components/Postagem'

const Post = () => {
    const params = useParams()
    const postAchado = posts.find(post => post.id === Number(params.id))
    if(!postAchado) return <NotFound/>
    const fotoCapa = require(`assets/posts/${postAchado.id}/capa.png`)
    const filtro = posts.filter(post => post.id !== Number(params.id))
    const filtroSelecionado = filtro.slice(0, 4)
    return(
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo fotoCapa={fotoCapa} titulo={postAchado.titulo}>
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {postAchado.texto}
                            </ReactMarkdown>
                            <div className="outrosPosts__container">
                                <h2>Outros posts que você pode gostar:</h2>
                                <div className="elementosFiltrados">
                                    {filtroSelecionado.map(post => <div key={post.id}><Postagem postagem={post}/></div>)}
                                </div>
                            </div>
                        </div>
                    </PostModelo>
                }/>
            </Route>
        </Routes>
    )
}

export default Post