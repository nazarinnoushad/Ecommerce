import React from 'react';

const ProductForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full max-w-lg">
      <select className="p-2 rounded  text-white border">
        <option>Select a collection</option>
      </select>

      <button
        type="button"
        className="bg-blue-800 text-white px-4 py-2 rounded w-fit"
      >
        Upload image
      </button>

      <input
        type="text"
        placeholder="Enter name"
        className="p-2 rounded border text-white"
      />

      <textarea
        placeholder="Description"
        className="p-2 rounded border text-white"
      />

      <input
        type="number"
        placeholder="Price"
        className="p-2 rounded border text-white"
      />

      <input
        type="number"
        placeholder="Quantity"
        className="p-2 rounded border text-white"
      />

      <select className="p-2 rounded border text-white">
        <option>Select Shipping</option>
      </select>

      <button
        type="submit"
        className="bg-blue-800 text-white py-2 px-4 rounded w-fit"
      >
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;

