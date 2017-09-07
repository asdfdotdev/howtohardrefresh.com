{*
/**
 * @package How to Hard Refresh
 * @copyright 2017 ChristopherL (https://github.com/chrislarrycarl)
 * @license http://www.gnu.org/licenses/gpl-2.0.html
 */
*}
<!doctype html>
<html lang="en-US">
<head>

    {include file='includes/meta.tpl'}

</head>
<body>

    {include file='includes/header.tpl'}

    {foreach key=browser item=platforms from=$browsers}
        <section class="browser-{$browser|lower} grid browser-instructions">

            <nav class="nav-os grid--column-12">
                <a href="#" class="icon-mac{if !isset($platforms.mac)} hidden{/if}" data-os="mac" data-event="os-mac"></a>
                <a href="#" class="icon-linux{if !isset($platforms.linux)} hidden{/if}" data-os="linux" data-event="os-linux"></a>
                <a href="#" class="icon-windows{if !isset($platforms.windows)} hidden{/if}" data-os="windows" data-event="os-windows"></a>
            </nav>

            {foreach key=os item=instructions from=$platforms}
                <div class="os-{$os|lower} grid os-instructions">

                    {if isset($instructions.keyboard)}
                        <div class="grid--column-5">{$instructions.keyboard}</div>
                    {/if}

                    {if isset($instructions.keyboard) && isset($instructions.mouse)}
                        <div class="grid--column-2">or</div>
                    {/if}

                    {if isset($instructions.mouse)}
                        <div class="grid--column-5">{$instructions.mouse}</div>
                    {/if}
                </div>
            {/foreach}

        </section>
    {/foreach}

    {include file='includes/footer.tpl'}

    {include file='includes/scripts.tpl'}

</body>
</html>
