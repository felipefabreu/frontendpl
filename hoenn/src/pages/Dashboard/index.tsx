import React, { FormEvent } from "react";
import { FiSearch } from 'react-icons/fi'

import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';

import { Container, Body } from "./style";

const Dashboard: React.FC = () => {
    const HandleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Submit teste");
    }
    return (
        <>
            <Container>
                <form onSubmit={HandleSubmit}>
                    <SearchInput icon={FiSearch} name="search" placeholder="Digite aqui a sua busca..." />
                </form>
            </Container>

            <Body>
                <div>
                    <h1>Resultado da busca</h1>
                    <Button name={"Novo Card"} />
                </div>

            </Body>
        </>
    );
};

export default Dashboard;

 