import BeeModel from "../model/BeeModel";
import BEE_CREATION_DATA from "../data/BeeCreationData";

type Props = {
    bee: BeeModel
}

export default function Bee({bee}: Props) {
    function getBeeClass() {
        let className = 'bee';
        if (bee.isLastHit) {
            className = className + ' lastHit';
        } else if(bee.lp === 0) {
            className = className + ' isDead';
        } else {
            className = className + ' ' + bee.role;
        }

        return className;
    }


    return (
        <div 
            className={getBeeClass()}
        >
            <span> #{ bee.id }</span> -
            <span> {BEE_CREATION_DATA[bee.role].beemoji}</span>
            <span> { bee.role }</span> -
            <span> { bee.lp }</span> /
            <span> { bee.hp }</span>
        </div>
    );
}