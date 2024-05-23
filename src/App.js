import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Department from './Pages/Department'
import FoodandDrink from './Pages/FoodandDrink'
import Food from './Pages/Food'
import Drinks from './Pages/Drinks'
import Smoking from './Pages/Smoking'
import Lighter from './Pages/Lighter'
import Electrical from './Pages/Electrical'
import Essentional from './Pages/Essentional'
import Poundline from './Pages/Poundline'
import Bathroombeauty from './Pages/Bathroombeauty'
import Firstaidpharmacy from './Pages/Firstaidpharmacy'
import Electric from './Pages/Electric'
import Diytools from './Pages/Diytools'
import Partybin from './Pages/Partybin'
import Craft from './Pages/Craft'
import Carproduct from './Pages/Carproduct'
import Candels from './Pages/Candels'
import Foods from './Pages/Foods'
import Supersunday from './Pages/Supersunday'
import Palletdeals from './Pages/Palletdeals'
import Shopbybrand from './Pages/Shopbybrand'
import Newarrivals from './Pages/Newarrivals'
import Giftcard from './Pages/Giftcard'
import Login from './Components/Login'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/deparments' element={<Department/>}/>
        <Route path='/foodanddrinks' element={<FoodandDrink/>}/>
        <Route path='/foods' element={<Food/>}/>
        <Route path='/drinks' element={<Drinks/>}/>
        <Route path='/smoking' element={<Smoking/>}/>
        <Route path='/lighter' element={<Lighter/>}/>
        <Route path='/electrical' element={<Electrical/>}/>
        <Route path='/essentional' element={<Essentional/>}/>
        <Route path='/poundline' element={<Poundline/>}/>
        <Route path='/bathroombeauty' element={<Bathroombeauty/>}/>
        <Route path='/First Aid Pharmacy Personal' element={<Firstaidpharmacy/>}/>
        <Route path='/Electric' element={<Electric/>}/>
        <Route path='/Diy' element={<Diytools/>}/>
        <Route path='/Disposables Party Bin Liners' element={<Partybin/>} />
        <Route path='/Craft' element={<Craft/>} />
        <Route path='/Carproduct' element={<Carproduct/>} />
        <Route path='/Candles Air Freshner' element={<Candels/>} />
        <Route path='/Food' element={<Foods/>} />
        <Route path='/Supersunday' element={<Supersunday/>} />
        <Route path='/Palletdeals' element={<Palletdeals/>} />
        <Route path='/Shopbybrand' element={<Shopbybrand/>} />
        <Route path='/Newarrivals' element={<Newarrivals/>} />
        <Route path='/Giftmakercard' element={<Giftcard/>} />
        <Route path='/Brighthomly' element={<Giftcard/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App