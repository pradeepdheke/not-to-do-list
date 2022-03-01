import React from 'react'

export const TotalHours = ({total}) => {
  return (
    <div className="row mt-5 fs-3 fw-bolder text-success">
    <div className="col text-center">Total time allocated this week = <span id = "totalhours">{total}</span> hrs</div>
    </div>
  )
}
