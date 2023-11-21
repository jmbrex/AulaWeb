const Data  = document.getElementById('Data')
//window.alert("Utilize esse firmulario para se comunicar");
const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

const data = new Date()
Data.innerText = "Data Atual : "+data.getDate()+" de "+meses[data.getMonth()]+" de "+data.getFullYear()