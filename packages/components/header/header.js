// Search button toggle

(function() {

    var searchToggle = {
      searchToggleButton: document.querySelector('.nhsuk-header__search-toggle'),
      searchClose: document.querySelector('.nhsuk-search__close'),
      searchContainer: document.querySelector('.nhsuk-header__search-wrap'),
      menuSearchContainer: document.querySelector('.nhsuk-header__content'),

      doToggle: function(e) {
        e.preventDefault();

        if (this.searchToggleButton.hasAttribute("aria-expanded")) {
          this.searchToggleButton.removeAttribute("aria-expanded")
        } else {
          this.searchToggleButton.setAttribute("aria-expanded", "true")
        }

        function toggleClass(ele, class1) {
          var classes = ele.className;
          var regex = new RegExp('\\b' + ' ' + class1 + '\\b');
          var hasOne = classes.match(regex);
          class1 = class1.replace(/\s+/g, '');
          if (hasOne)
            ele.className = classes.replace(regex, '');
          else
            ele.className = classes + ' ' + class1;
        }

        toggleClass(this.searchToggleButton, 'active');
        toggleClass(this.searchContainer, 'js-show');
        toggleClass(this.menuSearchContainer, 'js-show');

      }
    };

    if (searchToggle.searchToggleButton) { searchToggle.searchToggleButton.addEventListener('click', function(e) { searchToggle.doToggle(e); }); }
    if (searchToggle.searchClose) { searchToggle.searchClose.addEventListener('click', function(e) { searchToggle.doToggle(e); }); }

  }());

// Menu button toggle

(function() {

	var menuToggle = {
		menuToggleButton: document.querySelector('.nhsuk-header__menu-toggle'),
		menuClose: document.querySelector('.nhsuk-header__navigation-close'),
  	nav: document.querySelector('.nhsuk-header__navigation'),

		doToggle: function(e) {
			e.preventDefault();

      if (this.menuToggleButton.hasAttribute("aria-expanded")) {
        this.menuToggleButton.removeAttribute("aria-expanded")
      } else {
        this.menuToggleButton.setAttribute("aria-expanded", "true")
      }

      function toggleClass(ele, class1) {
        var classes = ele.className;
        var regex = new RegExp('\\b' + ' ' + class1 + '\\b');
        var hasOne = classes.match(regex);
        class1 = class1.replace(/\s+/g, '');
        if (hasOne)
          ele.className = classes.replace(regex, '');
        else
          ele.className = classes + ' ' + class1;
      }

      toggleClass(this.menuToggleButton, 'active');
      toggleClass(this.nav, 'js-show');

		}
	};

  if (menuToggle.menuToggleButton) { menuToggle.menuToggleButton.addEventListener('click', function(e) { menuToggle.doToggle(e); }); }
  if (menuToggle.menuClose) { menuToggle.menuClose.addEventListener('click', function(e) { menuToggle.doToggle(e); }); }

}());
