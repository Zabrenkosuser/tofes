// אתחול EmailJS עם המפתח הציבורי שלך
emailjs.init('GBhiysKYdoItgYZPd'); // המפתח הציבורי שסיפקת

document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // שליפת הערכים מהטופס
    const nameType = document.getElementById('nameType').value === 'private' ? 'שם פרטי' : 'שם עסק';
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // שליפת דוכנים נבחרים
    const booths = Array.from(document.querySelectorAll('input[name="booths"]:checked'))
        .map(checkbox => checkbox.value)
        .join(', ') || 'לא נבחרו דוכנים';

    const notes = document.getElementById('notes').value || 'אין הערות';

    // שליחת המייל דרך EmailJS
    emailjs.send('service_asymj8v', 'template_u4so0q7', {
        nameType: nameType,
        name: name,
        phone: phone,
        address: address,
        booths: booths,
        notes: notes,
    }).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('responseMessage').textContent = 'ההזמנה נשלחה בהצלחה!';
    }, function (error) {
        console.log('FAILED...', error);
        document.getElementById('responseMessage').textContent = 'שגיאה בשליחת ההזמנה, נסה שוב.';
    });
});
