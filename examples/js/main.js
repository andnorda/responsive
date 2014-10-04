$(function() {
	$('.tab').click(function(event) {
		var tab = $(event.currentTarget);
		var tabName = tab.data('tab')
		var tabs = tab.closest('.tabs');
		
		tabs.find('.tab').removeClass('active');
		tab.addClass('active');
		
		tabs.find('.panel').addClass('hidden');
		tabs.find('.panel[data-tab~=' + tabName + ']').removeClass('hidden');
	});
});
