import React, { Component } from 'react';
import Header from './Header';
import "../css/UsersAdmin.css";

class UsersAdmin extends Component {
   state={
        Users: []
    }

    async componentDidMount(){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        let res = await fetch(`https://localhost:7090/api/utilizadores`, requestOptions).catch(error => console.log('error', error));;
        let result = await res.json();
        if (res.status === 200){
          console.log(result);
          this.setState({Users: result});
        }
    }

    render () {
        return(
        <div>
            <Header />
            <div className="lista-container">
                <h1>Lista de Utilizadores</h1>
                {this.state.Users.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Telemóvel</th>
                                <th>Data de Nascimento</th>
                                <th>Email</th>
                                <th>Morada</th>
                                <th>Código Postal</th>
                                <th>Cidade</th>
                                <th>País</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Users.map(user => (
                                <tr key={user.utilizadorId}>
                                    <td>{user.utilizadorId}</td>
                                    <td>{user.nome}</td>
                                    <td>{user.telemovel}</td>
                                    <td>{user.dataNascimento}</td>
                                    <td>{user.email}</td>
                                    <td>{user.morada}</td>
                                    <td>{user.codigopostal}</td>
                                    <td>{user.cidade}</td>
                                    <td>{user.pais}</td>
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

export default UsersAdmin;
