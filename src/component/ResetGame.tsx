import { Dispatch, SetStateAction } from "react";
import BeeModel from "../model/BeeModel";
import HiveService from "../service/HiveService";


type Props = {
    isGameOver: boolean;
    setHive: Dispatch<SetStateAction<BeeModel[]>>,
    setGameOver: Dispatch<SetStateAction<boolean>>,
}

export default function ResetGame({isGameOver, setHive, setGameOver}: Props) {
    function resetGame() {
        setHive(HiveService.createNewHive());
        setGameOver(false);
    }
    return (
        <>
            {isGameOver && 
                <>
                    <div>God save the Queen 🇬🇧</div>
                    <button 
                        className="bn30"
                        onClick={resetGame}
                    >  
                        Reset game
                    </button>
                </> 
            }
        </>
    );
}
