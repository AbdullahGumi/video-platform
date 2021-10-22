import { Dialog } from '@headlessui/react'
import { useState } from "react";
import { countryOptions, stateOptions } from "./data.js";
import { default as ReactSelect, components } from "react-select";


import CustomButton from '../custom-button/CustomButton.component'

import CancelSVG from '../svg/cancelSVG.component'


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

const FilterCustomers = ({ isFilterOpen, setFilterOpen }) => {

    const [optionSelected, setOptionSelected] = useState(null)

  const handleChange = (selected) => {
    setOptionSelected(selected)
  };

    return (
        <Dialog
        as="div"
        className="fixed flex justify-end inset-0 z-40 overflow-y-auto "
        style={{ backgroundColor: 'rgb(0,0,0,0.3)' }}
        open={isFilterOpen}
        onClose={()=> setFilterOpen(!isFilterOpen)}
        >
            <div className='flex flex-col self-end bg-white p-6 w-full rounded-tl-3xl rounded-tr-3xl text-left space-y-6'>
                <div className='flex flex-col space-y-3'>
                    <div className='flex flex-row justify-between items-center'>
                        <span className='font-bold text-2xl'>Filter</span>
                        <CustomButton handleClick={()=> setFilterOpen(!isFilterOpen)} width='20px' height='20px' backgroundColor='transparent' icon={<CancelSVG/>}/>
                    </div>
                    <div className=''>
                        <span style={{ color: '#73758C', fontSize: '14px' }}>Choose your preferred mode of filtering your customers</span>
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <span className='font-semibold'>Country</span>
                    <span
                        className="d-inline-block"
                        data-toggle="popover"
                        data-trigger="focus"
                        data-content="Please selecet account(s)"
                    >
                        <ReactSelect
                        options={countryOptions}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        components={{
                            Option
                        }}
                        onChange={()=> handleChange()}
                        allowSelectAll={true}
                        value={optionSelected}
                        />
                    </span>
                    <hr style={{ border: '1px dashed #C7C8D1', marginTop: '30px' }} />
                </div>

                <div className='flex flex-col space-y-4'>
                    <span className='font-semibold'>State</span>
                    <span
                        className="d-inline-block"
                        data-toggle="popover"
                        data-trigger="focus"
                        data-content="Please selecet account(s)"
                    >
                        <ReactSelect
                        options={stateOptions}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        components={{
                            Option
                        }}
                        onChange={()=> handleChange()}
                        allowSelectAll={true}
                        value={optionSelected}
                        />
                    </span>
                </div>
            
                <div className='flex flex-row mt-24 space-x-1 self-end'>
                    <CustomButton handleClick={()=> setFilterOpen(!isFilterOpen)} width='100px' height='44px' text='Cancel' color='black' backgroundColor='transparent' />
                    <CustomButton width='100px' height='44px' text='Apply' />
                </div>

            </div>
        </Dialog>
    );
}

export default FilterCustomers