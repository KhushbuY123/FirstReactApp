import fish from '../src/images/fish.png';
import "./Welcome.css";
export default function Welcome(){
    return(
        <>
            <div className="wrapper">
                <h2>Welcome To My First App</h2>
                <p>Welcome to the 20 Day react Challenge journey</p>
                <img src={fish} alt="Sammy Image" width={200} height={150}/>
            </div>
        </>
    )
}
