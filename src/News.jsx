function News(props){
console.log(props);
    return(
        <div className="news">
            <div className="news-img">
                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage}/>:
                    <img src="https://imgs.search.brave.com/S3T3B8nahnuwGHbVWX6JrrDTeQ9cKkw7nxC8Vabl9lU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg5LzU1LzE1/LzM2MF9GXzg5NTUx/NTk2X0xkSEFaUnd6/M2k0RU00SjBOSE5I/eTJoRVVZRGZYYzBq/LmpwZw"/>
                }
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