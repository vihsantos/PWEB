import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, where } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCdN1WsH7agQb0ZZm4rAhThy32-HmY0x2w",
  authDomain: "pweb-69be9.firebaseapp.com",
  projectId: "pweb-69be9",
  storageBucket: "pweb-69be9.appspot.com",
  messagingSenderId: "517444776352",
  appId: "1:517444776352:web:0356289957dd82d10974c5",
  measurementId: "G-GYRLEPEQZ6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const getFuncionarios = async () =>{
          let dados;
          const data = await getDocs(collection(db, "funcionarios"));

          let funcionarios = []

          dados= data.docs.forEach((doc) => {
            funcionarios.push(
              {
                id: doc.id,
                nome: doc.data().nome,
                privacessos: doc.data().privacessos
              }
            );
          })

          return funcionarios;
         
  }

  export const getVeiculos = async () =>{
    let dados;
    const data = await getDocs(collection(db, "veiculos"));

    let veiculos = []

    dados= data.docs.forEach((doc) => {
      veiculos.push(
        {
          id: doc.id,
          nome: doc.data().nome,
          imagem: doc.data().imagem,
          cor: doc.data().cor,
          classificacao: doc.data().classificacao,
          cadeiras: doc.data().cadeiras,
          marca: doc.data().marca,
          placa: doc.data().placa,
          renovam: doc.data().renovam,
          chassi: doc.data().chassi,
        }
      );
    })

    return veiculos;
}

export const getFornecedores = async () =>{
  let dados;
  const data = await getDocs(collection(db, "fornecedor"));

  let fornecedores = []

  dados= data.docs.forEach((doc) => {
    fornecedores.push(
      {
        id: doc.id,
        nome: doc.data().nome,
        cnpj: doc.data().cnpj,
        prodoferecidos: doc.data().prodoferecidos,
        endereco: doc.data().endereco,
        contatoempresa: doc.data().contatoempresa,
      }
    );
  })

  return fornecedores;
}


export const getReservasf = async () =>{
  let dados;
  const data = await getDocs(collection(db, "reservasf"));

  let reservasf = []

  dados= data.docs.forEach((doc) => {
    reservasf.push(
      {
        id: doc.id,
        nomeCliente: doc.data().nomeCliente,
        estado: doc.data().estado,
        veiculo: doc.data().veiculo,
      }
    );
  })

  return reservasf;
}

export const getDetReservasf = async () =>{
  let dados;
  const data = await getDocs(collection(db, "reservasf"), where("estado", "==", "pendente"));

  let detreservasf = []

  dados= data.docs.forEach((doc) => {
    detreservasf.push(
      {
        id: doc.id,
        nomeCliente: doc.data().nomeCliente,
        estado: doc.data().estado,
        veiculo: doc.data().veiculo,
      }
    );
  })

  return detreservasf;
}