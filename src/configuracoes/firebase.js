import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, where, addDoc, query, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


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
          const data = await getDocs(collection(db, "funcionarios"));

          let funcionarios = []

          data.docs.forEach((doc) => {
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
    const data = await getDocs(collection(db, "veiculos"));

    let veiculos = []

     data.docs.forEach((doc) => {
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
  const data = await getDocs(collection(db, "fornecedor"));

  let fornecedores = []

  data.docs.forEach((doc) => {
    fornecedores.push(
      {
        id: doc.id,
        nome: doc.data().nome,
        cnpj: doc.data().cnpj,
        prodoferecidos: doc.data().prodoferecidos,
        endereço: doc.data().endereço,
        contatoempresa: doc.data().contatoempresa,
      }
    );
  })

  return fornecedores;
}


export const getReservasf = async () =>{
  const data = await getDocs(collection(db, "reservarc"));

  let reservasf = []

  data.docs.forEach((doc) => {
    reservasf.push(
      {
        id: doc.id,
        nome: doc.data().nome,
        estado: doc.data().estado,
        veiculo: doc.data().veiculo,
      }
    );
  })

  return reservasf;
}

export const getDetReservasf = async () =>{
  const data = await getDocs(collection(db, "reservarc"), where("estado", "==", "pendente"));

  let detreservasf = []

   data.docs.forEach((doc) => {
    detreservasf.push(
      {
        id: doc.id,
        nome: doc.data().nome,
        estado: doc.data().estado,
        nomeveiculo: doc.data().veiculo,
      }
    );
  })
  return detreservasf;
}

export const getVeiculosNReser = async () =>{
  const data = await getDocs(query(collection(db, "veiculos"), where("reservado", "==", false)));

  let veiculosNReser = []

   data.docs.forEach((doc) => {
    veiculosNReser.push(
      {
        id: doc.id,
        nome: doc.data().nome,
        imagem: doc.data().imagem,
        cadeiras: doc.data().cadeiras,
        reservado: doc.data().reservado,
        marca: doc.data().marca,
      }
    );
  })
  console.log(data)
  return veiculosNReser;
}

export const cadastrarCliente =  async (nome, cpf, rg, endereco, cnh, email, senha) =>{
        
      try {
        await addDoc(collection(db, "clientes"),{
          nome: nome,
          cpf: cpf,
          rg: rg,
          endereco: endereco,
          cnh: cnh,
          email:  email,
          senha: senha
          
        })              

      } catch (error) {
        console.log(error);
      }
      
};

export const cadastrarVeiculo =  async (nome, imagem, marca, placa, chassi, renovam, cadeiras, classificacao, cor, gps, reservado) =>{
        
  try {
    await addDoc(collection(db, "veiculos"),{
      nome: nome,
      imagem: imagem,
      marca: marca,
      placa: placa,
      chassi: chassi,
      renovam: renovam,
      cadeiras: cadeiras,
      classificacao: classificacao,
      cor: cor,
      gps: gps,
      reservado: reservado,
    })       

  } catch (error) {
    console.log(error);
  }
  
};

export const cadastrarFuncionario =  async (nome, cargo, cpf, rg, privacessos, email, senha) =>{
        
  try {
    await addDoc(collection(db, "funcionarios"),{
      nome: nome,
      cargo: cargo,
      cpf: cpf,
      rg: rg,
      privacessos: privacessos,
      email: email,
      senha: senha,
    })              

  } catch (error) {
    console.log(error);
  }
  
};

export const cadastrarFornecedor =  async (nome, cnpj, endereço, prodoferecidos, contatoempresa) =>{
        
  try {
    await addDoc(collection(db, "fornecedor"),{
      nome: nome,
      cnpj: cnpj,
      endereço: endereço,
      prodoferecidos: prodoferecidos,
      contatoempresa: contatoempresa
    })              

  } catch (error) {
    console.log(error);
  }
  
};

export const reservar =  async (nome, nomeveiculo, periodolocacao, tiposeguro) =>{
        
  try {
    await addDoc(collection(db, "reservarc"),{
      nome: nome,
      estado: "reservada",
      nomeveiculo: nomeveiculo,
      periodolocacao: periodolocacao,
      tiposeguro: tiposeguro
    })              

  } catch (error) {
    console.log(error);
  }
  
};

export const editarReservaVeiculo = async (nome) =>{

  try {

    const veicReservaRef = query(collection(db, "veiculos"), where("nome", "==", nome))

    console.log(veicReservaRef)


    await updateDoc(veicReservaRef, {
      reservado: true
    });
    
  } catch (error) {
    
  }

};


// export const criarUsuario = async (email,senha) => {
//   await createUserWithEmailAndPassword(auth, email, senha);
// }

// export const getCliente = async (email) =>{

//   let data;

//    data = await getDocs(collection(db, "clientes"), where("email", "==", "luanr@gmail.com"));

//    console.log(data)

  

// }
