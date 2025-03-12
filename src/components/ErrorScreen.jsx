import React from 'react'

function ErrorScreen() {
  return (
    <div className="errorscreen">
        <div className="icon">😭</div>
        <div className="title">Sorry</div>
        <div className="desc">Your screen dimensions is very small.</div>

        <div className="recomends">
            Try visit website from diferent screen
        </div>
    </div>
  )
}

export default ErrorScreen