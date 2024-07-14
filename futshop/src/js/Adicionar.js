import React, { Component } from 'react';
import '../css/Adicionar.css';
import Header from './Header';

class Adicionar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artigoNome: '',
      artigoDescricao: '',
      artigoTamanho: '',
      artigoQuantidade: 0,
      artigoPreco: 0,
      artigoImagemURL: '',
      artigoCategoriaFK: '',
      error: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const imageDataUrl = await this.toBase64(file);
        this.setState({ artigoImagemURL: imageDataUrl });
      } catch (error) {
        console.error('Erro ao processar a imagem:', error);
      }
    }
  };
  
  toBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { artigoNome, artigoDescricao, artigoTamanho, artigoQuantidade, artigoPreco, artigoImagemURL, artigoCategoriaFK } = this.state;
    const data = {
      Nome: artigoNome,
      Descricao: artigoDescricao,
      Tamanho: artigoTamanho,
      Quantidade: artigoQuantidade,
      Preco: artigoPreco,
      ImagemURL: artigoImagemURL,
      CategoriaFK: parseInt(artigoCategoriaFK), // Certifique-se de que CategoriaFK é um número inteiro
    };

    try {
      const response = await fetch('https://localhost:7090/api/artigo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.status === 200) {
        window.location.href = "/Artigo";
      } else {
        const errorData = await response.json();
        this.setState({ error: errorData.error });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      this.setState({ error: 'Ocorreu um erro ao registrar o artigo. Por favor, tente novamente mais tarde.' });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="form-container">
          <h2>Adicionar Nova T-shirt</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Nome:</label>
              <input type="text" name="artigoNome" value={this.state.artigoNome} onChange={this.handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Descrição:</label>
              <textarea name="artigoDescricao" value={this.state.artigoDescricao} onChange={this.handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Tamanho:</label>
              <select name="artigoTamanho" value={this.state.artigoTamanho} onChange={this.handleInputChange} required>
                <option value="">Selecione o Tamanho</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="form-group">
              <label>Quantidade:</label>
              <input type="number" name="artigoQuantidade" value={this.state.artigoQuantidade} onChange={this.handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Preço:</label>
              <input type="number" step="0.01" name="artigoPreco" value={this.state.artigoPreco} onChange={this.handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Liga:</label>
              <select name="artigoCategoriaFK" value={this.state.artigoCategoriaFK} onChange={this.handleInputChange} required>
                <option value="">Selecione a Liga</option>
                <option value="1">Liga Betclic</option>
                <option value="2">Premier League</option>
                <option value="3">LaLiga</option>
                <option value="4">Liga Portuguesa Retro</option>
                <option value="5">Premier League Retro</option>
                <option value="6">LaLiga Retro</option>
                <option value="7">Europa</option>
                <option value="8">América</option>
                <option value="9">África</option>
              </select>
            </div>
            <div className="form-group">
              <label>Imagem:</label>
              <input type="file" accept="image/*" onChange={this.handleImageChange} required />
              {this.state.artigoImagemURL && <img src={this.state.artigoImagemURL} alt="Preview da imagem" style={{ maxWidth: '200px', marginTop: '10px' }} />}
            </div>
            {this.state.error && <p className="error">{this.state.error}</p>}
            <button type="submit" className="adicionar">Adicionar T-shirt</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Adicionar;
