import React from 'react';
import '../css/Desenvolvedores.css';
import Header from './Header';

function openNewPage(url) {
    window.open(url, '_blank');
}

function Desenvolvedores() {
    return (
        <div className="page-container">
            <Header />
            <div className="content-wrapper">
                <div className="content">
                    <h2>@2024 Desenvolvimento Web</h2>
                    <img className="foto" src="../images/fotoporto.jpg" alt="Foto de Porto" />
                    <h3>Nome do aluno: João Silva</h3>
                    <h3>Engenharia Informática</h3>
                    <h3>Naturalidade: Leiria</h3>
                    <h3>Email pessoal: aluno24863@ipt.pt</h3>
                    <button className="button" onClick={() => openNewPage('https://github.com/canhoum')}>Página GitHub</button>
                </div>
                <div className="content">
                    <h2>@2024 Desenvolvimento Web</h2>
                    <img className="foto" src="../images/Screenshot_1_!.jpg" alt="Foto Caco" />
                    <h3>Nome do aluno: Miguel Sebastião Pereira</h3>
                    <h3>Engenharia Informática</h3>
                    <h3>Naturalidade: Madeira</h3>
                    <h3>Email pessoal: aluno22116@ipt.pt</h3>
                    <button className="button" onClick={() => openNewPage('https://github.com/aluno22116')}>Página GitHub</button>
                </div>
            </div>
        </div>
    );
}

export default Desenvolvedores;
