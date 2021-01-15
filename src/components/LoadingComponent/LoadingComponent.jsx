import React from 'react';
import ReactLoading from 'react-loading';
import styles from './LoadingComponent.module.scss';

const LoadingComponent = () => {
   return <ReactLoading
   className={styles.loading}
   type={'spokes'}
   color={'black'}
   height={'50px'}
   width={'50px'}/>
};

export default LoadingComponent;