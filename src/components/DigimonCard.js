function DigimonCard (props) {
    // this digimon is the prop keyname from digimon list component
    const { digimon } = props;
    console.log(props);
    return (
        <div>
            <h3>{digimon.name}</h3>
            <img src={digimon.img} alt={digimon.name}/>
            <p>{digimon.level}</p>
        </div>
    ); 
}

export default DigimonCard;