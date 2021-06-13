import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifImages } from './GifImages';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball']);

    const addCategory = (item) => {
        setCategorias([...categorias, 'Digimon']);
    }

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory 
            setCategorias={setCategorias}
            categorias={categorias}
        />
        <hr/>
        <ol>
           {
               categorias.map((item) =>
                   <GifImages 
                        key={item}
                        category={item}
                   />
               )
           }
        </ol>
        <button onClick={ addCategory }>Agragar</button>
        </>
    );
}

