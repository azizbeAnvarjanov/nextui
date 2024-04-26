import React from 'react'
import Hero from '../components/Hero'
import Block from '../components/Block'
import LoginModal from '../components/LoginModal'
import RegisterModal from '../components/RegisterModal'

const Home = () => {
  return (
    <div>
        <Hero />
        <Block />
        <hr />
            <LoginModal />
            <RegisterModal />
        <hr />
        <Block />
    </div>
  )
}

export default Home