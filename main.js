const searchButtonData = document.querySelector('#searchBtn')
const containerData = document.querySelector('#container')
const APIUrl = 'https://api.github.com/users/'

const getData = async (e) => {
    e.preventDefault()
    const searchInputData = document.querySelector('#searchInput').value
    await axios.get(APIUrl + searchInputData)
    .then((res)=>{
        console.log('Nombre:', res.data.login);
        console.log('Url avatar:', res.data.avatar_url);
        console.log('Repositorios:', res.data.public_repos);
        
        containerData.innerHTML = `<div class="d-flex flex-column">
                                     <p class="m-2">Nombre: ${res.data.login}</p>
                                     <p class="m-2">Repositorios: ${res.data.public_repos}</p>
                                     <img src="${res.data.avatar_url}" class="w-100 d-flex flex-column justify-content-center m-2"></img>
                                </div>`
    })
    .catch((error)=>{
        containerData.innerHTML = `<div class="alert alert-danger m-4" role="alert" id="userAlert">
                                                    Error! El usuario introducido no existe
                                                    </div>`
                            
        setTimeout(()=>{
            const alert = document.querySelector('#userAlert')
            alert.remove()
        }, 3000)
        console.error(error.message);
    })
}

searchButtonData.addEventListener('click', getData)