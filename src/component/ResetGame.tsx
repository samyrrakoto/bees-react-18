import { Dispatch, SetStateAction } from "react";
import BeeModel from "../model/BeeModel";
import HiveService from "../service/HiveService";

type Props = {
    setHive: Dispatch<SetStateAction<BeeModel[]>>,
    setGameOver: Dispatch<SetStateAction<boolean>>,
}

export default function ResetGame({setHive, setGameOver}: Props) {
    function resetGame() {
        setHive(HiveService.createNewHive());
        setGameOver(false);
    }
    return (        
        <button 
            className="bn52"
            onClick={resetGame}
        >  
            Reset game
        </button>
    );
}
