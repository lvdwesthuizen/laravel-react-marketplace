import { Link } from "react-router-dom";

const assetPath = (path) => {
  const assetUrl = import.meta.env.VITE_API_BASE_URL;
  return `${assetUrl}/${path}`;
};

export default function ListItem({ listing }) {
  return (
    <Link to={`/view/${listing.id}`} state={{ data: listing }}>
      <div className="flex flex-col sm:flex-row border rounded-md border-gray-200 my-4 p-4">
        {/* image */}
        <div className="mr-4 flex-shrink-0 flex">
          {!listing.image ? (
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
          ) : (
            <img
              src={assetPath(listing.image)}
              className="w-36 h-36 object-cover rounded"
            />
          )}
        </div>
        {/* info */}
        <div>
          <h4 className="text-lg font-bold mb-2">{listing.title}</h4>
          <p className="mt-2 w-fit rounded-md bg-green-50 px-2 py-1 mb-2 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
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
          <p className="text-sm text-gray-300 mt-4 italic">
            <span>Published: </span>
            <time dateTime={listing.date_online}>
              {new Date(listing.date_online).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        </div>
      </div>
    </Link>
  );
}
