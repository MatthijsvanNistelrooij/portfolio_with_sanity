import React from "react"
import { Input } from "@headlessui/react"

const SearchBar = ({ input, handleInputChange }) => {
  return (
    <Input
      name="full_name"
      type="text"
      className="p-2 w-40 sm:w-72 fixed top-2.5 right-2 text-gray-800"
      value={input}
      onChange={handleInputChange}
      placeholder="Type to search"
    />
  )
}

export default SearchBar
