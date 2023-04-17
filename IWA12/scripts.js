const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}// Edit below line 

const book1 = {
    status: document.querySelector('#book1 .status'),
    reserve: document.querySelector('#book1 .reserve'),
    checkout: document.querySelector('#book1 .checkout'),
    checkin: document.querySelector('#book1 .checkin')
  }
  const book2 = {
    status: document.querySelector('#book2 .status'),
    reserve: document.querySelector('#book2 .reserve'),
    checkout: document.querySelector('#book2 .checkout'),
    checkin: document.querySelector('#book2 .checkin')
  }
  const book3 = {
    status: document.querySelector('#book3 .status'),
    reserve: document.querySelector('#book3 .reserve'),
    checkout: document.querySelector('#book3 .checkout'),
    checkin: document.querySelector('#book3 .checkin')
  }
  book1.checkin.style.filter = 'grayscale(100%)';
  book1.status.style.color = STATUS_MAP.overdue.color;
  book1.reserve.disabled = !STATUS_MAP.overdue.canReserve;
  book1.checkout.disabled = !STATUS_MAP.overdue.canCheckout;
  book1.checkin.disabled = !STATUS_MAP.overdue.canCheckIn;
  book2.checkin.style.filter = 'grayscale(100%)';
  book2.status.style.color = STATUS_MAP.reserved.color;
  book2.reserve.disabled = !STATUS_MAP.reserved.canReserve;
  book2.checkout.disabled = !STATUS_MAP.reserved.canCheckout;
  book2.checkin.disabled = !STATUS_MAP.reserved.canCheckIn;
  book3.checkin.style.filter = 'grayscale(100%)';
  book3.status.style.color = STATUS_MAP.shelf.color;
  book3.reserve.disabled = !STATUS_MAP.shelf.canReserve;
  book3.checkout.disabled = !STATUS_MAP.shelf.canCheckout;
  book3.checkin.disabled = !STATUS_MAP.shelf.canCheckIn;















