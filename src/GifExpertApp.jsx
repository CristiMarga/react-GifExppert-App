import React from 'react';
import { useState } from 'react';

import { AddCategory,GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    //console.log(categories);
    const onAddCategory = ( newCategory ) => {
        //console.log(newCategory);

        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            {/*titulo */}
            <h1>GifExpertApp</h1>

            {/*Input */}
            <AddCategory 

                onNewCategory={ (value) => onAddCategory(value)}
            //setCategories={setCategories}
            />

            {/*Listado de Gif */}
            {/*<button onClick={onAddCategory}>Agregar</button>*/}
        
        
        
        {
            categories.map( (category) => (
                <GifGrid 
                    key={category}
                    category={category}    
                />
            ))
        }
      
        
        {/*<li key={category}>{category} </li> */}
        
        
        </>
        
    );
}