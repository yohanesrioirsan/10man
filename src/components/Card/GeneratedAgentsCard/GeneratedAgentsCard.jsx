/* eslint-disable react/prop-types */
import "./GeneratedAgentsCard.css";

function GeneratedAgentsCard(props) {
  return (
    <div className="generated-card-2">
      <div className="generated-card-2-header d-flex justify-content-center align-items-center mb-4">
        <h1>{props.teamName}</h1>
      </div>
      {props.players.map((player, index) => (
        <>
          <div
            key={index}
            className="generated-agent-card-team-players d-flex justify-content-between"
          >
            <div className="agent-img">
              <img src={props.agentImages[index]} alt="" />
            </div>
            <div className="generated-players-agent">
              <h5 className="fw-bold d-flex justify-content-end">
                {props.agents[index].name}
              </h5>
              <p className="d-flex justify-content-end">{player}</p>
            </div>
          </div>
          <div className="horizontal-line">
            <hr />
          </div>
        </>
      ))}
    </div>
  );
}

export default GeneratedAgentsCard;
