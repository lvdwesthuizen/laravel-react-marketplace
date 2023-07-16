/* eslint-disable react/prop-types */

// const filters = [
//   { value: "furniture", label: "Furniture", checked: false },
//   { value: "electronics", label: "Electronics", checked: false },
//   { value: "cars", label: "Cars", checked: false },
//   { value: "property", label: "Property", checked: false },
// ];

export default function SortFilter(props) {
  return (
    <div className="mt-4 flex items-center">
      <div className="text-sm text-gray-500 pr-4">Sort by:</div>
      <span className="isolate inline-flex rounded-md shadow-sm">
        <button
          type="button"
          onClick={() => props.sort("most recent")}
          className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 focus:bg-gray-200"
        >
          Most Recent
        </button>
        <button
          type="button"
          onClick={() => props.sort("lowest price")}
          className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 focus:bg-gray-200"
        >
          Lowest Price
        </button>
        <button
          type="button"
          onClick={() => props.sort("highest price")}
          className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 focus:bg-gray-200"
        >
          Highest Price
        </button>
      </span>
    </div>
  );
}
