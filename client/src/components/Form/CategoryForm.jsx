import React from "react";

export default function CategoryForm({ handleSubmit, value, setValue }) {
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-2 flex p-2 w-96">
        <div className="mb-5 w-full">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter the value"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button type="submit" className="bg-blue-700 px-3 rounded-lg ml-4 h-10 justify-center align-middle">Submit</button>
      </form>
    </>
  );
}
