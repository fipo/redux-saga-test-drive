import React from 'react'

const Component = props => (
  <div>
    <img src={props.avatar} alt={props.name} />
    <h4>{props.name}</h4>
    <p>{props.comment}</p>
    <a href={`mailto:${props.email}`}>{props.email}</a>
  </div>
)
export default Component
