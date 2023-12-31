import React from 'react'
import PageHeader from '../components/common/page-header'
import Spacer from '../components/common/spacer'
import Games from '../components/games-page/games'
const CoursesPage = () => {
  return (
   <>
    <PageHeader title="Oyunlar" />
    <Spacer/>
    <Games />
   </>
  )
}

export default CoursesPage