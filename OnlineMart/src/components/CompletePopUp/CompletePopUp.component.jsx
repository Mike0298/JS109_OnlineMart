import React from "react";

import "./CompletePopUp.component.css";

function CompletePopUp(props) {
  return props.triggerComplete ? (
    <div className="popup">
      <div className="complete-popup-container">
        <p className="complete-popup-dialog">Order Success</p>
        <div className="complete-dismiss">
          <button onClick={() => props.setTriggerComplete(false)}>Close</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CompletePopUp;
