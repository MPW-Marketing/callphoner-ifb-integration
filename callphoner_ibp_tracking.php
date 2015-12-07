<?php
/*
Plugin Name: Callphone'r IBP Integration 
Plugin URI:  
Description: Allow Callphone'r button number to be changed by IF By Phone code, and add event tracking
Version:     0.1-alpha
Author:      
Author URI:  
Text Domain: 
Domain Path: 
 */

function callr_ibp_scripts_method() {
	wp_enqueue_script(
		'callribp',
		plugins_url( '/js/jquery.callphoner.ibp.track.js' , __FILE__ ),
		array( 'jquery' ),
		'1.0.0', 
		true
	);
}

add_action( 'wp_enqueue_scripts', 'callr_ibp_scripts_method' );