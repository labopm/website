window.addEventListener("load", 
  function () {
    // String variables which will hold the CSS selectors which refer to all HTML content, the footer, 
    // and the side navigation, and the main block of content are initialized.
    var html_selector = "";
    var footer_selector = "";
    var side_navigation_selector = "";
    var main_content_selector = "";

    // The CSS selectors which refer to the main block of content, the footer, the side navigation, 
    // and the main block of content are defined and passed on. 
    // defined and passed on.
    html_selector = "html";
    footer_selector = "footer";
    side_navigation_selector = "usa-layout-docs__sticky";
    main_content_selector = "main-content__hcd-guide";

    var html_element = {};
    var footer_element = {};
    var side_navigation_element = {};
    var main_content_element = {};

    html_element = document.getElementsByTagName(html_selector)[0];
    footer_element = document.getElementsByTagName(footer_selector)[0];
    side_navigation_element = document.getElementById(side_navigation_selector);
    main_content_element = document.getElementsByClassName(main_content_selector)[0];

    // Number variables which will hold the height of all the HTML content, the footer, and the side 
    // navigation are initialized.
    var html_height;
    var footer_height;
    var side_navigation_height;
    var side_navigation_top;

    // The height of the HTML elements the above variables refer to are passed on.
    html_height = parseInt(window.getComputedStyle(html_element, null).getPropertyValue("height"));
    footer_height = parseInt(window.getComputedStyle(footer_element, null).getPropertyValue("height"));
    side_navigation_height = parseInt(window.getComputedStyle(side_navigation_element, null).getPropertyValue("height"));
    side_navigation_top = parseInt(window.getComputedStyle(side_navigation_element, null).getPropertyValue("top"));

    // A Number variable which will hold the bottom padding of the main block of content is initialized.
    var main_content_padding_value;
    
    main_content_padding_value = parseInt(window.getComputedStyle(main_content_element, null).getPropertyValue('padding-bottom'));

    // A Number variable which will hold the sum of the heights of the footer, side navigation 
    // and the value of the padding at the bottom of the main block of content is intialized.
    var scroll_value;

    // The sum of the heights of the footer and side navigation combined with the value 
    // of the padding along the bottom of the main block of content is subtracted 
    // from the height of all of the HTML content. That value is passed on.
    scroll_value = html_height - footer_height - side_navigation_height - side_navigation_top - main_content_padding_value;

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


    // A variable which will hold a number which serves as a threshold, which when reached as a 
    // visitor scrolls up and down the page, will either prevent the side navigation from scrolling, 
    // or allow it to scroll again is initialized.
    var stop_side_navigation_scrolling_value;

    // The threshold which when reached by a visitor scrolling down a webpage is calcluated by taking the CSS 
    // value, 'top', of the footer and subtracting the height of the footer and the amount of 'padding' 
    // at the bottom of the main block of content is passed on.
    stop_side_navigation_scrolling_value = current_footer_top_value - (footer_height_value + main_content_padding_bottom_value);


    // A variable is initialized which will hold a number which sets the threshold when when reached triggers the IF/ELSE 
    // statement to stop the side navigation from scrolling.
    var side_navigation_threshold_value;

    // The number which sets the threshold for the scrolling of the side navigation is passed on.
    side_navigation_threshold_value = 90;

    // A variable is initialized which will hold the vertical position within a webpage 
    // a visitor has scrolled to.
    var cuurent_position;
       
    // A variable is initialized which will hold the most recent vertical position 
    // a visitor has scrolled to.
    var previous_position;
    
    // The initial position of the webpage is passed on.
    previous_position = 0;
    current_position = 0;    

    var is_hero_large;

    var num_class_in_hero;

    // 'onScroll' Event which animates the header and side navigation as a visitor moves up and down 
    // the webpage.
    window.addEventListener("scroll", 
      function (event) {   
        // The vertical position within the webpage which a visitor has scrolled to is passed on.
        current_position = window.pageYOffset;

        is_hero_large = isHeroLarge();
        num_class_in_hero = numClassInHero();
        is_mobile_menu_visible = isMobileMenuVisible();

        // IF/ELSE statement which folds the blue 'search' bar if the visitor is scrolling down.
        // Otherwise, the blue bar is made visible. Also, this statement stops the side navigation 
        // from scrolling if the visitor has reached the bottom of the webpage.
        if (current_position > previous_position && (is_hero_large === true || num_class_in_hero === 2) && is_mobile_menu_visible === false) {
          shrinkSearchBar();
        } else if (current_position < previous_position && is_hero_large === false) {
          expandSearchBar();
        }

        var stop_side_navigation_values = [];

        stop_side_navigation_values = [
          current_position, 
          stop_side_navigation_scrolling_value, 
          side_navigation_threshold_value, 
          scroll_value
        ];

        stopSideNavigationScrolling(stop_side_navigation_values);

        previous_position = current_position;

        
      }
    );

    var search_mobile_link_selector = "";

    search_mobile_link_selector = "lab-hero--hcd-guide__guide_menu_search_link";

    var search_mobile_link_element = {};

    search_mobile_link_element = document.getElementsByClassName(search_mobile_link_selector)[0];

    search_mobile_link_element.addEventListener('click', 
      function () {
        showMobileSearchForm();
      }
    );

    var guide_menu_link_selector = "";
    
    guide_menu_link_selector = "lab-hero--hcd-guide__guide_menu_link";

    guide_menu_link_element = {};

    guide_menu_link_element = document.getElementsByClassName(guide_menu_link_selector)[0];

    guide_menu_link_element.addEventListener('click', 
      function () {
        showGuideMenu();
      }
    );

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
  }
);



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
    guide_menu_element.style.display = "none";

    var guide_menu_nav_selector = "";

    guide_menu_nav_selector = "lab-hero--hcd-guide__guide_menu_content";

    var guide_menu_nav_element = {};

    guide_menu_nav_element = document.getElementsByClassName(guide_menu_nav_selector)[0];

    guide_menu_nav_element.style.display = "block";
  } 
} 



function hideGuideMenu()  {
  var guide_menu_selector = "";

  guide_menu_selector = "lab-hero--hcd-guide__guide_menu";
  
  var guide_menu_element = {};

  guide_menu_element = document.getElementsByClassName(guide_menu_selector)[0];

  var guide_menu_display_value;

  guide_menu_display_value = window.getComputedStyle(guide_menu_element).getPropertyValue("display");

  if (guide_menu_display_value === "none")  {
    var guide_menu_nav_selector = "";

    guide_menu_nav_selector = "lab-hero--hcd-guide__guide_menu_content";

    var guide_menu_nav_element = {};

    guide_menu_nav_element = document.getElementsByClassName(guide_menu_nav_selector)[0];

    guide_menu_nav_element.style.display = "none";

    guide_menu_element.style.display = "block";
  }

  var main_content_selector = "";

  main_content_selector = "main-content__hcd-guide";

  var main_content_element = {};

  main_content_element = document.getElementsByClassName(main_content_selector)[0];
  
  var main_content_contains_class_value;

  main_content_contains_class_value = main_content_element.classList.contains("main-content__hcd-guide");

  if (main_content_contains_class_value === false)  {
    main_content_element.classList.add("main-content__hcd-guide");
  }


}


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

  var guide_menu_title_selector = "";

  guide_menu_title_selector = "lab-hero--hcd-guide__guide_menu_title";

  var guide_menu_title_element = {};

  guide_menu_title_element = document.getElementsByClassName(guide_menu_title_selector)[0];

  var search_mobile_field_selector = "";

  search_mobile_field_selector = "lab-hero--hcd-guide__guide_menu_search_field";

  var search_mobile_field_element = {};
  
  search_mobile_field_element = document.getElementsByClassName(search_mobile_field_selector)[0];


  search_mobile_link_element.classList.add("search_mobile_link_hide");
  search_mobile_form_element.classList.add("search_form_visible");
  search_mobile_field_element.classList.add("search_field_visible");

  guide_menu_title_element.classList.add("guide_menu_title_not_visible");
}


function isMobileMenuVisible()  {
  var mobile_menu_selector = "";

  mobile_menu_selector = "lab-hero--hcd-guide__guide_menu_content";

  var mobile_menu_element = {};

  mobile_menu_element = document.getElementsByClassName(mobile_menu_selector)[0];

  var mobile_menu_display_value = "";

  mobile_menu_display_value = mobile_menu_element.style.display;
  
  var is_mobile_menu_visible;

  if (mobile_menu_display_value === "block")  {
    is_mobile_menu_visible = true;
  } else {
    is_mobile_menu_visible = false;
  }

  return is_mobile_menu_visible;
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



function isSideNavigationFixed()  {
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

  if (side_navigation_position_value === "fixed") {
    is_side_navigation_fixed = true;
  } else {
    is_side_navigation_fixed = false;
  }

  return is_side_navigation_fixed;
}



function stopSideNavigationScrolling(stop_side_navigation_values)  {
  var current_position;
  var stop_side_navigation_scrolling_value;
  var side_navigation_threshold_value;
  var scroll_value;

  current_position = stop_side_navigation_values[0];
  stop_side_navigation_scrolling_value = stop_side_navigation_values[1];
  side_navigation_threshold_value = stop_side_navigation_values[2];
  scroll_value = stop_side_navigation_values[3];

  var is_side_navigation_fixed;

  is_side_navigation_fixed = isSideNavigationFixed();

  // A String which will hold the CSS selector for the side navigation is initialized.
  var side_navigation_selector = "";

  // The CSS selector referring to the side navigation is passed on.
  side_navigation_selector = "usa-layout-docs__sticky";

  // An Object which will hold the HTML DOM element which refers to the side navigation is initialized.
  var side_navigation_element = {};

  // The HTML DOM element which refers to the side navigation is passed on.
  side_navigation_element = document.getElementById(side_navigation_selector);

  var side_navigation_offset_left_value;

  side_navigation_offset_left_value = 16;

  var side_navigation_left_value;

  side_navigation_left_value = side_navigation_element.offsetLeft;

  if (current_position > (stop_side_navigation_scrolling_value - side_navigation_threshold_value) && is_side_navigation_fixed === true) {
    side_navigation_element.classList.remove("side_navigation_start");
    side_navigation_element.classList.add("side_navigation_stop");

    scroll_value = scroll_value + "px";
    
    side_navigation_left_value = side_navigation_left_value + side_navigation_offset_left_value;
    side_navigation_left_value = side_navigation_left_value + "px";

    side_navigation_element.style.top = scroll_value;
    side_navigation_element.style.left = side_navigation_left_value;
  } else if (current_position < stop_side_navigation_scrolling_value && is_side_navigation_fixed === false) {
    side_navigation_left_value = side_navigation_left_value - side_navigation_offset_left_value;
    side_navigation_left_value = side_navigation_left_value + "px";


    side_navigation_element.classList.remove("side_navigation_stop");
    side_navigation_element.classList.add("side_navigation_start");
    
    side_navigation_element.style.left = side_navigation_left_value;
  }
}



function shrinkSearchBar()  {
  // A String which will hold the CSS selector which refers to the links and input field 
  // held within the 'Search' bar is initialized.
  var search_bar_content_selector = "";

  // The value of the CSS selector which refers to the content of the 'Search' bar 
  // is passed on.
  search_bar_content_selector = "lab-hero--hcd-guide__body";

  // An Object which will hold the HTML DOM object for the 'Search' bar is initalized.
  var search_bar_content_element = {};

  // The HTML DOM object which refers to the 'Search' bar is passed on.
  search_bar_content_element = document.getElementsByClassName(search_bar_content_selector)[0];
  
  // The opacity of the content held within the search bar is set to zero 
  // and the search bar is removed from visibility.  
  search_bar_content_element.classList.remove("search_bar_scroll_up");
  search_bar_content_element.classList.add("search_bar_scroll_down");

  /*  // A String is initialized which will contain the selector which refers to the 
  // blue bar which appears as a visitor scrolls down.
  var blue_bar_selector = "";

  // The CSS selector which refers to the HTML element containing the blue bar 
  // is passed on.
  blue_bar_selector = "lab-hero__nav_bar_visible";

    // An Object variable which will hold the HTML DOM object which refers to the 
  // blue bar which appears as a visitor scrolls down is initialized.
  var blue_bar_element = {};

  // The HTML DOM object which refers to the blue bar is passed on.
  blue_bar_element = document.getElementsByClassName(blue_bar_selector)[0];

  // The blue bar is made visible.
  blue_bar_element.classList.remove("search_bar_scroll_up");
  blue_bar_element.classList.add("search_bar_scroll_down");
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
    if (window_width <= 414)  {
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
  var search_bar_content_selector = "";

  // The value of the CSS selector which refers to the content of the 'Search' bar 
  // is passed on.
  search_bar_content_selector = "lab-hero--hcd-guide__body";

  // An Object which will hold the HTML DOM element which refers to the 'Search' bar 
  // is initialized.
  var search_bar_content_element = {};

  // The HTML DOM element which the above variable refers to is passed on.
  search_bar_content_element = document.getElementsByClassName(search_bar_content_selector)[0];
 
  // CSS values which makes the content of the 'Search' bar visible are passed on.
  search_bar_content_element.classList.remove("search_bar_not_visible");
  search_bar_content_element.classList.add("search_bar_visible");

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

  
  // A Number which will hold the width of the browser window is initialized.
  var window_width;

  // The width of the browser window is passed on.
  window_width = window.innerWidth;

  if (window_width <= 414)  {
    gray_banner_element.classList.remove("gray_banner_scroll_down");
    gray_banner_element.classList.add("gray_banner_scroll_up");

    header_element.classList.remove("header_scroll_down");
    header_element.classList.add("header_scroll_up");
  }

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
  
  search_bar_content_element.classList.remove("search_bar_scroll_down");
  search_bar_content_element.classList.add("search_bar_scroll_up");
  
  hero_element.classList.remove("hero_scroll_down");
  hero_element.classList.add("hero_scroll_up");
}



function cycleImages(cycle_direction, carousel_id_value)  {
  var contains_visible_image;

  var carousel_id_num_value = "";

  carousel_id_num_value = slice(carousel_id_value, (carousel_id_value.length - 1));
  
  var carousel_images_wrapper_selector = "";

  carousel_images_wrapper_selector = "carousel-images-" + carousel_id_num_value;

  var carousel_images_wrapper_element = {};

  carousel_images_wrapper_element = document.getElementById(carousel_images_wrapper_selector);

  var carousel_image_selector_static = "";

  carousel_image_selector_static = "usa-prose__hcd-guide__carousel_image";

  var carousel_images_selector = "";

  caroursel_images_selector = carousel_images_wrapper_selector + " ." + carousel_image_selector_static;

  var carousel_images_elements = {};

  carousel_images_elements = document.getElementsByClassName(carousel_images_selector);
  
  var i;

  var image_which_is_visible;

  for (i = 0; i < carousel_images_elements.length; i++) {
    contains_visible_image = carousel_images_elements[i].classList.contains(carousel_image_selector_static);

    if (contains_visible_image === true)  {
      image_which_is_visible = i;
    }
  }

  var carousel_image_visible_selector = "usa-prose__hcd-guide__carousel_image_visible";

  carousel_images_elements.classList.remove(carousel_image_visible_selector);

  var carousel_image_new_visible_selector = carousel_id_value + "-";

  var num_carousel_images;

  num_carousel_images = carousel_images_elements.length;

  var image_to_make_visible;

  if (cycle_direction === "previous") {
    if (image_which_is_visible !== 0) {
      image_to_make_visible = image_which_is_visible - 1;
      
    } else {
      image_to_make_visible = num_carousel_images;
    }

    carousel_image_new_visible_selector = carousel_image_new_visible_selector + image_to_make_visible.toString();
  } else {
    if (image_which_is_visible !== (num_carousel_images - 1)) {
      image_to_make_visible = image_which_is_visible + 1;
      
    } else {
      image_to_make_visible = 1;
    }

    carousel_image_new_visible_selector = carousel_image_new_visible_selector + image_which_is_visible.toString();
  }
}