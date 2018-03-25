module.exports = (amenities, reviews, bookings, similarListings) => `
  <section class="current-listing">
    <div class="current-listing-centered">
      <section class="current-listing-info">
        <div id="amenities">${amenities}</div>
        <div id="reviews">${reviews}</div>
      </section>
      <aside class="bookings-column">
        <div id="bookings">${bookings}</div>
      </aside>
  </div>
  </section>
  <section class="additional-content">
    <div id="similar-listings">${similarListings}</div>
  </section>
`;