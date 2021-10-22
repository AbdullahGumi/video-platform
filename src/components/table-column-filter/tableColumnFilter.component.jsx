import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { default as ReactSelect, components } from "react-select"
import { useDispatch, useSelector } from 'react-redux'

import { selectDateFilter } from '../../redux/orders/ordersActions'

const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

export const countryOptions = [
    { value: "", label: "All" },
    { value: "United States", label: "United States" },
    { value: "Spain", label: "Spain" },
];

export const stateOptions = [
    { value: "", label: "All" },
    { value: "Alaska", label: "Alaska" },
    { value: "Alabama", label: "Alabama" },
    { value: "La Rioja", label: "La Rioja" },
    { value: "Barcelona", label: "Barcelona" },
    { value: "Las Palmas", label: "Las Palmas" },
    
];

export const dateOptions = [
    { value: "", label: "All" },
    { value: "today", label: "Today" },
    { value: "week", label: "This Week" },
    { value: "month", label: "This Month" },
    { value: "quarter", label: "This Quarter" }
];

const TableColumnFilter = ({ countryFilter, stateFilter, dateFilter, setFilter  }) => {
    const [optionSelected, setOptionSelected] = useState(null)

    
    const handleChange = (selected) => {
      setOptionSelected(selected)
      dateFilter && setFilter('dateCreated',  selected.value)
      countryFilter && setFilter('country',  selected.value)
      stateFilter && setFilter('state',  selected.value)
      };

  return (
    <div className="">
      <Menu as="div" className="inline-block text-left">
        <div className='flex flex-row space-x-3'>
        <span>{countryFilter ? 'COUNTRY' : stateFilter ? 'STATE' : 'DATE CREATED'}</span>
          <Menu.Button className="">
              <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.49997 2.83L8.66997 6L10.08 4.59L5.49997 0L0.909973 4.59L2.32997 6L5.49997 2.83ZM5.49997 15.17L2.32997 12L0.919973 13.41L5.49997 18L10.09 13.41L8.66997 12L5.49997 15.17Z" fill="#171C17"/>
              </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className='relative'>
            { countryFilter &&
              <Menu.Items 
                className="absolute space-y-3 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{ padding: '16px 8px' }}
              >  
               <ReactSelect
                    options={countryOptions}
                    defaultMenuIsOpen   
                    components={{
                        Option
                    }}
                    onChange={handleChange}
                    value={optionSelected}
                />
            </Menu.Items>
            }   

            { stateFilter &&
              <Menu.Items 
                className="absolute space-y-3 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{ padding: '16px 8px' }}
              >  
              <ReactSelect
                    options={stateOptions}
                    defaultMenuIsOpen   
                    components={{
                        Option
                    }}
                    onChange={handleChange}
                    value={optionSelected}
                />
            </Menu.Items>
            }   

            { dateFilter &&
              <Menu.Items 
                className="absolute space-y-3 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{ padding: '16px 8px' }}
              >  
              <ReactSelect
                options={dateOptions}
                defaultMenuIsOpen   
                components={{
                    Option
                }}
                onChange={handleChange}
                value={optionSelected}
              />
            </Menu.Items>
            }     
          </div>
        </Transition>
      </Menu>
    </div>
  )
}

export default TableColumnFilter