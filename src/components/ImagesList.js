import { useEffect, useState } from "react";
import instance from "../helpers/Axios";
import Button from './Button';
import List from "./List";

const ImagesList = ( ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const getMorePages = () => {
        instance.get(`/list?page=${page}&limit=${limit}`).then((data) => {
            setImages(data);
            setLoading(false);
        });
    }

    const handleClick = () => {
        setLimit(limit + 10);
        getMorePages();
    };

    useEffect( () => { handleClick() }, []);

    useEffect( () => { getMorePages() }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <List>
            {images.map(({ id,download_url }) => (
                 <li className="imageslist__item" key={id}> <img className="imageslist__image" src={download_url}/></li>
            ))}
        </List>
        <Button color="primary" size="large" onClick={handleClick}>Show More</Button>
        </>
    );

};

export default ImagesList;