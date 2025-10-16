import React from 'react'
import { Enchantment } from '../../../helpers/interfaces/screensInterfaces/DefensesInterfaces';

export default function EnchantmentComponent({name, level}: Enchantment) {
  return (
    <div style={{border: '1px solid black'}}>
       <p>{name} {`(Level ${level})`}</p>



    </div> 
  );
}
