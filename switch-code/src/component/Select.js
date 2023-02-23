import React from 'react'
import '../css/Select.css'

export default function Select() {
    return (
        <div className='Select'>
            <a href="/coding" className='content'>
                <div className='coding'>
                    <h1>Coding</h1>
                </div>
            </a>
            <a href="/webdev" className='content'>
                <div className='webDev'>
                    <h1>Web Development</h1>
                </div>
            </a>

        </div>
    )
}
