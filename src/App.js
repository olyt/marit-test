import './App.scss';
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCharacters} from "./store/characters/operations";
import Characters from "./components/Characters/Characters";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);

    return (
        <div className="App">
            <Characters/>
        </div>
    );
}

export default App;
