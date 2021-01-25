import { tabIndex } from './tab-index';

export function newsPropagation() {
    function articleLoader(array, numOfItems = 6, idButton, idContainer) {
        let ogNum = numOfItems;
        let newNum = ogNum;
    
        // gets 6 most recent articles and then reverses that to show them in descending order:
        let articles = array.articles.slice(-ogNum).reverse();
        // gets the container that the articles get put into:
        const articleContainer = document.getElementById(idContainer);
        // gets the button that loads more content: 
        const loadMoreButton = document.getElementById(idButton);
    
        function addArticles(theArray) {
            theArray.forEach((element, i) => {
                // all the inner article stuff:
                const inner = 
                "<div class='updates__container__item__image w-full bg-center bg-cover bg-no-repeat'" +
                    "style='background-image: url(" + element.thumbnailUrl + ");'></div>" +
                "<div class='updates__container__item__content text-center p-3.5  flex flex-col justify-between flex-1'>" +
                    "<h3 class='updates__container__item__content__title text-base font-black mb-1 text-darkBlue-500'>" +
                        element.title +
                    "</h3>" +
                    "<p class='updates__container__item__content__readmore text-sm font-bold text-link-color'> Read More </p>" +
                    // element.date +
                "</div>";
    
                // all the outer article stuff:
                var outer = document.createElement('a');
                outer.classList.add('bg-white','shadow-md','rounded','hover:shadow-lg','tabindex', 'opacity-0', 'transition-all', 'flex', 'flex-col');
                outer.href = element.url;

                // staggers a transition to full opacity for each new item:
                setTimeout(() => {
                    outer.classList.add('opacity-100');
                    outer.classList.remove('opacity-0');
                }, i * 75);

                // Combining inner and outer and adding to document:
                outer.innerHTML = inner;
                articleContainer.append(outer);

            });
        }
    
        // This runs the above function based on the provided array:
        addArticles(articles);
    
        loadMoreButton.addEventListener('click', function(){
            // gets the next nth amount of articles and adds them to the div:
            articles = array.articles.slice(-(newNum + ogNum)).slice(0, ogNum).reverse();
            addArticles(articles);
            // increments the number based on the ogNumber:
            newNum = newNum + ogNum;
            // scrolls the page down so button is still in view:
            const mediaQuery = window.matchMedia('(min-width: 768px)');
            if (mediaQuery.matches) {
                loadMoreButton.scrollIntoView();
            }
            tabIndex();

            let curLength = articleContainer.getElementsByTagName('a').length;
            const totLength = array.articles.length;
            if (curLength >= totLength) {
                this.style.display = "none";
            }
            if ((totLength - curLength) < ogNum) {
                let diffLength = totLength - curLength;
                ogNum = diffLength;
            }
        });
    }

    // this is to run the whole thing with the custom parameters, hopefully you can just add a new one for each section you want to add in: 
    if (typeof allArticles !== 'undefined') {
        // eslint-disable-next-line no-undef
        const articleArray = allArticles;
        articleArray.forEach((element) => {
            const theArray = element.theArray;
            const numberOfItems = element.numberOfItems;
            const buttonId = element.buttonId;
            const divId = element.divId;
            articleLoader(
                /* the array: */ theArray, 
                /* the number of items: */ numberOfItems, 
                /* the load more button ID: */ buttonId, 
                /* the id of the div you are loading into: */ divId
            );
        });
    }
}




