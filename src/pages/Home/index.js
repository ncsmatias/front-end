import { React, useState, useEffect  } from "react";
import "./styles.css";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

import { Card, Button } from "react-bootstrap";


function Index() {
  const [botaoSelecionado, SetBotaoSelecionado] = useState(0);
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getUser()
    getProducts()
    getAddress()
  }, [])

  const getUser = async () => {
  const response = await fetch('http://192.168.0.73:3333/user',{
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
      const jsonData = await response.json();
      localStorage.setItem('userName',jsonData.name )
      localStorage.setItem('userEmail',jsonData.email )
  };

  const getProducts = async () => {
    const response = await fetch('http://192.168.0.73:3333/products');
    const jsonData = await response.json();
    setProducts(jsonData);
  };

  const getAddress = async () => {
  const response = await fetch('http://192.168.0.73:3333/address',{
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    const jsonData = await response.json();
    localStorage.setItem('userStreet',jsonData.street )
    localStorage.setItem('userDistrict',jsonData.district )
    localStorage.setItem('userNumber',jsonData.number )
    localStorage.setItem('userZipCode',jsonData.zip )
    localStorage.setItem('userCity',jsonData.city )
    localStorage.setItem('userState',jsonData.state )
    localStorage.setItem('userComplement',jsonData.complement )
  };

  async function maiorValor(){
    const response = await fetch('http://192.168.0.73:3333/products/desc');
    const jsonData = await response.json();
    setProducts(jsonData);
  }

  async function menorValor(){
    const response = await fetch('http://192.168.0.73:3333/products/asc');
    const jsonData = await response.json();
    setProducts(jsonData);
  }

  const renderCard = (card, index) => {
    return (
      <Card
        id={card.id}
        style={{
          width: "18rem",
          marginLeft: "10px",
          marginTop: "15px",
          height: "450px",
          boxShadow: "0 0.1rem 0.4rem rgba(0, 0, 0, 0.3)",
        }}
        key={index}
      >
        <Card.Img
          id={"imagem-" + card.id}
          variant="top"
          src={card.image_url}
          alt={card.category}
        />
        <Card.Body>
          <Card.Title id={"produto-" + card.id}>{card.title}</Card.Title>
          <Card.Text id={"valor-" + card.id}>R$ {card.text}</Card.Text>
          <Button
            style={{ marginLeft: "2rem" }}
            variant="light"
            onClick={() => pegarProduto(card.id)}
          >
            Adicionar ao carrinho
          </Button>
        </Card.Body>
      </Card>
    );
  };

  function filtrar(categoria, botao) {
    if (botao === botaoSelecionado) {
      for (let j = 1; j <= products.length; j++) {
        let div = document.getElementById(j);
        div.style.display = "block";
      }
      SetBotaoSelecionado(0);
    } else {
      for (let j = 1; j <= products.length; j++) {
        let div = document.getElementById(j);
        div.style.display = "block";
      }

      for (let i = 1; i <= products.length; i++) {
        if (document.querySelector("#imagem-" + i).alt !== categoria) {
          console.log(document.querySelector("#imagem-" + i).alt)
          let div = document.getElementById(i);
          div.style.display = "none";
        }
      }
      SetBotaoSelecionado(botao);
    }
  }

  function pegarProduto(produto_id) {
    
    const data = {
      produto: document.getElementById("produto-" + produto_id).innerText,
      valor: document.querySelector("#valor-" + produto_id).innerHTML,
      imagem: document.querySelector("#imagem-" + produto_id).src,
    };
    if(sessionStorage.length !== 0){
      sessionStorage.setItem(sessionStorage.length, JSON.stringify(data));
      setIndex(index + 1);
    }else{
      //Salvando os dados para serem usados pelo
      sessionStorage.setItem(index, JSON.stringify(data));
      setIndex(index + 1);
    }
    //console.log(JSON.parse(sessionStorage.getItem(index)));
    alert("Produto adicionado!");
  }

  return (
      <>
        <Header />
        <div className="page">
            <div className="conteudo">
              <div className="barra-esq">
                  <Button style={{ backgroundColor:"#5a189a", color: "white", width:"200px", borderRadius:"0.5rem" }} variant="light" onClick={() => filtrar("camiseta", 1)}>
                    Camisetas
                  </Button>
                  <Button style={{ backgroundColor:"#5a189a", color: "white", width:"200px", borderRadius:"0.5rem" }} variant="light" onClick={() => filtrar("tenis", 2)}>
                    Tênis
                  </Button>
                  <Button style={{ backgroundColor:"#5a189a", color: "white", width:"200px", borderRadius:"0.5rem" }} variant="light" onClick={() => filtrar("blusa", 3)}>
                    Blusas
                  </Button>
                  <Button style={{ backgroundColor:"#5a189a", color: "white", width:"200px", borderRadius:"0.5rem" }} variant="light" onClick={() => filtrar("acessorio", 4)}>
                    Acessórios
                  </Button>
                  <Button style={{ backgroundColor:"#5a189a", color: "white", width:"200px", borderRadius:"0.5rem" }} variant="light" onClick={() => filtrar("bermuda", 5)}>
                    Bermudas
                  </Button>
                  <Button style={{ backgroundColor:"#5a189a", color: "white", width:"200px", borderRadius:"0.5rem" }} variant="light" onClick={() => maiorValor()}>
                    Maior Valor
                  </Button>
                  <Button style={{ backgroundColor:"#5a189a", color: "white", width:"200px", borderRadius:"0.5rem" }} variant="light" onClick={() => menorValor()}>
                    Menor Valor
                  </Button>
              </div>
              <div className="produtos">{products.map(renderCard)}</div>
              
            </div>
        </div>
        <Footer />
      </>
    
  );
}

export default Index;
