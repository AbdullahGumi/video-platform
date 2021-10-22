import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// redux
import { filterHoodiesBySearch } from '../../redux/product/productActions'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    useEffect(()=> {
        dispatch(filterHoodiesBySearch(searchValue))
    },[searchValue, dispatch])

    return (
        <div className=" w-full">
            <input 
                type="text"
                value={searchValue}
                onChange={(e)=> setSearchValue(e.target.value)} 
                className="border sm:hidden border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 pr-8 pl-5 rounded " 
                placeholder="Search..." 
                style={{ width: '608px', height: '50px' }}
            />
            <input 
                type="text"
                value={searchValue}
                onChange={(e)=> setSearchValue(e.target.value)} 
                className="border hidden sm:flex flex-grow border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 pr-8 pl-5 rounded " 
                placeholder="Search..." 
                style={{ width: '95%' }}
            />
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg> */}
        </div>                
    )
}
export default SearchBar
                                              