
const next = document.getElementById("next");
const firstBar = document.getElementById("firstBar");
const items=document.getElementById('items');
const form=document.getElementById('form');
const next2=document.getElementById('next2');   
const final=document.getElementById('final');   
const b2=document.getElementById('b2');
const b1=document.getElementById('back');
const body=document.getElementById('body');
b1.addEventListener('click',closecard);
next.addEventListener("click", secondp);
next2.addEventListener("click",valid);
function closecard(){
    body.style.display='none';

}
function secondp(){
   
  firstBar.style.width = "50%";
  firstBar.setAttribute("aria-valuenow", "25");
  items.style.display='none';

  form.style.display='block';
  
  

   
     }

function backmain(){
    items.style.display='block';
    form.style.display='none';
    firstBar.style.width="0%";
}
            

function valid() {
    const name = document.getElementById('name').value.trim();
    const cardnum = document.getElementById('cardnum').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    // ✅ Initialize validation flag
    let isValid = true;

    // Clear old error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('addresserror').textContent = '';
    document.getElementById('cardnumcheck').textContent = '';

    // ✅ Name validation
    if (name.length < 3 || name.length > 30) {
        document.getElementById('nameError').textContent = 'Name must be between 3 and 30 characters.';
        isValid = false;
    }

    // ✅ Email validation
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Email must include "@" character.';
        isValid = false;
    } else if (email.length > 30) {
        document.getElementById('emailError').textContent = 'Email must not exceed 30 characters.';
        isValid = false;
    }

    // ✅ Phone validation
    if (!/^\d{8}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone must be exactly 8 digits.';
        isValid = false;
    }

    // ✅ Address validation
    if (address.length < 10) { 
        document.getElementById('addresserror').textContent = 'Address not valid';
        isValid = false;
    }

    // ✅ Card number validation
    if (cardnum.replace(/-/g, '').length !== 16) { 
        document.getElementById('cardnumcheck').textContent = 'Please enter exactly 16 digits.';
        isValid = false;
    }

    // ✅ If all valid — show final section
    if (isValid) {
        form.style.display = 'none';
        items.style.display = 'none';
        final.style.display = 'block';

        firstBar.style.width = "100%";
        firstBar.setAttribute("aria-valuenow", "100");

        // Update confirmation details
        document.getElementById('Lname').textContent = 'Name: ' + name;
        document.querySelector('.Lphone').textContent = 'Phone: ' + phone;
        document.querySelector('.Laddress').textContent = 'Address: ' + address;
const maskedCard = cardnum.replace(/.(?=.{4,}$)/g, '#');
document.querySelector('.Lcard').textContent = 'Credit Card: ' + maskedCard;
    }

    
}

    const cardInput = document.getElementById('cardnum');
 cardInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    value = value.substring(0, 16); 
    e.target.value = value.replace(/(.{4})(?=.)/g, '$1-'); 
});



const confirmBtn = document.getElementById('confirmBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

confirmBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});



            