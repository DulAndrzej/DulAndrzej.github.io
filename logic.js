
(function(){
//############################################################
//################### BlackHole ######################
//############################################################

// Create the button black hole
    let blackhole = document.createElement("button");
   blackhole.classList.add('blackhole');

// Append
    let body = document.querySelector('.wrapper');
    body.appendChild(blackhole);

// Add event handler to black hole
    blackhole.addEventListener ("click", function() {

      if(barbufor&&orgbufor){
        bar.style.display='flex';
        barbufor=false;
        
      }else{
        bar.style.display='none';
        barbufor=true;
        
      }
      if(orgbufor){
        org.style.display='block';
        orgbufor=false;
      }else{
        org.style.display='none';
        orgbufor=true;
      }
      if(!aboutmebuffor){
        aboutme.style.display='none';
        aboutmebuffor=true;
        bar.style.position="absolute";
        org.style.position="absolute";
      }
      if(!contactdivbuffor){
        contactdiv.style.display='none';
        contactdivbuffor=true;
      }
      if(!projectdivbuffor){
        projectdiv.style.display='none';
    projectdivbuffor=true;
      }


    });
//############################################################
//#################### leftbar organizer #####################
//############################################################

// Create the fucking div
     let org = document.createElement("div");
     org.classList.add('org');
     let orgbufor=true;

//  Append somewhere this piece of html shit
     let wrapfororg = document.querySelector('.wrapper');
     wrapfororg.appendChild(org);
//#### Append buttons ###################
     

//############################################################
//#################### rightbar organizer #####################
//############################################################

      let bar = document.createElement("div");
      let bar1 = document.createElement("button");
      let bar2 = document.createElement("button");
      let bar3 = document.createElement("button");
      let bar4 = document.createElement("button");
      bar.classList.add("rightbar"); //prawa belka
      bar1.classList.add("navbutton"); //guzik na prawej belce
      bar2.classList.add("navbutton");//guzik na prawej belce
      bar3.classList.add("navbutton");//guzik na lewej belce
      bar4.classList.add("navbutton");//guzik na lewej belce
      bar1.innerHTML=`<img src="img/information.png" alt="About me" title="About me">`;
      bar2.innerHTML=`<img src="img/human-brain.png" alt="Skills" title="Skills">`;
      bar3.innerHTML=`<img src="img/mail.png" alt="Contact" title="Contact">`;
      bar4.innerHTML=`<img src="img/programming.png" alt="Projects" title="Projects">`;
      let barbufor= true;

// Append somewhere this piece of html shit
      let wrap = document.querySelector('.wrapper');
      wrap.appendChild(bar);
      barwrap=document.querySelector('.rightbar')
      barwrap.appendChild(bar1);
      barwrap.appendChild(bar2);
      org.appendChild(bar3);
     org.appendChild(bar4);

//############################################################
//################### div aboat me ################
//############################################################

let aboutme = document.createElement("div");
// wrapfororg.appendChild(aboutme);
let b=document.querySelector('body');
b.appendChild(aboutme);
aboutme.classList.add('aboutme')
let aboutmebuffor=true;
aboutme.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in augue dolor. Nulla et ipsum velit. Pellentesque mi dolor, lobortis nec nisl vitae, ullamcorper sodales eros. Vestibulum vel nibh id nunc condimentum sollicitudin sed tincidunt dolor. Praesent venenatis, enim a euismod vehicula, massa libero hendrerit ipsum, vitae placerat arcu nisi nec dolor. Vestibulum pharetra, neque at consectetur faucibus, magna nulla congue turpis, in pharetra risus metus quis purus. Nullam euismod leo eu arcu varius efficitur. Morbi egestas placerat arcu id auctor. Integer in arcu non orci lobortis suscipit. Vivamus pellentesque eros vel magna viverra, non sollicitudin augue volutpat. Duis ex ipsum, convallis vel velit a, scelerisque mattis velit.
Morbi mattis quam a viverra blandit. Duis nec ornare lacus. Cras mollis tempus ipsum, id aliquet ligula condimentum in. Nam quis augue vitae orci auctor iaculis. In et suscipit lacus. Fusce aliquam vestibulum lacus sit amet fermentum. Morbi ut scelerisque tortor. Proin efficitur felis quis magna feugiat, elementum finibus eros tempor. Donec suscipit sapien in augue varius, sed viverra felis eleifend. Praesent a leo vel nulla faucibus accumsan. Cras placerat vestibulum ipsum. Fusce magna diam, lacinia non odio sed, tincidunt ultrices enim. Donec aliquam, metus blandit tincidunt pellentesque, odio tortor accumsan lectus, eu dapibus ipsum erat eu ipsum. Mauris ut fermentum ex.
Nunc venenatis arcu vel aliquam sagittis. Nam at semper dolor. Donec gravida ante quis massa maximus, eu gravida ligula eleifend. Ut venenatis sem ut ligula dignissim lobortis. Phasellus at augue nec nisi feugiat suscipit. Curabitur a neque et risus interdum sagittis quis eu nisi. In in purus id diam ornare malesuada vitae vel lorem. Donec eu scelerisque dolor. Maecenas volutpat congue velit vel commodo. Phasellus imperdiet nibh vel consequat vulputate. Suspendisse pellentesque a magna elementum imperdiet. Praesent augue orci, pretium sed diam a, vehicula imperdiet erat. Curabitur mattis feugiat maximus. Aliquam sit amet odio viverra, fermentum dolor ac, ultrices nunc. Phasellus sagittis posuere libero id efficitur. `;

//Add event handler
      bar1.addEventListener ("click", function() {

        if(aboutmebuffor){
          aboutme.style.display='block';
          aboutmebuffor=false;
          // bar.style.position="static";
          // org.style.position="static";
          
        }else{
          aboutme.style.display='none';
          aboutmebuffor=true;
          // bar.style.position="absolute";
          // org.style.position="absolute";
          
        }
      });
      

//############################################################
/////########## div contact ##############################
//############################################################

const contactdiv =document.createElement('div');
// wrapfororg.appendChild(aboutme);


b.appendChild(contactdiv);
contactdiv.classList.add('contactdiv')
let contactdivbuffor=true;

const facebookcontact=document.createElement('div');
const emailcontact=document.createElement('div');
facebookcontact.classList.add('cdiv')
emailcontact.classList.add('cdiv')
contactdiv.appendChild(facebookcontact);
contactdiv.appendChild(emailcontact);
facebookcontact.innerHTML=`<img src="img/facebook.png" alt="" target="Facebook">`;
emailcontact.innerHTML=`<img src="img/gmail.png" alt="" target="Gmail">`;

//Add event handler
bar3.addEventListener ("click", function() {

  if(contactdivbuffor){
    contactdiv.style.display='flex';
    contactdivbuffor=false;
    
    
  }else{
    contactdiv.style.display='none';
    contactdivbuffor=true;
    
    
  }
});

//###########################################################
//#################### project #############################
//############################################################

const projectdiv =document.createElement('div');
// wrapfororg.appendChild(aboutme);


b.appendChild(projectdiv);
projectdiv.classList.add('projectdiv')
let projectdivbuffor=true;

const githubproject=document.createElement('div');
const project01=document.createElement('div');
const project02=document.createElement('div');
const project03=document.createElement('div');
const project04=document.createElement('div');
const project05=document.createElement('div');
const project06=document.createElement('div');
const project07=document.createElement('div');
githubproject.classList.add('pdiv')
project01.classList.add('pdiv')
project02.classList.add('pdiv')
project03.classList.add('pdiv')
project04.classList.add('pdiv')
project05.classList.add('pdiv')
project06.classList.add('pdiv')
project07.classList.add('pdiv')
projectdiv.appendChild(githubproject);
projectdiv.appendChild(project01);
projectdiv.appendChild(project02);
projectdiv.appendChild(project03);
projectdiv.appendChild(project04);
projectdiv.appendChild(project05);
projectdiv.appendChild(project06);
projectdiv.appendChild(project07);
githubproject.innerHTML=`<img src="img/github.png" alt="" target="Github">`;
project01.innerHTML=`<img src="img/404-error.png" alt="" target="Projekt">`;
project02.innerHTML=`<img src="img/404-error.png" alt="" target="Projekt">`;
project03.innerHTML=`<img src="img/404-error.png" alt="" target="Projekt">`;
project04.innerHTML=`<img src="img/404-error.png" alt="" target="Projekt">`;
project05.innerHTML=`<img src="img/404-error.png" alt="" target="Projekt">`;
project06.innerHTML=`<img src="img/404-error.png" alt="" target="Projekt">`;
project07.innerHTML=`<img src="img/404-error.png" alt="" target="Projekt">`;

//Add event handler
bar4.addEventListener ("click", function() {

  if(projectdivbuffor){
    projectdiv.style.display='flex';
    projectdivbuffor=false;
    
    
  }else{
    projectdiv.style.display='none';
    projectdivbuffor=true;
    
    
  }
});



})();
