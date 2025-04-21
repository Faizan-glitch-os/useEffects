import { useEffect, useState } from "react";
import Progress from "./progress";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("timer set");

    const timer = setTimeout(() => {
      onCancel();
    }, TIMER);

    return () => {
      console.log("timer cleared");
      clearTimeout(timer);
    };
  }, [onCancel]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <Progress time={TIMER} />
    </div>
  );
}
