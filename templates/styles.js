module.exports = () => `
body {
  display: flex;
  flex-direction: column;
}

.current-listing {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.current-listing-centered {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1050px;
}

.current-listing-info {
  display: flex;
  flex-direction: column;
  width: 612px;
}

.additional-content {
  display: flex;
  justify-content: center;
  height: 1000px;
}

#Bookings {
  position: -webkit-sticky;
  position: sticky;
  top: 5px;
}`;
