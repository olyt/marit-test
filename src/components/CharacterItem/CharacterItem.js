import React from 'react';
import Button from "../Button/Button";
import "./CharacterItem.scss"

const CharacterItem = ({name, race}) => {

    return (
        <div className="character-item">
            <p className="character-item-name">{name}</p>
            <p className="character-item-race">{race}</p>
            <Button text="Изменить имя" className="character-item-btn change-btn"/>
            <Button text="Удалить" className="character-item-btn delete-btn"/>
        </div>
    );
};

export default CharacterItem;