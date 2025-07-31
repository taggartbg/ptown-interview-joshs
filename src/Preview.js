import "./Preview.css";

import PropTypes from "prop-types";
import React, { useContext }  from "react";
import { AppContext } from './AppContext';
// TODO: Make content and styling dynamic
function Preview(props) {
  const { feedBack, partyCount } = useContext(AppContext);
  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          <span role="img" aria-label="Review emoji">
            🧐
          </span>
        </div>
        <div className="preview-feedback placeholder-color">
          {feedBack}
        </div>
        <div className="preview-party">
          {partyCount} {partyCount > 1 ? "people" : "person"} dined here.
        </div>
      </div>
    </section>
  );
}

Preview.propTypes = {
  feedbackPlaceholder: PropTypes.string,
};

export default Preview;
