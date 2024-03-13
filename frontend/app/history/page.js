'use client'

import React from 'react';

import Image from 'next/image'
import Link from 'next/link'

export default function History() {

  return (
    <>

      <div>
        <Image
          src={"/assests/male-avater.png"}
          width={35}
          height={35}
          alt='movie icon'
        />

        <p>Alex</p>

      </div>

      <div>
        <h2>History</h2>

        <div>

          <div>
            <h3>
              Recent
            </h3>
          </div>

          <div>
            <h3>
              Saved
            </h3>
          </div>


        </div>
      </div>


      <div>
        <Image
          src={"/assests/male-avater.png"}
          width={35}
          height={35}
          alt='movie icon'
        />

        <div>
          <h2>Levis Hotel</h2>
          <p>Lorem ipsum dolor sit amet, consectetur ...</p>

          <div>

            <Image
              src={"/assests/male-avater.png"}
              width={35}
              height={35}
              alt='movie icon'
            />

            <h4>3.0(213)</h4>
          </div>

        </div>


      </div>


    </>
  )
}
