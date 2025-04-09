async function solution() {
    let mainSection = document.getElementById('main');
    let listUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let detailsBaseUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';

    mainSection.innerHTML = ''; 
    try {
        let listResponse = await fetch(listUrl);
        if (!listResponse.ok) {
            throw new Error(`Error fetching article list: ${listResponse.status}`);
        }
        let articlesArray = await listResponse.json(); 

        articlesArray.forEach(article => {
            let accordionDiv = createAccordionItem(article);
            mainSection.appendChild(accordionDiv);
        });

    } catch (error) {
        console.error("Failed to load articles:", error);
        mainSection.textContent = `Error: ${error.message}`; 
    }

    function createAccordionItem(article) {
        let divAccordion = document.createElement('div');
        divAccordion.className = 'accordion';

        let divHead = document.createElement('div');
        divHead.className = 'head';

        let spanTitle = document.createElement('span');
        spanTitle.textContent = article.title;

        let buttonToggle = document.createElement('button');
        buttonToggle.className = 'button';
        buttonToggle.id = article._id; 
        buttonToggle.textContent = 'More';
        buttonToggle.addEventListener('click', toggleDetailsHandler);

        divHead.appendChild(spanTitle);
        divHead.appendChild(buttonToggle);

        let divExtra = document.createElement('div');
        divExtra.className = 'extra';
        divExtra.style.display = 'none'; 

        let pContent = document.createElement('p');
        divExtra.appendChild(pContent);

        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);

        return divAccordion;
    }

    async function toggleDetailsHandler(event) {
        let button = event.target;
        let articleId = button.id;
        let accordionDiv = button.closest('.accordion'); 
        let extraDiv = accordionDiv.querySelector('.extra');
        let contentP = extraDiv.querySelector('p');

        if (!extraDiv || !contentP) {
            console.error('Could not find content elements for article:', articleId);
            return;
        }

        let isHidden = button.textContent === 'More';

        if (isHidden) {
    
            try {
                button.disabled = true; 
                button.textContent = 'Loading...';

                let detailsUrl = `${detailsBaseUrl}${articleId}`;
                let detailsResponse = await fetch(detailsUrl);
                if (!detailsResponse.ok) {
                    throw new Error(`Error fetching details for ${articleId}: ${detailsResponse.status}`);
                }
                let detailsData = await detailsResponse.json();

                contentP.textContent = detailsData.content; 
                
                extraDiv.style.display = 'block';
                button.textContent = 'Less';

            } catch (error) {
                console.error("Failed to load article details:", error);
                contentP.textContent = `Error: ${error.message}`; 
                button.textContent = 'More';
                extraDiv.style.display = 'none'; 
            } finally {
                 button.disabled = false; 
            }

            extraDiv.style.display = 'none';
            button.textContent = 'More';
        }
    }
}

solution();