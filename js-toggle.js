(function () {
  'use strict';
	var internalId = 0;
	var togglesMap = {};
	var targetsMap = {};

	function $ (selector, context) {
		return Array.prototype.slice.call(
			(context || document).querySelectorAll(selector)
		);
	}
	
	function getClosestToggle (element) {
		if (element.closest) {
			return element.closest('[data-toggle]');
		}

		while (element) {
			if (element.nodeType === 1 && element.hasAttribute('data-toggle')) {
				return element;
			}

			element = element.parentNode;
		}

		return null;
	}
	
	function handleToggle (toggle) {
		var target = toggle.getAttribute('data-toggle'),
			className = toggle.getAttribute('data-class') || "toggle";
	
		console.log(target);
		
		document.querySelector(target).classList.toggle('js-' + className);
		document.querySelector(target).classList.toggle(className);

					
		var isExpanded = document.querySelector(target).classList.contains(toggle.getAttribute('data-class'));

		
		toggle.setAttribute('data-toggle-expanded', isExpanded);
		
	}

	var initJsToggle = function (context) {
		togglesMap = $('[data-toggle]', context).reduce(function (acc, toggle) {
			var selector = toggle.getAttribute('data-toggle'),
				isExpanded = document.querySelector(selector).classList.contains(toggle.getAttribute('data-class'));

			acc[selector] = acc[selector] || [];
			acc[selector].push(toggle);
			
			toggle.setAttribute('data-toggle-expanded', isExpanded);
			
			return acc;
		}, togglesMap);
	};


	document.addEventListener('DOMContentLoaded', function () {
		initJsToggle();
	});

	document.addEventListener('click', function (event) {
		var toggle = getClosestToggle(event.target);
		handleToggle(toggle);
	});
	
	
	document.addEventListener('keyup', function (event) {
		if (event.which === 13 || event.which === 32) {
			var toggle = getClosestToggle(event.target);
			if (toggle && toggle.getAttribute('role') === 'button') {
				handleToggle(toggle);
			}
		}
	});


	window && (window.jsToggle = initJsToggle);
	
})();
