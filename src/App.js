import './App.scss';
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCharacters} from "./store/characters/operations";
import Characters from "./components/Characters/Characters";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const socket = new WebSocket("ws://testapi.marit.expert:3004");
        dispatch(getCharacters(socket));

        return () => {
            socket.close(1000, "app unmount")
        }
    }, [dispatch]);

    return (
        <div className="App">
            <Characters/>
        </div>
    );
}

export default App;
