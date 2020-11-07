import React, {useEffect, useState} from 'react'
import Chart from './Chart/Chart'
import Cards from './Cards/Cards'
import { fetchData } from '../api/index';
import styles from './index.module.css';

const Index = () => {
    const [data,setData] = useState({})
    useEffect(
      () => {
        async function fetchdata(){
          const response = await fetchData()
          setData({ ...response });
        }
        fetchdata()
      },
    [])
    return (
        <div className={styles.container}>
            <Cards data={data} />
            <Chart data={data} /> 
        </div>
    )
}

export default Index
