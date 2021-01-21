import React from 'react';
import {useSelector} from "react-redux";
import {selectCharacters} from "../../store/characters/selectors";
import CharactersList from "../CharactersList/CharactersList";
import "./Characters.scss"

const Characters = () => {
    const all = useSelector(selectCharacters);
    const races = all.map(item => item.race);

    const createListByRace = (race) => {
        const filtered = [...new Set(all.filter(char => char.race === race))];

        return <CharactersList chars={filtered} key={Date.now() + Math.random()}/>
    };

    const listsToRender = races.map(race => {
        return createListByRace(race);
    })

    return (
        <div className="characters-wrapper">
            {listsToRender}
        </div>
    );
};

export default Characters;