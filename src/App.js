import './App.css';
import {useEffect} from 'react'
import { useState } from 'react';
import News from './News';

function App() {

  let [articles,setArticles] = useState([]);

  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=india&from=2024-04-05&apiKey=08167649afd14634a754d23691fd556b")
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
    })
  },[])

  return (
    <div className="App">
      <header className='header'>
          <h1>News Nest</h1>
          <input type='search' placeholder='Search News'/>
      </header>
      <section className='news-articles'>
        {
          articles.map((article)=>{
            return(

              <News article={article}/>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
