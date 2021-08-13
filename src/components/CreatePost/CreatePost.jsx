import React from 'react'
import PropTypes from 'prop-types'

import CreatePostStyles from './CreatePost.module.scss'

import {Button} from '../../UI'

function CreatePost(props) {

   const {addPost} = props

   const [post, setPost] = React.useState({title : '', desc : '', popular: null,})
   
   const buttons = [
      {text: 'Не важно', value: 1},
      {text: 'Важно', value: 2},
      {text: 'Очень важно', value: 3}
   ]

   const onAddPost = (e) =>{
      e.preventDefault()
      const newPost = {
         id: Date.now(),
         title: post.title,
         desc: post.desc,
         popular: post.popular,
      }
      const onAdd = (() => addPost(newPost))
      onAdd()
      setPost({title : '', desc : '', popular: null})
   }

   const onSetPopular = (e) =>{
      e.preventDefault()
      setPost({...post, popular: Number(e.target.value)})
   }

   return (
      <form className={CreatePostStyles.form}>
         <input
            className={CreatePostStyles.input}
            onChange={(e) => setPost({...post, title: e.target.value})}
            placeholder='Заголовок'
            value={post.title}
         />
         <textarea
            className={CreatePostStyles.input}
            onChange={(e) => setPost({...post, desc: e.target.value})}
            placeholder='Описание'
            value={post.desc}
         />
         <div>
            {buttons.map(b =>(
               <Button
                  key={b.value}
                  value={b.value}
                  onClick={onSetPopular}
                  className={post.popular === b.value ? CreatePostStyles.active : ''}
               >
                  {b.text}
               </Button>
            ))}
         </div>
         <Button
            className={CreatePostStyles.button}
            onClick={onAddPost}
         >Добавить</Button>
      </form>
   )
}

CreatePost.propTypes = {
   addPost: PropTypes.func.isRequired
}

export default CreatePost
