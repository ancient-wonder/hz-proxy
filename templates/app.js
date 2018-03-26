module.exports = (bookings) => `
  <section class="current-listing">
    <div class="current-listing-centered">
      <aside class="bookings-column">
        <div id="Bookings">${bookings}</div>
      </aside>
    </div>
  </section>
`;

// <section class="current-listing-info">
//   <div id="amenities">${amenities}</div>
//   <div id="reviews">${reviews}</div>
// </section>

// <section class="additional-content">
//   <div id="similar-listings">${similarListings}</div>
// </section>
