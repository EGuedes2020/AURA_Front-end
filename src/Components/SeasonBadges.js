import { SeasonBadgesStyles } from "../styles/Components/SeasonBadgesStyles";

import { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { setMainBadges } from "../redux/ConquistasStateReducer_Slice";
const SeasonBadges = () => {
  const InstitutionId = useSelector((state) => state.Login.Institution_id);

  const dispatch = useDispatch();

  const fetch = async (url) => {
    return await axios.get(url);
  };

  useEffect(() => {
    fetch(
      `https://aura-app.onrender.com/api/institutions/${InstitutionId}/4badges`
    ).then((res) => {
      dispatch(setMainBadges(res.data));
      console.log(res.data);
    });
  }, []);

  const MainBadges = useSelector((state) => state.Conquistas.mainBadges);

  const avatarUrls = MainBadges.map((item) => item.avatar);

  return (
    <SeasonBadgesStyles>
      {avatarUrls.map((url, index) => (
        <img key={index} src={url} alt="Badge" />
      ))}
    </SeasonBadgesStyles>
  );
};

export default SeasonBadges;
