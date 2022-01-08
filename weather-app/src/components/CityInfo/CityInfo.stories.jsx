import React from 'react'
import CityInfo from './CityInfo'
import 'typeface-roboto';


export default {
    title: "CityInfo",
    component: CityInfo
}

export const CityExmaple = () => <CityInfo city = {"Madrid"} country = {"Spain"}></CityInfo>