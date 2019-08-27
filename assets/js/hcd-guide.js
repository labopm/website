/* /* Please ❤ this if you like it! 

(function($) { "use strict";
		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		
    jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery);  */


window.addEventListener("load", 
  function () {
    // String variables which will hold the CSS selectors which refer to all HTML content, the footer, 
    // and the side navigation, and the main block of content are initialized.
    var content_bottom_selector = "";
    var nav_selector = "";

    // The CSS selectors which refer to the main block of content, the footer, the side navigation, 
    // and the main block of content are defined and passed on. 
    // defined and passed on.
    content_bottom_selector = "usa-layout__content_bottom";
    nav_selector = "lab-hcd-guide-nav";

    var content_bottom_element = {};
    var nav_element = {};

    content_bottom_element = document.getElementsByClassName(content_bottom_selector)[0];
    nav_element = document.getElementsByClassName(nav_selector)[0];

    // Number variables which will hold the height of all the HTML content, the footer, and the side 
    // navigation are initialized.
    var content_bottom_top;
    var nav_height;

    // The height of the HTML elements the above variables refer to are passed on.
    content_bottom_top = parseInt(content_bottom_element.getBoundingClientRect().top);
    nav_height = parseInt(window.getComputedStyle(nav_element, null).getPropertyValue("height"));

    // A variable is initialized which will hold the vertical position within a webpage 
    // a visitor has scrolled to.
    var current_position;
       
    current_position = window.pageYOffset;

    // A Number variable which will hold the sum of the heights of the footer, side navigation 
    // and the value of the padding at the bottom of the main block of content is intialized.
    var scroll_value;

    // The sum of the heights of the footer and side navigation combined with the value 
    // of the padding along the bottom of the main block of content is subtracted 
    // from the height of all of the HTML content. That value is passed on.
    scroll_value = current_position + (content_bottom_top - nav_height - 146);
    // A String which will hold the CSS selector for the side navigation is initialized.
    var side_navigation_selector = "";

    // The CSS selector referring to the side navigation is passed on.
    side_navigation_selector = "usa-layout-docs__sticky";

    // An Object which will hold the HTML DOM element which refers to the side navigation is initialized.
    var side_navigation_element = {};

    // The HTML DOM element which refers to the side navigation is passed on.
    side_navigation_element = document.getElementById(side_navigation_selector);

    // A String which will hold the CSS selector for the footer is initialized.
    var footer_selector = "";

    // The CSS selector for the footer is passed on.
    footer_selector = "footer";

    // An Object which will hold the HTML DOM element which refers to the footer is initialized.
    var footer_element = {};

    // The HTML DOM element which refers to the footer is passed on.
    footer_element = document.getElementsByTagName(footer_selector)[0];

    // A Number which will hold the CSS value, 'top', of the footer as it scrolls down and up 
    // the webpage is initialized.
    var current_footer_top_value;

    // A String which will hold the CSS selector for the main block of content is initialized.
    var main_content_selector = "";

    // The CSS selector for the main block of content is passed on.
    main_content_selector = "main-content__hcd-guide";

    // An Object which will hold the HTML DOM element for the main block of content 
    // is initialized.
    var main_content_element = {};

    // The HTML DOM element which refers to the main block of content is passed on.
    main_content_element = document.getElementsByClassName(main_content_selector)[0];

    // A variable which will hold the value of the CSS property, 'padding-bottom', 
    // is initialized.
    var main_content_padding_bottom_value;

    // The value of the CSS property, 'padding-bottom', for the main block of content 
    // is passed on.
    main_content_padding_bottom_value = window.getComputedStyle(main_content_element, null).getPropertyValue('padding-bottom');

    // A numberical equivalent to the CSS value of the 'padding-bottom' property is passed on.
    main_content_padding_bottom_value = parseInt(main_content_padding_bottom_value);

    // A variable which will hold the height of the footer is initialized.
    var footer_height_value;

    // The height of the footer is passed on.
    footer_height_value = parseInt(footer_element.getBoundingClientRect().height);

    // The value of the footer's 'top' is passed on.
    current_footer_top_value = parseInt(footer_element.getBoundingClientRect().top);

/* 
    // A variable which will hold a number which serves as a threshold, which when reached as a 
    // visitor scrolls up and down the page, will either prevent the side navigation from scrolling, 
    // or allow it to scroll again is initialized.
    var stop_side_navigation_scrolling_value;

    // The threshold which when reached by a visitor scrolling down a webpage is calcluated by taking the CSS 
    // value, 'top', of the footer and subtracting the height of the footer and the amount of 'padding' 
    // at the bottom of the main block of content is passed on.
    stop_side_navigation_scrolling_value = current_footer_top_value +(footer_height_value + main_content_padding_bottom_value);
this.console.log("stop_side_navigation_scrolling_value = " + stop_side_navigation_scrolling_value);
 */
    // A variable is initialized which will hold a number which sets the threshold when when reached triggers the IF/ELSE 
    // statement to stop the side navigation from scrolling.
    var side_navigation_threshold_value;

    // The number which sets the threshold for the scrolling of the side navigation is passed on.
    side_navigation_threshold_value = 100;

    var side_navigation_top_value;

    side_navigation_top_value = "146px";

    
    // A variable is initialized which will hold the most recent vertical position 
    // a visitor has scrolled to.
    var previous_position;
    
    // The initial position of the webpage is passed on.
    previous_position = 0;

    var side_navigation_values = [];

    side_navigation_values = [
      current_position, 
      side_navigation_top_value, 
      scroll_value
    ];
    
    // stopSideNavigationScrolling(side_navigation_values);
    var is_hero_large;

    var num_class_in_hero;

    // 'onScroll' Event which animates the header and side navigation as a visitor moves up and down 
    // the webpage.
    jQuery(window).on('scroll', 
      function () {   
        // The vertical position within the webpage which a visitor has scrolled to is passed on.
        current_position = window.pageYOffset;

        is_hero_large = isHeroLarge();
        num_class_in_hero = numClassInHero();
        is_mobile_menu_visible = isMobileMenuVisible();

        /* var offset = 50;
        var duration = 550;

        var progress_wrap_element = document.getElementsByClassName("progress-wrap")[0];
        
        if (current_footer_top_value > offset) {
          progress_wrap_element.classList.add('active-progress');
        } else {
          progress_wrap_element.classList.remove('active-progress');
        }
         */
        // IF/ELSE statement which folds the blue 'search' bar if the visitor is scrolling down.
        // Otherwise, the blue bar is made visible. Also, this statement stops the side navigation 
        // from scrolling if the visitor has reached the bottom of the webpage.
        if (current_position > previous_position && (is_hero_large === true || num_class_in_hero === 2) && is_mobile_menu_visible === false) {
          shrinkSearchBar();
        } else if (current_position < previous_position && is_hero_large === false) {
          expandSearchBar();
        }

        side_navigation_values[0] = current_position;
              stopSideNavigationScrolling(side_navigation_values);
        

        var offset = 100;
        var duration = 550;

        /* if (jQuery(this).scrollTop() > offset) {
          jQuery('.progress-wrap').addClass('active-progress');
        } else {
          jQuery('.progress-wrap').removeClass('active-progress');
        } */
  

        previous_position = current_position;
      }
    );
/* 
    var search_mobile_link_selector = "";

    search_mobile_link_selector = "lab-hero--hcd-guide__guide_menu_search_link";

    var search_mobile_link_element = {};

    search_mobile_link_element = document.getElementsByClassName(search_mobile_link_selector)[0];

    search_mobile_link_element.addEventListener('click', 
      function () {
        showMobileSearchForm();
      }
    );
 */
    var guide_menu_link_selector = "";
    
    guide_menu_link_selector = "lab-hero--hcd-guide__guide_menu_link";

    guide_menu_link_element = {};

    guide_menu_link_element = document.getElementsByClassName(guide_menu_link_selector)[0];

    guide_menu_link_element.addEventListener('click', 
      function () {
        showGuideMenu();
      }
    );

    /* var guide_menu_link_title_selector = "";
    
    guide_menu_link_title_selector = "lab-hero--hcd-guide__guide_menu_link_title";

    guide_menu_link_title_element = {};

    guide_menu_link_title_element = document.getElementsByClassName(guide_menu_link_title_selector)[0];

    guide_menu_link_title_element.addEventListener('click', 
      function () {
        showGuideMenu();
      }
    ); */

    var guide_menu_close_link_selector = {}; 
    
    guide_menu_close_link_selector = "lab-hero--hcd-guide__guide_menu__close_link";

    var guide_menu_close_link_element = {};
    
    guide_menu_close_link_element = document.getElementsByClassName(guide_menu_close_link_selector)[0];

    guide_menu_close_link_element.addEventListener('click', 
      function () {
        hideGuideMenu();
      }
    );

    var guide_menu_mobile_menu_selector = "";
    
    guide_menu_mobile_menu_selector = "lab-hero--hcd-guide__guide_menu_view_more";

    var guide_menu_mobile_menu_element = {};
    
    guide_menu_mobile_menu_element = document.getElementsByClassName(guide_menu_mobile_menu_selector)[0];

    if (guide_menu_mobile_menu_element !== undefined) {
      guide_menu_mobile_menu_element.addEventListener('click', 
        function () {
          showMobileMenu();
        }
      );
    }

    var main_menu_selector = "";

    main_menu_selector = "usa-menu-btn";

    var main_menu_element = {};

    main_menu_element = document.getElementsByClassName(main_menu_selector)[0];

    if (main_menu_element !== undefined) {
      main_menu_element.addEventListener('click', 
        function () {
          var window_width;

          window_width = window.innerWidth;

          if (window_width > 414 && window_width < 1024) {
            showTabletMainMenu();
          }
        }
      );
    }

    var main_menu_close_selector = "";

    main_menu_close_selector = "usa-nav__close";

    var main_menu_close_element = {};

    main_menu_close_element = document.getElementsByClassName(main_menu_close_selector)[0];

    if (main_menu_close_element !== undefined) {
      main_menu_close_element.addEventListener('click', 
        function () {
          var window_width;

          window_width = window.innerWidth;

          if (window_width > 414 && window_width < 1024) {
            closeTabletMainMenu();
          }
        }
      );
    }

    /* var progress_wrap_element = document.getElementsByClassName("progress-wrap")[0];

    progress_wrap_element.addEventListener('click', 
      function () {
        var html_element = document.getElementsByTagName('html')[0];

        html_element.scrollTop(0);
      }
    ); */

    var highlights_button_selector = "";

    highlights_button_selector = "switch";

    var highlights_button_element = {};

    highlights_button_element = document.getElementById(highlights_button_selector);

    if (highlights_button_element !== undefined) {
      highlights_button_element.addEventListener('click', 
        function () {
          cycleHighlights();
        }
      );
    }

    var highlights_button_mobile_selector = "";

    highlights_button_mobile_selector = "switch-mobile";

    var highlights_button_mobile_element = {};

    highlights_button_mobile_element = document.getElementById(highlights_button_mobile_selector);

    if (highlights_button_mobile_element !== undefined) {
      highlights_button_mobile_element.addEventListener('click', 
        function () {
          cycleHighlights();
        }
      );
    }
  } 
);



function cycleHighlights()  {
  var highlighted_copy_selector = "";

  highlighted_copy_selector = "usa-prose__hcd-guide__highlight_copy";

  var highlighted_copy_element = {};

  highlighted_copy_element = document.getElementsByClassName(highlighted_copy_selector)[0];

  var are_highlights_on;

  are_highlights_on = highlighted_copy_element.classList.contains("usa-prose__hcd-guide__highlight_copy_on");

  if (are_highlights_on === true)  {
    highlighted_copy_element.classList.remove("usa-prose__hcd-guide__highlight_copy_on");
    highlighted_copy_element.classList.add("usa-prose__hcd-guide__highlight_copy_off");
  } else {
    highlighted_copy_element.classList.remove("usa-prose__hcd-guide__highlight_copy_off");
    highlighted_copy_element.classList.add("usa-prose__hcd-guide__highlight_copy_on");
  }
}


function closeTabletMainMenu()  {
  var gray_banner_selector = "";
  var hero_selector = "";
  var main_content_selector = "";

  gray_banner_selector = "usa-banner__hcd-guide";
  hero_selector = "lab-hero--hcd-guide";
  main_content_selector = "main-content__hcd-guide";

  var gray_banner_element = {};
  var hero_element = {};
  var main_content_element = {};

  gray_banner_element = document.getElementsByClassName(gray_banner_selector)[0];
  hero_element = document.getElementsByClassName(hero_selector)[0];
  main_content_element = document.getElementsByClassName(main_content_selector)[0];

  gray_banner_element.classList.remove("position_static");
  hero_element.classList.remove("position_static");

  var current_position;

  current_position = window.pageYOffset;

  if (current_position !== 0) {
    main_content_element.classList.add("main_content_scroll_down");
  }
}



function showTabletMainMenu()  {
  var gray_banner_selector = "";
  var hero_selector = "";
  var main_content_selector = "";

  gray_banner_selector = "usa-banner__hcd-guide";
  hero_selector = "lab-hero--hcd-guide";
  main_content_selector = "main-content__hcd-guide";

  var gray_banner_element = {};
  var hero_element = {};
  var main_content_element = {};

  gray_banner_element = document.getElementsByClassName(gray_banner_selector)[0];
  hero_element = document.getElementsByClassName(hero_selector)[0];
  main_content_element = document.getElementsByClassName(main_content_selector)[0];

  gray_banner_element.classList.remove("position_static");
  gray_banner_element.classList.add("position_static");

  hero_element.classList.remove("position_static");
  hero_element.classList.add("position_static");

  main_content_element.classList.remove("main_content_scroll_down");
  main_content_element.classList.add("main_content_main_menu_visible");
}



function showMobileMenu()  {
  var guide_menu_mobile_menu_selector = "";

  guide_menu_mobile_menu_selector = "lab-hero--hcd-guide__guide_menu_view_more";
  
  var guide_menu_mobile_menu_element = {};

  guide_menu_mobile_menu_element = document.getElementsByClassName(guide_menu_mobile_menu_selector)[0];

  var guide_menu_mobile_menu_display_value;

  guide_menu_mobile_menu_display_value = window.getComputedStyle(guide_menu_mobile_menu_element).getPropertyValue("display");

  if (guide_menu_mobile_menu_display_value === "none")  {
    guide_menu_element.style.display = "block";

    var guide_menu_mobile_menu_subnav_selector = "";

    guide_menu_mobile_menu_subnav_selector = "lab-hero--hcd-guide__guide_menu-mobilenav__sublist";

    var guide_menu_mobile_menu_subnav_element = {};

    guide_menu_mobile_menu_subnav_element = document.getElementsByClassName(guide_menu_mobile_menu_subnav_selector)[0];

    guide_menu_mobile_menu_subnav_element.style.display = "block";
  } 
} 



function showGuideMenu()  {
  var guide_menu_selector = "";

  guide_menu_selector = "lab-hero--hcd-guide__guide_menu";
  
  var guide_menu_element = {};

  guide_menu_element = document.getElementsByClassName(guide_menu_selector)[0];

  var guide_menu_display_value;

  guide_menu_display_value = window.getComputedStyle(guide_menu_element).getPropertyValue("display");

  if (guide_menu_display_value === "block")  {
    guide_menu_element.classList.remove("guide_menu_visible");
    guide_menu_element.classList.add("guide_menu_not_visible");

    var guide_menu_nav_selector = "";

    guide_menu_nav_selector = "lab-hero--hcd-guide__guide_menu_content";

    var guide_menu_nav_element = {};

    guide_menu_nav_element = document.getElementsByClassName(guide_menu_nav_selector)[0];

    guide_menu_nav_element.classList.remove("guide_menu_nav_not_visible");
    guide_menu_nav_element.classList.add("guide_menu_nav_visible");
  } 

  var gray_banner_selector = "";
  var header_selector = "";
  var hero_bar_selector = "";

  // The CSS selectors which refer to the gray banner, header and main block of content 
  // are passed on.
  gray_banner_selector = "usa-banner__hcd-guide";
  header_selector = "usa-header__hcd-guide";
  hero_bar_selector = "lab-hero--hcd-guide";

  // Objects which will hold HTML DOM objects for the gray banner, header, and 
  // main block of content are initialized.
  var gray_banner_element = {};
  var header_element = {};
  var hero_bar_element = {};

  // HTML DOM objects which refer to the HTML elements the above variables refer 
  // to are passed on.
  gray_banner_element = document.getElementsByClassName(gray_banner_selector)[0];
  header_element = document.getElementsByClassName(header_selector)[0];
  hero_bar_element = document.getElementsByClassName(hero_bar_selector)[0];

  gray_banner_element.classList.remove("gray_banner_scroll_up");
  header_element.classList.remove("header_scroll_up");
  gray_banner_element.classList.add("gray_banner_mobile_visible_scroll_up");
  header_element.classList.add("header_mobile_visible_scroll_up");
    
    

    

   

    hero_bar_element.classList.add("hero_mobile_visible_scroll_up");
 /*  } */

} 



function hideGuideMenu()  {
  var guide_menu_selector = "";

  guide_menu_selector = "lab-hero--hcd-guide__guide_menu";
  
  var guide_menu_element = {};

  guide_menu_element = document.getElementsByClassName(guide_menu_selector)[0];

  var guide_menu_display_value;

  guide_menu_display_value = window.getComputedStyle(guide_menu_element).getPropertyValue("display");

  if (guide_menu_display_value === "none")  {
    guide_menu_element.classList.remove("guide_menu_not_visible");
    guide_menu_element.classList.add("guide_menu_visible");

    var guide_menu_nav_selector = "";

    guide_menu_nav_selector = "lab-hero--hcd-guide__guide_menu_content";

    var guide_menu_nav_element = {};

    guide_menu_nav_element = document.getElementsByClassName(guide_menu_nav_selector)[0];

    guide_menu_nav_element.classList.remove("guide_menu_nav_visible");
    guide_menu_nav_element.classList.add("guide_menu_nav_not_visible");
  }

   /* else if (current_position === 0 && main_content_contains_class_value === true)  {
    main_content_element.classList.remove("main_content_scroll_down");
  } */
  /* if (current_position === 0) {
     else if (main_content_contains_class_value === true)  {
      var current_position;    }
  } else {
    main_content_element.classList.add("main_content_scroll_down");
  } */

  
/*
  var is_guide_menu_link_visible = isGuideMenuLinkVisible();
 
  if (is_guide_menu_link_visible === false) {
    var guide_menu_link_title_selector = "";

    guide_menu_link_title_selector = "lab-hero--hcd-guide__guide_menu_link_title";

    var guide_menu_link_title_element = {};
    
    guide_menu_link_title_element = document.getElementsByClassName(guide_menu_link_title_selector)[0];

    guide_menu_link_title_element.classList.remove("guide_menu_link_title_not_visible");
    guide_menu_link_title_element.classList.add("guide_menu_link_title_visible");
  } */

  var gray_banner_selector = "";
  var header_selector = "";
  var hero_bar_selector = "";

  // The CSS selectors which refer to the gray banner, header and main block of content 
  // are passed on.
  gray_banner_selector = "usa-banner__hcd-guide";
  header_selector = "usa-header__hcd-guide";
  hero_bar_selector = "lab-hero--hcd-guide";

  // Objects which will hold HTML DOM objects for the gray banner, header, and 
  // main block of content are initialized.
  var gray_banner_element = {};
  var header_element = {};
  var hero_bar_element = {};

  // HTML DOM objects which refer to the HTML elements the above variables refer 
  // to are passed on.
  gray_banner_element = document.getElementsByClassName(gray_banner_selector)[0];
  header_element = document.getElementsByClassName(header_selector)[0];
  hero_bar_element = document.getElementsByClassName(hero_bar_selector)[0];

  var main_content_selector = "";

  main_content_selector = "main-content__hcd-guide";

  var main_content_element = {};

  main_content_element = document.getElementsByClassName(main_content_selector)[0];
  
  var main_content_contains_class_value;
  var header_top_value;


  main_content_contains_class_value = main_content_element.classList.contains("main_content_to_leave_up");
  header_top_value = window.getComputedStyle(header_element, null).getPropertyValue("top");

  current_position = window.pageYOffset;

  if (current_position === 0 && main_content_contains_class_value === true)  {
    main_content_element.classList.remove("main_content_scroll_down");
    main_content_element.classList.remove("main_content_to_leave_up");
    main_content_element.classList.add("main_content_after_scroll");
    
  }

  gray_banner_element.classList.remove("gray_banner_mobile_visible_scroll_up");
  header_element.classList.remove("header_mobile_visible_scroll_up");
  hero_bar_element.classList.remove("hero_mobile_visible_scroll_up");
}



function showDescription(description_name)  {
  var button_selector = "";

  button_selector = "lab__button_" + description_name;
  
  var button_element = {};

  button_element = document.getElementById(button_selector);

  var button_location;

  var current_position;

  current_position = window.pageYOffset;

  button_location = (parseInt(button_element.getBoundingClientRect().y) + current_position - 170);

  var overlay_selector = "";

  overlay_selector = "usa-overlay";

  overlay_element = {};

  overlay_element = document.getElementsByClassName(overlay_selector)[0];

  overlay_element.classList.remove("description_overlay_off");
  overlay_element.classList.add("description_overlay_on");

  var description_selector = "";

  description_selector = "lab__hcd-guide__description_" + description_name;

  var description_element = {};

  description_element = document.getElementById(description_selector);

  button_location = button_location + "px";

  description_element.classList.remove("description_off");
  description_element.classList.add("description_on");

  overlay_element.addEventListener("click", 
    function () {
      closeDescription(description_name);
    }
  );

  // description_element.style.top = button_location;
}



function closeDescription(description_name) {
  overlay_selector = "usa-overlay";

  overlay_element = {};

  overlay_element = document.getElementsByClassName(overlay_selector)[0];

  overlay_element.classList.remove("description_overlay_on");
  
  overlay_element.classList.add("description_overlay_off");

  setTimeout(
    function () {
      overlay_element.classList.remove("is-visible");
    }, 50
  );
  
  var description_selector = "";

  description_selector = "lab__hcd-guide__description_" + description_name;
  
  var description_element = {};

  description_element = document.getElementById(description_selector);

  description_element.classList.remove("description_on");
  description_element.classList.add("description_off");

}


/* 
function showMobileSearchForm() {
  var search_mobile_link_selector = "";

  search_mobile_link_selector = "lab-hero--hcd-guide__guide_menu_search_link";

  var search_mobile_link_element = {};
  
  search_mobile_link_element = document.getElementsByClassName(search_mobile_link_selector)[0];
  
  var search_mobile_form_selector = "";

  search_mobile_form_selector = "lab-hero--hcd-guide__guide_menu_search";

  var search_mobile_form_element = {};
  
  search_mobile_form_element = document.getElementsByClassName(search_mobile_form_selector)[0];
  
  var guide_menu_selector = "";

  var guide_menu_link_title_selector = "";

  guide_menu_link_title_selector = "lab-hero--hcd-guide__guide_menu_link_title";

  var guide_menu_link_title_element = {};

  guide_menu_link_title_element = document.getElementsByClassName(guide_menu_link_title_selector)[0];

  var search_mobile_field_selector = "";

  search_mobile_field_selector = "lab-hero--hcd-guide__guide_menu_search_field";

  var search_mobile_field_element = {};
  
  search_mobile_field_element = document.getElementsByClassName(search_mobile_field_selector)[0];


  search_mobile_link_element.classList.add("search_mobile_link_hide");
  search_mobile_form_element.classList.add("search_form_visible");
  search_mobile_field_element.classList.add("search_field_visible");

  guide_menu_link_title_element.classList.add("guide_menu_link_title_not_visible");
}

*/ 
function isGuideMenuLinkVisible() {
  var guide_menu_content_selector = "";

  guide_menu_content_selector = "lab-hero--hcd-guide__guide_menu_content";

  var guide_menu_content_element = {};
  
  guide_menu_content_element = document.getElementsByClassName(guide_menu_content_selector)[0];

  var guide_menu_content_class = "";
  
  guide_menu_content_class = "guide_menu_visible";

  var is_guide_menu_content_visible;

  is_guide_menu_content_visible = guide_menu_content_element.classList.contains(guide_menu_content_class);

  return is_guide_menu_content_visible;
}



function isMobileMenuVisible()  {
  var mobile_menu_selector = "";

  mobile_menu_selector = "lab-hero--hcd-guide__guide_menu_content";

  var mobile_menu_element = {};

  mobile_menu_element = document.getElementsByClassName(mobile_menu_selector)[0];

  var mobile_menu_class = "";

  mobile_menu_class = "guide_menu_nav_visible";
  
  var is_mobile_menu_visible;

  is_mobile_menu_visible = mobile_menu_element.classList.contains(mobile_menu_class);

  return mobile_menu_element.classList.contains(mobile_menu_class);
}



function numClassInHero()  {
  var hero_selector = "";

  hero_selector = "lab-hero--hcd-guide";

  var hero_element = {};

  hero_element = document.getElementsByClassName(hero_selector)[0];

  var num_class_in_hero;

  num_class_in_hero = hero_element.classList.length;

  return num_class_in_hero;
}



function isHeroLarge()  {
  var hero_selector = "";

  hero_selector = "lab-hero--hcd-guide";

  var hero_element = {};

  hero_element = document.getElementsByClassName(hero_selector)[0];

  var is_hero_large;

  is_hero_large = hero_element.classList.contains("hero_scroll_up");

  return is_hero_large;
}



function stopSideNavigationScrolling(side_navigation_values)  {
  var current_position;
  var side_navigation_top_value;
  var scroll_value;
  
  current_position = side_navigation_values[0];
  side_navigation_top_value = side_navigation_values[1];
  scroll_value = side_navigation_values[2];

  // A String which will hold the CSS selector for the side navigation is initialized.
  var side_navigation_selector = "";

  // The CSS selector referring to the side navigation is passed on.
  side_navigation_selector = "usa-layout-docs__sticky";

  // An Object which will hold the HTML DOM element which refers to the side navigation is initialized.
  var side_navigation_element = {};

  // The HTML DOM element which refers to the side navigation is passed on.
  side_navigation_element = document.getElementById(side_navigation_selector);

  var side_navigation_position_value = "";

  side_navigation_position_value = window.getComputedStyle(side_navigation_element, null).getPropertyValue("position");
  
  var window_width;

  window_width = window.innerWidth;

  if (current_position < scroll_value && window_width >= 1024) {
    side_navigation_element.classList.remove("side_navigation_scroll_up");
    side_navigation_element.classList.add("side_navigation_scroll_down");
    side_navigation_element.style.top = side_navigation_top_value;
  } else if (current_position >= scroll_value && 
             side_navigation_position_value === "sticky" && 
             scroll_value > 0 && 
             window_width >= 1024)  {
    side_navigation_element.classList.remove("side_navigation_scroll_down");
    side_navigation_element.classList.add("side_navigation_scroll_up");

    side_navigation_element.style.top = scroll_value + "px";
  } 
}



function shrinkSearchBar()  {
  // A String which will hold the CSS selector which refers to the links and input field 
  // held within the 'Search' bar is initialized.
  var hero_bar_selector = "";

  // The value of the CSS selector which refers to the content of the 'Search' bar 
  // is passed on.
  hero_bar_selector = "lab-hero--hcd-guide__body";

  // An Object which will hold the HTML DOM object for the 'Search' bar is initalized.
  var hero_bar_element = {};

  // The HTML DOM object which refers to the 'Search' bar is passed on.
  hero_bar_element = document.getElementsByClassName(hero_bar_selector)[0];
  
  // The opacity of the content held within the search bar is set to zero 
  // and the search bar is removed from visibility.  
  hero_bar_element.classList.remove("hero_bar_scroll_up");
  hero_bar_element.classList.add("hero_bar_scroll_down");

   // A String is initialized which will contain the selector which refers to the 
  // blue bar which appears as a visitor scrolls down.
  var print_links_selector = "";

  // The CSS selector which refers to the HTML element containing the blue bar 
  // is passed on.
  print_links_selector = "lab-hero--hcd-guide__sub-title";

    // An Object variable which will hold the HTML DOM object which refers to the 
  // blue bar which appears as a visitor scrolls down is initialized.
  var print_links_element = {};

  // The HTML DOM object which refers to the blue bar is passed on.
  print_links_element = document.getElementsByClassName(print_links_selector)[0];

  // The blue bar is made visible.
  print_links_element.classList.remove("hero_bar_content_scroll_up");
  print_links_element.classList.add("hero_bar_content_scroll_down");
  
  /* // A String is initialized which will contain the selector which refers to the 
  // blue bar which appears as a visitor scrolls down.
  var search_field_selector = "";

  // The CSS selector which refers to the HTML element containing the blue bar 
  // is passed on.
  search_field_selector = "lab-hero--hcd-guide__search_form";

    // An Object variable which will hold the HTML DOM object which refers to the 
  // blue bar which appears as a visitor scrolls down is initialized.
  var search_field_element = {};

  // The HTML DOM object which refers to the blue bar is passed on.
  search_field_element = document.getElementsByClassName(search_field_selector)[0];

  // The blue bar is made visible.
  search_field_element.classList.remove("hero_bar_content_scroll_up");
  search_field_element.classList.add("hero_bar_content_scroll_down");
 */
  var hero_selector = "";

  hero_selector = "lab-hero--hcd-guide";

  hero_element = {};

  hero_element = document.getElementsByClassName(hero_selector)[0];

  hero_element.classList.remove("hero_scroll_up");
  hero_element.classList.add("hero_scroll_down");

 /*  // A String which will hold the value of the CSS property, 'position', for the blue bar
  // is initialized.
  var blue_bar_position_value;

  // The value of the CSS property, 'position', is passed on.
  blue_bar_position_value = window.getComputedStyle(search_bar_content_element, null).getPropertyValue("position"); */

  // A Number which will hold the width of the browser window is initialized.
  var window_width;

  // The width of the browser window is passed on.
  window_width = window.innerWidth;

  // Strings which will hold the CSS selectors for the gray banner, header, and 
  // main block of content are initialized.
  var gray_banner_selector = "";
  var header_selector = "";
  var main_content_selector = "";

  // The CSS selectors which refer to the gray banner, header and main block of content 
  // are passed on.
  gray_banner_selector = "usa-banner__hcd-guide";
  header_selector = "usa-header__hcd-guide";
  main_content_selector = "main-content__hcd-guide";

  // Objects which will hold HTML DOM objects for the gray banner, header, and 
  // main block of content are initialized.
  var gray_banner_element = {};
  var header_element = {};
  var main_content_element = {};

  // HTML DOM objects which refer to the HTML elements the above variables refer 
  // to are passed on.
  gray_banner_element = document.getElementsByClassName(gray_banner_selector)[0];
  header_element = document.getElementsByClassName(header_selector)[0];
  main_content_element = document.getElementsByClassName(main_content_selector)[0];

  // IF/ELSE statement which sets the gray banner and header to the top of the webpage 
  // and sets the blue bar to the top of the browser window if the browser is a 
  // mobile browser. Otherwise, only the blue bar is set to the top of the browser window.
  if (window_width <= 1024)  {
    gray_banner_element.classList.remove("gray_banner_scroll_up");
    gray_banner_element.classList.add("gray_banner_scroll_down");

    header_element.classList.remove("header_scroll_up");
    header_element.classList.add("header_scroll_down");
  } else {
    gray_banner_element.classList.add("gray_banner_scroll_down");
    header_element.classList.add("header_scroll_down");
  }

  main_content_element.classList.add("main_content_scroll_down");

  /* // IF statement which adds a CSS value which will affix the blue bar of the search bar 
  // to the top of the browser window.
  if (blue_bar_position_value === "fixed")  {
    
  } */
}



function expandSearchBar()  {
  /* // A String is initialized which will contain the selector which refers to the 
  // blue bar which appears as a visitor scrolls down.
  var blue_bar_selector;

  // The CSS selector which refers to the HTML element containing the blue bar 
  // is passed on.
  blue_bar_selector = "lab-hero__nav_bar_visible";

  // An Object which refers to the HTML DOM element which contains the blue bar 
  // is initialized.
  blue_bar_element = {};

  // The HTML DOM element the variable above refers to is passed on.
  blue_bar_element = document.getElementsByClassName(blue_bar_selector)[0];
  
  // The opacity of the content held within the search bar is set to zero, making 
  // that content not visible.
  blue_bar_element.classList.remove("search_bar_visible");
  blue_bar_element.classList.add("search_bar_not_visible");

   // The CSS class, '.search_bar_scroll_down', is removed.
  blue_bar_element.classList.remove("search_bar_scroll_down");
 */
  // A String which will hold the CSS selector which refers to the links and input field 
  // held within the 'Search' bar is initialized.
  var hero_bar_selector = "";

  // The value of the CSS selector which refers to the content of the 'Search' bar 
  // is passed on.
  hero_bar_selector = "lab-hero--hcd-guide__body";

  // An Object which will hold the HTML DOM element which refers to the 'Search' bar 
  // is initialized.
  var hero_bar_element = {};

  // The HTML DOM element which the above variable refers to is passed on.
  hero_bar_element = document.getElementsByClassName(hero_bar_selector)[0];
 
  // CSS values which makes the content of the 'Search' bar visible are passed on.
  hero_bar_element.classList.remove("hero_bar_scroll_down");
  hero_bar_element.classList.add("hero_bar_scroll_up");

  var main_content_selector = "";

  main_content_selector = "main-content__hcd-guide";

  main_content_element = {};

  main_content_element = document.getElementsByClassName(main_content_selector)[0];

  // Strings which will hold the CSS selectors for the gray banner, header, and main block 
  // of content are initialized.
  var gray_banner_selector = "";
  var header_selector = "";
  var main_content_selector = "";

  // The CSS selectors which refer to the above variables are passed on.
  gray_banner_selector = "usa-banner__hcd-guide";
  header_selector = "usa-header__hcd-guide";
  main_content_selector = "main-content__hcd-guide";

  // Objects which hold the HTML DOM elements for the gray banner, header, and main block of content 
  // are initialized.
  gray_banner_element = {};
  header_element = {};
  main_content_element = {};

  // HTML DOM elements which the above variables refer to are passed on.
  gray_banner_element = document.getElementsByClassName(gray_banner_selector)[0];
  header_element = document.getElementsByClassName(header_selector)[0];
  main_content_element = document.getElementsByClassName(main_content_selector)[0];

  
/*   // A String which will hold the value of the CSS property, 'position', of the blue bar is initialized.
  var search_bar_position_left_value;

  // The value of the CSS property, 'position', of the blue bar is passed on.
  search_bar_position_left_value = window.getComputedStyle(blue_bar_element, null).getPropertyValue("position"); */
  
    // is initialized.
    /* var main_content_position_top_value;

    // The value of the CSS property 'top' for the main block of content is passed on.
    main_content_position_top_value = window.getComputedStyle(main_content_element, null).getPropertyValue("top");

    // IF statement which adjusts the position of the main block of content if it has not been previously 
    // adjusted.
    if (main_content_position_top_value === "0px")  {
      main_content_element.classList.add("main_content_scroll_up");
    } */

  var hero_selector = "";

  hero_selector = "lab-hero--hcd-guide";

  hero_element = {};

  hero_element = document.getElementsByClassName(hero_selector)[0];
/*   
  search_bar_content_element.classList.remove("search_bar_scroll_down");
  search_bar_content_element.classList.add("search_bar_scroll_up");
 */  
  hero_element.classList.remove("hero_scroll_down");
  hero_element.classList.add("hero_scroll_up");

     // A String is initialized which will contain the selector which refers to the 
  // blue bar which appears as a visitor scrolls down.
  var print_links_selector = "";

  // The CSS selector which refers to the HTML element containing the blue bar 
  // is passed on.
  print_links_selector = "lab-hero--hcd-guide__sub-title";

    // An Object variable which will hold the HTML DOM object which refers to the 
  // blue bar which appears as a visitor scrolls down is initialized.
  var print_links_element = {};

  // The HTML DOM object which refers to the blue bar is passed on.
  print_links_element = document.getElementsByClassName(print_links_selector)[0];

  // The blue bar is made visible.
  print_links_element.classList.remove("hero_bar_content_scroll_down");
  print_links_element.classList.add("hero_bar_content_scroll_up");
  
  // A Number which will hold the width of the browser window is initialized.
  var window_width;

  // The width of the browser window is passed on.
  window_width = window.innerWidth;

  if (window_width <= 1024)  {
    gray_banner_element.classList.remove("gray_banner_scroll_down");
    gray_banner_element.classList.add("gray_banner_scroll_up");

    header_element.classList.remove("header_scroll_down");
    header_element.classList.add("header_scroll_up");
  }


  /* // A String is initialized which will contain the selector which refers to the 
  // blue bar which appears as a visitor scrolls down.
  var search_field_selector = "";

  // The CSS selector which refers to the HTML element containing the blue bar 
  // is passed on.
  search_field_selector = "lab-hero--hcd-guide__search_form";

    // An Object variable which will hold the HTML DOM object which refers to the 
  // blue bar which appears as a visitor scrolls down is initialized.
  var search_field_element = {};

  // The HTML DOM object which refers to the blue bar is passed on.
  search_field_element = document.getElementsByClassName(search_field_selector)[0];

  // The blue bar is made visible.
  search_field_element.classList.remove("hero_bar_content_scroll_down");
  search_field_element.classList.add("hero_bar_content_scroll_up");

  
 
  */


 var main_content_contains_class_value;
 var header_top_value;


 main_content_contains_class_value = main_content_element.classList.contains("main_content_scroll_down");
 header_top_value = window.getComputedStyle(header_element, null).getPropertyValue("top");

 current_position = window.pageYOffset;

 if (main_content_contains_class_value === true && header_top_value === "48px")  {
  main_content_element.classList.remove("main_content_after_scroll");
  main_content_element.classList.add("main_content_to_leave_up");
 }
}



function cycleGallery(cycle_direction, carousel_id_value)  {
  var contains_visible_image;

  var carousel_id_num_value = "";

  carousel_id_num_value = carousel_id_value.substr(carousel_id_value.length - 1);

  var carousel_image_selector_static = "";
  var carousel_caption_selector_static = "";
  var carousel_dot_selector_static = "";
  var carousel_image_visible_selector = "";
  var carousel_caption_visible_selector = "";
  var carousel_dot_visible_selector = "";

  carousel_images_wrapper_selector = "carousel-images-" + carousel_id_num_value;
  carousel_image_selector_static = "usa-prose__hcd-guide__carousel_set_" + carousel_id_num_value;
  carousel_caption_selector_static = "usa-prose__hcd-guide__carousel_caption_set_" + carousel_id_num_value;
  carousel_dot_selector_static = "usa-prose__hcd-guide__carousel_dot_set_" + carousel_id_num_value;
  carousel_caption_selector = "usa-prose__hcd-guide__carousel_caption";
  carousel_dot_selector = "usa-prose__hcd-guide__carousel_dot";

  var carousel_images_elements = {};
  var carousel_caption_elements = {};
  var carousel_dot_elements = {};


  carousel_images_elements = document.getElementsByClassName(carousel_image_selector_static);
  carousel_caption_elements = document.getElementsByClassName(carousel_caption_selector_static);
  carousel_dot_elements = document.getElementsByClassName(carousel_dot_selector_static);

  
  carousel_image_visible_selector = "usa-prose__hcd-guide__carousel_image_visible";
  carousel_caption_visible_selector = "usa-prose__hcd-guide__carousel_caption_visible";
  carousel_dot_visible_selector = "usa-prose__hcd-guide__carousel_dot_visible";

  var i;

  var num_carousel_images;

  num_carousel_images = carousel_images_elements.length;

  var image_which_is_visible;

  image_which_is_visible = 0;

  var num_of_images_in_set;

  num_of_images_in_set = 0;

  for (i = 0; i < num_carousel_images; i++) {
    contains_visible_image = carousel_images_elements[i].classList.contains(carousel_image_visible_selector);
    
    num_of_images_in_set++;

    if (contains_visible_image === true)  {
      image_which_is_visible = i + 1;
    } else {
      contains_visible_image = false;
    }
    
    carousel_images_elements[i].classList.remove(carousel_image_visible_selector);
    carousel_caption_elements[i].classList.remove(carousel_caption_visible_selector);
    carousel_dot_elements[i].classList.remove(carousel_dot_visible_selector);
  }

  var carousel_image_new_visible_selector = "";
  var carousel_caption_new_visible_selector = "";
  var carousel_dot_new_visible_selector = "";
  
  carousel_image_new_visible_selector = "carousel-img-" + carousel_id_num_value + "-";
  carousel_caption_new_visible_selector = "carousel-caption-" + carousel_id_num_value + "-";
  carousel_dot_new_visible_selector = "carousel-dot-" + carousel_id_num_value + "-";

  var image_to_make_visible;

  image_to_make_visible = 0;

console.log("image_which_is_visible = " + image_which_is_visible);
console.log("num_of_images_in_set = " + num_of_images_in_set);
  if (cycle_direction === "previous") {
    if (image_which_is_visible === 1) {
      image_to_make_visible = num_of_images_in_set - 1;      
    } else {
      image_to_make_visible = image_which_is_visible - 1;
    }
  } else {
    if (image_which_is_visible === num_of_images_in_set - 1) {
      image_to_make_visible = 1;      
    } else {
      image_to_make_visible = image_which_is_visible + 1;
    }
  }/* 

  if (image_to_make_visible === 1 && cycle_direction === "next")  {
    carousel_caption_elements[num_of_images_in_set].classList.remove(carousel_caption_visible_selector);
  } */

  carousel_image_new_visible_selector = carousel_image_new_visible_selector + image_to_make_visible.toString();
  carousel_caption_new_visible_selector = carousel_caption_new_visible_selector + image_to_make_visible.toString();
  carousel_dot_new_visible_selector = carousel_dot_new_visible_selector + image_to_make_visible.toString();
  console.log("carousel_dot_new_visible_selector = " + carousel_dot_new_visible_selector);
  var carousel_image_new_visible_element = {};
  var carousel_caption_new_visible_element = {};
  var carousel_dot_new_visible_element = {};

  carousel_image_new_visible_element = document.getElementById(carousel_image_new_visible_selector);
  carousel_caption_new_visible_element = document.getElementById(carousel_caption_new_visible_selector);
  carousel_dot_new_visible_element = document.getElementById(carousel_dot_new_visible_selector);

  carousel_image_new_visible_element.classList.remove(carousel_image_visible_selector);
  carousel_caption_new_visible_element.classList.remove(carousel_caption_visible_selector);
  carousel_dot_new_visible_element.classList.remove(carousel_dot_visible_selector);

  carousel_image_new_visible_element.classList.add(carousel_image_visible_selector);
  carousel_caption_new_visible_element.classList.add(carousel_caption_visible_selector);
  carousel_dot_new_visible_element.classList.add(carousel_dot_visible_selector);
}