import { Main } from "../../styles/Components/S_Main";
import { FormsCriarSugestao } from "../../styles/Components/S_Forms_CriarSugestao";
import { Btn } from "../../styles/elements/Button";

import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

function CriarSugestao() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const InstitutionId = useSelector((state) => state.Login.Institution_id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://aura-app.onrender.com/api/institutions/${InstitutionId}/suggestions/`,
        { title, description, InstitutionId }
      );
      console.log(response.data);
      if (response.data) {
      }
      // Handle response as needed
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
    window.history.back();
  };

  return (
    <Main>
      <FormsCriarSugestao method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        ></input>
        <textarea
          name="Descricao"
          form="CriarSugestao"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <Btn variant="3" type="submit">
          publicar
        </Btn>
      </FormsCriarSugestao>
    </Main>
  );
}

export default CriarSugestao;
