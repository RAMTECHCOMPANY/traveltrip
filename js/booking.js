const form = document.querySelector('.booking-form form');
const success = document.querySelector('.success');
const erorr = document.querySelector('.erorr');

 function clearData(){
     site.value = '';
     date.value = '';
     time.value = '';
     tickets.value = '';
     name.value = '';
     email.value = '';
     payment.value = '';
 }

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const site = document.getElementById('site');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const tickets = document.getElementById('tickets');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const payment = document.getElementById('payment');

    // تحقق من صحة بيانات الموقع الثقافي
    if (site.value === '') {
        alert('يرجى اختيار موقع ثقافي.');
        return;
    }

    // تحقق من صحة بيانات التاريخ
    if (date.value === '') {
        alert('يرجى اختيار تاريخ.');
        return;
    }

    // تحقق من صحة بيانات الوقت
    if (time.value === '') {
        alert('يرجى اختيار وقت.');
        return;
    }

    // تحقق من صحة بيانات عدد التذاكر
    if (tickets.value === '' || tickets.value <= 0) {
        alert('يرجى إدخال عدد صحيح من التذاكر.');
        return;
    }

    // تحقق من صحة بيانات الاسم
    if (name.value === '') {
        alert('يرجى إدخال اسمك.');
        return;
    }

    // تحقق من صحة بيانات البريد الإلكتروني
    if (email.value === '' || !validateEmail(email.value)) {
        alert('يرجى إدخال بريد إلكتروني صحيح.');
        return;
    }

    // تحقق من صحة بيانات طريقة الدفع
    if (payment.value === '') {
        alert('يرجى اختيار طريقة الدفع.');
        return;
    }
    displayData();
    clearData();
    
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)@(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)$/;
    return re.test(email);
}

function displayData(){
    let list = '';
    list = ` <p>تم حجز تذاكرك بنجاح!</p>
    <ul>
        <li>${site.value} :الموقع الثقافي</li>
        <li>${date.value} :التاريخ</li>
        <li>${time.value} :الوقت</li>
        <li>${tickets.value} :عدد التذاكر</li>
        <li>${name.value} :الاسم</li>
        <li>${email.value} :البريد الالكتروني</li>  
    </ul>
        `
        success.style.display = 'block';
      success.innerHTML = list;  
}

let bookText = document.querySelector('.booking-text')
function book(){
  bookText.classList.toggle('b-text');
}