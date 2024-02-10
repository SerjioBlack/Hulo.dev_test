$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  $('.video-link').on('click', function (e) {
    e.preventDefault();
    var videoId = $(this).data('video-id');
    openModal(videoId);
  });

  $('.close').on('click', function () {
    closeModal();
  });
});

function openModal(videoId) {
  $('#video-player').html('<iframe src="https://player.vimeo.com/video/' + videoId + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
  $('#video-modal').css('display', 'block');
}

function closeModal() {
  $('#video-player').html('');
  $('#video-modal').css('display', 'none');
}
