import { useEffect, useState } from "react";
import styled from "styled-components";
import instance from "../helpers/Axios";
import Button from '../components/Button';

const StyledList = styled.ul`
margin:0 auto;
padding:0;
text-align: center;
list-style: none;
display: grid;
grid-gap:25px;
grid-template-columns: 1fr 1fr;

.imageslist__image {
    width:80%;
}

.imageslist__item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin:0;
    padding:0;
}

`;

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

    useEffect( () => { getMorePages() }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <StyledList>
            {images.map(({ id,download_url,author }) => (
                 <li className="imageslist__item" key={id}> <img className="imageslist__image" src={download_url}/> Author: {author} </li>
            ))}
        </StyledList>
        <Button color="primary" size="large" onClick={handleClick}>Show More</Button>
        </>
    );


};

export default ImagesList;