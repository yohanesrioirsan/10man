/* eslint-disable react/prop-types */
import "./GeneratedCard.css";

function GeneratedCard(props) {
  return (
    <div className="generated-card-1">
      <div className="generated-card-1-header d-flex justify-content-center align-items-center">
        <h1 className="">{props.teamName}</h1>
      </div>
      <div className="generated-card-team-players">
        {props.players.map((player, index) => (
          <div key={index} className="players">
            <p>{player}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneratedCard;
