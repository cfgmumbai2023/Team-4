import React from 'react'
import Form from './components/Form/Form'
const App = () => {
  return (
    <div>
<<<<<<< Updated upstream
      <Form/>
=======
      
      <BrowserRouter>
      <Navbar/>
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/videos" exact element={<Videos/>} />
          </Routes>
    </BrowserRouter>

>>>>>>> Stashed changes
    </div>
  )
}

export default App
