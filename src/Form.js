import "./Form.css";

import PropTypes from "prop-types";
import React, { useContext } from "react";
import { AppContext } from './AppContext';
// TODO: Wire up input and implement emoji picker
function Form(props) {
 const { feedBack, setFeedBack, partyCount, setPartyCount } = useContext(AppContext);

  const handleChangeFeedback = (e) => {
    setFeedBack(e.target.value);
  }

  const handleChangePartyCount = (e) => {
    setPartyCount(e.target.value);
  }

  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea
        onChange={handleChangeFeedback}
        className="form-textarea"
        name="feedback"
        rows="4"
        value={feedBack}
        placeholder={props.feedbackPlaceholder}
      />

      <label className="form-label">How many in your party?</label>
      <input
        className="form-input"
        type="number"
        name="party"
        value={partyCount}
        onChange={handleChangePartyCount}
        placeholder="2"
      />

      <label className="form-label">How was your meal?</label>
      <div className="emoji-picker-container">Add emoji input here</div>
    </div>
  );
}

Form.propTypes = {
  feedbackPlaceholder: PropTypes.string,
};

export default Form;
