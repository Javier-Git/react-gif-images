import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias, categorias}) => {

    const [inputValue, setinputValue] = useState('Puedes ingresar cualquier cosa');

    const inputValueHandle = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            //setCategorias( cats => [...cats, inputValue]); IMPORTANTE!!!
            setCategorias([inputValue, ...categorias, ]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
           <input 
                type="text"
                value={inputValue}
                onChange={inputValueHandle}
           />
        </form>
    )
}

//PropTypes

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
    categorias: PropTypes.array.isRequired
}

//DefaultProps

AddCategory.defaultProps = {
   
}

