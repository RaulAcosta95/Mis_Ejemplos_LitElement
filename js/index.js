let componentes = document.getElementById('Componentes1');
let componenteLifeCycleExample = document.getElementById('lifeCycleExample')
let botonDesaparecerLifeCyclexample = document.querySelector('#desaparecerLifeCyclexample');
let botonAparecerLifeCyclexample = document.querySelector('#aparecerLifeCyclexample');

botonDesaparecerLifeCyclexample.addEventListener('click', ()=>{
    componentes.removeChild(componenteLifeCycleExample);
});

botonAparecerLifeCyclexample.addEventListener('click', ()=>{
    componentes.appendChild(componenteLifeCycleExample);
});

