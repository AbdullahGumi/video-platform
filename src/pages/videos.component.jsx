import { useState, useEffect } from 'react'

import Filter from '../components/filter/filter.component'
import SearchBar from '../components/search-bar/searchBar.component'
import CustomButton from '../components/custom-button/CustomButton.component'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { setHoodies } from '../redux/product/productActions'

import FilterMobileSVG from '../components/svg/filterMobileSVG.component'

import { Link } from 'react-router-dom';


const Videos = () => {
    const [isFilterOpen, setFilterOpen] = useState(false)
    const dispatch = useDispatch()
    const hoodies = useSelector(state => state.product.hoodies)
    const filteredHoodies = useSelector(state => state.product.filteredHoodies)

    const hoodiesToShow = filteredHoodies.length ? filteredHoodies : hoodies
    const toggleFilter = () => {
        setFilterOpen(!isFilterOpen)
    }

    useEffect(()=> {
        axios
            .get('http://localhost:3000/products')
            .then(res=> dispatch(setHoodies(res.data)))
            .catch(err => console.log(err))
    },[dispatch])

    return (
        <div className='flex sm:px-6 flex-col py-12 px-24 space-y-6 ' style={{ backgroundColor: '#211B34' }}>
            {isFilterOpen ? null : (
                <div className='flex items-left flex-col text-left space-y-4'>
                    <h2 className='sm:text-2xl font-bold text-4xl text-white'>Videos</h2>
                    <div className='sm:flex sm:flex-row justify-between sm:space-x-3 items-center'>
                        <SearchBar/>
                        <div className='hidden sm:flex'>
                            <CustomButton handleClick={()=> toggleFilter()} width='18px' height='12px' icon={<FilterMobileSVG color='black'/>} backgroundColor='transparent'/>
                        </div>
                    </div>
                </div>
            )
            }
            
            <div className="flex flex-row sm:self-center sm:space-x-0 space-x-6">
                <Filter isFilterOpen={isFilterOpen} setFilterOpen={setFilterOpen}/>

                {/* desktop view */}
                <div className="grid sm:hidden grid-cols-3 gap-6 ">
                    {hoodiesToShow.map((hoodie) => {
                        return (
                            <Link to={`/hoodie/${hoodie.productID}`}>
                                <div className='flex flex-col'>
                                    <img className='rounded-lg mb-3 object-cover' style = {{ width: '288px', height: '298px' }}alt = 'hoodie' src={hoodie.image[0]}/>
                                    <label className='text-base text-white'>{hoodie.productName}</label>
                                    <lable className='font-semibold text-xl text-gray-300'>${hoodie.sellingPrice}</lable>
                                </div>
                            </Link>   
                        )
                    })
                    }
                </div>

                {/* mobile view  */}
                {!isFilterOpen ? (
                    <div className="hidden sm:grid grid-cols-2 gap-6 ">
                    {hoodiesToShow.map((hoodie) => {
                        return (
                            <Link to={`/hoodie/${hoodie.productID}`}>
                                <div className='flex flex-col'>
                                    <img className='rounded-lg mb-3 object-cover' style = {{ width: '175px', height: '187px' }}alt = 'hoodie' src={hoodie.image}/>
                                    <label className='text-base' style={{ color: '#73758C' }}>{hoodie.productName}</label>
                                    <lable className='font-semibold text-xl'>${hoodie.sellingPrice}</lable>
                                </div>
                            </Link>   
                        )
                    })
                    }
                </div>
                ) : (null)

                }
            </div>
            
        </div>
    )
}

export default Videos