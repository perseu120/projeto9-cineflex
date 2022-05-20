import styled from "styled-components";

export default function Footer(props) {
    return (
        <RodaPe>

            <ContainerImg>
                <ImagemFilme src={props.img} alt="" />
            </ContainerImg>


            <p>
                {props.children}
            </p>

        </RodaPe>
    )
}

const ImagemFilme = styled.img`
    width: 48px;
    height: 72px;
    padding: 8px;
`
const ContainerImg = styled.div`
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-left: 10px;
    margin-right: 14px;
`
const RodaPe = styled.footer`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100hv;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;
    justify-content: start;
 
`