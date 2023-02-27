const loadData = async(searchText, dataLimit) => {
    url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    
    const res = await fetch(url)
    const data = await res.json()
    displayData(data.data, dataLimit)
}



const displayData = (data, dataLimit) => {
    console.log(data)
    const displayPhone = document.getElementById('display-phone')
    displayPhone.innerHTML = ""
    
    if(dataLimit && data.length > 10){
        data = data.slice(0,5)
        const showAll = document.getElementById('show-btn')
        showAll.classList.remove('d-none')
    }
    else{
        const showAll = document.getElementById('show-btn')
        showAll.classList.add('d-none')
    }

    if(data.length === 0){
        alert('No result Found')
    }


    data.forEach(phone => {
        // console.log(phone)
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
        <div class="card border-radius-10px">
            <img src="${phone.image}" class="card-img-top w-50 mx-auto p-2" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button" class="btn btn-outline-success">Details</button>
        </div>
        </div>
        `
        displayPhone.appendChild(cardDiv);
    });
    toggleLoading(false)
}

const processSearch = (dataLimit) => {
    const search = document.getElementById('search-phone')
    const searchText = search.value
    loadData(searchText, dataLimit)
}

document.getElementById('search-btn').addEventListener('click', function(){
    toggleLoading(true)
    processSearch(10)
})

const toggleLoading = (isLoading) => {
 if(isLoading){
    document.getElementById('loader').classList.remove('d-none')
 }
 else{
    document.getElementById('loader').classList.add('d-none')
 }   
}
document.getElementById('show-all-phones').addEventListener('click', function(){
    processSearch()
})




// loadData('phone')




