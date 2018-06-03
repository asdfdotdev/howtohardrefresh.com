<?php
/**
 * @package How to Hard Refresh
 * @copyright 2017 ChristopherL (https://github.com/chrislarrycarl)
 * @license http://www.gnu.org/licenses/gpl-2.0.html
 */

require_once('include/config.inc.php');
require_once('include/functions.inc.php');
require_once('include/vendor/smarty/Smarty.class.php');

$smarty = new Smarty();
$cache_id = 'homepage';

if (!$smarty->isCached('base.tpl', $cache_id)) {
    smarty_scaffolding($smarty, $config);

    // Create Meta & Page Settings
    $smarty->assign('page_title', 'Hard Refresh any Web Browser | HowToHardRefresh.com');
    $smarty->assign('page_desc', 'If you need to bypass your web browser cache use these refresh shortcuts to hard refresh your browser and see your latest page updates.');
    $smarty->assign('page_url', '/');

    $smarty->assign('browsers', array(
        'chrome' => array(
            'mac' => array(
                'keyboard' => '<kbd>&#8984;</kbd> + <kbd>shift</kbd> + <kbd>R</kbd>',
                'mouse' => '<kbd>shift</kbd> + click reload',
            ),
            'windows' => array(
                'keyboard' => '<kbd>ctrl</kbd> + <kbd>F5</kbd>',
                'mouse' => '<kbd>ctrl</kbd> + click reload',
            ),
            'linux' => array(
                'keyboard' => '<kbd>ctrl</kbd> + <kbd>F5</kbd>',
                'mouse' => '<kbd>ctrl</kbd> + click reload',
            ),
        ),
        'firefox' => array(
            'mac' => array(
                'keyboard' => '<kbd>&#8984;</kbd> + <kbd>shift</kbd> + <kbd>R</kbd>',
                'mouse' => '<kbd>shift</kbd> + click reload',
            ),
            'windows' => array(
                'keyboard' => '<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>R</kbd>',
                'mouse' => '<kbd>shift</kbd> + click reload',
            ),
            'linux' => array(
                'keyboard' => '<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>R</kbd>',
                'mouse' => '<kbd>shift</kbd> + click reload',
            ),
        ),
        'safari' => array(
            'mac' => array(
                'keyboard' => '<kbd>&#8984;</kbd> + <kbd>option</kbd> + <kbd>E</kbd><br>(Clears Browser Cache)',
                'mouse' => '<kbd>shift</kbd> + click reload',
            ),
        ),
        'opera' => array(
            'mac' => array(
                'keyboard' => '<kbd>&#8984;</kbd> + <kbd>shift</kbd> + <kbd>R</kbd>',
                'mouse' => '<kbd>shift</kbd> + click reload',
            ),
            'windows' => array(
                'keyboard' => '<kbd>ctrl</kbd> + <kbd>F5</kbd>',
                'mouse' => '<kbd>ctrl</kbd> + click reload',
            ),
            'linux' => array(
                'keyboard' => '<kbd>ctrl</kbd> + <kbd>F5</kbd>',
                'mouse' => '<kbd>ctrl</kbd> + click reload',
            ),
        ),
        'microsoft-edge' => array(
            'windows' => array(
                'keyboard' => '<kbd>ctrl</kbd> + <kbd>F5</kbd>',
                'mouse' => '<kbd>ctrl</kbd> + click refresh',
            ),
        ),
        'internet-explorer' => array(
            'windows' => array(
                'keyboard' => '<kbd>ctrl</kbd> + <kbd>f5</kbd>',
                'mouse' => '<kbd>ctrl</kbd> + click refresh',
            ),
        )
    ));

    smarty_smoosh();
}


// Output the page
$smarty->display('base.tpl', $cache_id);
