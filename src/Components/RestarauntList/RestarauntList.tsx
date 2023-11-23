import { IRestaraunt } from "../Models";
export function RestarauntList({
    restaurants,
    setCurrentRestarauntName,
}: {
    restaurants: IRestaraunt[];
    setCurrentRestarauntName: Function;
}) {
    return (
        <div>
            {restaurants.map((restaraunt) => (
                <button
                    onClick={() => {
                        setCurrentRestarauntName(restaraunt.name);
                    }}
                >
                    {restaraunt.name}
                </button>
            ))}
        </div>
    );
}
