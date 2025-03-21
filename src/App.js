import React, { useState } from "react";
import FantasyTeam from "./FantasyTeam";
import OpinionTrading from "./OpinionTrading";

const App = () => {
  const [page, setPage] = useState("fantasy");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Fantasy + Opinion Trading App 🚀</h1>
      <div>
        <button onClick={() => setPage("fantasy")}>Fantasy Team</button>
        <button onClick={() => setPage("opinion")}>Opinion Trading</button>
      </div>

      {page === "fantasy" ? <FantasyTeam /> : <OpinionTrading />}
    </div>
  );
};

export default App;
