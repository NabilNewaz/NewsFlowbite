const url = `https://openapi.programming-hero.com/api/news/categories`;
fetch(url)
    .then(res => res.json())
    .then(data => displayCatagories(data.data.news_category))
    .catch(error => console.log(error))

const fatchCatagoryNews = (catagoryId, catagoryName) => {
    toggleSpinner(true);
    const sortField = document.getElementById('sortBtnTxt').innerText;
    const url = `https://openapi.programming-hero.com/api/news/category/${catagoryId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => dsiplayNews(data, catagoryName, sortField))
        .catch(error => console.log(error))
}

const fatchNewsDetails = newsId => {
    const url = `https://openapi.programming-hero.com/api/news/${newsId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => newsDetailsModal(data))
        .catch(error => console.log(error))
}