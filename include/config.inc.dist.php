<?php
/**
 * @package How to Hard Refresh
 * @copyright 2017 ChristopherL (https://github.com/chrislarrycarl)
 * @license http://www.gnu.org/licenses/gpl-2.0.html
 */

$config = array(
    'site_version'              => '0.1',
    'site_domain'               => '',
    'site_root'                 => '',
    'cdn_domain'                => '',


    // 0 = output markup as-is
    // 1 = removes excess whitespace and compresses page output to single line
    'compress'                  =>  1,


    // Google Analytics Property ID, if blank GA JavaScript code will not be enabled.
    // Free sign-up at: https://www.google.com/analytics/
    'google_analytics_id'       =>  '',


    // AddThis Publisher ID, if blank JavaScript sharing code will not be enabled.
    // Free sign-up at: http://www.addthis.com/
    'addthis_id'                =>  '',


    // ID for Hotjar, if blank JavaScript tracking code will not be enabled.
    // Free sign-up at: https://www.hotjar.com/
    'hotjar_id'                 =>  '',


    // Webmaster Tools Verification Codes (Google & Bing)
    'google_verification'       => '',
    'bing_verification'         => '',


    // Google+ URL, used for publisher relationship link tag
    'google_plus_url'           => '',
);


// Smarty config settings
$config['smarty'] = array(
    'cache'                 =>  0,
    'cache_lifetime'        =>  604800,
    'debug'                 =>  0,

    // Use path from this file to templates directory
    // Make sure you create these directories if they don't exist
    'template_dir'          =>  __DIR__.'/templates',
    'compile_dir'           =>  __DIR__.'/templates/compile',
    'cache_dir'             =>  __DIR__.'/templates/cache',
);


// Some PHP installs demand a timezone.
ini_set('date.timezone','America/Detroit');
