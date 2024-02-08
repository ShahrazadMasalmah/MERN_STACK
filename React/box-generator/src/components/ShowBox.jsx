import React from 'react';
import styles from './component.module.css';

const ShowBox = (props) => {

    return (
        <div className={ styles.boxs }>
            {
                props.sendColor.map((item, index) => (
                    <div className={ styles.box } key={index} style={{ backgroundColor: item }}></div>
                ))
            }
        </div>
    );
}

export default ShowBox;