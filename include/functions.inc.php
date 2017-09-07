<?php
/**
 * Configure Smarty settings in use globally on all pages, including directory paths, and global $config
 */
function smarty_scaffolding() {
    global $smarty, $config;

    if (!$smarty || !$config) {
        return false;
    }

    // if we're compressing the output load the plugin
    if ($config['compress']) {
        require_once('include/vendor/smarty/plugins/outputfilter.trimwhitespace.php');
    }

    // Initialize Smarty settings from $config
    $smarty->setTemplateDir($config['smarty']['template_dir']);
    $smarty->setCompileDir($config['smarty']['compile_dir']);
    $smarty->setCacheDir($config['smarty']['cache_dir']);
    $smarty->caching = $config['smarty']['cache'];
    $smarty->cache_lifetime = $config['smarty']['cache_lifetime'];
    $smarty->debugging = $config['smarty']['debug'];

    // Initialize Page settings from $config
    $smarty->assign('site_version', $config['site_version']);
    $smarty->assign('css_version', hash_file('sha1', 'css/styles.css'));
    $smarty->assign('js_version', hash_file('sha1', 'js/global.min.js'));
    $smarty->assign('site_domain', $config['site_domain']);
    $smarty->assign('site_root', $config['site_root']);
    $smarty->assign('image_root', complete_url('', 1));
    $smarty->assign('google_analytics_id', $config['google_analytics_id']);
    $smarty->assign('addthis_id', $config['addthis_id']);
    $smarty->assign('hotjar_id', $config['hotjar_id']);
    $smarty->assign('compress', $config['compress']);
    $smarty->assign('google_verification', $config['google_verification']);
    $smarty->assign('bing_verification', $config['bing_verification']);
    $smarty->assign('google_plus_url', $config['google_plus_url']);
}


/**
 * If $config['compress'] is active, output compression notice HTML comment and activate Smarty plugin to trim whitespace.
 */
function smarty_smoosh() {
    global $smarty, $config;

    if ($config['compress']) {

        echo "<!--
    Compressed for performance, not obfuscation.
    Site source released under GNU GPL 2.0 (http://www.gnu.org/licenses/gpl-2.0.html)
    Download: https://github.com/chrislarrycarl/How-To-Hard-Refresh
-->
";

        $smarty->loadFilter('output', 'trimwhitespace');
    }
}


/**
 * Construct complete url based on current settings.
 *
 * @param $path             Path to resource from root
 * @param $domain           Domain to use (0 = use site domain, 1 = use CDN domain)
 *
 * @return string           Complete URL to resource
 */
function complete_url($path, $domain) {
    global $config;

    if ($domain == 0 || $config['cdn_domain'] == '') {
        $base_url = $config['site_domain'] . $config['site_root'];
    }
    else {
        $base_url = $config['cdn_domain'] . $config['site_root'];
    }

    return $base_url . $path;
}
