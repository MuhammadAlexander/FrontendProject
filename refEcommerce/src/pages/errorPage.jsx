import { useRouteError } from "react-router-dom";

const errorPage = () => {
    const error = useRouteError();

    return(
        <div className='flex  flex-col justify-center items-center  min-h-screen'>
            <h1 className="text-3xl">Oops!</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default errorPage;