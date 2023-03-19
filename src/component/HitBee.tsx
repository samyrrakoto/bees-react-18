type Props = {
    hitFunction: Function
}

export default function HitBee({hitFunction}: Props){
    function hitRandomBee(){
        hitFunction();
    }

    return (
        <div className="hitBtn">
                <button className="bn49" onClick={hitRandomBee}>Hit a bee</button>
        </div>
    );
}