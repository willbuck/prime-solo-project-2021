import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import ZendoArrive from '../ZendoArrive/ZendoArrive.jsx'
import ZendoBegin from '../ZendoBegin/ZendoBegin.jsx'
import ZendoEnd from '../ZendoEnd/ZendoEnd.jsx'
import MountainZendo from '../Mountains/MountainZendo'

import axios from 'axios';




export default function Zendo() {


  //gets the current time in milliseconds
  function timeNowMillis() {
    const now = new Date();
    const nowMS = now.getTime()
    return nowMS;
  }

  //sets captures the moment in time when you load the page
  const thisMoment = timeNowMillis();

  //components render in three stages
  //stage one is waiting room
  //stage two is Zendo (need post request to get current number sitting)
  const [timerStage, setTimerStage] = useState(1)
  const [attended, setAttended] = useState(0)
  //   const [koan, setKoan] = useState('')

  //uses redux to get session information
  const sessionInfo = useSelector(store=>store.zendo)



  //on page load it calls the delay timer
  //it uses information stored in the reducer combined with
  //the moment in time captured on load
  function countdownToStart(info, now) {
    const delay = info.start - now;
    console.log('in stage one with delay:', delay);
    setTimeout(getDetails, delay)
  }

  //dispatches a GET for the koan and final attendance
  //uses the response to call the second stage component
  //second stage component is the meditation view
  function getDetails() {
    console.log('in getDetails with session id', sessionInfo.id)
    axios.get(`/api/event/zendo/${sessionInfo.id}`)
      .then((response) => {
        console.log('response from getting details:', response.data);
        setAttended(response.data[0].attended)
        // setKoan(response.data[0].koan)
        startSitting(sessionInfo.duration)
      }).catch((error) => {
        console.log(error);
      })
  }
  //startSitting takes the duration and uses it to run a duration timer
  //startSitting changes the counter to stage 2, and it renders the meditation view component
  //it calls endSitting after the timer runs, which renders the third component
  function startSitting(meditationLength) {
    setTimerStage(2)
    console.log('in stage two duration', meditationLength)
    setTimeout(endSitting, meditationLength)
  }

  //calls last component after session is done
  //says thank you, shows koan
  function endSitting() {
    setTimerStage(3)
    console.log('end of session')
  }



  //the switch statement listens for the change in timer stage and renders a component
  function componentSwitch(condition) {
    switch (condition) {
      case 1:
        return (<ZendoArrive />);
      case 2:
        return (<ZendoBegin
          attended={attended} />);
      case 3:
        return (<ZendoEnd />);
        defeault:
        break;
    }
  }


  useEffect(() => {
    countdownToStart(sessionInfo, thisMoment)
  }, [])

  return (
    <>
    <div className="App">
      <header className="App-header">
        {componentSwitch(timerStage)}
      </header>
    </div>
    <MountainZendo />
    </>
  );
}
