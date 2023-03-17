import {useEffect, useState} from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

function Search(){
  const [resultProducts, setResultProducts] = useState([]);
  const [productsTable, setProductsTable] = useState([]);
  const [searchP, setSearchP] = useState("");

  const requestGet=async()=>{
    await axios.get("http://localhost:4000/products")
    .then(response=>{
      setResultProducts(response.data);
      setProductsTable(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const handleChange=e=>{
    setSearchP(e.target.value);
    filter(e.target.value);
  }
  
  const filter=(searchTerm)=>{
    var searchResults=productsTable.filter((element)=>{
      if(element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
      || element.origin.toString().toLowerCase().includes(searchTerm.toLowerCase())
      || element.description.toString().toLowerCase().includes(searchTerm.toLowerCase())
      || element.price.toString().toLowerCase().includes(searchTerm.toLowerCase())
      ){
        return element;
      }
    });
    setResultProducts(searchResults);
  }

useEffect(()=>{
requestGet();
},[])

return (
  <div className="Search">
    <Container>
    <div className="containerInput">
      <input
        className="form-control search-input"
        value={searchP}
        placeholder="Enter name, description, country of origin or price to begin search"
        onChange={handleChange} />
      <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch}/>
      </button>
      <br/>
    </div>
    </Container>
    <div className='tabled'>
     <div className="table-responsive">
      <Container>
       <table className="table table-sm table-bordered;">
         <thead>
           <tr>
             <th>Id</th>
             <th>Product</th>
             <th>Description</th>
             <th>Country of origin</th>
             <th>Price</th> 
           </tr>
         </thead>
        <tbody> 
          {resultProducts && 
          resultProducts.map((resultProducts)=>(
            <tr key={resultProducts.id}>
              <td>{resultProducts.id}</td>
              <td>{resultProducts.name}</td>
              <td>{resultProducts.description}</td>
              <td>{resultProducts.origin}</td>
              <td>${resultProducts.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Container>
    </div>
    </div>
    </div>
  )
 }

export default Search


