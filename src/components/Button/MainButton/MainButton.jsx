/* eslint-disable react/prop-types */
import "./MainButton.css";

function MainButton(props) {
  return (
    <div className="primary-btn">
      <button type="button" className="main-btn" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
}

export default MainButton;
