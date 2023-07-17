export default function FormInput(props) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 capitalize"
      >
        {props.name.replace("_", " ")}
      </label>
      <div className="mt-2 sm:col-span-2 sm:mt-0">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            type="text"
            name={props.name}
            id={props.name}
            required
            value={props.value}
            onChange={(e) => props.handleChange(props.name, e.target.value)}
            className="block flex-1 border-0 bg-transparent p-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            minLength={props.minLength}
            maxLength={props.maxLength || 255}
          />
        </div>
      </div>
    </div>
  );
}
