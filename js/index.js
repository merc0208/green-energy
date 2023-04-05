 // Load your images on page-load
 function preloader() {
    const imagesList = [
       "./img/water.jpg",
       "./img/wind.jpg",
       "./img/sun.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);
//Get all buttons in a NODE LIST of buttons (array like structure)

// const buttonList = [
//     { text: 'Water btn', id: 'active-button', class: 'btn' },
//     { text: 'Air btn', id: '', class: 'btn' },
//     { text: 'Sun btn',  id: '', class: 'btn' }
//   ];


//Create content storage (in an object)
let content = {
    "page-1": {
        "heading": "Water",
        "imgurl": "./img/water.jpg",
        "imgalt":"This Image represents the hydraulic energy",
        "bodytext": "Webtwo ipsum whrrl zanga eskobo klout mog odeo, kippt zimbra zooomr scribd. Zillow zooomr cuil chegg, zappos disqus, reddit ideeli. Dopplr chartly napster jaiku, hulu rovio imvu, oovoo imeem. Jabber etsy wufoo, tivo. Chartly cloudera plaxo rovio, octopart boxbe, unigo chartly. Doostang zoodles ideeli lijit kippt twitter cuil tivo, yammer mog trulia xobni weebly. Whrrl zanga xobni sclipo, sococo. Weebly jabber scribd, empressr lijit.",
    },
    "page-2": {
        "heading": "Air",
        "imgurl": "./img/wind.jpg",
        "imgalt":"This Image represents the eolic energy",
        "bodytext": "Webtwo ipsum hipmunk meebo hipmunk xobni voki lanyrd groupon, zoodles wesabe hulu dopplr. Joyent edmodo grockit orkut tivo, elgg koofers. Waze mzinga kazaa heekya, etsy glogster. Cuil babblely voki hulu joukuu eduvant imeem, twitter voxy oooooc cuil zapier. Rovio klout insala jumo, spotify zoosk. whrrl zanga eskobo klout mog odeo, kippt zimbra zooomr scribd. Zillow zooomr cuil chegg, zappos disqus, reddit ideeli.",
    },
    "page-3": {
        "heading": "Sun",
        "imgurl": "./img/sun.jpg",
        "imgalt":"This Image represents the solar energy",
        "bodytext": "Webtwo ipsum kaboodle kosmix greplin zanga hipmunk imeem hipmunk kazaa, joukuu trulia jajah flickr diigo. Airbnb groupon flickr chegg eduvant joyent doostang, ebay tivo zlio reddit. Zillow kippt convore joost rovio tumblr, plaxo scribd flickr. Blippy tumblr blyve vuvox, zynga. Qeyno mzinga joyent twones mzinga jajah, yuntaa sifteo grockit zimbra kaboodle dopplr, knewton ebay. Kaboodle dropio edmodo loopt kosmix, wesabe akismet shopify.",
    }
}
//Get the reference to your HTML-container that will be dynamically loaded from the resource-object. */
let dynCont = document.getElementById("dynamic-content");
//event-target-objects
let ctrls = document.getElementById("controls").children;



//This function is event handler
function handleClick(event){
    //Reset the markup/CONTENT
    dynCont.innerHTML = '';
    //currently clicked item
    let currentButton = event.currentTarget;
    //Save the data-page-id value to use as a key to access the corresponding content
    let currentPage = currentButton.dataset.pageId;
    //accessing corresponding content
    console.log(content[currentPage]);
   
    // Test
   
    for (let i = 0; i < ctrls.length; i++) {
        ctrls[i].removeAttribute("id");
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
        // check if current list-item has attribute id:
        if (ctrls[i].hasAttribute("id")) {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            // if so, remove it:
            ctrls[i].removeAttribute("id");
        }
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    // add it-attribute to the currently clicked list-item:
    currentButton.setAttribute("id", "active-button");
   
   
   
    //At this point you have the data, All you have to do is to create the desire markup
    //Insert the data in the markup
    let title = document.createElement('h2');
    let pic = document.createElement('figure');
    let img = document.createElement('img');
    let text =  document.createElement('p');

    title.innerText = content[currentPage].heading;
    // pic.innerText = content[currentPage].imgurl;
    img.src = content[currentPage].imgurl;
    img.alt = content[currentPage].imgalt;
    text.innerText = content[currentPage].bodytext;

    dynCont.appendChild(title);
    dynCont.appendChild(pic);
    dynCont.appendChild(img);
    dynCont.appendChild(text);

}
// Registered list items for click event
for(let i = 0; i < ctrls.length; i++){
    ctrls[i].addEventListener("click", handleClick);
}