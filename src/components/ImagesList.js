import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import Button from './Button';
import List from "./List";

const ImagesList = ( ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect( () => { 
        setLoading(true);
        axios.get(`/list`, {params: { page , limit: 10 }}).then((data) => {
            setImages((prevImages) => [...prevImages, ...data]);
            setLoading(false);
        });
    }, [page]);
    
    const handleClick = () => {
        setPage((page) => page + 1);
    };

    return (
        <>
        <List>
            {images.map(({ id,download_url }) => (
                 <li className="imageslist__item" key={id}> <img className="imageslist__image" src={download_url} alt={download_url}/></li>
            ))}
        </List>
        {isLoading ? <p>Loading...</p> : <Button color="primary" size="large" onClick={handleClick}>Show More</Button>}
        </>
    );

};

export default ImagesList;