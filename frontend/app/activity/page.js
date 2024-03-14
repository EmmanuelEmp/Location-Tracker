'use client'

import React from 'react';

import Image from 'next/image'
import Link from 'next/link'

export default function Activity() {

  const STATUS = {
    IDLE: "IDLE",
    SUBMITTED: "SUBMITTED",
    SUBMITTING: "SUBMITTING",
    COMPLETED: "COMPLETED",
  };


  const [formData, setFormData] = React.useState({
    newSession: "",
    starting: "",
    final: "",
    duration: "",

  });

  const [isStatus, setStatus] = React.useState(STATUS.IDLE);
  const [touched, setTouched] = React.useState({});
  // const [finish, setFinished] = React.useState(false);
  const [loginError, setLoginError] = React.useState(null)

  const errors = getErrors();
  const isValid = Object.keys(errors).length === 0;

  function handleChg(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prevState) => {
      return {
        ...prevState,
        [name]: true,
      };
    });

  }


  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);

    const displayName = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const fil = e.target[4].files[0]

    console.log(displayName, email, password, fil)

    setStatus(STATUS.SUBMITTING);

    if (isValid) {
      console.log("submit");
      setStatus(STATUS.COMPLETED);
      setFinished(prev => !prev)
      console.log(formData);
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  }


  function getErrors(params) {
    const result = {}

    if (!formData.newSession) {
      result.name = "Session name is required";
    }


    if (!formData.starting) {
      result.age = "Starting Location is required";
    }

    if (!formData.final) {
      result.gender = "Destination is required";
    }

    if (!formData.duration) {
      result.address = "Duration is required";
    }

    // if (!formData.userPhoto) result.userPhoto = "Select a Picture"
    return result;
  }

  if (loginError) throw loginError


  if (isStatus === "SUBMITTING") return (<div className="container">...LOADING</div>)



  return (
    <>

      <div className='history-proflie-div'>
        <Image
          src={"/assests/male-avater.png"}
          width={35}
          height={35}
          alt='profile'
          className='history-img'
        />

        <p>Alex</p>

      </div>

      <div className='current'>
        <h3 className='current-header'>
          Current
        </h3>

        <div className='current-info'>

          <Image
            src={"/assests/chart.png"}
            width={152}
            height={171}
            alt='curren-chart'
            className='current-chart'
          />

          <div className='current-info-div'>

            <div className='currnet-info-detials'>
              <h4 className='current-info-deatils-h4'>
                Speed
              </h4>
              <span className='current-info-deatils-span'> : 20Km/hr</span>
            </div>

            <div className='currnet-info-detials'>
              <h4 className='current-info-deatils-h4'>
                Time Left
              </h4>
              <span className='current-info-deatils-span'> : 20:00</span>
            </div>


            <div className='currnet-info-detials'>
              <h4 className='current-info-deatils-h4'>
                Time Spent
              </h4>
              <span className='current-info-deatils-span'> : 39:45</span>
            </div>

            <div className='currnet-info-detials'>
              <h4 className='current-info-deatils-h4'>
                Distance Left
              </h4>
              <span className='current-info-deatils-span'> : 40km</span>
            </div>

            <div className='currnet-info-detials'>
              <h4 className='current-info-deatils-h4'>
                Distance Covered
              </h4>
              <span className='current-info-deatils-span'> : 67km</span>
            </div>

          </div>

        </div>


      </div>


      <div className='tracking gap'>
        <h3 className='tracking-h3'>Start New Tracking Session</h3>

        <div className='tracking-info-div'>

          <div className='tracking-form-div'>
            <form
              className='tracking-info-form'
              onSubmit={handleSubmit}>

              <div className='tracking-info-input-div'>

                <input
                  type="text"
                  name="newSession"
                  placeholder={`Name of tracking Session`}
                  onChange={handleChg}
                  onBlur={handleBlur}
                  value={formData.newSession}
                  className='tracking-info-input'
                />
                <p className="error" role="alert">
                  {(touched.newSession || isStatus === STATUS.SUBMITTED) && errors.newSession}
                </p>

              </div>

              <div className='tracking-info-input-div'>

                <input
                  type="text"
                  name="starting"
                  placeholder={`Choose Current or Starting Location`}
                  onChange={handleChg}
                  onBlur={handleBlur}
                  value={formData.starting}
                  className='tracking-info-input'
                />
                <p className="error" role="alert">
                  {(touched.starting || isStatus === STATUS.SUBMITTED) && errors.starting}
                </p>

              </div>

              <div className='tracking-info-input-div'>

                <input
                  type="text"
                  name="final;"
                  placeholder={`Choose Final Location`}
                  onChange={handleChg}
                  onBlur={handleBlur}
                  value={formData.final}
                  className='tracking-info-input'
                />
                <p className="error" role="alert">
                  {(touched.final || isStatus === STATUS.SUBMITTED) && errors.final}
                </p>

              </div>

              <div className='tracking-info-input-div'>

                <input
                  type="text"
                  name="duration"
                  placeholder={`Input Duration`}
                  onChange={handleChg}
                  onBlur={handleBlur}
                  value={formData.duration}
                  className='tracking-info-input'
                />
                <p className="error" role="alert">
                  {(touched.duration || isStatus === STATUS.SUBMITTED) && errors.duration}
                </p>

              </div>

            </form>

            <button className='set-timer'>

              Set timer

              <Image
                src={"/assests/alarm.png"}
                width={14.995}
                height={13.73}
                alt='profile picture'
                className='profile-img'
              />
            </button>
          </div>


          <button className='new-session'>Create New Tracking Session</button>
        </div>
      </div>


    </>
  )
}
