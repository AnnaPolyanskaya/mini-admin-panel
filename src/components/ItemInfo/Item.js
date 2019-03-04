import React, { Component } from 'react'
import './item.css';

export default class Item extends Component {
  render() {
    const info = {
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/504262/Coffee%20Mug%20PSD%20Mockup.png",
        name: "CODE AND COFFEE MUG",
        pricing: '15$',
        details: [
            '100% grass fed ceramic.',
            'Locally sourced ink.',
            'Holds about 16oz of liquid.',
            'For use only with hipster coffee that no one has heard of before.'
        ]
    }
    return (
      <div className='item-container'>
        <div className='item-header'>
            <img src={info.img} alt='item-img'/>
            <h5>{info.name}</h5>
        </div>
        <div className='item-descr'>
            <ul>
                {info.details.map( (it, i) => (
                    <li key={i}>{it}</li>
                ))}
            </ul>
        </div>
      </div>
    )
  }
}
