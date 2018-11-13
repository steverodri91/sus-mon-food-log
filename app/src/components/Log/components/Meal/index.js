import React from 'react';
import Food from '../../../Food';

export default function Meal(props){
  return (
    <div className='meal'>
    {props.meal.map(food =>
      <Food
        food={food}
      />
    )}
    </div>
  )
}