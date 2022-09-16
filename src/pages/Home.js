import React, {useState} from 'react'

import StreamList from '../components/StreamList'

const Home = () => {

    return (
        <div className='ui container'>
             <h3>Home</h3>
             <StreamList />
        </div>
    )
}

export default Home