import React,{useEffect, useState} from 'react'



export const Pagina = () => {
  let api = `https://rickandmortyapi.com/api/character/?name=`;
  let [fetchedData, updateFetchedData] = useState([]);
  console.log(fetchedData)
const busca=(informacion)=>{
  updateFetchedData(informacion)
}
  const buscador= (event) => {
    if(event.keyCode===13){
      const searchterm=document.getElementById('searchterm').value
      let url = api+searchterm
      fetch(url)
      .then(response=>response.json())
      .then(data=>busca(data.results))
    }
}
  

     return (
       <div className="pagina">
  
  <input type="text" id="searchterm"  onKeyDown={buscador}   />
  
  {fetchedData.map((Vale,Marlon)=>{
    return(
      <div>
     
      <div class="card">
       
      
      <div class="card-image">
      <img src={Vale.image} id="image" alt=""/>
      </div>
      <div class="card-text">
      <h1>{Vale.name}</h1>
   
        
      </div>
      </div>
      </div>
    )

  })}
  

      
       </div>
       
     )
   }
