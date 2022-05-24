import axios from "axios";
import { useNavigate, useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../footer/Footer.js";
import Topo from "../topo/Topo.js";
import Assento from "../assento/Assento.js";

export default function SelecionaAssento({ finalizar }) {

    const { id } = useParams()

    const [dia, setDia] = useState([]);
    const [filme, setFilme] = useState([]);
    const [assentos, setAssentos] = useState([]);
    const [hora, setHora] = useState("");
    const [idSelecionado, setIdSelecionado] = useState([]);

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");


    const variavelNavegaPGSucesso= useNavigate();
    const ingressos = {
        ids: idSelecionado,
        name: nome,
        cpf: cpf
    }

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)

        promise.then((response) => {

            setDia(response.data.day);
            setFilme(response.data.movie);
            setAssentos(response.data.seats);
            setHora(response.data.name);
        }
        )
        promise.catch(err =>
            console.log(err)
        )

    }, [])

    //  setFinal({
    //     nomeFilme : filme.title,
    //      dataHora: `${dia.weekday} - ${hora}`,
    //       assento: `${assentos.name}`,
    //nomeComprador:nome,
    //  cpf: cpf
    //})

    return (
        <>
            <Topo>Selecione o(s) Assento(s)</Topo>

            <Assentos>
                {assentos.map((assento) => (
                    assento.isAvailable ?
                        <Assento id={assento.id} idSelecionado={idSelecionado} setIdSelecionado={setIdSelecionado} key={assento.id} name={assento.name} cor={"#C3CFD9"} >

                        </Assento>
                        : <Assento name={assento.name} id={assento.id} key={assento.id} cor={"#FBE192"}>

                        </Assento>
                ))}
            </Assentos>

            <ContainerLegenda>
                <Legenda cor={"#8DD7CF"}>
                    <div >
                    </div>
                    <p>Selecionado</p>
                </Legenda>
                <Legenda cor={"#C3CFD9"}>
                    <div >
                    </div>
                    <p>Disponivel</p>
                </Legenda>
                <Legenda cor={"#FBE192"}>
                    <div >
                    </div>
                    <p>Indisponível</p>
                </Legenda>
            </ContainerLegenda>

            <ContainerForm>
                <form onSubmit={(e) => {
                    e.preventDefault();

                    const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", ingressos)

                    promise.then(response => {

                        finalizar({
                            nomeFilme: filme.title,
                            dataHora: `${dia.weekday} - ${hora}`,
                            assento: `${assentos.name}`,
                            nomeComprador: nome,
                            cpf: cpf
                        })
                        console.log("okokok");
                        variavelNavegaPGSucesso("/sucesso");
                        
                    })
                }}>
                    <Label htmlFor="Nome">Nome do comprador:</Label>
                    <Input onChange={(e) => setNome(e.target.value)} value={nome} id="Nome" type="text" placeholder="Digite seu nome..."></Input>
                    <Label htmlFor="CPF" >CPF do comprador:</Label>
                    <Input onChange={(e) => setCpf(e.target.value)} value={cpf} id="CPF" type="text" placeholder="Digite seu CPF..."></Input>

                    <Buttom type="submit">Reservar assento</Buttom>
                </form>
            </ContainerForm>


            <Footer img={filme.posterURL}>

                <p> {filme.title} <br /> {dia.weekday} - {hora}</p>
            </Footer>

        </>
    )
}

const Assentos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100hv;
    height: 205px;
    margin: 0px 24px
`

const Legenda = styled.div`

    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    margin-top: 16px;

    div{
        box-sizing: border-box;
        width: 26px;
        height: 26px;
        background: ${props => props.cor};
        border: 1px solid #808F9D;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p{
        width: 91px;
        height: 28px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }

`

const ContainerLegenda = styled.div`
    display: flex;
    justify-content: center;
`

const Buttom = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    margin: 10px auto 0px auto;
    
`
const Input = styled.input`
    width: 327px;
    height: 51px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
`

const Label = styled.label`
    width: 327px;
    height: 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;
`

const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;

    form{
        display: flex;
        justify-content: center;
        align-itens: center;
        flex-direction: column;
    }
`