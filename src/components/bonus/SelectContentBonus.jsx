import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { useSelect } from "../SelectContext.jsx";
import { useToggle } from "../ToggleContext.jsx";

import { BUTTON_TYPES, TOGGLE_TYPES } from "../../commons/data/button.jsx";
import Button from "../buttons/index.jsx";
import Toggle from "../toggle/index.jsx";

import bgPentagon from "../../assets/images/bg-pentagon.svg";
import Loading from "../Loading.jsx";

export default function SelectContent() {
  const [loading, setLoading] = useState(false)
  const [clicked, setClicked] = useState(false)

  const { handleUserChoice } = useSelect();
  const { toggleMode } = useToggle();

  const navigate = useNavigate()

  const handleToggle2 = () => {
    toggleMode(TOGGLE_TYPES.BASIC)
    setClicked(true)
    setTimeout( ()=> {
      //delays the navigation and browser reload, so that the loader screen in the useEffect can show
      navigate('/')
      window.location.reload(false);
    },2000)
  }

  useEffect( () => {
    if(clicked) {
      setLoading(true)
      localStorage.removeItem('score');
    }
  }, [clicked])

  const scissorsStyle = `absolute -top-10 w-24 h-24 lg:w-32 lg:h-32 lg:-top-16`;
  const paperStyle = `absolute top-10 -right-10 w-24 h-24 lg:w-32 lg:h-32 lg:-right-16`;
  const rockStyle = `absolute -bottom-10 right-2 w-24 h-24 lg:w-32 lg:h-32`;
  const lizardStyle = `absolute -bottom-10 left-2 w-24 h-24 lg:w-32 lg:h-32`;
  const spokStyle = `absolute top-10 -left-10 w-24 h-24 lg:w-32 lg:h-32 lg:-left-16`;

  const imgBgSize = `lg:!w-[90px] lg:!h-[90px]`;
  const imgHeight = `lg:!h-12`;

  return (
    <>
      {loading ? (
        <Loading/>
      ):(
        <>
          <div className="lg:absolute lg:top-[45%]">
            <div className="relative flex justify-center items-center">
              <img src={bgPentagon} alt="bg-pentagon" className="relative h-60 lg:h-72" />

              <Button
                type={BUTTON_TYPES.SCISSORS}
                btnIcon={BUTTON_TYPES.SCISSORS}
                btnPosition_Size={`${scissorsStyle}`}
                btnClick={() => handleUserChoice(BUTTON_TYPES.SCISSORS)} // Pass the choice to the handler
                imgbg_size={`${imgBgSize}`}
                imgSize={`${imgHeight}`}
              />

              <Button
                type={BUTTON_TYPES.PAPER}
                btnIcon={BUTTON_TYPES.PAPER}
                btnPosition_Size={`${paperStyle}`}
                btnClick={() => handleUserChoice(BUTTON_TYPES.PAPER)} // Pass the choice to the handler
                imgbg_size={`${imgBgSize}`}
                imgSize={`${imgHeight}`}
              />

              <Button
                type={BUTTON_TYPES.ROCK}
                btnIcon={BUTTON_TYPES.ROCK}
                btnPosition_Size={`${rockStyle}`}
                btnClick={() => handleUserChoice(BUTTON_TYPES.ROCK)} // Pass the choice to the handler
                imgbg_size={`${imgBgSize}`}
                imgSize={`${imgHeight}`}
              />

              <Button
                type={BUTTON_TYPES.LIZARD}
                btnIcon={BUTTON_TYPES.LIZARD}
                btnPosition_Size={`${lizardStyle}`}
                btnClick={() => handleUserChoice(BUTTON_TYPES.LIZARD)} // Pass the choice to the handler
                imgbg_size={`${imgBgSize}`}
                imgSize={`${imgHeight}`}
              />

              <Button
                type={BUTTON_TYPES.SPOCK}
                btnIcon={BUTTON_TYPES.SPOCK}
                btnPosition_Size={`${spokStyle}`}
                btnClick={() => handleUserChoice(BUTTON_TYPES.SPOCK)} // Pass the choice to the handler
                imgbg_size={`${imgBgSize}`}
                imgSize={`${imgHeight}`}
              />
            </div>
          </div>
          <Toggle
            toggleText={TOGGLE_TYPES.BASIC}
            toggleClick={() => handleToggle2()}
          />
        </>
      )}
    </>
  );
}
