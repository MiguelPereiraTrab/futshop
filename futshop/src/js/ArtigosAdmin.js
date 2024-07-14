import React, { Component } from 'react';
import Header from './Header';
import "../css/ArtigosAdmin.css";

class ArtigosAdmin extends Component {
   state={
        Artigos: []
    }

    async componentDidMount(){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        let res = await fetch(`https://localhost:7090/api/artigos`, requestOptions).catch(error => console.log('error', error));;
        let result = await res.json();
        if (res.status === 200){
          console.log(result);
          this.setState({Artigos: result});
        }
    }

    render () {
        return(
        <div>
            <Header />
            <div className="lista-container">
                <h1>Lista de Artigos</h1>
                {this.state.Artigos.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Tamanho</th>
                                <th>Quantidade</th>
                                <th>Preco</th>
                                <th>ImagemURL</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Artigos.map(artigo => (
                                <tr key={artigo.id}>
                                    <td>{artigo.id}</td>
                                    <td>{artigo.nome}</td>
                                    <td>{artigo.descricao}</td>
                                    <td>{artigo.tamanho}</td>
                                    <td>{artigo.quantidade}</td>
                                    <td>{artigo.preco}</td>
                                    <td>{artigo.imagemURL}</td>
                                    <td>{artigo.categoriaFK}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>

        );
    }
}

export default ArtigosAdmin;
