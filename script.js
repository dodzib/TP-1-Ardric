

  





/*---------------------carrousel------------------------------------------------------------------------*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


/*---------------------formulaire------------------------------------------------------------------------*/



const validateForm = () => {

        let noError = true;

        const form = document.getElementById('form'); 
        const nom = document.getElementById('nom');
        const prenom = document.getElementById('prenom');
        const email = document.getElementById('email');
        const message = document.getElementById('message');



        const nomValue = nom.value.trim();
        const prenomValue = prenom.value.trim();
        const emailValue = email.value.trim();
        const messageValue = message.value.trim();


            if(nomValue === '') {
                setError(nom, 'Le nom est requis');
                    noError = false;
            } else {
                setSuccess(nom);
            }


            if(prenomValue === '') {
                setError(prenom, 'Le prénom est requis');
                    noError = false;
            } else {
                setSuccess(prenom);
            }



            if(emailValue === '') {
                setError(email, 'Email is required');
                noError = false;
            } else if (!isValidEmail(emailValue)) {
                setError(email, 'Fournir une adresse valide');
                noError = false;
            } else {
                setSuccess(email);
            }



            if(messageValue === '') {
                setError(message, ' Un message est requis');
                    noError = false;
            } else {
                setSuccess(message);
            }

            return noError;




      
        };

            const setError = (element, message) => { 
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.errorMessage');

            errorDisplay.innerText = message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success');

    }

            const setSuccess = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.errorMessage');

            errorDisplay.innerText = '';
            inputControl.classList.add('success');
            inputControl.classList.remove('error');



    };






    const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }




