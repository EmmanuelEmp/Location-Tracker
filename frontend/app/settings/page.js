'use client'

import React from 'react';

import Image from 'next/image'
import Link from 'next/link'

export default function Settings() {

  return (
    <>
      <Link className='profile-setting-link' href={`/settings/editprofile`}>
        <Image
          src={"/assests/settings.png"}
          width={24.92}
          height={24.92}
          alt='settings'
          className='profile-setting'
        />
      </Link>

      <Image
        src={"/assests/male.png"}
        width={161.504}
        height={161.504}
        alt='profile picture'
        className='profile-img'
      />

      <h2 className='profile-name'>Alex</h2>

      <div className='profile-div'>

        <h4 className='profile-header'>
          Profile Info
        </h4>

        <div className='profile-info'>
          <h3 className='profile-h3'>Name:</h3>

          <p className='profile-details'>
            Alex Meaida
          </p>
        </div>


        <div className='profile-info'>
          <h3 className='profile-h3'>Email:</h3>

          <p className='profile-details'>
            meadia@gmail.com
          </p>
        </div>


        <div className='profile-info'>
          <h3 className='profile-h3'>Age:</h3>

          <p className='profile-details'>
            20
          </p>
        </div>


        <div className='profile-info'>
          <h3 className='profile-h3'>Gender:</h3>

          <p className='profile-details'>
            Male
          </p>
        </div>


        <div className='profile-info'>
          <h3 className='profile-h3'>Address:</h3>

          <p className='profile-details'>
            Tokoyo, Japan
          </p>
        </div>

        <div className='profile-info'>
          <h3 className='profile-h3'>Phone:</h3>

          <p className='profile-details'>
            080 123 456 78
          </p>
        </div>

        <div className='profile-info'>
          <h3 className='profile-h3'>Country:</h3>

          <p className='profile-details'>
            Japan
          </p>
        </div>
      </div>

      <div className='profile-option-div'>
        <div className='delete-div'>
          <p className='delete-pgh'>Delete Account</p>

          <Image
            src={"/assests/delete.png"}
            width={12}
            height={12}
            alt='profile picture'
            className='profile-img'
          />
        </div>

        <div className='edit-div'>
          <p className='edit-pgh'>Edit Info</p>
        </div>
      </div>
    </>
  )
}
