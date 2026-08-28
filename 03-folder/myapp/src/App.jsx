import React from 'react'
import Card from './components/Card.jsx'

const App = () => {

  return(
    <div className="parent">
      <Card user='Bunty' age={21} img="https://i.pinimg.com/736x/e4/05/a4/e405a4bf0e11429cad246b9b849e3bf2.jpg"/>
      <Card user='Alice' age={22} img="https://i.pinimg.com/736x/78/4b/41/784b41fe63174257cf9321feffe01afa.jpg"/>
      <Card user='Bob' age={23} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOUNvyGvZhEHJF6D4ZTllMBHjIhT285dZRbVHaRRz9M8YGU1jGOgME5tA&s=10"/>
      <Card user='Charlie' age={24} img="https://i.pinimg.com/236x/43/ce/73/43ce73b2533b533883066892e3f14900.jpg"/>
    </div>

  )
}
  
export default App
