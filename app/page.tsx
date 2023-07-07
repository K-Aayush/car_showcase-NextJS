import { Hero, CustomFilter, SearchBar } from '@/components'
import Image from 'next/image'

export default function Home() {
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
            <CustomFilter title="fuel" />
            <CustomFilter title="Year" />
          </div>
        </div>
      </div>
    </main>
  )
}
