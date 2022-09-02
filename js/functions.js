const displayCatagories = catagories => {
    const newsCatagoriList = document.getElementById('newsCatagories');
    catagories.forEach(catagory => {
        const calagoryList = document.createElement('li');
        calagoryList.innerHTML = `
        <a  onclick="fatchCatagoryNews('${catagory.category_id}', '${catagory.category_name}')" class="catagoryBtn hover:text-indigo-600" href="#">${catagory.category_name}</a>
        `;
        newsCatagoriList.appendChild(calagoryList);
    })
}

const dateCal = getDate => {
    let date = new Date(getDate);
    let milliseconds = date.getTime();
    let d = new Date();
    d.setTime(milliseconds);
    return moment(d).format("ddd MMM DD, YYYY HH:mm:ss ");

}

const ratingView = rating => {
    let ratingArray = [];

    if (!Number.isInteger(rating) && !isNaN(rating) && rating != null) {
        let intRrating = Math.floor(rating);
        for (let i = 0; i < intRrating; i++) {
            ratingArray.push("<i class='fa-solid fa-star'></i>");
        }
        ratingArray.push("<i class='fa-solid fa-star-half-stroke'></i>");
        for (let i = 1; i < 5 - intRrating; i++) {
            ratingArray.push("<i class='fa-regular fa-star'></i>");
        }
        return ratingArray.join(' ');
    }
    else if (Number.isInteger(rating)) {
        for (let i = 0; i < rating; i++) {
            ratingArray.push("<i class='fa-solid fa-star'></i>");
        }
        return ratingArray.join(' ');
    }
    else if (isNaN(rating) || rating === null) {
        for (let i = 1; i <= 5; i++) {

            ratingArray.push("<i class='fa-regular fa-star'></i>");
        }
        return ratingArray.join(' ');

    }
}

const dsiplayNews = (news, catagoryName) => {
    const newsContainer = document.getElementById('newsContainer');
    const catagoryNewsInfo = document.getElementById('catagoryNewsInfo');
    newsContainer.textContent = '';
    if (news.status) {
        catagoryNewsInfo.innerText = `${news.data.length} Items Found For Category ${catagoryName}`;
    }
    else {

    }
    news.data.forEach(eachNews => {
        console.log(eachNews)
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('mx-3', 'lg:mx-0', 'md:mx-3', 'mb-5');
        newsDiv.innerHTML = `
        <a href="#"
        class="flex p-4 max-w-full flex-col bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 lg:w-56 md:rounded-none md:rounded-lg lg:mr-4"
            src="${eachNews.thumbnail_url}" alt="">
        <div class="flex justify-around flex-col p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">${eachNews.title}</h5>
            <div>
                <p class="mb-3 text-gray-400 text-lg dark:text-gray-400">${eachNews.details.split(" ", 90).join(' ')}</p>
                <p class="mb-3 text-gray-400 text-lg dark:text-gray-400">${eachNews.details.split(" ", 40).join(' ')}...</p >
            </div >
    <div
        class="flex flex-wrap lg:flex-nowrap md:flex-nowrap items-center justify-between items-end">
        <div class="flex items-center mt-4">
            <img class="w-11 h-11 rounded-full mr-2"
                src="${eachNews.author.img}"
                alt="Avatar of Jonathan Reinink">
                <div class="text-sm w-full">
                    <p class="text-lg capitalize font-medium leading-none">${eachNews.author.name ? eachNews.author.name : 'No Author'}</p>
                    <p class="text-gray-400">${dateCal(eachNews.author.published_date)}</p>
                </div>
        </div>
        <div
            class="flex items-center mt-2 lg:mt-0 md:mt-0 justify-between lg:justify-between md:justify-evenly w-full lg:w-2/3 md:w-7/12">
            <div class="flex items-center">
                <i class="fa-regular fa-eye text-2xl mr-1 text-gray-500"></i>
                <p class="text-lg font-bold text-gray-500">${eachNews.total_view}</p>
            </div>
            <div id="ratingDiv" class="text-lg">
                ${ratingView(eachNews.rating.number)}
            </div>
            <div class="text-3xl text-indigo-600">
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </div>
        </div>
    </div>
        </div >
    </a >
    `;
        newsContainer.appendChild(newsDiv);
    })
}