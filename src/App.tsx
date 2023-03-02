import {useEffect} from 'react';
import './App.css';
import UserDetails from './page/_features/user_details/UserDetails';

function App() {

    useEffect(() => {
        console.log('====================================');
        console.log(`Processs ${process.env.REACT_APP_ANY_OTHER_VAR}`);
        console.log(`Processs ${JSON.stringify(process.env)}`);
        console.log('====================================');
    }, [])


    return (
        <div className="App">
            <div>
                hasantunahan
            </div>
            <UserDetails id="2"/>
        </div>
    );
}

export default App;
