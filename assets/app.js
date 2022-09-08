// VARIABLES
const historiaEmpresa = document.querySelector('.empresa_historia--parrafos');
const productosContainer = document.querySelector('.productos_container');
const containerBody = document.querySelector('body > .container');

const productos = [
    {
        tipo: "Artroscopía",
        src: "./assets/img/icons/arthroscopy.png"
    },
    {
        tipo: "Prótesis",
        src: "./assets/img/icons/prosthesis.png"
    },
    {
        tipo: "Visualización",
        src: "./assets/img/icons/full-body.png"
    },
    {
        tipo: "Post Operatorio",
        src: "./assets/img/icons/stretcher.png"
    },
    {
        tipo: "Bio Materiales",
        src: "./assets/img/icons/medicina.png"
    },
    {
        tipo: "C. Plaquetario",
        src: "./assets/img/icons/blood-test.png"
    }
]

const empresas = [
    {
        empresa: "Integra",
        src: "https://www.grupoarenys.cl/arenysmed/wp-content/themes/arenys/images/logo_integra.png",
        producto: {
            id: [5]
        }
    },
    {
        empresa: "Durolane",
        src: "https://www.grupoarenys.cl/arenysmed/wp-content/themes/arenys/images/logo_durolane.png",
        producto: {
            id: [5]
        }
    },
    {
        empresa: "Bioteccel",
        src: "https://www.grupoarenys.cl/arenysmed/wp-content/themes/arenys/images/logo_bio.png",
        producto: {
            id: [5]
        }
    },
    {
        empresa: "Smith & Nephew",
        src: "https://www.grupoarenys.cl/arenysmed/wp-content/themes/arenys/images/logo_sn.png",
        producto: {
            id: [1, 2, 6]
        }
    },
    {
        empresa: "Breg",
        src: "https://www.grupoarenys.cl/arenysmed/wp-content/themes/arenys/images/logo_breg.png",
        producto: {
            id: [4]
        }
    },
    {
        empresa: "Endoret",
        src: "https://www.grupoarenys.cl/arenysmed/wp-content/themes/arenys/images/logo_endoret.png",
        producto: {
            id: [6]
        }
    }
]

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

    for(let i = 0; i < productos.length; i++) {
        const divContainer = document.createElement('div');
        divContainer.classList.add('productos_container--icono');
        divContainer.setAttribute("id", `${i+1}_producto`)
        divContainer.dataset.id = i+1
    
        const titleProductos = document.createElement('h3');
        titleProductos.classList.add('productos_container--title');
        titleProductos.textContent += productos[i].tipo;

        const iconSpan = document.createElement('span')

        const iconProductos = document.createElement('img');
        iconProductos.src += productos[i].src;

        divContainer.appendChild(titleProductos);

        divContainer.appendChild(iconSpan);
        iconSpan.appendChild(iconProductos);

        productosContainer.appendChild(divContainer);
    }

    const producto = document.querySelectorAll('.productos_container--icono');

    modalProductos(producto)

}

function modalProductos(producto) {
    producto.forEach(icon => {
        
        icon.onclick = function() {
            pintarModalProducto(icon)
        }
    })
}

function pintarModalProducto(prod) {

    const containerModal = document.createElement('div');
    containerModal.classList.add('container-modal');

    const modalBody = document.createElement('div');
    modalBody.classList.add('modalBody');
    
    const empresasLista = document.createElement('ul');
    empresasLista.classList.add('empresas-lista');

    const empresasItem = document.createElement('li');
    empresasItem.classList.add('empresas-item');

    const closeModal = document.createElement('a');
    closeModal.classList.add('close-modal');
    closeModal.textContent = "X"
    closeModal.onclick = function() {
        containerModal.remove()
    }
    
    empresas.forEach(em => {
        const { producto:{ id } } = em;
        const productoId = parseInt(prod.dataset.id)

        const divLista = document.createElement('div')
        
        const empresasItemSpan = document.createElement('span');
        const empresasItemImg = document.createElement('img');

        
        if(id.includes(productoId)) {

            empresasItemSpan.textContent = em.empresa;
            empresasItemImg.src = em.src
            
            divLista.appendChild(empresasItemSpan);
            divLista.appendChild(empresasItemImg);
            
            empresasItem.appendChild(divLista)
        }
        empresasLista.appendChild(empresasItem)
        modalBody.appendChild(empresasLista)
        modalBody.appendChild(closeModal)
        containerModal.appendChild(modalBody)
        containerBody.appendChild(containerModal)
    }) 

}

function limpiarHTML(ele) {
    while(ele.firstChild) {
        ele.removeChild(ele.firstChild)
    }
}