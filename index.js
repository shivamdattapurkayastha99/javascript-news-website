console.log("This is index.js")
// b897c7212bba47a19652a06263f884a9
newsAccordion = document.getElementById('newsAccordion')
const xhr=new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b897c7212bba47a19652a06263f884a9',true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(articles)
        let newsHtml="";
        articles.forEach(function(element){
            
        
        
            let news=`
    < 
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  ${element["title"]}
                  </button>
                </h2>
              </div>
          
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  ${element["content"]}.<a href="${element['url']}">Read More</a>
                </div>
              </div>
            </div >`
            newsHtml+=news
        });
        
        newsAccordion.innerHTML=newsHtml
    }
    else{
        console.log("Some error occured");

    }
}
xhr.send()



