/* WPtouch Minimal Theme JS File */
/* Public functions called here reside in base.js, found in the Foundation theme */

function doMinimalReady() {
	minimal_SliderMods();
	minimal_MoveFooterDiv();
	minimal_BindTappableLinks();
	minimal_SearchToggle();
	minimal_WebAppMenu();
	minimal_VideoUnwrap();
	minimal_HandleSearch();
}

// Spice up the appearance of Foundation's Featured Slider
function minimal_SliderMods(){
	jQuery( '.swipe-wrap a' ).each( function(){
		imgCloned = jQuery( this ).find( 'img' ).clone();
		jQuery( this ).append( imgCloned );
		imgCloned.addClass( 'clone' );
		jQuery( this ).find( 'p' ).not( 'p.featured-date' ).addClass( 'heading-font' );
	});
}

// CSS animated slideout
function minimal_SearchToggle(){
	jQuery( '#search-toggle' ).on( 'click', function(){
		jQuery( '#search-dropper' ).toggleClass( 'toggled' );
	});
}

// Move the footer below the switch
function minimal_MoveFooterDiv(){
	if ( jQuery( '#switch' ).length ) {
		var footerDiv = jQuery( '.footer' ).detach();
		jQuery( '#switch' ).after( footerDiv );
	}
}

// Add 'touched' class to these elements when they're actually touched (100ms delay) for a better UI experience (tappable module)
function minimal_BindTappableLinks(){
	// Drop down menu items
	jQuery( 'li.menu-item' ).each( function(){
		jQuery( this ).addClass( 'tappable' );
	});
}

// In Web-App Mode, dynamically ensure that the Menu height is correct and scrollable
function minimal_WebAppMenu(){
	if ( navigator.standalone ) {
		jQuery( window ).resize( function() { 
			var windowHeight = jQuery( window ).height() - 74;
			if ( jQuery( 'body.web-app-mode.ios7.smartphone.portrait' ).length ) {
				jQuery( '#menu' ).css( 'max-height', windowHeight );
			}
			if ( jQuery( 'body.web-app-mode.ios7.smartphone.landscape' ).length ) {
				jQuery( '#menu' ).css( 'max-height', windowHeight );
			}
		}).resize();
	}
}

// Unwrap video & photo from p tags, allows full-width display
function minimal_VideoUnwrap(){
var pTags = jQuery( '.fluid-width-video-wrapper, iframe, video' );
if ( pTags.parent().is( 'p' ) ) {
	pTags.unwrap();
  }
}

function minimal_HandleSearch() {
	if ( jQuery( '.search' ).length ) {
		jQuery( '.search-select' ).change( function( e ) {
			var sectionName = ( '#' + jQuery( this ).find( ':selected' ).attr( 'data-section' ) + '-results' );
			jQuery( '#content > div:not(.post-page-head-area)' ).hide();
			jQuery( sectionName ).show();
			e.preventDefault();		
		}).trigger( 'change' );
	}
}

jQuery( document ).ready( function() { doMinimalReady(); } );
