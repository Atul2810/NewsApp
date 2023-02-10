import React, { useEffect, useState,useRef } from 'react'
import News from './News';
import './NewsApp.css'


function NewsApp() {
    const apikey='5bcaafaeb12b43b9b180e3496bc78c58';

    const [newsList,setNewsList]=useState([]);
    const InputValue=useRef('');
    const [query,setQuery]=useState('tesla');
    const apiUrl=`https://newsapi.org/v2/everything?q=${query}&from=2023-01-01&sortBy=publishedAt&apiKey=${apikey}`

    useEffect(()=>{
        fetchData();
    },[query]);

    async function fetchData(){
        try{
        const response=await fetch(apiUrl);
        const jsonData=await response.json();
        setNewsList(jsonData.articles);
        }
        catch(error){
            console.log('error occured')
        }
    }
    function handleOnSubmit(event){
        event.preventDefault();
        setQuery(InputValue.current.value);
    }
  return (
    <div className='container'>
        <div>
            <form onSubmit={handleOnSubmit}>
                <input className='input' type="text" ref={InputValue} />
                <input  className="submit" type="submit" />
            </form>
        </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,30%)',justifyContent:'space-between',rowGap:'20px'}}>
      {newsList.map((news)=>{
        return <News key={news.url} news={news}/>
      })}
    </div>
    </div>
  )
}

export default NewsApp
