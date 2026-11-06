// Quote form: builds a pre-filled text to Devante. No data leaves the browser
// except via the SMS app the customer chooses to open.
document.getElementById('quote-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var f = e.target;
  var name = f.name.value.trim();
  var phone = f.phone.value.trim();
  var city = f.city.value;
  var need = f.need.value;
  var when = f.when.value;
  var notes = f.notes.value.trim();
  var body = 'Hi Devante, I need junk removed. '
    + 'Name: ' + name + '. Phone: ' + phone + '. City: ' + city
    + '. Need: ' + need + '. When: ' + when + '.'
    + (notes ? ' Notes: ' + notes : '');
  document.getElementById('form-note').textContent =
    'Opening your text app with this ready to send: "' + body + '"';
  window.location.href = 'sms:+14439251267?&body=' + encodeURIComponent(body);
});
