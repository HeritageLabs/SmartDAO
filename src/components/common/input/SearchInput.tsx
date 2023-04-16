import { SearchIcon } from "../../../assets/svgs";

const SearchInput = () => (
  <form className="flex items-center w-full">
    <label htmlFor="search" className="sr-only">
      Search
    </label>
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {SearchIcon}
      </div>
      <input
        type="text"
        id="search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-quaternary focus:border-quaternary block w-full pl-10 p-2.5 focus-within:border-quaternary focus-within:outline-quaternary"
        placeholder="Search"
        required
      />
    </div>
    <button
      type="submit"
      className="p-2.5 ml-2 text-sm font-medium text-white bg-quaternary rounded-lg border border-quaternary-700 hover:bg-quaternary focus:ring-4 focus:outline-none focus:ring-quaternary-300 dark:bg-quaternary-600 dark:hover:bg-quaternary dark:focus:ring-quaternary"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      <span className="sr-only">Search</span>
    </button>
  </form>
);

export default SearchInput;
