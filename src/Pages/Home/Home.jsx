import React from 'react'
import Banner from '../../components/Banner'
import NewIn from '../../components/NewIn'
import Gallary from '../../components/Gallary'
import ReviewPg from '../../components/ReviewPg'
import Toptrending from '../../components/Toptrending'
import Perfection from '../../components/Perfection'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <NewIn />
      <Gallary />
      <ReviewPg />
      <Toptrending />
      <Perfection />
    </div>
  )
}

export default Home