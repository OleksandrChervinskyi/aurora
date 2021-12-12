import arrowRight from "../../../pictures/icons/Chevron Right.png";

export const Level2MenuList = ({item, chooseItemLevel2, chooseItemLevel1}) => {
    return (
        <p onClick={chooseItemLevel2} className={'item-level2'}>
            {item}
            <img src={arrowRight} alt="arrow"/>
        </p>
    );
};