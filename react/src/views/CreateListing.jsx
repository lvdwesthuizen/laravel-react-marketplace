import { useState } from "react";
import { Navigate } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";
import SelectMenu from "../components/SelectMenu";
import Datepicker from "react-tailwindcss-datepicker";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WebsiteLayout from "../components/WebsiteLayout";
import FormInput from "../components/FormInput";

const categories = [
  { id: "furniture", label: "Furniture" },
  { id: "electronics", label: "Electronics" },
  { id: "cars", label: "Cars" },
  { id: "property", label: "Property" },
];

const currencies = [
  { id: "USD", label: "US Dollar" },
  { id: "EUR", label: "Euro" },
  { id: "GBP", label: "Pound Sterling" },
  { id: "ZAR", label: "South African Rand" },
];

export default function CreateListing() {
  const { userToken, currentUser } = useStateContext();

  const [error, setError] = useState("");

  const [listing, setListing] = useState({
    user_id: "",
    title: "",
    slug: "",
    description: "",
    date_online: new Date(),
    date_offline: new Date(),
    price: "",
    currency: currencies[0],
    category: {},
    image_url: null,
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
  });

  if (!userToken) {
    return <Navigate to="/auth/login" />;
  }

  const onImageChoose = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setListing({
        ...listing,
        image: file,
        image_url: reader.result,
      });

      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = { ...listing };

    if (payload.image) {
      payload.image = payload.image_url;
    }
    delete payload.image_url;

    if (payload.date_online) {
      payload.date_online = payload.date_online.startDate;
    }

    if (payload.date_offline) {
      payload.date_offline = payload.date_offline.startDate;
    }

    payload.mobile = payload.mobile.replace(" ", "");
    payload.mobile = payload.mobile.replace("+", "");

    if (currentUser && typeof currentUser === "string") {
      payload.user_id = JSON.parse(currentUser).id;
    } else if (currentUser && typeof currentUser === "object") {
      payload.user_id = currentUser.id;
    }

    axiosClient
      .post("/listing/create", payload)
      .then(() => {
        toast.success("Your listing has been published!");
      })
      .catch((err) => {
        if (err && err.response) {
          setError(err.response.data.message);
        }
        console.error(err.response);
      });
  };

  const handleChange = (name, value) => {
    setListing({ ...listing, [name]: value });
  };

  return (
    <WebsiteLayout>
      <form
        className="mx-10 sm:mx-20"
        action="#"
        method="POST"
        onSubmit={onSubmit}
      >
        <div className="space-y-12 sm:space-y-16">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create a new listing
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
              Please complete the form to submit your listing.
            </p>
            {error && (
              <div className="bg-red-500 rounded w-fit text-white py-3 px-3 mt-3">
                {error}
              </div>
            )}

            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <FormInput
                name="title"
                type="text"
                value={listing.title}
                handleChange={handleChange}
                minLength={30}
              />

              <FormInput
                name="slug"
                type="text"
                value={listing.slug}
                handleChange={handleChange}
                minLength={30}
              />

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Description
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={3}
                    className="block w-full max-w-2xl rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={listing.description}
                    onChange={(e) =>
                      setListing({ ...listing, description: e.target.value })
                    }
                    minLength={100}
                    maxLength={500}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="date-online"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Date online
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <div className="p-px flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <Datepicker
                      asSingle={true}
                      useRange={false}
                      value={listing.date_online}
                      onChange={(newValue) =>
                        setListing({ ...listing, date_online: newValue })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="date-offline"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Date offline
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <div className="p-px flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <Datepicker
                      asSingle={true}
                      useRange={false}
                      value={listing.date_offline}
                      onChange={(newValue) =>
                        setListing({ ...listing, date_offline: newValue })
                      }
                    />
                  </div>
                </div>
              </div>

              <FormInput
                name="price"
                type="number"
                value={listing.price}
                handleChange={handleChange}
                minLength={1}
              />

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="currency"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Currency
                </label>
                <SelectMenu
                  name="currency"
                  list={currencies}
                  handleChange={handleChange}
                />
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Select a category
                </label>
                <fieldset className="mt-4">
                  <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <input
                          id={category.id}
                          name="category"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={category.id}
                          onChange={(e) =>
                            setListing({ ...listing, category: e.target.value })
                          }
                        />
                        <label
                          htmlFor={category.id}
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Upload photo
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <div className="flex">
                    <div className="flex w-96 justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={onImageChoose}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-x-3">
                      {listing.image_url && (
                        <img
                          src={listing.image_url}
                          alt=""
                          className="w-32 h-32 object-cover m-4 rounded"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <FormInput
                name="first_name"
                type="text"
                value={listing.first_name}
                handleChange={handleChange}
                minLength={3}
              />

              <FormInput
                name="last_name"
                type="text"
                value={listing.last_name}
                handleChange={handleChange}
                minLength={3}
              />

              <FormInput
                name="email"
                type="email"
                value={listing.email}
                handleChange={handleChange}
                minLength={10}
              />

              <FormInput
                name="mobile"
                type="text"
                value={listing.mobile}
                handleChange={handleChange}
                minLength={9}
                maxLength={10}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => {
              window.location.reload();
              window.scrollTo(0, 0);
            }}
          >
            Reset form
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Publish
          </button>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </form>
    </WebsiteLayout>
  );
}
