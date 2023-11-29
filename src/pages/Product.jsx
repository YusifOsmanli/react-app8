import React from 'react'
import Cards from '../components/Cards'

const Product = () => {
    return (
        
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://supro.arrowtheme.com/pub/media/wysiwyg/slider/slider-full-1.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://supro.arrowtheme.com/pub/media/wysiwyg/slider/slider-full-3.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://supro.arrowtheme.com/pub/media/wysiwyg/slider/slider-full-2.jpg" alt="Third slide"/>
      
    </div>
  </div>
</div>
<Cards/>
        </div>
  )
}

export default Product