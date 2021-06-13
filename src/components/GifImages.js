import React, { useEffect, useState } from 'react'
import getImagenes from '../helpers/getGif';

export const GifImages = ({category}) => {

    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        getImagenes(category).then(setImagenes);
    }, [category]);

    return (
        <div className="card">
            <h3>{category}</h3>
            <ol>
            {
                imagenes.map(({id, title, url}) => <li key={id}>{title} <img src={url} alt={title}></img></li>)
            }
            </ol>
        </div>
    )
}
