"use client"

import React from 'react'

import { useState } from 'react'
import SearchManufacturer from './searchManufacturer'
import Image from 'next/image'
import { SearchBarProps } from '@/types'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt='magnifying glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

const SearchBar: React.FC<SearchBarProps> = ({ setManufacturer, setModel }: SearchBarProps) => {
    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(searchManufacturer === '' && searchModel === '') {
        return alert('Please Fill in the search bar')
      }

      setModel(searchModel)
      setManufacturer(searchManufacturer)
    }

  return (
    <form className="searchbar" onSubmit={handleSearch} action="">
        <div className="searchbar_item">
            <SearchManufacturer
                selected = {searchManufacturer}
                setSelected = {setSearchManufacturer}
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className="searchbar_item">
          <Image 
            src="/model-icon.png"
            alt='car model'
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
          />
          <input type='text' name="model" value={searchModel} onChange={(e) => setSearchModel(e.target.value)} placeholder='Tiguan' className='searchbar_input'/>
          <SearchButton otherClasses='sm:hidden'/>
        </div>
        <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar