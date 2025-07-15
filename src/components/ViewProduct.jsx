import React, { useState } from 'react'
import NavProduct from './NavProduct'

const ViewProduct = () => {
    const [product,changeProduct]=useState(
        [
            
                {"name":"Cetaphile", "image":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/WwvMh0iaq-Cetaphil-Moisturising-Lotion-(100ml).jpeg"},
                {"name":"Face serum", "image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8kVhaY2S8NWjPHTgoAtO1VWQlNYDvSV1LyvPFTmQn0To9lxd_1yn9et9FJLAxt7k-rAfJzDjYTudo9hQmKqBMeIDG8krR87JdBEKO0oIexXxxEKkAS-WWnh7cVybdxHZ4dhrneA&usqp=CAc"},
                {"name":"Primer", "image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7fgFerBHxxr9cJH2q_y3BFnDU05c0XFbzlGRExS_63ilfaD47BAUqSXw5DLiZj0ueROYeSHkHb8vQBtWKd8DWhDWOp6oaGJ6rWen9RDd5F7_1fzPiZwBvfDFQT_x_kVjedvk2kQ&usqp=CAc"},
                {"name":"Foundation", "image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSeHaOnZy43RlXdQO9zRtr0QwqbIyx0RQczNxctjCByF5H4yRy7ehvVgYIJZJRs2YEiAby91y4PD-cbgNZSgZ2ncWRkglC8Afkeg5eoIMeH4_P7wMx26H8Fd3Dn-lHVmg&usqp=CAc"},
                {"name":"Mascara", "image":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1154802/MhM639n1g-1154802_1.jpg"},
                {"name":"Blush", "image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxAruz_544lwH78QbMJXLSEg-w9W6kYUO2O-_aDL5kZBflLSA1OPV4JeV8uTeYkWw3b7HdSn-A3TR3P7kNOtuAkxZRGfPv012riCdq2l_DLxB72kHN8gu2QaTtoBgfCdcdjccY-w&usqp=CAc"},
                {"name":"Cetaphile", "image":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/WwvMh0iaq-Cetaphil-Moisturising-Lotion-(100ml).jpeg"},
                {"name":"Face serum", "image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8kVhaY2S8NWjPHTgoAtO1VWQlNYDvSV1LyvPFTmQn0To9lxd_1yn9et9FJLAxt7k-rAfJzDjYTudo9hQmKqBMeIDG8krR87JdBEKO0oIexXxxEKkAS-WWnh7cVybdxHZ4dhrneA&usqp=CAc"},
                {"name":"Primer", "image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7fgFerBHxxr9cJH2q_y3BFnDU05c0XFbzlGRExS_63ilfaD47BAUqSXw5DLiZj0ueROYeSHkHb8vQBtWKd8DWhDWOp6oaGJ6rWen9RDd5F7_1fzPiZwBvfDFQT_x_kVjedvk2kQ&usqp=CAc"},
                {"name":"Foundation", "image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSeHaOnZy43RlXdQO9zRtr0QwqbIyx0RQczNxctjCByF5H4yRy7ehvVgYIJZJRs2YEiAby91y4PD-cbgNZSgZ2ncWRkglC8Afkeg5eoIMeH4_P7wMx26H8Fd3Dn-lHVmg&usqp=CAc"},
                {"name":"Mascara", "image":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1154802/MhM639n1g-1154802_1.jpg"},
                {"name":"Blush", "image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxAruz_544lwH78QbMJXLSEg-w9W6kYUO2O-_aDL5kZBflLSA1OPV4JeV8uTeYkWw3b7HdSn-A3TR3P7kNOtuAkxZRGfPv012riCdq2l_DLxB72kHN8gu2QaTtoBgfCdcdjccY-w&usqp=CAc"}
                

        ]
    )
    
    return (
        <div>
            <NavProduct />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            { product.map(
                                (value,index)=>{
                                    return (<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img src={value.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text">Rs.350</p>
                                        <a href="#" class="btn btn-primary">BUY NOW</a>
                                    </div>
                                </div>
                            </div>)
                                }
                            )}
                            
                            
                            
                            
                            
                            
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct