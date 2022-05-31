import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledList = styled.ul`
margin:0 auto;
padding:0 0 50px 0;
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

const List = ({ children }) => {
    return <StyledList>{children}</StyledList>;
}

List.propTypes = {
    children: PropTypes.node,
}

export default List;