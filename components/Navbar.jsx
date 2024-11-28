"use client"

import Link from "next/link"
import React, { useState } from "react"
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <div className="text-white p-3 bg-[#1d1d1d] flex justify-between">
      <Link href={"/"} className="mt-1 text-2xl">
        PROJECTS
      </Link>
    </div>
  )
}

export default Navbar
