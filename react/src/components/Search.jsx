const categories = [
  { id: "furniture", label: "Furniture" },
  { id: "electronics", label: "Electronics" },
  { id: "cars", label: "Cars" },
  { id: "property", label: "Property" },
];

export default function Search() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <form>
          <div>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search by title or category"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
