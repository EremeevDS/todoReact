import React from 'react'
import PropTypes from 'prop-types'

import {Button} from '../../UI'

import PostItemStyles from './PostItem.module.scss'

function PostItem(props) {
   const {posts, deletePost} = props

   return (
         <div className={PostItemStyles.wrapper}>
            {posts.map(obj =>(
               <article className={PostItemStyles.post} key={obj.id}>
                  <strong>{obj.title}</strong>
                  <p>{obj.desc}</p>
                  <Button onClick={() => deletePost(obj.id)}>удалить</Button>
               </article>
            ))}
         </div>
   )
}

PostItem.propTypes = {
   posts : PropTypes.arrayOf(PropTypes.shape({
      id : PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      desc : PropTypes.string.isRequired
   })).isRequired,
   deletePost : PropTypes.func.isRequired
}

export default PostItem
