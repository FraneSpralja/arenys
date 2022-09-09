// VARIABLES
const historiaEmpresa = document.querySelector('.empresa_historia--parrafos');
const productosContainer = document.querySelector('.productos_container');
const containerBody = document.querySelector('body > .container');
const formulario = document.querySelector('#formulario')
const burgerMenu = document.querySelector('.burger-menu');

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
    toggleMenu()
    mostrarHistoriaDeLaEmpresa();
    iconosEmpresasProductos();
    formulario.addEventListener('submit', formularioContacto)
});


// FUNCTIONS
function mostrarHistoriaDeLaEmpresa() {
    const botonesExpandibles = document.querySelectorAll('.expandible_btn');

    botonesExpandibles.forEach((btn) => {
        btn.addEventListener('click', () => {
            limpiarHTML(historiaEmpresa)

            const active = document.querySelector('.active')

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
                parrafoExpandibleUno.textContent = `Perteneciente al destacado grupo de empresas Arenys, Arenys Med destaca en sus años de trayectoria como un negocio familiar a la vanguardia en la entrega de los mejores insumos médicos.`
                
                parrafoExpandibleDos.textContent = `Enfocados en otorgar los más destacados productos de primera línea en su rubro, nuestra empresa brinda la asistencia necesaria para que todos los profesionales del área médica den el mejor bienestar a sus pacientes.`
                
                parrafoExpandibleTres.textContent = `De esta manera, al contar con la mejor calidad del mercado a su disposición, los resultados a obtener son de excelencia.`

                divBody.appendChild(parrafoExpandibleUno)
                divBody.appendChild(parrafoExpandibleDos)
                divBody.appendChild(parrafoExpandibleTres)
            
                if(!active){
                    btn.classList.toggle('active')
                }else{
                    active.classList.remove('active')
                    btn.classList.toggle('active')
                }

            }else if(btn.value === "2") {
                parrafoExpandibleUno.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor."

                parrafoExpandibleDos.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor."

                divBody.appendChild(parrafoExpandibleUno)
                divBody.appendChild(parrafoExpandibleDos)

                if(!active){
                    btn.classList.toggle('active')
                }else{
                    active.classList.remove('active')
                    btn.classList.toggle('active')
                }
            }else if(btn.value === "3") {
                parrafoExpandibleUno.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor."

                divBody.appendChild(parrafoExpandibleUno)

                if(!active){
                    btn.classList.toggle('active')
                }else{
                    active.classList.remove('active')
                    btn.classList.toggle('active')
                }
            } else if(btn.value === "4") {
                parrafoExpandibleUno.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor."
                parrafoExpandibleDos.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt eius alias itaque. Sunt, aut non? Nostrum ratione delectus, inventore recusandae praesentium perspiciatis atque quaerat et quas corrupti amet perferendis libero, eos dolores quae, sapiente quos ut nesciunt optio dolor."
                divBody.appendChild(parrafoExpandibleUno)
                divBody.appendChild(parrafoExpandibleDos)

                if(!active){
                    btn.classList.toggle('active')
                }else{
                    active.classList.remove('active')
                    btn.classList.toggle('active')
                }
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

function formularioContacto(e) {
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const asunto = document.querySelector('#asunto').value;
    const mensaje = document.querySelector('#mensaje').value;
    const empresa = document.querySelector('#empresa').value;

    if(nombre == "" || email == "" || telefono == "" || mensaje == "" || empresa == "") {
        mostrarMensaje('todos los campos son obligatorios.', 'error')
    } else {
        mostrarMensaje('Tu mensaje ha sido enviado, pronto te contactaremos.', 'enviado')
    }

}

function mostrarMensaje(msj, tipo) {
    const parrafoMsj = document.querySelector('.msj');
    if(!parrafoMsj){
        console.log(parrafoMsj)
        const respuesta = document.querySelector('.respuesta');
    
        const parrafo = document.createElement('p');
        parrafo.classList.add('mensaje', 'msj', tipo);
        parrafo.textContent = msj;
    
        respuesta.appendChild(parrafo)

        setTimeout(() => {
            parrafo.remove()
            limpiarFormulario()
        }, 5000)
    }

}

function limpiarHTML(ele) {
    while(ele.firstChild) {
        ele.removeChild(ele.firstChild)
    }
}

function toggleMenu() {
    const menuList = document.querySelector('ul#navBar_menu--list')
    const menuItem = document.querySelectorAll('li.navBar_menu--item');

    burgerMenu.onclick = function() {
        menuList.classList.toggle('mobile-menu')
    }

    menuItem.forEach(li => {
        li.onclick = function() {
            menuList.classList.remove('mobile-menu')
        }
    })
}

function limpiarFormulario() {
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const telefono = document.querySelector('#telefono');
    const mensaje = document.querySelector('#mensaje');
    const empresa = document.querySelector('#empresa');

    nombre.value = '';
    email.value = '';
    telefono.value = '';
    mensaje.value = '';
    empresa.value = '';
}