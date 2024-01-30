import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import MainButton from "../../components/Button/MainButton/MainButton";
import SecondaryButton from "../../components/Button/SecondaryButton/SecondaryButton";
import GeneratedCard from "../../components/Card/GeneratedCard/GeneratedCard";
import GeneratedAgentsCard from "../../components/Card/GeneratedAgentsCard/GeneratedAgentsCard";
import GeneratedMap from "../../components/Generated/GeneratedMap";
import teamNames from "../../json/teamName.json";
import valorantAgentsData from "../../json/valorantAgent.json";
import valorantMapsData from "../../json/valorantMaps.json";
import "./Generator.css";

function Generator() {
  const [players, setPlayers] = useState("");
  const [teamCount, setTeamCount] = useState(2);
  const [generateTeamName, setGenerateTeamName] = useState("no");
  const [generateValorantAgent, setGenerateValorantAgent] = useState("no");
  const [generateValorantMap, setGenerateValorantMap] = useState("no");
  const [generatedTeams, setGeneratedTeams] = useState([]);
  const [valorantAgents, setValorantAgents] = useState([]);
  const [randomMap, setRandomMap] = useState(null);

  useEffect(() => {
    setValorantAgents(valorantAgentsData);
  }, []);

  const countPlayers = () => {
    const playerList = players
      .split("\n")
      .filter((player) => player.trim() !== "");
    return playerList.length;
  };

  const generateTeams = () => {
    const playerList = players
      .split("\n")
      .filter((player) => player.trim() !== "");
    const playerPerTeam = Math.ceil(playerList.length / teamCount);

    const shuffledPlayers = [...playerList].sort(() => Math.random() - 0.5);

    const teams = [];

    for (let i = 0; i < teamCount; i++) {
      const team = shuffledPlayers.slice(
        i * playerPerTeam,
        (i + 1) * playerPerTeam
      );

      let teamName;
      if (generateTeamName === "yes") {
        let randomTeam;
        do {
          randomTeam =
            teamNames.team_names[
              Math.floor(Math.random() * teamNames.team_names.length)
            ];
        } while (teams.some((team) => team.teamName === randomTeam));
        teamName = randomTeam;
      } else {
        teamName = `Team ${i + 1}`;
      }

      const teamAgents = [];
      if (generateValorantAgent === "yes") {
        const availableAgents = [...valorantAgents]; // Create a copy of the agent list
        for (let j = 0; j < team.length; j++) {
          const randomIndex = Math.floor(
            Math.random() * availableAgents.length
          );
          const randomAgent = availableAgents.splice(randomIndex, 1)[0];
          teamAgents.push(randomAgent);
        }
      }

      if (generateValorantMap === "yes") {
        const randomIndex = Math.floor(Math.random() * valorantMapsData.length);
        setRandomMap(valorantMapsData[randomIndex]);
      }

      const teamObject = {
        teamName,
        players: team,
        agents: teamAgents,
      };

      teams.push(teamObject);
    }

    setGeneratedTeams(teams);
  };

  const reset = () => {
    location.reload();
  };

  const renderTeams = () => {
    if (generateValorantAgent === "yes") {
      return (
        <div className="d-flex mt-5 gap-2 flex-wrap">
          {generatedTeams.map((team, index) => (
            <div key={index} className="team">
              <GeneratedAgentsCard
                key={index}
                teamName={team.teamName}
                players={team.players}
                agents={team.agents}
                agentImages={team.agents.map((agent) => agent.image)}
              />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="d-flex mt-5 gap-2  flex-wrap">
          {generatedTeams.map((team, index) => (
            <div key={index} className="team">
              <GeneratedCard
                key={index}
                teamName={team.teamName}
                players={team.players}
              />
            </div>
          ))}
        </div>
      );
    }
  };

  const renderMaps = () => {
    if (generateValorantMap === "yes" && randomMap) {
      return (
        <div className="d-flex mt-5 gap-2">
          <GeneratedMap
            valorantGeneratedMaps={randomMap.name}
            mapsImage={randomMap.image}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <section className="generator" id="generate">
      <div className="generator-container">
        <Row>
          <Col lg={4} sm={12}>
            <div className="card-input-container">
              <div className="card-header d-flex justify-content-center">
                <h1
                  style={{
                    fontSize: "21px",
                    fontWeight: "bold",
                    color: "#401C82",
                  }}
                >
                  Generate The Team
                </h1>
              </div>
              <div className="card-input-area">
                <form>
                  <textarea
                    placeholder="Enter players name..."
                    value={players}
                    onChange={(e) => setPlayers(e.target.value)}
                  ></textarea>
                </form>
                <p>Players Counted : {countPlayers()} </p>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={12}>
            <div className="custom-accordion" id="accordionExample">
              <div className="custom-accordion-item">
                <h2 className="custom-accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ color: "#401C82", fontWeight: "500" }}
                  >
                    How to generate the team?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="custom-accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="custom-accordion-body">
                    <p>
                      Input the player name or nickname in the textarea form on
                      the left and separate them by using new line. <br />
                      For example : <br />
                      player1
                      <br />
                      player2
                      <br />
                      ....
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="config-container">
              <div className="card-config-header">
                <h1>Team Config</h1>
              </div>
              <div className="generator-config">
                <div className="config-left">
                  <div className="team-name">
                    <h3>Generate Team Name</h3>
                    <select
                      className="custom-select"
                      name="team-name-options"
                      onChange={(e) => setGenerateTeamName(e.target.value)}
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                  <div className="team-name valorant-agents">
                    <h3>Generate Valorant Agents</h3>
                    <select
                      className="custom-select"
                      name="valorant-agent-options"
                      onChange={(e) => setGenerateValorantAgent(e.target.value)}
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>
                <div className="config-right">
                  <div className="team-name valorant-maps">
                    <h3>Generate Valorant Maps</h3>
                    <select
                      className="custom-select"
                      name="valorant-maps-options"
                      onChange={(e) => setGenerateValorantMap(e.target.value)}
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                  <div className="team-name team-count">
                    <h3>Team Count</h3>
                    <input
                      type="text"
                      value="2"
                      onChange={(e) =>
                        setTeamCount(parseInt(e.target.value, 10))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="btn-generate">
                <MainButton value="Generate" onClick={generateTeams} />
                <SecondaryButton value="Reset" onClick={reset} />
              </div>
            </div>
          </Col>
        </Row>
        {renderTeams()}
        {renderMaps()}
      </div>
    </section>
  );
}

export default Generator;
