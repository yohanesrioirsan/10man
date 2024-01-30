/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import "./GeneratedMaps.css";

function GeneratedMap(props) {
  return (
    <div className="generated-maps">
      <Row>
        <Col lg={2} sm={2}>
          <h1
            style={{
              fontSize: "72px",
              color: "#401C82",
              fontWeight: "bold",
              margin: "0 0 -1rem",
            }}
          >
            MAP
          </h1>
        </Col>
      </Row>
      <Row>
        <Col lg={4} sm={4}>
          <h1
            style={{ fontSize: "72px", color: "#2E59CF", fontWeight: "bold" }}
          >
            {props.valorantGeneratedMaps}
          </h1>
        </Col>
      </Row>
      <Row>
        <div className="generated-maps-image">
          <img src={props.mapsImage} />
        </div>
      </Row>
    </div>
  );
}

export default GeneratedMap;
