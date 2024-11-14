import React from 'react'
import Customerlove from '../Component/Customerlove'
import Trust from '../Component/Trust'
import Stack from '../Component/Stack'
import Journey from '../Component/Journey'
import Clients from '../Component/Clients'
import Body from '../Component/Body'
import Wedo from '../Component/Wedo'
const Home = () => {
  return (
    <div>
       <Body/>
        <Trust/>
        <Wedo/>
        <Clients/>
        <Customerlove/>
        <Stack/>
        <Journey/>
    </div>
  )
}

export default Home