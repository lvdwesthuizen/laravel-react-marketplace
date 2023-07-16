/* eslint-disable react/prop-types */
import SortFilter from "./SortFilter";

export default function Search(props) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
      <div className="mx-auto max-w-3xl">
        <form>
          <div className="mt-2">
            <input
              type="text"
              name="search"
              id="search"
              value={props.query}
              onChange={props.handleChange}
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search by title or category"
            />
          </div>
        </form>
        <SortFilter sort={props.sort} />
      </div>
    </div>
  );
}
