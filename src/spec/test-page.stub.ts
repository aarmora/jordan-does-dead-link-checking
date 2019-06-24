export const testHTMLPage = `
<!doctype html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">

    <title>Jordan Plays Pool (multi-threading with a pool queue) &#8211; JavaScript Web Scraping Guy</title>
<link rel='dns-prefetch' href='//checkout.stripe.com' />
<link rel='dns-prefetch' href='//javascriptwebscrapingguy.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="JavaScript Web Scraping Guy &raquo; Feed" href="https://javascriptwebscrapingguy.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="JavaScript Web Scraping Guy &raquo; Comments Feed" href="https://javascriptwebscrapingguy.com/comments/feed/" />
<link rel="alternate" type="application/rss+xml" title="JavaScript Web Scraping Guy &raquo; Jordan Plays Pool (multi-threading with a pool queue) Comments Feed" href="https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/feed/" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/javascriptwebscrapingguy.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.0.4"}};
			!function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55358,56760,9792,65039],[55358,56760,8203,9792,65039]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
<link rel='stylesheet' id='wp-block-library-css'  href='https://javascriptwebscrapingguy.com/wp-includes/css/dist/block-library/style.min.css?ver=5.0.4' type='text/css' media='all' />
<link rel='stylesheet' id='google-font-roboto-css'  href='https://fonts.googleapis.com/css?family=Roboto' type='text/css' media='all' />
<link rel='stylesheet' id='stripe-checkout-button-css'  href='https://checkout.stripe.com/v3/checkout/button.css' type='text/css' media='all' />
<link rel='stylesheet' id='simpay-public-css'  href='https://javascriptwebscrapingguy.com/wp-content/plugins/stripe/assets/css/public.min.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='gist-style-css'  href='https://javascriptwebscrapingguy.com/wp-content/themes/gist/style.css?ver=5.0.4' type='text/css' media='all' />
<style id='gist-style-inline-css' type='text/css'>
body { font-family: Merriweather; }body { font-size: 16px; }body { line-height : 2; }.breadcrumbs span.breadcrumb, .nav-links a, .search-form input[type=submit], #toTop, .candid-pagination .page-numbers.current, .candid-pagination .page-numbers:hover  { background : #d6002a; }.search-form input.search-field, .sticky .p-15, .related-post-entries li, .candid-pagination .page-numbers { border-color : #d6002a; }.error-404 h1, .no-results h1, a, a:visited, .related-post-entries .title:hover, .entry-title a:hover, .featured-post-title a:hover, .entry-meta.entry-category a,.widget li a:hover, .widget h1 a:hover, .widget h2 a:hover, .widget h3 a:hover, .site-title a, .site-title a:visited, .main-navigation ul li a:hover { color : #d6002a; }.btn-primary { border: 2px solid #d6002a;}
</style>
<link rel='stylesheet' id='blog-new-style-css'  href='https://javascriptwebscrapingguy.com/wp-content/themes/blog-new/style.css?ver=5.0.4' type='text/css' media='all' />
<link rel='stylesheet' id='blog-new-google-fonts-css'  href='//fonts.googleapis.com/css?family=Oswald&#038;ver=5.0.4' type='text/css' media='all' />
<link rel='stylesheet' id='gist-googleapis-css'  href='//fonts.googleapis.com/css?family=Merriweather&#038;ver=5.0.4' type='text/css' media='all' />
<link rel='stylesheet' id='gist-google-fonts-css'  href='//fonts.googleapis.com/css?family=Oswald&#038;ver=5.0.4' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-css'  href='https://javascriptwebscrapingguy.com/wp-content/themes/gist/candidthemes/assets/framework/Font-Awesome/css/font-awesome.min.css?ver=4.7.0' type='text/css' media='all' />
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
<link rel='https://api.w.org/' href='https://javascriptwebscrapingguy.com/wp-json/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://javascriptwebscrapingguy.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://javascriptwebscrapingguy.com/wp-includes/wlwmanifest.xml" /> 
<link rel='prev' title='Jordan Is Speed (speeding up scraping with multiple threads)' href='https://javascriptwebscrapingguy.com/jordan-is-speed-speeding-up-scraping-with-multiple-threads/' />
<link rel='next' title='Jordan Takes Advantage of Multithreaded I/O in Nodejs' href='https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/' />
<meta name="generator" content="WordPress 5.0.4" />
<link rel="canonical" href="https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/" />
<link rel='shortlink' href='https://javascriptwebscrapingguy.com/?p=1212' />
<link rel="alternate" type="application/json+oembed" href="https://javascriptwebscrapingguy.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fjavascriptwebscrapingguy.com%2Fjordan-plays-pool-multi-threading-with-a-pool-queue%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://javascriptwebscrapingguy.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fjavascriptwebscrapingguy.com%2Fjordan-plays-pool-multi-threading-with-a-pool-queue%2F&#038;format=xml" />
<meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="pingback" href="https://javascriptwebscrapingguy.com/xmlrpc.php">
<!-- BEGIN ExactMetrics v5.3.8 Universal Analytics - https://exactmetrics.com/ -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-46030946-13', 'auto');
  ga('send', 'pageview');
</script>
<!-- END ExactMetrics Universal Analytics -->
</head>

<body class="post-template-default single single-post postid-1212 single-format-standard ct-sticky-sidebar right-sidebar">
    <div id="page" class="site container-main">
        <a class="skip-link screen-reader-text" href="#content">Skip to content</a>

        <header id="masthead" class="site-header" role="banner">
            
            <nav id="site-navigation" class="main-navigation" role="navigation">
                <div id="navbar">
                    <div class="container-inner">
                        <div id="mainnav-wrap">
                            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><i
                                class="fa fa-bars"></i></button>
                                <div class="menu-top-nav-container"><ul id="primary-menu" class="menu"><li id="menu-item-1046" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-1046"><a href="https://javascriptwebscrapingguy.com">Home</a></li>
<li id="menu-item-1045" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1045"><a href="https://javascriptwebscrapingguy.com/category/amazon-posts/">Amazon Tools</a></li>
<li id="menu-item-1242" class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-1242"><a href="https://javascriptwebscrapingguy.com/category/link-checking/">Link Checking</a></li>
</ul></div>                            </div>
                        </div>
                    </div>
                </nav><!-- #site-navigation -->

                <div class="site-branding">
                    <div class="container-inner">
                                                        <p class="site-title"><a href="https://javascriptwebscrapingguy.com/"
                                   rel="home">JavaScript Web Scraping Guy</a></p>
                                                                   <p class="site-description">Jordan&#039;s Adventures Through Web Automation</p>
                                                        </div>
                    </div><!-- .site-branding -->


                    <!-- .container-inner -->
                </header>
                <!-- #masthead -->
                <div class="header-image-block">
                                    </div>

                <div id="content" class="site-content container-inner p-t-15">
	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<div class="breadcrumbs">
                <div class='breadcrumbs init-animate clearfix'><span class='breadcrumb'>You Are Here</span><div id='gist-breadcrumbs' class='clearfix'><div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs" itemprop="breadcrumb"><ul class="trail-items" itemscope itemtype="http://schema.org/BreadcrumbList"><meta name="numberOfItems" content="3" /><meta name="itemListOrder" content="Ascending" /><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="trail-item trail-begin"><a href="https://javascriptwebscrapingguy.com" rel="home"><span itemprop="name">Home</span></a><meta itemprop="position" content="1" /></li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="trail-item"><a href="https://javascriptwebscrapingguy.com/category/link-checking/"><span itemprop="name">Link Checking</span></a><meta itemprop="position" content="2" /></li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="trail-item trail-end"><span itemprop="name">Jordan Plays Pool (multi-threading with a pool queue)</span><meta itemprop="position" content="3" /></li></ul></div></div></div>            </div>
		
<article id="post-1212" class="post-1212 post type-post status-publish format-standard has-post-thumbnail hentry category-link-checking tag-javascript tag-link-checking tag-multi-thread tag-pool tag-typescript"">
    <div class="p-15 full-image">
        <div class="ct-featured-image">
            
            <div class="post-thumbnail">
                <img width="1170" height="704" src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/billiards-282418_1280-1170x704.jpg" class="attachment-gist-large-thumb size-gist-large-thumb wp-post-image" alt="Queue" srcset="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/billiards-282418_1280-1170x704.jpg 1170w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/billiards-282418_1280-300x180.jpg 300w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/billiards-282418_1280-768x462.jpg 768w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/billiards-282418_1280-1024x616.jpg 1024w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/billiards-282418_1280.jpg 1280w" sizes="(max-width: 1170px) 100vw, 1170px" />            </div><!-- .post-thumbnail -->

                </div>
        <div class="entry-content">
            <header class="entry-header">
                                <div class="entry-meta">
                    <span class="posted-on"><a href="https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/" rel="bookmark"><i class="fa fa-calendar"></i><time class="entry-date published" datetime="2019-06-17T10:51:44+00:00">June 17, 2019</time><time class="updated" datetime="2019-06-23T21:59:57+00:00">June 23, 2019</time></a></span><span class="byline"> <span class="author vcard"><a class="url fn n" href="https://javascriptwebscrapingguy.com/author/aarmora/"><i class="fa fa-user"></i>Jordan Hansen</a></span></span>                </div><!-- .entry-meta -->
                <h1 class="entry-title">Jordan Plays Pool (multi-threading with a pool queue)</h1>            <div class="entry-meta entry-category">
                <span class="cat-links"> <a href="https://javascriptwebscrapingguy.com/category/link-checking/" rel="category tag">Link Checking</a></span>            </div><!-- .entry-meta -->
                </header>
    <!-- .entry-header -->
    
<p><a href="https://github.com/aarmora/jordan-does-dead-link-checking/tree/with-pools">Sample code here</a></p>



<h2>Reddit commentor</h2>



<p>I actually love reddit. I love that I can find feedback from real people on almost ANY subject. And a lot of the time the feedback comes really quickly. I shared <a href="https://javascriptwebscrapingguy.com/jordan-is-speed-speeding-up-scraping-with-multiple-threads/">my last post</a> on r/node and got an interesting, and accurate, <a href="https://www.reddit.com/r/node/comments/byx2cu/using_multiple_threads_and_web_workers_to/eqor8bf?utm_source=share&amp;utm_medium=web2x">comment</a>.</p>



<p><a href="https://www.reddit.com/user/m03geek/">u/m03geek</a> accurately pointed out that my script wasn&#8217;t taking advantage of the full power of multiple threads. My <a href="https://github.com/aarmora/jordan-does-dead-link-checking/tree/with-threads">with-threads branch</a> sped things up a lot while link checking but how I was doing it (see below) was just running 10 (or however many threads I wanted to run) at once and then it would wait. If 8 of the tasks completed really quickly, they would then sit idle while it waited for the other two to complete.</p>



<pre class="wp-block-code"><code>            const promises: any[] = [];

            const amountOfThreads = 10;
            for (let linkToCheckIndex = 0; linkToCheckIndex &lt; amountOfThreads; linkToCheckIndex++) {
                if (links[i + linkToCheckIndex]) {
                    promises.push(checkLink(links[i + linkToCheckIndex], domain));
                }
            }

            const checkLinkResponses = await Promise.all(promises);</code></pre>



<p>Honestly, I had been looking into getting pools and pool queues to work. I hadn&#8217;t even thought of this specific thing though and he was spot on. My post today is the same link checker library except using pools. The results are pretty neat.</p>



<p>I think it&#8217;s also worth noting that <a href="https://www.reddit.com/user/m03geek/">u/m03geek</a> also mentioned &#8220;But links checker is not good example for using workers because node has multithreaded i/o and what you (or author of that topic) need is just a simple queue that will limit maximum number of ongoing requests to 20 for example or 50.&#8221; I&#8217;m hoping to try and compare speeds of harnessing the mulithreaded i/o to the pool queue next week.</p>



<h2>Results</h2>



<p>Let&#8217;s go over the results first. I&#8217;m just going to post them in a list for easier readability and then I&#8217;ll post the screen shots. We are checking 198 links and they all were successful in finding the same bad link.</p>



<ul><li>Normal single thread, <strong>128.492 seconds</strong></li><li>10 threads the old way, pushing to a promise, <strong>38.147 seconds</strong></li><li>Pool with a limit of 20 threads, <strong>22.720 seconds</strong></li><li>Pool with a limit of 10 threads, <strong>20.927 seconds</strong></li><li>Pool with a limit of 8 threads, <strong>22.913 seconds</strong></li><li>Pool with a limit of 6 threads, <strong>26.728 seconds</strong></li><li>Pool with a limit of 4 threads, <strong>35.252 seconds</strong> </li><li> Pool with a limit of 2 threads, <strong>62.526 seconds </strong></li></ul>



<p>I think it&#8217;s interesting to note that 20 threads actually performed worse than 10 threads. Not by much but I tested both 3-4 times and 20 consistently took longer. I realize 3-4 times isn&#8217;t a solid sample size but at the very minimum the improvement is hardly anything from 10 to 20.</p>



<p>I think it&#8217;s also interesting to talk about the significant difference between a pool with 2, 4, 6, and 8 threads. I actually only have four cores so really the difference for everything after 4 shouldn&#8217;t be that noticeable. And while the improvement did slow down some after 4, it was still enough to be worthwhile. There is clearly a huge difference between 2 and 4.</p>



<h2>Code changes</h2>



<p>The code builds off of the code we had before and so I&#8217;m only going to focus on the part I changed for using threads in a pool. You can find the full code in the <a href="https://github.com/aarmora/jordan-does-dead-link-checking/tree/with-pools">branch on github</a>. There is also further documentation at the <a href="https://github.com/andywer/threads.js/">threads.js library</a>, written by <a href="https://twitter.com/andywritescode">Andy</a> who has been incredibly helpful and quick responding.</p>



<pre class="wp-block-code"><code>    const spawnLinkChecker = () => {
        return spawn(new Worker('./../../../../dist/checkLinkWorker.js'));
    }
    const pool = Pool(spawnLinkChecker, 10);
    for (let i = 0; i &lt; links.length; i++) {
        if (!links[i].status) {
            pool.queue(linkChecker => linkChecker(links[i], domain));
        }
    }

    pool.events().subscribe((event) => {
        if (event.type === 'taskCompleted' &amp;&amp; event.returnValue.links) {
            console.log('task completed', new Date());

            // Replace the link we were checking with the completed object
            let linkToReplaceIndex = links.findIndex(linkObject => linkObject.link === event.returnValue.link.link);
            links[linkToReplaceIndex] = event.returnValue.link;

            for (let linkToCheck of event.returnValue.links) {
                // We want to check if we've already checked this link
                if (links.filter(linkObject => linkObject.link === linkToCheck.link).length &lt; 1) {
                    console.log('pushed in ', linkToCheck.link);
                    links.push(linkToCheck);

                    pool.queue(linkChecker => linkChecker(linkToCheck, domain));
                }
            }
        }
    });</code></pre>



<p>Using pools actually cleaned things up quite a bit. I just get all the links from the domain home page like before and then with a loop throw them all into the pool queue. In the example above I&#8217;m setting my worker limit to 10 and the pool will automatically keep the work going as jobs complete.</p>



<p>I was really worried about being able to update the link I was checking and then handle the new links found doing it this way but subscribing to <code>pool.events()</code> made it a piece of cake. I just watch for the <code>taskCompleted</code> event and then handle the <code>returnValue</code>, which includes the link with the updated status and the new links. I loop through those new links, adding any links I hadn&#8217;t had before and then immediately push them into the pool queue and let it continue its magic.</p>



<p>And it really almost feels like magic. <a href="https://twitter.com/andywritescode">Andy</a> has done a killer job with this library. I&#8217;m really grateful for awesome people like him that make the software community so amazing. People that are just creating things for the cool feel of being able to create them.</p>



<p><a href="https://github.com/aarmora/jordan-does-dead-link-checking/tree/with-pools">Sample code here</a></p>



<div class="wp-block-image"><figure class="aligncenter"><img src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/normal-single-threaded-request.png" alt="" class="wp-image-1214" srcset="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/normal-single-threaded-request.png 555w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/normal-single-threaded-request-150x150.png 150w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/normal-single-threaded-request-298x300.png 298w" sizes="(max-width: 555px) 100vw, 555px" /><figcaption>Single threaded results</figcaption></figure></div>



<div class="wp-block-image"><figure class="aligncenter"><img src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/with-10-threads.png" alt="" class="wp-image-1221" srcset="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/with-10-threads.png 532w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/with-10-threads-300x254.png 300w" sizes="(max-width: 532px) 100vw, 532px" /><figcaption>No pool using just 10 threads</figcaption></figure></div>



<div class="wp-block-image"><figure class="aligncenter"><img src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-20-limit.png" alt="" class="wp-image-1215" srcset="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-20-limit.png 412w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-20-limit-267x300.png 267w" sizes="(max-width: 412px) 100vw, 412px" /><figcaption>Pool with 20 thread limit</figcaption></figure></div>



<div class="wp-block-image"><figure class="aligncenter"><img src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-10-limit.png" alt="" class="wp-image-1216" srcset="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-10-limit.png 418w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-10-limit-279x300.png 279w" sizes="(max-width: 418px) 100vw, 418px" /><figcaption>Pool with 10 thread limit</figcaption></figure></div>



<div class="wp-block-image"><figure class="aligncenter"><img src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-8-limit.png" alt="" class="wp-image-1217" srcset="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-8-limit.png 391w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-8-limit-223x300.png 223w" sizes="(max-width: 391px) 100vw, 391px" /><figcaption>Pool with 8 thread limit</figcaption></figure></div>



<div class="wp-block-image"><figure class="aligncenter"><img src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-6-limit.png" alt="" class="wp-image-1218" srcset="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-6-limit.png 458w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-6-limit-245x300.png 245w" sizes="(max-width: 458px) 100vw, 458px" /><figcaption>Pool with 6 thread limit</figcaption></figure></div>



<div class="wp-block-image"><figure class="aligncenter"><img src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-4-limit.png" alt="" class="wp-image-1219" srcset="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-4-limit.png 490w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-4-limit-300x261.png 300w" sizes="(max-width: 490px) 100vw, 490px" /><figcaption>Pool with 4 thread limit</figcaption></figure></div>



<div class="wp-block-image"><figure class="aligncenter"><img src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-2-limit.png" alt="" class="wp-image-1220" srcset="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-2-limit.png 403w, https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/pool-with-2-limit-240x300.png 240w" sizes="(max-width: 403px) 100vw, 403px" /><figcaption>Pool with 2 thread limit</figcaption></figure></div>



<p></p>

    <footer class="entry-footer">
        <span class="tags-links">Tagged <a href="https://javascriptwebscrapingguy.com/tag/javascript/" rel="tag">Javascript</a>, <a href="https://javascriptwebscrapingguy.com/tag/link-checking/" rel="tag">link-checking</a>, <a href="https://javascriptwebscrapingguy.com/tag/multi-thread/" rel="tag">Multi-thread</a>, <a href="https://javascriptwebscrapingguy.com/tag/pool/" rel="tag">Pool</a>, <a href="https://javascriptwebscrapingguy.com/tag/typescript/" rel="tag">Typescript</a></span></footer>
<!-- .entry-footer -->
</div>
<!-- .entry-content -->
</div>
<!-- .p-15 -->
</article><!-- #post-1212 -->

	<nav class="navigation post-navigation" role="navigation">
		<h2 class="screen-reader-text">Post navigation</h2>
		<div class="nav-links"><div class="nav-previous"><a href="https://javascriptwebscrapingguy.com/jordan-is-speed-speeding-up-scraping-with-multiple-threads/" rel="prev">Jordan Is Speed (speeding up scraping with multiple threads)</a></div><div class="nav-next"><a href="https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/" rel="next">Jordan Takes Advantage of Multithreaded I/O in Nodejs</a></div></div>
	</nav>
<div id="comments" class="comments-area">

		<div id="respond" class="comment-respond">
		<h3 id="reply-title" class="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/jordan-plays-pool-multi-threading-with-a-pool-queue/#respond" style="display:none;">Cancel reply</a></small></h3>			<form action="https://javascriptwebscrapingguy.com/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate>
				<p class="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span class="required">*</span></p><p class="comment-form-comment"><label for="comment">Comment</label> <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea></p><p class="comment-form-author"><label for="author">Name <span class="required">*</span></label> <input id="author" name="author" type="text" value="" size="30" maxlength="245" required='required' /></p>
<p class="comment-form-email"><label for="email">Email <span class="required">*</span></label> <input id="email" name="email" type="email" value="" size="30" maxlength="100" aria-describedby="email-notes" required='required' /></p>
<p class="comment-form-url"><label for="url">Website</label> <input id="url" name="url" type="url" value="" size="30" maxlength="200" /></p>
<p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="Post Comment" /> <input type='hidden' name='comment_post_ID' value='1212' id='comment_post_ID' />
<input type='hidden' name='comment_parent' id='comment_parent' value='0' />
</p><p style="display: none;"><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" value="67c2c3f8d1" /></p><p style="display: none;"><input type="hidden" id="ak_js" name="ak_js" value="147"/></p>			</form>
			</div><!-- #respond -->
	
</div><!-- #comments -->

		</main><!-- #main -->
	</div><!-- #primary -->


<aside id="secondary" class="widget-area" role="complementary">
	<section id="text-3" class="widget widget_text"><h2 class="widget-title">Get $50 in Digital Ocean credit</h2>			<div class="textwidget"><p><a href="https://javascriptwebscrapingguy.com/redirect?link=https://m.do.co/c/b74be0171027" target="_blank" rel="noopener"><img class="size-full wp-image-1211 aligncenter" src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/meta.png" alt="Digital Ocean" width="220" height="220" /></a></p>
</div>
		</section><section id="text-4" class="widget widget_text"><h2 class="widget-title">Easy Hosting</h2>			<div class="textwidget"><p><a href="https://javascriptwebscrapingguy.com/?bha=true&#038;user=javascriptwebscrapingguy&#038;id=sidebar-1" target="_blank" rel="noopener"><img style="max-width: 100%;" src="https://javascriptwebscrapingguy.com/wp-content/uploads/2019/06/bha.png" /></a></p>
</div>
		</section><section id="gist-social-icons-2" class="widget gist-menu-social"><h2 class="widget-title">Twitter and Github</h2><div class="menu-social-container"><ul id="menu-social" class="social-menu"><li id="menu-item-1022" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1022"><a href="https://twitter.com/jordbhansen">Twitter</a></li>
<li id="menu-item-1023" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1023"><a href="https://github.com/aarmora">Github</a></li>
</ul></div></section>		<section id="recent-posts-2" class="widget widget_recent_entries">		<h2 class="widget-title">Recent Posts</h2>		<ul>
											<li>
					<a href="https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/">Jordan Takes Advantage of Multithreaded I/O in Nodejs</a>
									</li>
											<li>
					<a href="https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/">Jordan Plays Pool (multi-threading with a pool queue)</a>
									</li>
											<li>
					<a href="https://javascriptwebscrapingguy.com/jordan-is-speed-speeding-up-scraping-with-multiple-threads/">Jordan Is Speed (speeding up scraping with multiple threads)</a>
									</li>
											<li>
					<a href="https://javascriptwebscrapingguy.com/jordan-does-dead-link-checking/">Jordan Does Dead Link Checking</a>
									</li>
											<li>
					<a href="https://javascriptwebscrapingguy.com/the-cost-of-a-software-bug/">The Cost of a Software Bug</a>
									</li>
					</ul>
		</section></aside><!-- #secondary -->

	</div><!-- #content -->

<footer id="colophon" class="site-footer">
	
    		<div class="site-info">
        			<span class="copy-right-text">All Right Reserved 2019</span>
						        <a id="toTop" class="go-to-top" href="#" title="Go to Top">
            <i class="fa fa-angle-double-up"></i>
        </a>
    		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<script type='text/javascript' src='https://checkout.stripe.com/checkout.js'></script>
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-content/plugins/stripe/assets/js/vendor/accounting.min.js?ver=2.2.0'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var spGeneral = {"strings":{"currency":"USD","currencySymbol":"$","currencyPosition":"left","decimalSeparator":".","thousandSeparator":",","ajaxurl":"https:\/\/javascriptwebscrapingguy.com\/wp-admin\/admin-ajax.php"},"booleans":{"isZeroDecimal":false,"scriptDebug":false},"i18n":{"mediaTitle":"Insert Media","mediaButtonText":"Use Image"},"integers":{"decimalPlaces":2,"minAmount":1}};
/* ]]> */
</script>
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-content/plugins/stripe/assets/js/shared.min.js?ver=2.2.0'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var simplePayForms = [];
/* ]]> */
</script>
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-content/plugins/stripe/assets/js/public.min.js?ver=2.2.0'></script>
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-content/themes/gist/candidthemes/assets/js/gist-custom.js?ver=20151215'></script>
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-content/themes/gist/candidthemes/assets/js/theia-sticky-sidebar.js?ver=20151215'></script>
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-content/themes/gist/js/navigation.js?ver=20151215'></script>
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-content/themes/gist/js/skip-link-focus-fix.js?ver=20151215'></script>
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-includes/js/comment-reply.min.js?ver=5.0.4'></script>
<script type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-includes/js/wp-embed.min.js?ver=5.0.4'></script>
<script async="async" type='text/javascript' src='https://javascriptwebscrapingguy.com/wp-content/plugins/akismet/_inc/form.js?ver=4.1.2'></script>

</body>
</html>`;