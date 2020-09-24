import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title.js'
 
export default class Services extends Component {
 state={
     services:[
         {
             icon:<FaCocktail/>,
             title:"Free Cocktails",
            info:'We serve you free cocktails! Enjoy your day!'
         },
         {
            icon:<FaHiking/>,
            title:"Endless Hiking",
           info:'We serve you free cocktails! Enjoy your day!'
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
           info:'We serve you free cocktails! Enjoy your day!'
        },
        {
            icon:<FaBeer/>,
            title:"Strongest Beer",
           info:'We serve you free cocktails! Enjoy your day!'
        }
     ]
 }
    render() {
    return (
      <section className='services'>
        <Title title="services"/>
        <div className="services-center">
            {this.state.services.map((item,index) => {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    )
  }
}
