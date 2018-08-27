const BookBoxTemplate = `<div class="card">
   <a href="{{vc.book.href}}" target="_blank">
  <span class="card-image">
    <figure class="image is-4by3">
      <img data-ng-src="{{ vc.book.images.large }}">
    </figure>
  </span>
   </a>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4" data-ng-bind="vc.book.name"></p>
        <p class="subtitle is-6">{{vc.book.price}}<span class='has-text-grey-light'>&nbsp;&nbsp;({{vc.book.priceWithDiscount}})</span></p>
      </div>
    </div>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        <a href="{{vc.book.href}}" target="_blank">Visualizar na loja</a>
      </span>
    </p>
  </footer>  
</div>`;

export default BookBoxTemplate;