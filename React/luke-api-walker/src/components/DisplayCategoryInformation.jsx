import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import NotFound from "./NotFound";

const DisplayCategoryInformation = props => {
    const { category, id } = useParams();
    const [getData, setGetData] = useState([]);
    const [planet, setPlanet] = useState("");

    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response => {
            let fetchData = response.data;
            //setGetData(response.data);
            if(category == 'people'){
                setPlanet(fetchData.homeworld.slice(21));
                axios.get(fetchData.homeworld)
                .then(response => {
                    fetchData.new_homeworld = response.data.name;
                     setGetData(fetchData);
                })
                .catch( error => navigate("/notfound"));
            }
            else{
                setGetData(fetchData);
            }
        })
        .catch(error => navigate("/notfound"));
    }, [category, id]);

    const DisplayPeople = () => {
        return (
            <>
                <h1>{ getData.name }</h1>
                <p><strong>Height: </strong>{ getData.height }</p>
                <p><strong>Mass: </strong>{ getData.mass }</p>
                <p><strong>Hair Color: </strong>{ getData.hair_color }</p>
                <p><strong>Skin Color: </strong>{ getData.skin_color }</p>
                <p><strong>Home World: </strong>{ getData.new_homeworld }</p>
                <Link style={{ marginRight: '20px' }}  to={ planet }>Go To { getData.new_homeworld } Planet</Link>
                <Link to={ "/" }>Back Home</Link>
            </>
        );
    }

    const DisplayPlanets = () => {
        return (
            <>
                <h1>{ getData.name }</h1>
                <p><strong>Climate: </strong>{ getData.climate }</p>
                <p><strong>Terrain: </strong>{ getData.terrain }</p>
                <p><strong>Surface Water: </strong>{ getData.surface_water }</p>
                <p><strong>Population: </strong>{ getData.population }</p>
                <Link to={ "/" }>Back Home</Link>
            </>
        );
    }

    const DisplayFilms = () => {
        return (
            <>
                <h1>{ getData.title }</h1>
                <p><strong>Episode Id: </strong>{ getData.episode_id }</p>
                <p><strong>Director: </strong>{ getData.director }</p>
                <p><strong>Producer: </strong>{ getData.producer }</p>
                <p><strong>Release Date: </strong>{ getData.release_date }</p>
                <Link to={ "/" }>Back Home</Link>
            </>
        );
    }

    const DisplaySpecies = () => {
        return (
            <>
                <h1>{ getData.name }</h1>
                <p><strong>Classification: </strong>{ getData.classification }</p>
                <p><strong>Average Height: </strong>{ getData.average_height }</p>
                <p><strong>Average Lifespan: </strong>{ getData.average_lifespan }</p>
                <p><strong>Language: </strong>{ getData.language }</p>
                <Link to={ "/" }>Back Home</Link>
            </>
        );
    }

    const DisplayVehicles = () => {
        return (
            <>
                <h1>{ getData.name }</h1>
                <p><strong>Model: </strong>{ getData.model }</p>
                <p><strong>Manufacturer: </strong>{ getData.manufacturer }</p>
                <p><strong>Consumables: </strong>{ getData.consumables }</p>
                <p><strong>Vehicle Class: </strong>{ getData.vehicle_class }</p>
                <Link to={ "/" }>Back Home</Link>
            </>
        );
    }

    const DisplayStarships = () => {
        return (
            <>
                <h1>{ getData.name }</h1>
                <p><strong>Model: </strong>{ getData.model }</p>
                <p><strong>Manufacturer: </strong>{ getData.manufacturer }</p>
                <p><strong>MGLT: </strong>{ getData.MGLT }</p>
                <p><strong>Starship Class: </strong>{ getData.starship_class }</p>
                <Link to={ "/" }>Back Home</Link>
            </>
        );
    }


    return(
        <>
            {
                category == 'people' 
                ? <DisplayPeople />
                : category == 'planets'
                ? <DisplayPlanets />
                : category == 'films'
                ? <DisplayFilms />
                : category == 'vehicles'
                ? <DisplayVehicles />
                : category == 'species'
                ? <DisplaySpecies />
                : category == 'starships'
                ? <DisplayStarships />
                : <NotFound />
                
            }
        </>
    );
}

export default DisplayCategoryInformation;