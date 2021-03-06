import React from 'react'
import malePng from '../images/male.png'
import femalePng from '../images/female.png'
import robot from '../images/robot.jpg'
import '../styles/gender.css'

//выводим картинку на основе props.gender
export const GenderImg = (props) => {
  if (props.gender === 'male') {
    return <img src={malePng} alt="logo" className="gender" />
  } else if (props.gender === 'female') {
    return <img src={femalePng} alt="logo" className="gender" />
  } else {
    return <img src={robot} alt="logo" className="robot" />
  }
}
