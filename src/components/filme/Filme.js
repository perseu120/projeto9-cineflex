import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Filme({id, posterURL}){
    return(
        <Container>
            <Link to={`/sessoes/${id}`}>
                <ImagemFilme key={id} src={posterURL} alt="" /> 
            </Link>
        </Container>
    )
}

const ImagemFilme = styled.img`
    width: 129px;
    height: 193px;
    padding: 8px;
`

const Container = styled.div`
    width: 145px;
    height: 209px;
    margin: 6px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

`