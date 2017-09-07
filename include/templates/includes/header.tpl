<header class="grid">
    <div class="grid--column-12">
        <h1><span>How to hard refresh:</span> <div class="on-browser"></div> on <div class="on-os"></div></h1>
    </div>

    <nav class="nav-browser grid--column-12">
        {foreach $browsers as $browser}
            <a href="#" class="icon-{$browser@key|lower}" data-browser="{$browser@key|lower}" data-event="browser-{$browser@key|lower}"></a>
        {/foreach}
    </nav>
</header>
