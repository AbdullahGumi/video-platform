import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Player as Video } from 'video-react';
import { setHoodie } from '../redux/product/productActions'

const Player = () => {

    const params = useParams()
    const hoodie = useSelector(state => state.product.hoodie)
    const dispatch = useDispatch()

    useEffect(()=> {
        axios
            .get('http://localhost:3000/products')
            .then(res => res.data.filter(hoodie => hoodie.productID === Number(params.id) && dispatch(setHoodie(hoodie))))
            .catch(err => console.log(err));
        
    },[])
    
    return (
        <div className='py-12 px-24 h-screen'>
           <div className="">
            <h2 className='sm:font-normal sm:text-sm sm:text-gray-500 font-semibold  text-3xl text-white pb-4 text-left'>Video name</h2>
                <Video poster>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Video>
           </div>

        </div>
    )
}

export default Player