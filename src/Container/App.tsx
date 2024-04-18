import React from 'react';
import { Header, Footer } from '../Components/Layout';
import { ForecastItemDetails, Home, Homework1, Login, NotFound, Register } from '../Pages';
import { ModalWindow } from '../Components/ModalWIndow';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    
    <div>
      <Header />

      <div className='pb-5'>
       
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/forecastItemDetails/:forecastItemId' element={<ForecastItemDetails />}> </Route>
            <Route path='/homework1' element ={<Homework1/>}> </Route>

            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        
      </div>
      <Footer />
    </div>

  );
}

export default App;


//  <NotFound/>
//<Home/>
//<ModalWindow/>