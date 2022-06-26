import React from 'react'

export default function SanPham(props) {

    // const gree = "Hellow"
    // const gree =() => {
    //     return <h1>Hello world</h1>
    // }

    const {item} = props

  return (
   <>
    <div className='card col-3 ' >
                <div className='card-header' >
                    <img src={item.img} width={200} />
                </div>
                <div className='card-body' >
                    <h4>{item.name}</h4>
                </div>
            </div>
   </>
  )
}
