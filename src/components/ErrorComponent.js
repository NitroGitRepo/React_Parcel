import {useRouteError} from "react-router-dom";
export default function ErrorComponent(){
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h2>Opps !!</h2>
            <h2>Something went wrong </h2>
            <h2>Stats {err.status}</h2>
            <h2>Text {err.statusText}</h2>
        </div>
    )
}