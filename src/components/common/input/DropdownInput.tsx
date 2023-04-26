import React from 'react'
import Select from 'react-select'

interface ISelect {
  label: string,
};

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const DropdownInput = ({ label }: ISelect) => (
  <div className='w-full'>
    <label
      htmlFor="underline_select"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <Select options={options} className="w-2/5 text-lg" />
    {/* <div className="flex items-center">
      <select
        id="underline_select"
        className="block py-2.5 px-0 w-full text-dark bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer text-lg"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div> */}
  </div>
);

// DropdownInput.defaultProps = defaultProps;

export default DropdownInput;
