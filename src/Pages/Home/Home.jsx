import React from 'react'
import Banner from '../../components/Banner/Banner'
import NewIn from '../../components/New-In/NewIn'
import Gallary from '../../components/Gallary/Gallary'
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
      <Footer />
    </div>
  )
}

export default Home