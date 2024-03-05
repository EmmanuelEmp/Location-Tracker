import Image from 'next/image'

export default function Home() {
  return (
    <>

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
              alt='search'
            />
          </div>

        </header>

        <div className="location-div">

          <div className="location-rectangle">
          </div>

          <div className="distance-info">

            <div className="distance-info-mini-1">
              <Image
                src={"/assests/distance 1.png"}
                width={17}
                height={17}
                alt='distance'
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
                alt='riding'
              />

              <p className="distance-info-mini-1-pgh-3">20 mins</p>


            </div>
            <div className="distance-info-mini">
              <Image
                src={"/assests/car.png"}
                width={16}
                height={16}
                alt='driving'
              />

              <p className="distance-info-mini-1-pgh-3">8 mins</p>


            </div>
          </div>

        </div>

        <div className="locationTag">
          <div className="loactionTags locationTags-1 d-flex">
            <p className="locationTags-pgh-1">Popular</p>
          </div>

          <div className="loactionTags locationTags-2 d-flex">
            <p className="locationTags-pgh">Saved</p>
          </div>

          <div className="loactionTags locationTags-3 d-flex">
            <p className="locationTags-pgh-1">
              Recent
            </p>
          </div>
        </div>

        <div className="locationPlace-container">
          <div className="locationPlace">

            <div className="locationPlaceImg">
            </div>

            <div className="locationPlaceInfo">
              <h1 className="locationPlaceInfo-header">
                Mx Cafe
              </h1>

              <p className="locationPlaceInfo-about">
                Experience artisanal coffee and delectable pastries at the trendy Mx Cafe.
              </p>

              <Image
                src={"/assests/stars.png"}
                width={100}
                height={20}
                alt='stars'
              />

              <span className="locationPlaceInfo-reviewSpan">
                <p className="locationPlaceInfo-reviewSpan-pgh-1">4.0</p>
                <p className="locationPlaceInfo-reviewSpan-pgh-2">(3457)</p>
              </span>


              <div className="locationPlaceInfo-extra">
                <div className="locationPlaceInfo-extra-moreInfo">
                  <h3 className="locationPlaceInfo-extra-h3">More Info</h3>

                  <Image
                    src={"/assests/web.png"}
                    width={18}
                    height={16.955}
                    alt='web'
                  />
                </div>

                <div className="locationPlaceInfo-extra-bookmark">
                  <Image
                    src={"/assests/bookmark.png"}
                    width={13}
                    height={13}
                    alt='bookmark'
                  />

                  <h4 className="locationPlaceInfo-extra-bookmark-h4">
                    Bookmark
                  </h4>
                </div>
              </div>

            </div>
          </div>

          <div className="locationPlace">

            <div className="locationPlaceImg">
            </div>

            <div className="locationPlaceInfo">
              <h1 className="locationPlaceInfo-header">
                Mx Cafe
              </h1>

              <p className="locationPlaceInfo-about">
                Experience artisanal coffee and delectable pastries at the trendy Mx Cafe.
              </p>

              <Image
                src={"/assests/stars.png"}
                width={100}
                height={20}
                alt='stars'
              />

              <span className="locationPlaceInfo-reviewSpan">
                <p className="locationPlaceInfo-reviewSpan-pgh-1">4.0</p>
                <p className="locationPlaceInfo-reviewSpan-pgh-2">(3457)</p>
              </span>


              <div className="locationPlaceInfo-extra">
                <div className="locationPlaceInfo-extra-moreInfo">
                  <h3 className="locationPlaceInfo-extra-h3">More Info</h3>

                  <Image
                    src={"/assests/web.png"}
                    width={18}
                    height={16.955}
                    alt='web'
                  />
                </div>

                <div className="locationPlaceInfo-extra-bookmark">
                  <Image
                    src={"/assests/bookmark.png"}
                    width={13}
                    height={13}
                    alt='bookmark'
                  />

                  <h4 className="locationPlaceInfo-extra-bookmark-h4">
                    Bookmark
                  </h4>
                </div>
              </div>

            </div>
          </div>
          <div className="locationPlace">

            <div className="locationPlaceImg">
            </div>

            <div className="locationPlaceInfo">
              <h1 className="locationPlaceInfo-header">
                Mx Cafe
              </h1>

              <p className="locationPlaceInfo-about">
                Experience artisanal coffee and delectable pastries at the trendy Mx Cafe.
              </p>

              <Image
                src={"/assests/stars.png"}
                width={100}
                height={20}
                alt='stars'
              />

              <span className="locationPlaceInfo-reviewSpan">
                <p className="locationPlaceInfo-reviewSpan-pgh-1">4.0</p>
                <p className="locationPlaceInfo-reviewSpan-pgh-2">(3457)</p>
              </span>


              <div className="locationPlaceInfo-extra">
                <div className="locationPlaceInfo-extra-moreInfo">
                  <h3 className="locationPlaceInfo-extra-h3">More Info</h3>

                  <Image
                    src={"/assests/web.png"}
                    width={18}
                    height={16.955}
                    alt='web'
                  />
                </div>

                <div className="locationPlaceInfo-extra-bookmark">
                  <Image
                    src={"/assests/bookmark.png"}
                    width={13}
                    height={13}
                    alt='bookmark'
                  />

                  <h4 className="locationPlaceInfo-extra-bookmark-h4">
                    Bookmark
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="action-div">
          <p className="action-div-pgh">Lets Go Now</p>

          <Image
            src={"/assests/telegram.png"}
            width={20}
            height={20}
            alt='telegram'
          />
        </div>
      </main>
    </>
  );
}