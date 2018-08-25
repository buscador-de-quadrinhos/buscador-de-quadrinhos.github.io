const BookBoxTemplate = `<div class="card">
   <a href="{{vc.product.href}}" target="_blank">
  <span class="card-image">
    <figure class="image is-4by3">
      <img data-ng-src="{{ vc.product.image }}">
    </figure>
  </span>
   </a>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4" data-ng-bind="vc.product.name"></p>
        <p class="subtitle is-6">{{vc.product.price}}<span class='has-text-grey-light'>&nbsp;&nbsp;({{vc.product.priceWithDiscount}})</span></p>
      </div>
    </div>
    <div class="content">
      <a href="{{vc.product.href}}" target="_blank">Visualizar na loja</a>
      <br>
    </div>
  </div>
</div>`;

export default BookBoxTemplate;