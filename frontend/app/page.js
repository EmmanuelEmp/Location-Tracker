import Image from 'next/image'

export default function Home() {
  return (
    <main className="main gap">

      <header>

        <div>
          <Image
            src={"/assests/male-avater.png"}
            width={35}
            height={35}
            alt='movie icon'
          />

          <p>Alex</p>

        </div>

        <div className="search-div">

          <p className="search-pgh">
            Find a place
          </p>

          <Image
            src={"/assests/search-circle.png"}
            width={33.21696}
            height={31.21696}
            alt='movie icon'
          />
        </div>

      </header>

      <div className="location-div">

        <div className="location-rectangle">
          {/* <Image
            src={"/assests/search-circle.png"}
            width={33.21696}
            height={31.21696}
            alt='movie icon'
          /> */}
        </div>

        <div className="distance-info">

          <div className="distance-info-mini-1">
            <Image
              src={"/assests/distance 1.png"}
              width={17}
              height={17}
              alt='walking'
            />

            <div>
              <p className="distance-info-mini-1-pgh-1">3 km</p>
              <p className="distance-info-mini-1-pgh-2">Distance</p>
            </div>

          </div>

          <div className="distance-info-mini">
            <Image
              src={"/assests/walking.png"}
              width={16}
              height={16}
              alt='walking'
            />

            <p className="distance-info-mini-1-pgh-3">40 mins</p>


          </div>

          <div className="distance-info-mini">
            <Image
              src={"/assests/bike.png"}
              width={16}
              height={16}
              alt='walking'
            />

            <p className="distance-info-mini-1-pgh-3">20 mins</p>


          </div>
          <div className="distance-info-mini">
            <Image
              src={"/assests/car.png"}
              width={16}
              height={16}
              alt='walking'
            />

            <p className="distance-info-mini-1-pgh-3">8 mins</p>


          </div>
        </div>

      </div>

    </main>
  );
}