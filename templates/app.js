module.exports = (amenities, bookings, similarListings, reviews) => `
  <section class="current-listing">
    <div class="current-listing-centered">
      <section class="current-listing-info">
        <div id="Amenities">${amenities}</div>
        <div id="Reviews">${reviews}</div>
      </section>
      <aside class="bookings-column">
        <div id="Bookings">${bookings}</div>
      </aside>
    </div>
  </section>
  <section class="additional-content">
    <div id="SimilarListings">${similarListings}</div>
  </section>
`;
