/**
 * @Title   Custom Javascript for best-english-name
 * @Author    Vincent Wen <wentianqi77@outlook.com>
 * @Copyright Copyright (c) 2016 IT Consultis (https://it-consultis.com)
 */

import 'swiper'
window.$ = window.jQuery = jQuery

const lib = {
  /**
   * Toggle an element by clicking somewhere else
   * @param: the element that triggers the function
   * @param: the element that will not trigger the function
   * @param: the element to be toggled
   * @param: custom callback that will run when toggling the element
   * @return void
   */
  close(trigger, exclude, el, callback = (el) => {
    $(el).fadeOut();
    $('html').removeClass('scroll-lock');
  })
  {
    const target = el === 'self' ? trigger : el;

    $(trigger).on('click', function(event) {
      const isOutside = $(event.target).closest(exclude).length === 0;

      if (isOutside) {
        callback(target);
      }
    });
  },
  loading() {
  $('html').addClass('data-loading');
  },
  loaded() {
  $('html').removeClass('data-loading');
  }
};

// Custom functions running from here
$(document).ready(function() {
  const $header = $('.site-header');

  // Click to play video
  $('.video-wrapper').on('click', function() {
    const video = $(this).find('video')[0];
    if (video.paused)  {
    video.play();
    $(this).addClass('play');
    } else {
    video.pause();
    $(this).removeClass('play');
    }
  });

  $('.jsBg').each(function() {
    /**
     * Set image as its parent's background-image
     * @param: void
     * @return void
     */
    const src = this.src || $(this).data('src');

    $(this).parent().css({
      'background-image': `url(${src})`
    });
  });

  // Lazy load image
  $('img.lazyLoadCustom').waypoint(function() {
    this.element.id = this.key;
    $('#' + this.key).attr('src', $('#' + this.key).attr('data-src'));
    $('#' + this.key).addClass('active');
  },{offset: 'bottom-in-view' });

  // Initialize all sliders
  new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    paginationClickable: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });

  // Sticky header
  $(window).on('scroll', function() {
    if (window.pageYOffset > 150) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
  });

  // Menu popup
  $header.find('#navicon').on('click', function() {
    $(this).toggleClass('open');
    $header.find('.wrapper').slideToggle();
  });

  // Popup
  $('.jsPopup').on('click', function(event) {
    event.preventDefault();

    const href = this.getAttribute('href');
    if (href.length !== 0) {
      $(href).fadeIn();
    }
  });

  lib.close('.button-close', '', '.popup-wrapper');
  lib.close('.know-more', '', '.know-more');

  $('.jsClose').on('click', function(event) {
    event.preventDefault();

    const href = this.href ? this.getAttribute('href') : undefined;

    if (href !==  undefined && href.length !== 0) {
      $(href).fadeOut();
    }
  });

  // Circle block popup
  $('.block-circle').find('.jsPopup').on('click', function() {
    $(this).parent().find('.know-more').fadeIn();
    $('html').addClass('scroll-lock');
  });

  // Post page
  $('#post-page').find('.lang button').on('click', function() {
    $('#post-page').toggleClass('en');
  });

  // Quiz page answers checking
  $('.page-test .answer').on('click', function() {
    $(this).parent().find('.answer').removeClass('toggle');
    $(this).addClass('toggle');
  });
});

export default lib;
