import React from 'react'
import Slider from '../components/homepage/slider'
import Welcome from '../components/about-page/welcome'
import Spacer from '../components/common/spacer'
import FeaturedCourses from '../components/homepage/games'
import UpcomingEvents from '../components/events-page/upcomig-event'
import MobileApp from '../components/homepage/mobile-app'
import ItemCard from '../components/knight-item-page/item-card'
import KnightItem from '../components/knight-item-page/knight-item'
import KnightRing from '../components/knight-rings-page/knight-ring'

const HomePage = () => {
  return (
    <>
        <Slider/>
        <FeaturedCourses />
        <Spacer/>
        <KnightItem />
        <Spacer />
        <KnightRing />
        <Spacer />
        <Welcome />
        <Spacer/>
        <MobileApp />
    </>
  )
}

export default HomePage