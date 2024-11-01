import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Colors from './Colors';
import "../css/Details.css"


function Details() {
  const { id } = useParams();
  const { state } = useContext(DataContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (id) {
      const res = state.products;
      const data = res.filter(item => item._id === id);
      setProduct(data);
    }
  }, [id, state.products]);

  return (
   <></>
  );
}

export default Details;
