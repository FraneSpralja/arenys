// VARIABLES
const historiaEmpresa = document.querySelector('.empresa_historia--parrafos');
const productosContainer = document.querySelector('.productos_container');
// EVENT LISTENER
document.addEventListener('DOMContentLoaded', () => {
    mostrarHistoriaDeLaEmpresa();
    iconosEmpresasProductos();
});


// FUNCTIONS
function mostrarHistoriaDeLaEmpresa() {
    const botonesExpandibles = document.querySelectorAll('.expandible_btn');

    botonesExpandibles.forEach((btn) => {
        btn.addEventListener('click', () => {
            limpiarHTML(historiaEmpresa)

            console.log(btn.value)

            const divExpandible = document.createElement('div');
            divExpandible.classList.add('empresa_historia--expandible')

            const divBody = document.createElement('div');
            divBody.classList.add('expandible_body');

            const parrafoExpandibleUno = document.createElement('p');
            const parrafoExpandibleDos = document.createElement('p');
            const parrafoExpandibleTres = document.createElement('p');
            parrafoExpandibleUno.classList.add('expandible_body--text');
            parrafoExpandibleDos.classList.add('expandible_body--text');
            parrafoExpandibleTres.classList.add('expandible_body--text');

            if(btn.value === "1") {
                parrafoExpandibleUno.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor.`
                
                parrafoExpandibleDos.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor.`
                
                parrafoExpandibleTres.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor.`

                divBody.appendChild(parrafoExpandibleUno)
                divBody.appendChild(parrafoExpandibleDos)
                divBody.appendChild(parrafoExpandibleTres)

            }else if(btn.value === "2") {
                parrafoExpandibleUno.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor."

                parrafoExpandibleDos.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor."

                divBody.appendChild(parrafoExpandibleUno)
                divBody.appendChild(parrafoExpandibleDos)
            }else if(btn.value === "3") {
                parrafoExpandibleUno.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor."

                divBody.appendChild(parrafoExpandibleUno)
            } else if(btn.value === "4") {
                parrafoExpandibleUno.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor."
                parrafoExpandibleDos.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor."
                divBody.appendChild(parrafoExpandibleUno)
                divBody.appendChild(parrafoExpandibleDos)
            }

            divExpandible.appendChild(divBody)

            historiaEmpresa.appendChild(divExpandible)
        })
    })
}

function iconosEmpresasProductos() {
    const productos = [
        {
            tipo: "Artroscopia",
            src: "./assets/img/icons/arthroscopy.png"
        },
        {
            tipo: "Artroscopia",
            src: "./assets/img/icons/arthroscopy.png"
        },
        {
            tipo: "Artroscopia",
            src: "./assets/img/icons/arthroscopy.png"
        },
        {
            tipo: "Artroscopia",
            src: "./assets/img/icons/arthroscopy.png"
        },
        {
            tipo: "Artroscopia",
            src: "./assets/img/icons/arthroscopy.png"
        },
        {
            tipo: "Artroscopia",
            src: "./assets/img/icons/arthroscopy.png"
        }
    ]

    for(let i = 0; i < productos.length; i++) {
        const divContainer = document.createElement('div');
        divContainer.classList.add('productos_container--icono');
    
        const titleProductos = document.createElement('h3');
        titleProductos.classList.add('productos_container--title');
        titleProductos.textContent += productos[i].tipo;

        const iconProductos = document.createElement('img');
        iconProductos.src += productos[i].src;

        divContainer.appendChild(titleProductos);
        divContainer.appendChild(iconProductos);
        productosContainer.appendChild(divContainer);
    }

}

function limpiarHTML(ele) {
    while(ele.firstChild) {
        ele.removeChild(ele.firstChild)
    }
}