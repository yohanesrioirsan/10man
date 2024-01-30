/* eslint-disable react/prop-types */
import "./SecondaryButton.css";

function SecondaryButton(props) {
  return (
    <div className="btn">
      <button type="button" className="secondary-btn" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
}

export default SecondaryButton;
