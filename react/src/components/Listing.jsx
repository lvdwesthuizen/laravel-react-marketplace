/* eslint-disable react/prop-types */
export default function Listing({ listing }) {
  return (
    <div className="flex border rounded-md border-gray-200 my-4 p-4">
      <div className="mr-4 flex-shrink-0">
        <svg
          className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeWidth={1}
            d="M0 0l200 200M0 200L200 0"
          />
        </svg>
        {/* <image
          src={`http://localhost:8000/${listing.image}`}
          alt={listing.title}
        /> */}
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">{listing.title}</h4>
        <p className="font-medium text-gray-900 mb-2">
          {listing.currency === "ZAR"
            ? "R"
            : listing.currency === "USD"
            ? "$"
            : listing.currency === "EUR"
            ? "€"
            : listing.currency === "GBP"
            ? "£"
            : ""}
          {listing.price.toLocaleString("en-US")}
        </p>
        <p className="font-medium text-gray-900 mb-2">{listing.slug}</p>
        <p className="mt-2 text-sm text-gray-500">{listing.description}</p>
      </div>
    </div>
  );
}
