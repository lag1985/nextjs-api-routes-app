import React from 'react';
import ReactPlayer from "react-player";
import styles from '../styles.module.css'

export  default function VideoPlayer( _url){
    return (
           <ReactPlayer url={_url} /> 
           )
}