import React, { useEffect, useState } from 'react'

function Searchbox() {

    const url = `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${limit}`
    const [data, setData] = useState ([]);

    const fetchData = () => {
        return fetch (url)
        .then((res)=> res.json())
        .then((d)=> setData(d));
    };

    useEffect(() => {
        fetchData(); 
    },[]);

  return (
    
    <center>
        {data.map((dataObj) =>{
            return(
                <div className='box'>
                    <div class='card'>
                        <div class='category'>@{dataObj.username}</div>
                            <div class='heading'>
                                {dataObj.name}
                                <div class='author'>{dataObj.email}</div>
                            </div>
                    </div>
                </div>
            )
        })}
    </center>

  );
}

export default Searchbox
