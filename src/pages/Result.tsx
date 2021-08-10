import { Link, Redirect, useLocation } from "react-router-dom";
import { FindFalconeAPIOutput } from "../api/postFindFalcone";
import { Header } from "../components/Header";

interface ResultProps {

}

export const Result: React.FC<ResultProps> = ({ }) => {
    const { state: result }: { state: FindFalconeAPIOutput } = useLocation()
    if (!result) return <Redirect to="/" />
    return (
        <div>
            <Header heading="Result page" />
            <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
                {result.error}
                <h2>
                    {result.status === 'success' ?
                        'Congrats on finding the enemy'
                        :
                        'Better luck next time'}
                </h2>
                {result.planet_name &&
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2>{`Time taken: ${window.localStorage.getItem('time')}s`}</h2>
                        <h2>{`Planet Found: ${result.planet_name}`}</h2>
                    </div>
                }
                <button className="btn btn-success mt-2" style={{ width: 200 }}>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                        Start Again
                    </Link>
                </button>
            </div>


        </div>

    );
}