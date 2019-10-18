import React from 'react'

function ServicesDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Service Title-{id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptatum quia optio fugiat, quasi reiciendis, ullam quae atque asperiores odit error at inventore facilis sint, similique nemo? Vero, cupiditate veritatis!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Karim</div>
                    <div>10/17/2019 at 2:55AM</div>
                </div>
            </div>
        </div>
    )
}

export default ServicesDetails
