import React from 'react'
import SanPham from '../sanPham/SanPham'

export default function DanhSachSanPham() {

    const data = [
        { id: 1, name: 'Iphone', img: 'https://cdn.tgdd.vn/Products/Images/44/238132/lg-gram-16-i7-16z90pgah73a5-600x600.jpg' },
        { id: 1, name: 'Iphone', img: 'https://cdn.tgdd.vn/Products/Images/54/217381/tai-nghe-bluetooth-true-wireless-mozard-q7-thumb-600x600.jpeg' }, 
        { id: 1, name: 'Iphone', img: 'https://cdn.tgdd.vn/Products/Images/44/266157/hp-envy-x360-convert-13-ay1056au-r7-601q8pa-170322-023537-600x600.jpg' }, 
        { id: 1, name: 'Iphone', img: 'https://cdn.tgdd.vn/Products/Images/44/238132/lg-gram-16-i7-16z90pgah73a5-600x600.jpg' },
    ]


    const renderSanPham = ()=>{
        return data.map((item , index) => {
            return  <SanPham  item={item}/>
        })
    }

    return (
        <div className='container ' >
            <div className='row'>
                {renderSanPham()}
            </div>
            
        </div>
    )
}
