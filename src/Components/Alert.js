import React, {useContext} from 'react'
import { AlertContext } from '../Context/Alert/AlertContext';

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert) return null;

  return (
    <>
      <div
        className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
        role="alert"
      >
        {alert.text}
        <button
          onClick={hide}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
}


