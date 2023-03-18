import BeeModel from "../model/BeeModel";
import BEE_CREATION_DATA from "../data/BeeCreationData";

type Props = {
    bee: BeeModel
}

export default function Bee({bee}: Props) {
    return (
        <div 
            className={`bee ${bee.role}`}
        >
            <span> #{ bee.id }</span> -
            <span> {BEE_CREATION_DATA[bee.role].beemoji}</span>
            <span> { bee.role }</span> -
            <span> { bee.lp }</span> /
            <span> { bee.hp }</span>
        </div>
    );
}