function News(props){
console.log(props);
    return(
        <div className="news">
            <div className="news-img">
            <img src={props.article.urlToImage}/>
            </div>
                <h1 className="title">{props.article.title}</h1>
                <p className="description">{props.article.description?.substring(0,100).concat('...')} <a href={props.article.url} target="_blank" className="readmore-btn">Read More</a></p>
                <div className="source">
                    <p>Author: {props.article.author?.substring(0,10)}</p>
                    <p>{props.article.source.name?.substring(0,10)}</p>
                </div>
        </div>
    )
}

export default News;