document.getElementById('calculateBtn').addEventListener('click', function() {
  var yearInput = parseInt(document.getElementById('year').value);
  var currentYear = new Date().getFullYear();

  if (!isNaN(yearInput) && yearInput <= currentYear) {
    var age = currentYear - yearInput;
    document.getElementById('result').textContent = 'L\'età è: ' + age + ' anni';
    displayEvents(yearInput);
  } else {
    document.getElementById('result').textContent = 'Anno di nascita non valido';
    document.getElementById('events').textContent = '';
  }
});

function displayEvents(year) {
  var events = {
    1994: [
      'Nelson Mandela diventa il presidente del Sudafrica',
      'Inizia la produzione del primo smartphone, l\'IBM Simon Personal Communicator'
      // Aggiungi altri eventi importanti del 1994
    ],
    2001: [
      'L\'11 settembre: gli attentati terroristici alle Torri Gemelle negli Stati Uniti',
      'Apple lancia il primo iPod'
      // Aggiungi altri eventi importanti del 2001
    ],
    // Aggiungi altri anni e relativi eventi qui
  };

  var eventsContainer = document.getElementById('events');
  eventsContainer.innerHTML = '';

  if (events.hasOwnProperty(year)) {
    var eventList = events[year];
    eventList.forEach(function(event) {
      var eventItem = document.createElement('p');
      eventItem.textContent = event;
      eventsContainer.appendChild(eventItem);
    });
  }
}
