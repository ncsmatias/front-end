import { React, useState } from "react";
import "./styles.css";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

import { Card, Button, Alert } from "react-bootstrap";

// import imagem from "../../assets/cadeira_teste.jpg"

const cardInfo = [
  {
    image: "/assets/camiseta_1.jpg",
    title: "Camisa Palmeiras I 21/22 Torcedor Puma Masculina",
    text: "250,00",
    id: "1",
    categoria: "camiseta",
  },
  {
    image: "/assets/tenis_1.jpg",
    title: "Tênis Nike Lebron Witness V",
    text: "200,00",
    id: "2",
    categoria: "tenis",
  },
  {
    image: "/assets/camiseta_2.jpg",
    title: "Camisa Palmeiras I 21/22 Torcedor Puma Masculina",
    text: "300,00",
    id: "3",
    categoria: "camiseta",
  },
  {
    image: "/assets/blusa_1.jpg",
    title: "Blusa Palmeiras Puma Manga Longa Branca",
    text: "400,00",
    id: "4",
    categoria: "blusa",
  },
  {
    image: "/assets/acessorio_1.jpg",
    title: "Mochila Palmeiras SEP BP 2017/2018",
    text: "500,00",
    id: "5",
    categoria: "acessorio",
  },
  {
    image: "/assets/blusa_2.jpg",
    title: "Blusa Palmeiras Puma Manga Longa Verde",
    text: "410,00",
    id: "6",
    categoria: "blusa",
  },
  {
    image: "/assets/blusa_3.jpg",
    title: "Blusa Moletom Treino Palmeiras Branca Adidas",
    text: "200,00",
    id: "7",
    categoria: "blusa",
  },
  {
    image: "/assets/camiseta_3.jpg",
    title: "Camisa Palmeiras Palestra Pattern Masculina",
    text: "300,00",
    id: "8",
    categoria: "camiseta",
  },
  {
    image: "/assets/acessorio_2.jpg",
    title: "Mala Puma Palmeiras Liga Medium",
    text: "400,00",
    id: "9",
    categoria: "acessorio",
  },
  {
    image: "/assets/camiseta_4.jpg",
    title: "Camisa Palmeiras 1996 Retrô - Verde",
    text: "500,00",
    id: "10",
    categoria: "camiseta",
  },
  {
    image: "/assets/bermuda_1.jpg",
    title: "Bermuda Palmeiras Adidas Treino Masculina",
    text: "80,00",
    id: "11",
    categoria: "bermuda",
  },
  {
    image: "/assets/bermuda_2.jpg",
    title: "Bermuda Palmeiras Microfibra Masculina",
    text: "80,00",
    id: "12",
    categoria: "bermuda",
  },
];

function Index() {
  const [botaoSelecionado, SetBotaoSelecionado] = useState(0);
  const [carrinho, setProdutoCarrinho] = useState([]);
  const [index, setIndex] = useState(0);

  const rednerCard = (card, index) => {
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

  function pegarProduto(produto_id) {
    // console.log(document.querySelector("#imagem-" + produto_id).src);
    // console.log(document.getElementById("produto-" + produto_id).innerText);
    // console.log(document.querySelector("#valor-" + produto_id).innerHTML);

    
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
              </div>
              <div className="produtos">{cardInfo.map(rednerCard)}</div>
              
            </div>
        </div>
        <Footer />
      </>
    
  );
}

export default Index;
