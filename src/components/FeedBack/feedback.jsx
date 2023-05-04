import React from 'react';


export default function FeedbackOptions(props) {
  return (
    <div>
      <button type="button" onClick={props.clickGood}>
        Good
      </button>
      <button type="button" onClick={props.clickNeutral}>
        Neutral
      </button>
      <button type="button" onClick={props.clickBad}>
        Bad
      </button>
    </div>
  );
}
