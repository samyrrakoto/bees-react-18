import { ReactElement } from "react";

type Props = {
    hitFunction: Function
}

export default function HitBee({ hitFunction }: Props): ReactElement {
    function hitRandomBee(): void {
        hitFunction();
    }

    return (
        <div className="hitBtn">
                <button className="bn49" onClick={hitRandomBee}>Hit a bee</button>
        </div>
    );
}