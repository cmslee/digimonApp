import DigimonCard from "./DigimonCard";


function DigimonList (props) {
    const {digimonData} = props;
    console.log(digimonData);
    return (
        <div>
            <h2>Digimon List</h2>
            {digimonData.map((item) => <DigimonCard digimon={item} /> 
            )}
        </div>
    );
}


export default DigimonList;