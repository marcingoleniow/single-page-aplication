import React from 'react';
import Product from '../components/Product'
import {Link} from 'react-router-dom'
const ProductsPage = ({match}) => {
    // console.log(props) w propsach mamy match w consoli widać
    return ( 
        <>
        <div>Strona produktu</div>
        <Product id={match.params.id}/>
        <Link to='/products'>Powrót do listy produktów </Link>
        </>
     );
}
 
export default ProductsPage;