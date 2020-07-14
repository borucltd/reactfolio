$(function() {

    const photos = $(".photo"); 
    const modals = $(".modalnr");
    const regex = /#/gi;
    const regex2 = /id/gi;
    console.log(modals);
   
    for (i = 0; i < photos.length; i++) { 
        console.log(modals[i].hash);
        console.log(modals[i].name);

        $( ".gallery" ).append( `
        <div id=${modals[i].hash.replace(regex,'')} class='modal' >
            <div class='modal-dialog'>
                <div class='modal-content'>
                    <div class='container2'>
                        <a href=${modals[i].name} class="prolink" target="_blank">${modals[i].name}</a>
                        <a class="prolink">${modals[i].nonce}</a>
                        <a href=${modals[i].hash.replace(regex2,'')} class='closebtn' >✖</a>
                    </div>
                    <img src=${photos[i].src} width='100%' height='auto'>
                </div>
            </div>
        </div>
        `);       
        
        

    };
})