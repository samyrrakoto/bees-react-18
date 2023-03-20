import { ReactElement } from "react";

type Props = {
    isGameOver: boolean,
}

export default function GodSave({ isGameOver }: Props): ReactElement{
    return (
        <>
        {isGameOver && <div>God save the Queen 🇬🇧</div>}
        </>
    );
}