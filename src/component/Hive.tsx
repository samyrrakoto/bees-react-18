import Bee from "./Bee";
import BeeModel from "../model/BeeModel";

type Props = {
    hive: BeeModel[]
}

export default function Hive({hive}: Props) {
    const bees = hive.map(
        bee => 
            <Bee 
                key={bee.id}
                bee={bee}
            />
    );
    return (
        <div className="container">
            <div>
                {bees}
            </div>
        </div>
    )
}