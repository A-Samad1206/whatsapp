import { SearchIcon } from '@heroicons/react/outline';

const SearchInput = () => {
  // console.log('SearchInputSearchInput');
  return (
    <div className="bg-header-bg-color w-full  py-2 px-4">
      <div className="relative text-gray-600 focus-within:text-gray-400 mx-auto rounded-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button className="p-1 focus:outline-none focus:shadow-outline">
            <SearchIcon className="h-6 w-6 " />
          </button>
        </span>
        <input
          type="search"
          name="q"
          className="w-full py-2 text-sm text-white bg-white rounded-full pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default SearchInput;
