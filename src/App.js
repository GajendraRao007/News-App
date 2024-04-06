import './App.css';
import {useEffect} from 'react'
import { useState } from 'react';
import News from './News';

function App() {

  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("india");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-04-05&apiKey=08167649afd14634a754d23691fd556b`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[category])

  return (
    <div className="App">
      <header className='header'>
          <h1>News Nest</h1>
          <input type='search' onChange={(event)=>{
            if(event.target.value!=""){
              setCategory(event.target.value);
            }else{
              setCategory("india")
            }
          }} placeholder='Search News'/>
      </header>
      <section className='news-articles'>
        {

          articles.length!==0?

          articles.map((article)=>{
            return(

              <News article={article}/>
            )
          })
          :
          <h1>News Not Found For Searched Text</h1>
        }
      </section>
    </div>
  );
}

export default App;
