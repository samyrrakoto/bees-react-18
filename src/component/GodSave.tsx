type Props = {
    isGameOver: boolean,
}

export default function GodSave({ isGameOver }: Props) {
    return (
        <>
        {isGameOver && <div>God save the Queen 🇬🇧</div>}
        </>
    );
}