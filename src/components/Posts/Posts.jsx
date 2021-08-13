import React from 'react'
import PropTypes from 'prop-types'

import {PostItem, PostFilter} from '../index'

import PostStyles from './Posts.module.scss'

function Posts(props) {
   const {posts, deletePost, onFilter} = props
   return (
      <div className={PostStyles.posts}>
            <div className={`${PostStyles.header} d-flex justify-between align-center`}>
               <h2>POST</h2>
               <PostFilter onFilter={onFilter}/>
            </div>
            {posts.length ? 
               <PostItem posts={posts} deletePost={deletePost}/>
            :
               <h1>хуй</h1>
            }
      </div>
   )
}

Posts.propTypes = {
   posts : PropTypes.arrayOf(PropTypes.shape({
      id : PropTypes.number,
      title : PropTypes.string,
      description : PropTypes.string
   })),
   deletePost : PropTypes.func,
}
export default Posts