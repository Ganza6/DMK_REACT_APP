import { IRestaraunt } from "../Models";
export function RestarauntList(props: { restaurants: IRestaraunt[] }) {
    return (
        <div>
            {props.restaurants.map((restaraunt) => (
                <button>{restaraunt.name}</button>
            ))}
        </div>
    );
}
