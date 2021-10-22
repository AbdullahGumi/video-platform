import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

const TWO_HUNDRED_MS = 200;

const  TableFilter = ({ globalFilter, setGlobalFilter, placeholder }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, TWO_HUNDRED_MS);

  return (
    <div className="relative w-full text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
      </span>

      {/* desktop view */}
      <input type="text"
          style={{ width:'100%', border: '1px solid #E4E7E4' }}
          className="sm:px-0 sm:py-2 sm:pl-10 px-3 py-4 pl-10 text-sm rounded  focus:text-gray-900"
          placeholder={placeholder}
          value={value || ""}
          onChange={e => {
              setValue(e.target.value);
              onChange(e.target.value);
          }}
      />

    </div>
  )
}

export default TableFilter