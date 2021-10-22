import { useEffect, useState } from 'react'
import Chart from 'chart.js/auto';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { setHoodies } from '../redux/product/productActions'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from "../components/custom-button/CustomButton.component"
import AddProduct from "../components/add-product/addProduct.component"
import SearchBar from '../components/search-bar/searchBar.component'
import ActionsMenu from '../components/actions-menu/actionsMenu.component.jsx';

const History = () => {
    const dispatch = useDispatch()
    const admin = useSelector(state => state.user.admin)

    const [isModalOpen, setModalOpen] = useState(false)

    const hoodies = useSelector(state => state.product.hoodies)
    const filteredHoodies = useSelector(state => state.product.filteredHoodies)

    const hoodiesToShow = filteredHoodies.length ? filteredHoodies : hoodies


    useEffect(()=> {
      axios
          .get('http://localhost:3000/products')
          .then(res=> dispatch(setHoodies(res.data)))
          .catch(err => console.log(err))
  },[dispatch])


    // useEffect(()=> {
    //     let lineChart = document.getElementById("myLineChart")
    //     let pieChart = document.getElementById("myPieChart")
    //     const myLineChart = new Chart(lineChart, {
    //         type: 'line',
    //         data: {
    //         labels: [1500,1600,1700,1750],
    //         legend: {
    //             labels: {
    //               boxWidth: 0,
    //             }
    //            },

    //             datasets: [
    //                 {
    //                 label: '',
    //                 data: [300,500,1700,150],
    //                 fill: true,
    //                 borderColor: '#35BA83',
    //                 tension: 1,
    //                 pointRadius: 0,
    //                 backgroundColor: 'rgba(53, 186, 131, 0.1)',
    //                 borderWidth: 2
    //               }
    //             ]
    //         },
    //         options: {
    //             plugins: {
    //                 legend: {
    //                     display: false
    //                    }
    //             },
    //             scales: {
    //                 x: {
    //                     grid:{
    //                      display:false
    //                          }
    //                    }
    //                        }
    //         }
    //     })
    //     const myPieChart = new Chart(pieChart, {
    //         type: 'doughnut',
    //         data: {
    //         legend: {
    //             labels: {
    //               boxWidth: 0,
    //             }
    //            },

    //            datasets: [{
    //             data: [75, 25],
    //             backgroundColor: [
    //               '#FD9900',
    //               '#EEE'
    //             ],
    //             radius: '90%',
    //             hoverOffset: 4,
    //           }]
    //         },
    //         options: {
    //             maintainAspectRatio: false ,
    //             responsive: false ,
    //             cutout: 120,
    //             plugins: {
    //                 legend: {
    //                     display: false
    //                    }
    //             },
    //         }  
    //     })
    // },[])
    return (
        <div className='flex flex-col space-y-12 px-6 py-12 h-screen'>
              <AddProduct isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
              <div className='flex sm:hidden flex-row justify-between items-center'>
                <div className='flex self-start'>
                  <SearchBar/>
                </div>
                <CustomButton handleClick={()=> setModalOpen(!isModalOpen)} text='Add Product' width='145px' height='50px'/>
              </div>

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


              {/* <div className='flex flex-row flex-nowrap sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-x-0 justify-between space-x-6 '>
               
                <div className='flex flex-col text-left shadow-sm rounded-lg sm:w-full w-1/4 px-2 py-4 justify-between bg-white' style={{ height: '128px' }}>
                    <div className='rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px', padding: '8px', backgroundColor: '#E6FAF1' }}>
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H16C17.1 12 18 11.1 18 10ZM9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6C12 7.66 10.66 9 9 9ZM22 3V14C22 15.1 21.1 16 20 16H3V14H20V3H22Z" fill="#64BC26"/>
                        </svg>
                    </div>
                    <span className='text-sm' style={{ color: '#73758C' }}>Daily Revenue</span>
                    <div className='flex flex-row justify-between'>
                        <span className='font-bold text-lg'>N76,000</span>
                        <div className='text-xs flex items-center justify-center space-x-3'>
                        <span>
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.41663 0.833344L4.24996 5.00001L0.083293 0.833344H8.41663Z" fill="#FE2712"/>
                            </svg>
                        </span>
                        <span className='text-red-500'>13%</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col text-left shadow-sm rounded-lg sm:w-full w-1/4 px-2 py-4 justify-between bg-white' style={{ height: '128px' }}>
                    <div className='rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px', padding: '8px', backgroundColor: '#E6FAF1' }}>
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H16C17.1 12 18 11.1 18 10ZM9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6C12 7.66 10.66 9 9 9ZM22 3V14C22 15.1 21.1 16 20 16H3V14H20V3H22Z" fill="#64BC26"/>
                        </svg>
                    </div>
                    <span className='text-sm' style={{ color: '#73758C' }}>Daily Revenue</span>
                    <div className='flex flex-row justify-between'>
                        <span className='font-bold text-lg'>N76,000</span>
                        <div className='text-xs flex items-center justify-center space-x-3'>
                        <span>
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.41663 0.833344L4.24996 5.00001L0.083293 0.833344H8.41663Z" fill="#FE2712"/>
                            </svg>
                        </span>
                        <span className='text-red-500'>13%</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col text-left shadow-sm rounded-lg sm:w-full w-1/4 px-2 py-4 justify-between bg-white' style={{ height: '128px' }}>
                    <div className='rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px', padding: '8px', backgroundColor: '#E6FAF1' }}>
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H16C17.1 12 18 11.1 18 10ZM9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6C12 7.66 10.66 9 9 9ZM22 3V14C22 15.1 21.1 16 20 16H3V14H20V3H22Z" fill="#64BC26"/>
                        </svg>
                    </div>
                    <span className='text-sm' style={{ color: '#73758C' }}>Daily Revenue</span>
                    <div className='flex flex-row justify-between'>
                        <span className='font-bold text-lg'>N76,000</span>
                        <div className='text-xs flex items-center justify-center space-x-3'>
                        <span>
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.41663 0.833344L4.24996 5.00001L0.083293 0.833344H8.41663Z" fill="#FE2712"/>
                            </svg>
                        </span>
                        <span className='text-red-500'>13%</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col text-left shadow-sm rounded-lg sm:w-full w-1/4 px-2 py-4 justify-between bg-white' style={{ height: '128px' }}>
                    <div className='rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px', padding: '8px', backgroundColor: '#E6FAF1' }}>
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H16C17.1 12 18 11.1 18 10ZM9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6C12 7.66 10.66 9 9 9ZM22 3V14C22 15.1 21.1 16 20 16H3V14H20V3H22Z" fill="#64BC26"/>
                        </svg>
                    </div>
                    <span className='text-sm' style={{ color: '#73758C' }}>Daily Revenue</span>
                    <div className='flex flex-row justify-between'>
                        <span className='font-bold text-lg'>N76,000</span>
                        <div className='text-xs flex items-center justify-center space-x-3'>
                        <span>
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.41663 0.833344L4.24996 5.00001L0.083293 0.833344H8.41663Z" fill="#FE2712"/>
                            </svg>
                        </span>
                        <span className='text-red-500'>13%</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col text-left shadow-sm rounded-lg sm:w-full w-1/4 px-2 py-4 justify-between bg-white' style={{ height: '128px' }}>
                    <div className='rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px', padding: '8px', backgroundColor: '#E6FAF1' }}>
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H16C17.1 12 18 11.1 18 10ZM9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6C12 7.66 10.66 9 9 9ZM22 3V14C22 15.1 21.1 16 20 16H3V14H20V3H22Z" fill="#64BC26"/>
                        </svg>
                    </div>
                    <span className='text-sm' style={{ color: '#73758C' }}>Daily Revenue</span>
                    <div className='flex flex-row justify-between'>
                        <span className='font-bold text-lg'>N76,000</span>
                        <div className='text-xs flex items-center justify-center space-x-3'>
                        <span>
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.41663 0.833344L4.24996 5.00001L0.083293 0.833344H8.41663Z" fill="#FE2712"/>
                            </svg>
                        </span>
                        <span className='text-red-500'>13%</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col text-left shadow-sm rounded-lg sm:w-full w-1/4 px-2 py-4 justify-between bg-white' style={{ height: '128px' }}>
                    <div className='rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px', padding: '8px', backgroundColor: '#F0F1FF' }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11 14H4V12H11V14ZM14 10H4V8H14V10ZM14 6H4V4H14V6Z" fill="#2D3DFF"/>
                        </svg>
                    </div>
                    <span className='text-sm' style={{ color: '#73758C' }}>New Orders</span>
                    <div className='flex flex-row justify-between'>
                        <span className='font-bold text-lg'>145</span>
                        <div className='text-xs flex items-center justify-center space-x-3'>
                        <span>
                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.16669 4.66663L5.00002 0.499959L0.833354 4.66663H9.16669Z" fill="#46AC48"/>
                            </svg>
                        </span>
                        <span className='text-green-500'>13%</span>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col text-left shadow-sm rounded-lg sm:w-full w-1/4 px-2 py-4 justify-between bg-white' style={{ height: '128px' }}>
                    <div className='rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px', padding: '8px', backgroundColor: '#F6F0FF' }}>
                        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z" fill="#711AFF"/>
                        </svg>
                    </div>
                    <span className='text-sm' style={{ color: '#73758C' }}>Total Customers</span>
                    <div className='flex flex-row justify-between'>
                        <span className='font-bold text-lg'>54</span>
                        <div className='text-xs flex items-center justify-center space-x-3'>
                        <span>
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.41663 0.833344L4.24996 5.00001L0.083293 0.833344H8.41663Z" fill="#FE2712"/>
                            </svg>
                        </span>
                        <span className='text-red-500'>13%</span>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col text-left shadow-sm rounded-lg sm:w-full w-1/4 px-2 py-4 justify-between bg-white' style={{ height: '128px' }}>
                    <div className='rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px', padding: '8px', backgroundColor: '#FFF3E0' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 9.39996L7.5 4.20996" stroke="#FD9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="#FD9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.27002 6.95996L12 12.01L20.73 6.95996" stroke="#FD9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22.08V12" stroke="#FD9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </div>
                    <span className='text-sm' style={{ color: '#73758C' }}>Most popular product</span>
                    <div className=''>
                        <span className='font-bold text-lg'>Light Hoodies</span>
                    </div>
                </div>


              </div> */}
              {/* charts */}
              {/* <div className='flex sm:flex-col sm:space-x-0 sm:space-y-6 flex-row space-x-6 text-left'>
                <div className='revenue sm:w-full shadow-sm rounded-lg  w-3/5 space-y-6 p-4 bg-white' >
                    <div className='flex justify-between'>
                        <div className='flex flex-col space-y-3'>
                            <span className='text-sm' style={{ color: '#73758C' }}>Revenue</span>
                            <h2 className='font-bold text-xl'>N20,000</h2>
                        </div>
                        <select
                            className='border-0 focus:outline-none focus:ring-inset '
                            value='Today'
                            onChange={e => {
                                console.log('changed')
                            }}
                        >
                            {['Today', 'Weekly', 'Monthly', 'Yearly'].map(date => (
                                <option  className='' key={date} value={date}>
                                {date}
                                </option>
                            ))}
                        </select>
                    </div>
                    <canvas className='' id="myLineChart" width='100%'></canvas>
                    <div className='flex space-x-3 items-center ml-8'>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#46AC48"/>
                        </svg>
                        <span>Revenue</span>
                    </div>
                </div>
                <div className='sales sm:w-full overflow-y-auto  flex flex-col shadow-sm rounded-lg w-2/5 space-y-6 p-4 bg-white'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-bold text-xl'>Sales Analytics</h2>
                        <select
                            className='border-0 focus:outline-none focus:ring-inset '
                            value='Today'
                            onChange={e => {
                                console.log('changed')
                            }}
                        >
                            {['Today', 'Weekly', 'Monthly', 'Yearly'].map(date => (
                                <option  className='' key={date} value={date}>
                                {date}
                                </option>
                            ))}
                        </select>
                    </div>
                    <canvas id="myPieChart" className='self-center object-contain' ></canvas>
                    <div className='flex flex-col self-center space-y-3 text-center' style={{ marginTop: '-190px' }}>
                        <span className='font-bold text-3xl'>50</span>
                        <div className='flex flex-col space-y-2'>
                            <span className='text-sm' style={{ color: '#73758C' }}>Sales</span>
                            <div className='text-xs flex items-center justify-center space-x-1'>
                                <span>
                                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.41663 0.833344L4.24996 5.00001L0.083293 0.833344H8.41663Z" fill="#FE2712"/>
                                    </svg>
                                </span>
                                <span>-13%</span>
                            </div>
                        </div>
                    </div>
                </div>
              </div> */}
        </div>
    )
}

export default History