import { React, useEffect, useState } from "react";
import "./styles.css";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

import { Card, ToggleButton, ButtonGroup, Button } from "react-bootstrap";

// import imagem from "../../assets/cadeira_teste.jpg"

const cardInfo = [
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Camiseta 1",
    text: "100,00",
    id: "1",
    categoria: "camiseta",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Tenis 1",
    text: "200,00",
    id: "2",
    categoria: "tenis",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Camiseta 2",
    text: "300,00",
    id: "3",
    categoria: "camiseta",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Blusa 1",
    text: "400,00",
    id: "4",
    categoria: "blusa",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Acessorio 1",
    text: "500,00",
    id: "5",
    categoria: "acessorio",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Blusa 2",
    text: "100,00",
    id: "6",
    categoria: "blusa",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Blusa 3",
    text: "200,00",
    id: "7",
    categoria: "blusa",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Camiseta 3",
    text: "300,00",
    id: "8",
    categoria: "camiseta",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Acessorio 2",
    text: "400,00",
    id: "9",
    categoria: "acessorio",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Camiseta 4",
    text: "500,00",
    id: "10",
    categoria: "camiseta",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Bermuda 1",
    text: "500,00",
    id: "11",
    categoria: "bermuda",
  },
  {
    image: "/assets/cadeira_teste.jpg",
    title: "Bermuda 2",
    text: "500,00",
    id: "12",
    categoria: "bermuda",
  },
];

function Index() {
  const [botaoSelecionado, SetBotaoSelecionado] = useState(0);

  function filtrar(categoria, botao) {
    if (botao === botaoSelecionado) {
      for (let j = 1; j <= cardInfo.length; j++) {
        let div = document.getElementById(j);
        div.style.display = "block";
      }
      SetBotaoSelecionado(0);
    } else {
      for (let j = 1; j <= cardInfo.length; j++) {
        let div = document.getElementById(j);
        div.style.display = "block";
      }
  
      for (let i = 1; i <= cardInfo.length; i++) {
        if (document.querySelector("#imagem-" + i).alt !== categoria) {
          let div = document.getElementById(i);
          div.style.display = "none";
        }
      }
      SetBotaoSelecionado(botao);
    }
  }

  return (
    <div class="page">
      <Header />
      <main>
        <div className="conteudo">
          <div className="barra-esq">
            <ButtonGroup
              toggle
              vertical
              size="lg"
              style={{ width: "100%" }}
              toggle={true}
            >
              <Button variant="light" onClick={() => filtrar("camiseta", 1)}>
                Camisetas
              </Button>
              <Button variant="light" onClick={() => filtrar("tenis", 2)}>
                Tênis
              </Button>
              <Button variant="light" onClick={() => filtrar("blusa", 3)}>
                Blusas
              </Button>
              <Button variant="light" onClick={() => filtrar("acessorio", 4)}>
                Acessórios
              </Button>
              <Button variant="light" onClick={() => filtrar("bermuda", 5)}>
                Bermudas
              </Button>
            </ButtonGroup>
          </div>
          <div className="produtos">{cardInfo.map(rednerCard)}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const rednerCard = (card, index) => {
  return (
    <Card
      id={card.id}
      style={{
        width: "18rem",
        marginLeft: "10px",
        marginTop: "15px",
        height: "450px",
      }}
      key={index}
    >
      <Card.Img
        id={"imagem-" + card.id}
        variant="top"
        src={process.env.PUBLIC_URL + card.image}
        alt={card.categoria}
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

function pegarProduto(produto_id) {
  console.log(document.querySelector("#imagem-" + produto_id).src);
  console.log(document.getElementById("produto-" + produto_id).innerText);
  console.log(document.querySelector("#valor-" + produto_id).innerHTML);
}

export default Index;
