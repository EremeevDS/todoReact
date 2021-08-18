import React from 'react'
import {Posts, CreatePost} from '../index'

import 'normalize.css'
import 'macro-css'
import './App.scss'

function App() {
   const [posts, setPosts] = React.useState([
      {id: 0, title: 'Эппл iphone 13', desc: 'lorem ipsum', popular: 2},
      {id: 1, title: 'microsoft', desc: 'sit dolor', popular: 1},
      {id: 2, title: 'а', desc: 'sit dolor', popular: 3},
      {id: 3, title: 'б', desc: 'sit dolor', popular: 2},
   ])

   const [searchValue, setSearchValue] = React.useState('')

   const deletePost = (id) =>{
      setPosts(posts.filter(p => p.id !== id))
   }
   const addPost = (newPost) => {
      setPosts([...posts, newPost])
   }
   const onFilter = (key) =>{
      const newArr = [...posts]
      const compare =(a,b) =>{
         const titleA = a.title.toUpperCase()
         const titleB = b.title.toUpperCase()

         let comparison = 0;
         if (titleA > titleB) {
            comparison = 1;
         } else if (titleA < titleB) {
            comparison = -1;
         }
         return comparison;
      }
      if (key === 'popular'){
         setPosts(newArr.sort((a,b) => b.popular - a.popular))
      }
      else{
         setPosts(newArr.sort(compare))
      }
   }
   const onSearchItem = (searchTitle) =>{
      setSearchValue(searchTitle)
   }
   const filteredPosts = posts.filter(post => {
      return post.title.toLowerCase().includes(searchValue)
   })
   return (
      <div className='wrapper m-auto mt-50'>
         <div className='d-flex justify-between'>
            <Posts
               posts={filteredPosts}
               deletePost={deletePost}
               onFilter={onFilter}
               onSearchItem={onSearchItem}
            />
            <CreatePost addPost={addPost}/>
         </div>
      </div>
   )
}

export default App
