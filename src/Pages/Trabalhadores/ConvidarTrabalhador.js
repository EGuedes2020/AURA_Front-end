import { Main } from "../../styles/Components/S_Main";
import { Btn } from "../../styles/elements/Button";
import { FormsConvidarTraballhador } from "../../styles/Components/S_Forms_ConvidarTraballhador";

import axios from "axios";
import { useState } from "react";

function ConvidarTrabalhador() {
  const [name, setName] = useState("");
  const [destinationEmail, setDestinationEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://aura-app.onrender.com/api/send-email",
        { name, destinationEmail }
      );
      console.log(response.data);
      if (response.data) {
      }
      // Handle response as needed
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  return (
    <Main>
      <FormsConvidarTraballhador method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Primeiro nome e sobrenome"
        ></input>
        <input
          type="email"
          onChange={(e) => setDestinationEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <Btn variant="3" type="submit">
          Enviar convite
        </Btn>
      </FormsConvidarTraballhador>
    </Main>
  );
}

export default ConvidarTrabalhador;
