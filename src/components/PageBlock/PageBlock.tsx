import React, { ReactNode } from 'react';
import styles from './PageBlock.module.css';

interface BlockProps {
    header: string;
    children: ReactNode;
}

const PageBlock = ({header, children}:BlockProps) => {
  return (
    <>
    <div className={'card text-bg-primary mb-4 mx-auto'} style={{width: "35rem"}}>
        <div className='card-header'>{header}</div>
        <div className='card-body'>
            <p className='card-text'>{children}</p>
        </div>
    </div>
    </>
  )
}

export default PageBlock