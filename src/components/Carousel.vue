<template>
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <!-- Button trigger modal -->
        <a href="btn btn-primary" data-toggle="modal" data-target="#videoModal">
          <img src="@/assets/Boyd-images/header-1.png" alt="" class="d-block w-100" id="slide1">
          <div class="slide-text" id="slide-one">
            <h1>Work Hard <br>
              Work Smart <br>
              Enjoy Life.</h1>
            <!-- Button trigger modal -->
            <a href="btn btn-primary" data-toggle="modal" data-target="#videoModal">
              <p><img src="@/assets/Boyd-images/Play_Arrow.png" alt=""><span>Watch video</span></p>
            </a>
          </div>
        </a>
      </div>
      <div class="carousel-item">
        <!-- Button trigger modal -->
        <a href="btn btn-primary" data-toggle="modal" data-target="#videoModal">
          <img src="@/assets/Boyd-images/header-2.png" alt="" class="d-block w-100" id="slide2">
          <div class="slide-text" id="slide-one">
            <h1>Work Hard <br>
              Work Smart <br>
              Enjoy Life.</h1>
            <!-- Button trigger modal -->
            <a href="btn btn-primary" data-toggle="modal" data-target="#videoModal">
              <p><img src="@/assets/Boyd-images/Play_Arrow.png" alt=""><span>Watch video</span></p>
            </a>
          </div>
        </a>
      </div>
      <div class="carousel-item">
        <!-- Button trigger modal -->
        <a class="btn btn-primary" data-toggle="modal" data-target="#videoModal">
          <img src="@/assets/Boyd-images/header-3.png" alt="" class="d-block w-100" id="slide3">
          <div class="slide-text" id="slide-one">
            <h1>Work Hard <br>
              Work Smart <br>
              Enjoy Life.</h1>
            <!-- Button trigger modal -->
            <a class="btn btn-primary" data-toggle="modal" data-target="#videoModal">
              <p><img src="@/assets/Boyd-images/Play_Arrow.png" alt=""><span>Watch video</span></p>
            </a>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="yt-player">
          <iframe src="https://player.vimeo.com/video/341581667" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel"
}
</script>

<style scoped>
#carousel {
  padding-top: 120px;
}

@media (max-width: 767px) {
  #carousel {
    padding-top: 100px;
  }

}
</style>