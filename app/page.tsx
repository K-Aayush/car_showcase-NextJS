'use client'

import { Hero, CustomFilter, SearchBar, CarCard } from '@/components'
import Showmore from '@/components/Showmore';
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [allCars, setAllcars] = useState([]);
  const [loading, setLoading] = useState(false);

  //search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2023);

  //pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2023,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || ''
      });
  
      setAllcars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model  ])
  

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold">Car Catelogue</h1>
          <p>Explore the cars you might like.</p>
        </div>

        <div className="home_filters">
            <SearchBar setManufacturer = {setManufacturer} setModel = {setModel} />
          <div className="home_filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter = {setFuel} />
            <CustomFilter title="Year" options={yearsOfProduction} setFilter = {setYear} />
          </div>
        </div>

          {allCars.length > 0 ? (
            <section>
              <div className="home_cars-wrapper">
                {allCars?.map((car) => <CarCard car={car}/>)}
              </div>

              {loading && (
                <div className='mt-16 w-full flex-center'>
                  <Image 
                    src="/loader.svg"
                    alt='loader'
                    width={50}
                    height={50}
                    className='object-contain'
                  /> 
                </div>
              )}

              <Showmore 
                pageNumber={(limit) / 10}
                isNext={limit > allCars.length}
                setLimit = {setLimit}
              />
            </section>
          ): (
            <div className="home_error-container">
              <h2 className="text-black text-xl font-bold">Opps! No Results!</h2>
            </div>
          )}

      </div>
    </main>
  )
}
