jQuery(document).ready(function () {
	var hide_tabname = function(duration) {
		if(jQuery('#yotpo_settings_form .yotpo-widget-location').val() == 'tab') {
			jQuery('#yotpo_settings_form .yotpo-widget-tab-name').show(duration);
		}
		else {
			jQuery('#yotpo_settings_form .yotpo-widget-tab-name').hide(duration);
		}	
	};
	
	var hide_other_explanation = function(duration) {
		if(jQuery('#yotpo_settings_form .yotpo-widget-location').val() == 'other') {
			jQuery('#yotpo_settings_form .yotpo-widget-location-other-explain').show(duration);
		}
		else {
			jQuery('#yotpo_settings_form .yotpo-widget-location-other-explain').hide(duration);
		}
	};
	
	hide_tabname(0);
	hide_other_explanation(0);
	jQuery('#yotpo_settings_form .yotpo-widget-location').change(function() {
		hide_tabname(1000);
		hide_other_explanation(1000);
	});
	
	jQuery('#yotpo-export-reviews').click(function() {
		document.getElementById('export_reviews_submit').click();    
	});

	monitorDynamicElements();
});

function monitorDynamicElements() {
	const yotpoWidgetVersion = jQuery('#yotpo-widget-version');
	const yotpoV3Enablers = jQuery('#yotpo-v3-enablers');
	const yotpoV2Enablers = jQuery('#yotpo-v2-enablers');
	const yotpoQNAWidgetTabName = jQuery('#yotpo_settings_form .yotpo-qna-widget-tab-name');

	function changeElementVisibility(widgetSyncRow, visible) {
		visible ? widgetSyncRow.show() : widgetSyncRow.hide();
	}

	function modifyFormPositionsVisibility() {
		changeElementVisibility(yotpoV3Enablers, yotpoWidgetVersion.val() === 'v3');
		changeElementVisibility(yotpoV2Enablers, yotpoWidgetVersion.val() === 'v2');
		yotpoWidgetVersion.val() === 'v3'
			? yotpoQNAWidgetTabName.removeClass('yotpo-qna-widget-tab-name--hidden')
			: yotpoQNAWidgetTabName.addClass('yotpo-qna-widget-tab-name--hidden');
	}

	function monitorV3WidgetsCheckbox() {
		modifyFormPositionsVisibility();
		yotpoWidgetVersion.on('change', () => modifyFormPositionsVisibility());
	}

	monitorV3WidgetsCheckbox();
}
