import React from 'react'

function PostSearch(props) {
   const {onSearchItem} = props
   const [searchTitle , setSearchTitle] = React.useState('')

   React.useEffect(() =>{
      onSearchItem(searchTitle)
   }, [searchTitle])

   return (
      <div>
         <input 
            placeholder="Поиск"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
         />
      </div>
   )
}

export default PostSearch
