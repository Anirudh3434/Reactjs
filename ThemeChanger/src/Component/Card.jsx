import React from 'react';
import { usetheme } from '../Context/Theme';
import '../App.css';
import Toggle from './Toggle';

const Card = () => {
  const { BoxTheme } = usetheme();

  return (
    <div className={`${BoxTheme}`}>
     
     <div className="img">
            <img src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" alt="" width='200px' height='200px'/>
                </div> 

                <div className="content">
            <span>Name: Anirudh Bhardwaj</span>
            <span>DOB: 11/08/2002</span>
            <span>Position: SDE-1 </span>
            </div>
          <Toggle/>
    </div>
  );
};

export default Card;
