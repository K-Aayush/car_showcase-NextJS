import { Hero, CustomFilter, SearchBar, CarCard } from '@/components'
import Showmore from '@/components/Showmore';
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home({ searchParams }: any) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold">Car Catelogue</h1>
          <p>Explore the cars you might like.</p>
        </div>

        <div className="home_filters">
            <SearchBar />
          <div className="home_filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="Year" options={yearsOfProduction} />
          </div>
        </div>

          {!isDataEmpty ? (
            <section>
              <div className="home_cars-wrapper">
                {allCars?.map((car) => <CarCard car={car}/>)}
              </div>

              <Showmore 
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ): (
            <div className="home_error-container">
              <h2 className="text-black text-xl font-bold">Opps! No Results!</h2>
              <p>{allCars?.message}</p>
            </div>
          )}

      </div>
    </main>
  )
}
