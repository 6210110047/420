import 'bulma/css/bulma.min.css'
import React from 'react'
import Navbar from '../components/navbar'

export default function ({ children }){
    return <>
    <section className="section"> 
        <div className="container"> 
            <Navbar />
            <hr />
            {children}
        </div>
    </section>
       
    </>
}