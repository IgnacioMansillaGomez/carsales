import { CustomFilter, Hero, SearchBar } from '@/components';
import { CarsAPI } from '@/api';
import { CarCard } from '@/components/car-card/car-card.component';
import { Car } from '@/types/Car.types';
import '../app/globals.css';

export default async function Home() {
  const allCars = await CarsAPI.getCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars you migth like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car: Car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No results</h2>
            <p>{allCars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
