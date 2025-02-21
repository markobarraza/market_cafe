import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import CardProduct from "../../components/cardProduct/CardProduct";


const ProductDetail = () => {
    const [cafe, setCafe] = useState ({})
    const {id} = useParams()
    console.log(id);
    

    // Se consulta a la API de productos
    const consultarAPI = async ()=>{
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        setCafe(data)
        console.log(data);
        
        
    }

    useEffect ( ()=>{
        consultarAPI()
      }, [] )


  return (
    <>
    <div className='my-5 row d-flex align-items-center justify-content-center'>
        {cafe && cafe.id && <CardProduct productos = {cafe} />}
    </div>
    </>
  )
}

export default ProductDetail

