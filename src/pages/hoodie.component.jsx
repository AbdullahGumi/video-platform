import { useState, useEffect } from 'react'
import { RadioGroup, Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import chroma from 'chroma-js';

//components
import CustomButton from '../components/custom-button/CustomButton.component'
import ProductAddedModal from '../components/product-added-modal/productAddedModal.component'
import { setHoodie } from '../redux/product/productActions'
import { setItemAddedToCart, addItemToCart } from '../redux/cart/cartActions'

//SVG components
import CartSVG from '../components/svg/cartSVG.component'
import ArrowLeftSVG from '../components/svg/arrowLeftSVG.component'

const Hoodie = () => {
    let [size, setSize] = useState('')
    let [color, setColor] = useState('')
    let [isOpen, setIsOpen] = useState(false)

    const params = useParams()
    const hoodie = useSelector(state => state.product.hoodie)
    const dispatch = useDispatch()

    const toggleModal = () => {
        setIsOpen(!isOpen)

    }

    useEffect(()=> {
        axios
            .get('http://localhost:3000/products')
            .then(res => res.data.filter(hoodie => hoodie.productID === Number(params.id) && dispatch(setHoodie(hoodie))))
            .catch(err => console.log(err));
        
    },[])
    
    return (
        <div className='flex sm:flex-col sm:px-6 sm:space-x-0 flex-row py-12 px-24 justify-between space-x-28' style={{ backgroundColor: '#211B34' }}>
            <ProductAddedModal isOpen={isOpen} toggleModal={toggleModal}/>
            <div className='sm:flex sm:flex-col-reverse space-y-6 '>
                <div className='sm:flex sm:mt-2 sm:flex-row sm:justify-between sm:items-end'>
                    <div className='text-left sm:flex sm:flex-col-reverse space-y-3'>
                        <span className='sm:text-lg font-semibold text-base sm:text-black text-gray-300'>Price: ${hoodie.sellingPrice}</span>
                        <h2 className='sm:font-normal sm:text-sm sm:text-gray-500 font-semibold  text-3xl text-white'>Video name</h2>
                    </div>
                    <div className='hidden sm:block'>
                        <CustomButton 
                            handleClick={()=> {
                                toggleModal()
                                dispatch(setItemAddedToCart(true))
                                dispatch(addItemToCart(hoodie))
                            }} 
                            text={'ADD TO CART'} 
                            fontSize='14px' 
                            width='148px' 
                            height='44px' 
                            icon={<CartSVG color='#FFF' />}
                        />
                    </div>
                </div>
                <div className="flex sm:space-x-0 space-x-6 flex-row">
                    
                    <div className=" sm:hidden flex-grow w-96 " style={{ height: '408px' }}>
                        <img className='rounded-lg  w-full h-full object-cover' alt = 'hoodie' src={require('../assets/images/movie-cover.jpg').default}/>
                    </div> 
                    <div className="hidden sm:block flex-grow w-full">
                        <img className='rounded-lg  w-full h-full object-cover' alt = 'hoodie' src={hoodie.image && `${hoodie.image[0]}`}/>
                    </div>                 
                </div>
                <div className='hidden sm:flex flex-row space-x-6 items-center'>
                    <Link to='/hoodies'>
                        <CustomButton  backgroundColor='transparent' width='20px' height='14px'  icon={<ArrowLeftSVG/>}/>
                    </Link>
                    <h2 className='font-bold text-2xl'>Hoodies</h2>
                </div>
            </div>
            <div className='flex sm:space-y-6 sm:mt-6 flex-col flex-grow space-y-12  mt-24'>

                

               
                
                {/* product info */}
                <div className="w-full space-y-3 ">
                        <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className={`flex justify-between w-full border-b px-4 py-2 focus:outline-none`}
                                               style={{ backgroundColor: ` ${ open ? '' : '#403D50'}` }}
                                               >
                                <span className='font-semibold text-white'>Video info</span>
                                <ChevronRightIcon
                                style={{ transition: 'all 0.5s linear', transform: `${ open ? 'rotate(90deg)' : 'rotate(0deg)'}` }}
                                className={'w-5 h-5'}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 max-w-sm max-h-sm text-sm text-gray-300 bg-white">
                                {hoodie.info}
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                </div>
                <div className='sm:hidden'>
                    <CustomButton 
                        handleClick={()=> {
                            toggleModal()
                            dispatch(setItemAddedToCart(true))
                            dispatch(addItemToCart({...hoodie, size, color}))
                        }}
                        text={'BUY'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hoodie