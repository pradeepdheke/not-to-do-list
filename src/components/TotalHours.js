import React from 'react'

export const TotalHours = ({ttlTaskHr}) => {
  return (
    <div class="row mt-5 fs-3 fw-bolder text-success">
    <div class="col text-center">Total time allocated this week = <span id = "totalhours">{ttlTaskHr}</span> hrs</div>
    </div>
  )
}
