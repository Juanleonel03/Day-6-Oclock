const section = document.querySelector('.section')

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const diaSemanal = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

const Clock = ()=>{
  let date = new Date();
  let hourss = date.getHours();
  let minutess = date.getMinutes();
  let secondss = date.getSeconds();
  let diaExacto = date.getDate();
  let amPm;

  if(hourss >= 12){
    hourss = hourss - 12;
    amPm = 'PM';
  }else{
    amPm = 'AM'
  }
  if( hourss === 0){
    hourss = 12;
    amPm = 'AM'
  }
  if(minutess < 10){
    minutess = '0' + minutess;
  }
  if(secondss < 10){
    secondss = '0' + secondss;
  }
  if(diaExacto < 10){
    diaExacto = '0' + diaExacto;
  }
  section.innerHTML = `<p>${hourss}:${minutess}:${secondss} ${amPm}</p>
  <p>${diaSemanal[date.getDay()]}, ${diaExacto} de ${months[date.getMonth()]} del ${date.getFullYear()} `
  
}
setInterval(Clock, 1000);