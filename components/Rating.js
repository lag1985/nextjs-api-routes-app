import React from 'react';
import ReactStars from 'react-stars'
import styles from '../styles.module.css'

export  default function Rating( _count, _size,){

    return (
            <ReactStars
             count= {_count} 
             size={_size} 
             color2={'#ffd700'} />
    )
}

