import './App.sass';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

const parser = new XMLParser();

function App() {
  
  const [data, setData] = useState([]);

  useEffect(()=>{
      axios.get("https://careers.moveoneinc.com/rss/all-rss.xml")
        .then(res => setData(parser.parse(res.data)['rss']['channel']));
  }, []);

  console.log(data);
  return (
    <>
      <div className="posts-list">
        {
          // data.map((e, idx) => {
          //   return (
          //     <div key={idx} className="post-box">
          //       <a href={e.link} target="_blank">
          //         <img className="post-img" src={e.jetpack_featured_media_url} />
          //         <p className="post-title">{e.title.rendered}</p>
          //       </a>
          //       <a className="post-author" href={e._links.author[0].href} target="_blank">author</a>
          //       <p className="post-date">{e.date}</p>
          //     </div>
          //   )
            
          // })
        }
      </div>
    </>
  );
}

export default App;
