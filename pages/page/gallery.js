import React from 'react'
import axelerate from "../../assets/portfolio/axelerate.png"
import praukcy from "../../assets/portfolio/praukcy1.png"
import Image from 'next/image'

const gallery = () => {
  return (
    <div>
      <Image src={axelerate} height={190} />
      <Image src={praukcy} height={190} />
    </div>
  )
}

export default gallery
