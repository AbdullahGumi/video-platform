import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { useRanger } from 'react-ranger'
import { useSelector, useDispatch } from 'react-redux'

import CustomButton from '../custom-button/CustomButton.component'

import CancelSVG from '../svg/cancelSVG.component'

//redux
import { 
  filterHoodiesByAvailability, 
  filterHoodiesByColors,
  filterHoodiesBySize,
  filterHoodiesByPrice,
  selectOptionFromAvailabilityFilter, 
  selectTheAllOptionFromAvailabilityFilter,
  selectOptionFromColorsFilter, 
  selectTheAllOptionFromColorsFilter,
  selectOptionFromSizeFilter, 
  selectTheAllOptionFromSizeFilter,
  selectOptionFromPriceFilter, 
  selectTheAllOptionFromPriceFilter,
 } from '../../redux/product/productActions'

const Filter = ({ isFilterOpen, setFilterOpen }) => {
  const dispatch = useDispatch()
  const hoodies = useSelector(state => state.product.hoodies)
  const filteredHoodies = useSelector(state => state.product.filteredHoodies)
  const availabilityFilter = useSelector(state => state.product.availabilityFilter)
  const colorsFilter = useSelector(state => state.product.colorsFilter)
  const sizeFilter = useSelector(state => state.product.sizeFilter)
  const priceFilter = useSelector(state => state.product.priceFilter)
  // const [values, setValues] = useState([1, 43])


  //  Not decided if to use slider   
  // const { getTrackProps, handles, segments } = useRanger({
  //   values,
  //   onChange: setValues,
  //   min: 1,
  //   max: 200,
  //   stepSize: 1,
  // })

      const handleAvailabilityChange = (e, option) => {
        if(option.value !== 'all'){
          dispatch(selectOptionFromAvailabilityFilter(e.target))
        }
        if(option.value === 'all'){
          dispatch(filterHoodiesByAvailability(hoodies))
          dispatch(selectTheAllOptionFromAvailabilityFilter())
        }

        dispatch(filterHoodiesByAvailability(e.target.value))
      }

      const handleColorChange = (e, option) => {
        if(option.value !== 'all'){
          dispatch(selectOptionFromColorsFilter(e.target))
        }
        if(option.value === 'all'){
          dispatch(filterHoodiesByColors(hoodies))
          dispatch(selectTheAllOptionFromColorsFilter())
        }

        dispatch(filterHoodiesByColors(e.target.value))
      }

      const handleSizeChange = (e, option) => {
        if(option.value !== 'all'){
          dispatch(selectOptionFromSizeFilter(e.target))
        }
        if(option.value === 'all'){
          dispatch(filterHoodiesBySize(hoodies))
          dispatch(selectTheAllOptionFromSizeFilter())
        }

        dispatch(filterHoodiesBySize(e.target.value))
      }

      const handlePriceChange = (e, option) => {
        if(option.value !== 'all'){
          dispatch(selectOptionFromPriceFilter(e.target))
        }
        if(option.value === 'all'){
          dispatch(filterHoodiesByPrice(hoodies))
          dispatch(selectTheAllOptionFromPriceFilter())
        }

        dispatch(filterHoodiesByPrice(e.target.value))
      }


    return (
        <div className={`${isFilterOpen ? 'sm:w-full' : null}`}>
          
          {/* desktop view */}
          <div className='sm:hidden space-y-3 text-left text-white'>
            <span className='text-left font-medium text-base text-white'>Filter By</span>
                    <Disclosure as="div" className='border rounded py-3 px-2 ' >
                      {({ open }) => (
                          <>
                              <div className='flex  p-2.5 justify-between items-center' style={{ backgroundColor: `${open ? '#F4FBF4' : '#403D50'}`,  width: '272px', height: '50px' }}>
                                  <span className='text-base font-semibold'>Rating</span>
                                  <Disclosure.Button style={{ transition: 'all 0.5s linear', transform: `${ open ? 'rotate(0deg)' : 'rotate(180deg)'}` }} className='w-5 h-5 text-green-500'>
                                      <ChevronUpIcon/>
                                  </Disclosure.Button>
                              </div>
                              <Disclosure.Panel className="px-4 pt-4 pb-6 text-sm text-gray-500">
                              <div className="space-y-6">
                                  {availabilityFilter.map((option) => (
                                      <div key={option.value} className="flex items-center text-left">
                                              <input
                                                  value={option.value}
                                                  type="checkbox"
                                                  onChange={(e)=> handleAvailabilityChange(e,option)}
                                                  checked={option.checked}
                                                  key={Math.random()}
                                                  className="border-gray-300 focus:ring-green-500"
                                                  style={{ color: '#46AC48', borderRadius: '3px' }}
                                              />
                                              <label
                                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                              >
                                                  {option.label}
                                              </label>
                                      </div>
                                  ))}
                              </div>
                              </Disclosure.Panel>
                          </>
                      )}
                  </Disclosure>
            
                    <Disclosure as="div" className='border rounded py-3 px-2 '>
                        {({ open }) => (
                            <>
                                <div className='flex  p-2.5 justify-between items-center' style={{ backgroundColor: `${open ? '#F4FBF4' : '#403D50'}`,  width: '272px', height: '50px' }}>
                                    <span className='text-base font-semibold'>Language</span>
                                    <Disclosure.Button style={{ transition: 'all 0.5s linear', transform: `${ open ? 'rotate(0deg)' : 'rotate(180deg)'}` }} className='w-5 h-5 text-green-500'>
                                        <ChevronUpIcon/>
                                    </Disclosure.Button>
                                </div>
                                <Disclosure.Panel className="px-4 pt-4 pb-6 text-sm text-gray-500">
                                <div className="space-y-6">
                                    {colorsFilter.map((option) => (
                                        <div key={option.value} className="flex items-center text-left">
                                                <input
                                                    value={option.value}
                                                    type="checkbox"
                                                    onChange={(e)=> handleColorChange(e,option)}
                                                    checked={option.checked}
                                                    key={Math.random()}
                                                    className="border-gray-300 focus:ring-green-500"
                                                    style={{ color: '#46AC48', borderRadius: '3px' }}
                                                />
                                                <label
                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                    {option.label}
                                                </label>
                                        </div>
                                    ))}
                                </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <Disclosure as="div" className='border rounded py-3 px-2 '>
                        {({ open }) => (
                            <>
                                <div className='flex  p-2.5 justify-between items-center' style={{ backgroundColor: `${open ? '#F4FBF4' : '#403D50'}`,  width: '272px', height: '50px' }}>
                                    <span className='text-base font-semibold'>Genre</span>
                                    <Disclosure.Button style={{ transition: 'all 0.5s linear', transform: `${ open ? 'rotate(0deg)' : 'rotate(180deg)'}` }} className='w-5 h-5 text-green-500'>
                                        <ChevronUpIcon/>
                                    </Disclosure.Button>
                                </div>
                                <Disclosure.Panel className="px-4 pt-4 pb-6 text-sm text-gray-500">
                                <div className="space-y-6">
                                    {priceFilter.map((option) => (
                                        <div key={option.value} className="flex items-center text-left">
                                                <input
                                                    value={option.value}
                                                    type="checkbox"
                                                    onChange={(e)=> handlePriceChange(e,option)}
                                                    checked={option.checked}
                                                    key={Math.random()}
                                                    className="border-gray-300 focus:ring-green-500"
                                                    style={{ color: '#46AC48', borderRadius: '3px' }}
                                                />
                                                <label
                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                    {option.label}
                                                </label>
                                        </div>
                                    ))}
                                </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>


                    {/* Not decided if to use slider */}
                    {/* <Disclosure as="div" className='border rounded py-3 px-2 '>
                        {({ open }) => (
                            <>
                                <div className='flex  p-2.5 justify-between items-center' style={{ backgroundColor: `${open ? '#F4FBF4' : '#403D50'}`,  width: '272px', height: '50px' }}>
                                    <span className='text-base font-semibold'>Price</span>
                                    <Disclosure.Button style={{ transition: 'all 0.5s linear', transform: `${ open ? 'rotate(0deg)' : 'rotate(180deg)'}` }} className='w-5 h-5 text-green-500'>
                                        <ChevronUpIcon/>
                                    </Disclosure.Button>
                                </div>
                                <Disclosure.Panel className="px-4 pt-4 pb-6 text-sm text-gray-500">
                                  <div
                                    {...getTrackProps({
                                      style: {
                                        height: "2px",
                                        borderRadius: "2px"
                                      }
                                    })}
                                    >
                                      {segments.map(({ getSegmentProps }, i) => {

                                        return (
                                          <div {...getSegmentProps({
                                            style: {
                                              backgroundColor: `${ i === 1 ? '#46AC48' : '#C7C8D1'}`,
                                              height: '100%'
                                            }
                                          })} index={i}>

                                          </div>
                                        )
                                      }
                                      )
                                    }
                                    {handles.map(({ value, getHandleProps }) => (
                                    <button
                                        {...getHandleProps({
                                          style: {
                                            width: "15px",
                                            height: "15px",
                                            borderRadius: "100%",
                                            background: "#46AC48",
                                            border: "solid 3px #F4FBF4"
                                          }
                                        })}
                                      className='flex flex-col'>
                                      <span {...getHandleProps({ style: {
                                        top: 25,
                                        fontSize: '12px',
                                        color: "#73758C",
                                        cursor: 'default'
                                      } })} className='self-center'>${value}</span>
                                    </button>
                                    ))}
                                  </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure> */}



                    <Disclosure as="div" className='border rounded py-3 px-2 '>
                        {({ open }) => (
                            <>
                                <div className='flex  p-2.5 justify-between items-center' style={{ backgroundColor: `${open ? '#F4FBF4' : '#403D50'}`,  width: '272px', height: '50px' }}>
                                    <span className='text-base font-semibold'>Release year</span>
                                    <Disclosure.Button style={{ transition: 'all 0.5s linear', transform: `${ open ? 'rotate(0deg)' : 'rotate(180deg)'}` }} className='w-5 h-5 text-green-500'>
                                        <ChevronUpIcon/>
                                    </Disclosure.Button>
                                </div>
                                <Disclosure.Panel className="px-4 pt-4 pb-6 text-sm text-gray-500">
                                <div className="space-y-6">
                                    {sizeFilter.map((option) => (
                                        <div key={option.value} className="flex items-center text-left">
                                                <input
                                                    value={option.value}
                                                    type="checkbox"
                                                    onChange={(e)=> handleSizeChange(e,option)}
                                                    checked={option.checked}
                                                    key={Math.random()}
                                                    className="border-gray-300 focus:ring-green-500"
                                                    style={{ color: '#46AC48', borderRadius: '3px' }}
                                                />
                                                <label
                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                    {option.label}
                                                </label>
                                        </div>
                                    ))}
                                </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>


            </div>

          {/* mobile view */}
          {isFilterOpen ? (
            <div className='hidden shadow sm:flex px-6 rounded-tl-3xl rounded-tr-3xl w-full flex-col space-y-3'>
              <div className='flex flex-row justify-between' style={{ paddingTop: '10px' }}>
                <h2 className='font-bold text-2xl'>Filter</h2>
                <CustomButton handleClick={()=> setFilterOpen(false)} width='24px' height='24px' backgroundColor='transparent' icon={<CancelSVG/>}/>
              </div>
              <p className='text-sm text-left' style={{ color: '#0F172A' }}>Choose your preferred mode of filtering Products</p>
              <div className='space-y-4 overflow-y-auto ' style={{ height: '588px' }}>

                <div className='space-y-6 text-left'>
                  <div className='space-y-3'>
                    <span className='text-lg font-semibold'>Availability</span>
                    <Disclosure as="div" className='border rounded py-3 px-2 '>
                        <Disclosure.Panel static className="px-4 pt-4 pb-6 text-sm text-gray-500" style={{ width: '272px' }}>
                                <div className="space-y-6">
                                    {availabilityFilter.map((option) => (
                                        <div key={option.value} className="flex items-center text-left">
                                                <input
                                                    value={option.value}
                                                    type="checkbox"
                                                    onChange={(e)=> handleAvailabilityChange(e,option)}
                                                    checked={option.checked}
                                                    key={Math.random()}
                                                    className="border-gray-300 focus:ring-green-500"
                                                    style={{ color: '#46AC48', borderRadius: '3px' }}                                                />
                                                <label
                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                    {option.label}
                                                </label>
                                        </div>
                                    )) 
                                  }
                                </div>
                        </Disclosure.Panel>
                    </Disclosure>
                  </div>
                  <hr style={{ border: '1px dashed #C7C8D1',}} />
                </div>

                <div className='space-y-6 text-left'>
                  <div className='space-y-3'>
                    <span className='text-lg font-semibold'>Colors</span>
                    <Disclosure as="div" className='border rounded py-3 px-2 '>
                        <Disclosure.Panel static className="px-4 pt-4 pb-6 text-sm text-gray-500" style={{ width: '272px' }}>
                                <div className="space-y-6">
                                    {colorsFilter.map((option) => (
                                        <div key={option.value} className="flex items-center text-left">
                                                <input
                                                    value={option.value}
                                                    type="checkbox"
                                                    onChange={(e)=> handleColorChange(e,option)}
                                                    checked={option.checked}
                                                    key={Math.random()}
                                                    className="border-gray-300 focus:ring-green-500"
                                                    style={{ color: '#46AC48', borderRadius: '3px' }}
                                                />
                                                <label
                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                    {option.label}
                                                </label>
                                        </div>
                                    )) 
                                  }
                                </div>
                        </Disclosure.Panel>
                    </Disclosure>
                  </div>
                  <hr style={{ border: '1px dashed #C7C8D1',}} />
                </div>

                <div className='space-y-6 text-left'>
                  <div className='space-y-3'>
                    <span className='text-lg font-semibold'>Price</span>
                    <Disclosure as="div" className='border rounded py-3 px-2 '>
                        <Disclosure.Panel static className="px-4 pt-4 pb-6 text-sm text-gray-500" style={{ width: '272px' }}>
                                <div className="space-y-6">
                                    {priceFilter.map((option) => (
                                        <div key={option.value} className="flex items-center text-left">
                                                <input
                                                    value={option.value}
                                                    type="checkbox"
                                                    onChange={(e)=> handlePriceChange(e,option)}
                                                    checked={option.checked}
                                                    key={Math.random()}
                                                    className="border-gray-300 focus:ring-green-500"
                                                    style={{ color: '#46AC48', borderRadius: '3px' }}
                                                />
                                                <label
                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                    {option.label}
                                                </label>
                                        </div>
                                    )) 
                                  }
                                </div>
                        </Disclosure.Panel>
                    </Disclosure>
                  </div>
                  <hr style={{ border: '1px dashed #C7C8D1',}} />
                </div>

                <div className='space-y-6 text-left'>
                  <div className='space-y-3'>
                    <span className='text-lg font-semibold'>Size</span>
                    <Disclosure as="div" className='border rounded py-3 px-2 '>
                        <Disclosure.Panel static className="px-4 pt-4 pb-6 text-sm text-gray-500" style={{ width: '272px' }}>
                                <div className="space-y-6">
                                    {sizeFilter.map((option) => (
                                        <div key={option.value} className="flex items-center text-left">
                                                <input
                                                    value={option.value}
                                                    type="checkbox"
                                                    onChange={(e)=> handleSizeChange(e,option)}
                                                    checked={option.checked}
                                                    key={Math.random()}
                                                    className="border-gray-300 focus:ring-green-500"
                                                    style={{ color: '#46AC48', borderRadius: '3px' }}
                                                />
                                                <label
                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                    {option.label}
                                                </label>
                                        </div>
                                    )) 
                                  }
                                </div>
                        </Disclosure.Panel>
                    </Disclosure>
                  </div>
                </div>



              </div>
              <CustomButton text='Apply' width='100%'/>
              <CustomButton handleClick={()=> setFilterOpen(false)} text='Cancel' width='100%' backgroundColor='transparent' color='black'/>
            </div>  
          ) : (null)
          }
          
        </div>
    )
}

export default Filter

 // : (
                                            //   <div
                                            //     {...getTrackProps({
                                            //       style: {
                                            //         height: "2px",
                                            //         borderRadius: "2px"
                                            //       }
                                            //     })}
                                            //     >
                                            //       {segments.map(({ getSegmentProps }, i) => {

                                            //         return (
                                            //           <div {...getSegmentProps({
                                            //             style: {
                                            //               backgroundColor: `${ i === 1 ? '#46AC48' : '#C7C8D1'}`,
                                            //               height: '100%'
                                            //             }
                                            //           })} index={i}>

                                            //           </div>
                                            //         )
                                            //       }
                                            //       )
                                            //     }
                                            //     {handles.map(({ value, getHandleProps }) => (
                                            //     <button
                                            //         {...getHandleProps({
                                            //           style: {
                                            //             width: "15px",
                                            //             height: "15px",
                                            //             borderRadius: "100%",
                                            //             background: "#46AC48",
                                            //             border: "solid 3px #F4FBF4"
                                            //           }
                                            //         })}
                                            //       className='flex flex-col'>
                                            //       <span {...getHandleProps({ style: {
                                            //         top: 25,
                                            //         fontSize: '12px',
                                            //         color: "#73758C",
                                            //         cursor: 'default'
                                            //       } })} className='self-center'>${value}</span>
                                            //     </button>
                                            //     ))}
                                            //   </div>
                                            // )