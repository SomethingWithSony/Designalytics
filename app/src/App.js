import './App.scss';
import Header from './components/Header/Header';
import SalesChart from './components/SalesChart/SalesChart'
import Statistics from './components/Statistics/Statisctis';
import EarningsVisitorsChart from './components/Earnings&Visitors/EarningsVisitorsChart';
import Person from './components/Person/Person';
import Navbar from './components/Navbar/Navbar';


import { useState } from 'react';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
   <div className='wrapper'>
      <Header onMenuClick={toggleMenu}/>
      <Navbar isOpen={isMenuOpen} onClose={toggleMenu}/> 
      <SalesChart/>
      <Statistics/>
      <EarningsVisitorsChart/>
      <div className='teste'>
        <Person name="Jane Doe" position="Google Ads"></Person>
        <Person name="Jane Doe" position="Google Ads"></Person>
        <Person name="Jane Doe" position="Google Ads"></Person>
        <Person name="Jane Doe" position="Google Ads"></Person>
        <Person name="Jane Doe" position="Google Ads"></Person>
      </div>
      
   </div>


  );
}

export default App;
