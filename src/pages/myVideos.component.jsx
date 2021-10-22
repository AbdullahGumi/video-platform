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

const MyVideos = () => {
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
        <div className='flex flex-col space-y-12 px-6 py-12'>
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
                            <Link to={`/dashboard/my_videos/player/${hoodie.productID}`}>
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
        </div>
    )
}

export default MyVideos