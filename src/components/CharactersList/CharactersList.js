import React from 'react';
import CharacterItem from "../CharacterItem/CharacterItem";
import Button from "../Button/Button";
import "./CharactersList.scss"

const CharactersList = ({chars}) => {

    const charsToRender = chars.map(char => {
        const {id, name, race} = char;
        return <CharacterItem name={name} race={race} key={id}/>
    })

    return (
        <div className="characters-list">
            {charsToRender}
            <Button text="Добавить" className="characters-list-btn"/>
        </div>
    );
};

export default CharactersList;