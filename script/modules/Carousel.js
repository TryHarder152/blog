export default class Carousel {
  constructor({arrows, contents, dots}) {
    this.arrows = document.querySelectorAll(arrows);
    this.contents = document.querySelectorAll(contents);
    this.dots = document.querySelectorAll(dots);

    this.widthStep = this.contents[0].offsetWidth;
    this.sliderMover = this.contents[0].parentElement;

    this.currentOffset = 0;

  }

  switchSlide() {
    this.arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {

        if(arrow.classList.contains('carousel__arrows-right')) {
          this.currentOffset = this.currentOffset -= this.widthStep;

          if(this.currentOffset == -((this.contents.length * this.widthStep))) {
            this.currentOffset = 0;
          }

          this.sliderMover.style.left = `${this.currentOffset}px`;

        } else if(arrow.classList.contains('carousel__arrows-left')) {
          this.currentOffset = this.currentOffset += this.widthStep;

          if(this.currentOffset > 0) {
            this.currentOffset = -((this.contents.length * this.widthStep) - this.widthStep);
          }

          this.sliderMover.style.left = `${this.currentOffset}px`;
        }
      });
    });

    this.resize();
  }

  resize() {
    window.addEventListener('resize', () => {
      this.currentOffset = 0;
      this.widthStep = this.contents[0].offsetWidth;
    });
  }


  init() {
    this.switchSlide();
    this.resize();
  }
}