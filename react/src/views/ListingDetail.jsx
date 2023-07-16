import { useLocation } from "react-router-dom";
import { CalendarDaysIcon, UserCircleIcon } from "@heroicons/react/20/solid";

const formatPhoneNumber = (str) => {
  let cleaned = ("" + str).replace(/\D/g, "");
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
};

export default function ListingDetail() {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row">
        {/* main */}
        <div className="mb-4 md:mr-4 md:mb-0 px-4 py-5 sm:p-6 flex flex-col border rounded-md border-gray-200">
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
          </div>
          <h3 className="text-base font-semibold leading-7 text-gray-900 mt-4 mb-2">
            {data.title}
          </h3>
          <div className="mb-2 space-y-1 text-sm leading-6 text-gray-600">
            {data.slug}
          </div>
          <div className="w-fit rounded-md bg-green-50 px-2 py-1 my-2 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
            {data.currency === "ZAR"
              ? "R"
              : data.currency === "USD"
              ? "$"
              : data.currency === "EUR"
              ? "€"
              : data.currency === "GBP"
              ? "£"
              : ""}
            {data.price.toLocaleString("en-US")}
          </div>
          <div className="my-2 space-y-1 text-base text-gray-500">
            {data.description}
          </div>
        </div>
        {/* sidebar */}
        <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
          <dl className="flex flex-wrap">
            <div className="flex-auto pl-6 pt-6">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                Contact the advertiser
              </dt>
            </div>
            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
              <dt className="flex-none">
                <span className="sr-only">Client</span>
                <UserCircleIcon
                  className="h-6 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd className="text-sm font-medium leading-6 text-gray-900">
                {`${data.first_name} ${data.last_name}`}
              </dd>
            </div>
            <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
              <dt className="flex-none">
                <span className="sr-only">Publish date</span>
                <CalendarDaysIcon
                  className="h-6 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd className="text-sm leading-6 text-gray-500">
                <time dateTime={data.date_online}>
                  {new Date(data.date_online).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </dd>
            </div>
          </dl>
          <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
            <div>
              <div className="sr-only">Email</div>
              <div>
                <a
                  className="text-sm font-semibold text-indigo-600"
                  href={`mailto:${data.email}`}
                >
                  {data.email}
                </a>
              </div>
            </div>
            <div className="mt-1 text-sm leading-6 text-gray-600">
              <div className="sr-only">Phone number</div>
              <div>{formatPhoneNumber(data.mobile)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
