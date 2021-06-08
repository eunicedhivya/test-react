import React from 'react'

function MenuiTems({menuItem}) {
    return (
        <div className="portfolio-container">
            {
                menuItem.map((item)=>{
                    return (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt="" />
                            <div class="card-info">
                                <h3>{item.title}</h3>
                                <p>Description Text Goes Here</p>
                                <a href="#">Github Repo</a>
                                <a href="#">Demo</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuiTems
