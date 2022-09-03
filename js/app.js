fatchCatagoryNews('01', 'Breaking News');
document.getElementById('newsBtn').addEventListener('click', function () {
    this.classList.remove('hover:bg-gray-100', 'md:hover:bg-transparent', 'md:hover:text-blue-700', 'dark:text-gray-400', 'md:dark:hover:text-white', 'dark:hover:bg-gray-700', 'dark:hover:text-white', 'md:dark:hover:bg-transparent', 'dark:border-gray-700');
    this.classList.add('text-white', 'bg-blue-700', 'md:bg-transparent', 'md:text-blue-700', 'dark:text-white');
    document.getElementById('blogBtn').classList.add('hover:bg-gray-100', 'md:hover:bg-transparent', 'md:hover:text-blue-700', 'dark:text-gray-400', 'md:dark:hover:text-white', 'dark:hover:bg-gray-700', 'dark:hover:text-white', 'md:dark:hover:bg-transparent', 'dark:border-gray-700');
    document.getElementById('blogBtn').classList.remove('text-white', 'bg-blue-700', 'md:bg-transparent', 'md:text-blue-700', 'dark:text-white');

    document.getElementById('questionAccordion').classList.add('hidden');
    document.getElementById('newsContainer').classList.remove('hidden');
    document.getElementById('filterSection').classList.remove('hidden');
    if (document.getElementById('catagoryNewsInfo').innerText === 'Answer Of Some Of Questions') {
        fatchCatagoryNews('01', 'Breaking News');
        makeBtnActive('01', 'Breaking News');

    }
})

document.getElementById('blogBtn').addEventListener('click', function () {
    this.classList.remove('hover:bg-gray-100', 'md:hover:bg-transparent', 'md:hover:text-blue-700', 'dark:text-gray-400', 'md:dark:hover:text-white', 'dark:hover:bg-gray-700', 'dark:hover:text-white', 'md:dark:hover:bg-transparent', 'dark:border-gray-700');
    this.classList.add('text-white', 'bg-blue-700', 'md:bg-transparent', 'md:text-blue-700', 'dark:text-white');

    document.getElementById('newsBtn').classList.add('hover:bg-gray-100', 'md:hover:bg-transparent', 'md:hover:text-blue-700', 'dark:text-gray-400', 'md:dark:hover:text-white', 'dark:hover:bg-gray-700', 'dark:hover:text-white', 'md:dark:hover:bg-transparent', 'dark:border-gray-700');
    document.getElementById('newsBtn').classList.remove('text-white', 'bg-blue-700', 'md:bg-transparent', 'md:text-blue-700', 'dark:text-white');

    const newsContainer = document.getElementById('newsContainer');
    newsContainer.classList.add('hidden');
    document.getElementById('questionAccordion').classList.remove('hidden');
    document.getElementById('filterSection').classList.add('hidden');
    document.getElementById('catagoryNewsInfo').innerText = `Answer Of Some Of Questions`;
})