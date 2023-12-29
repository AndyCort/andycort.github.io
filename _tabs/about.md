
---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
description: "Hey, this is Andrew."
header-img: /assets/img/about-head-background.jpeg"
---

> Add Markdown syntax content to file `_tabs/about.md`{: .filepath } and it will show up on this page.
{: .prompt-tip }



<!-- Language Selector -->
<!-- <select class="sel-lang" onchange= "onLanChange(this.options[this.options.selectedIndex].value)">
    <option value="0" selected> 中文 Chinese </option>
    <option value="1"> 英文 English </option>
</select> -->

<!-- Chinese Version -->
<div class="zh post-container">

    <!--copied from markdown -->
    <blockquote><p>冰冻三尺 非一日之寒<br>
    积土成山 非斯须之作</p></blockquote>

    <p>Hey，我是<strong>Andrew</strong>，一只医学牲，现在还在读本科。</p>

    <p>重度宅家患者，互联网幽灵</p>

    <p>这是我的利用 <a href="https://pages.github.com/">GitHub Pages</a> 与 <a href="http://jekyll.com.cn/">Jekyll</a> 搭建的个人博客。

    <p></p>
    
    <h5>Talks</h5>

    <ul>
        <li><a href="https://github.com">GitHub</a></li>
        <li><a href="http://jekyll.com.cn/">jekyll</a></li>
        <li><a href="http://huangxuan.me/">Hux</a></li> 
        <li><a href="https://analytics.google.com/analytics">Google Analytics</a></li>
    </ul>
</div>

<!-- English Version -->
<!-- <div class="en post-container">
    <blockquote><p>Yet another iOS Developer. <br>
    Yet another Life-long Student.</p></blockquote>

    <p>Hi, I am <strong>Baiying Qiu</strong>，you can call me <strong>BY</strong>. I am an iOS software engineer and currently working in Xiamen</p>

    <p>This is my personal blog, through making Github Pages and Jekyll.My GitHub  👉 <a href="http://github.com/qiubaiying">Github·BY</a>.</p>
    
    <p>I am a sports enthusiast, I like fitness, running and boxing.</p>

    <h5>Talks</h5>

    <ul>
    <li><a href="https://github.com">GitHub</a></li>
    <li><a href="http://jekyll.com.cn/">jekyll</a></li>
    <li><a href="https://pages.github.com/">GitHub Pages</a></li>
    <li><a href="https://qiubaiying.github.io">BY</a></li>
    </ul>
</div> -->
<!-- Handle Language Change -->
<script type="text/javascript">
    // get nodes
    var $zh = document.querySelector(".zh");
    var $en = document.querySelector(".en");
    var $select = document.querySelector("select");

    // bind hashchange event
    window.addEventListener('hashchange', _render);

    // handle render
    function _render(){
        var _hash = window.location.hash;
        // en
        if(_hash == "#en"){
            $select.selectedIndex = 1;
            $en.style.display = "block";
            $zh.style.display = "none";
        // zh by default
        }else{
            // not trigger onChange, otherwise cause a loop call.
            $select.selectedIndex = 0;
            $zh.style.display = "block";
            $en.style.display = "none";
        }
    }

    // handle select change
    function onLanChange(index){
        if(index == 0){
            window.location.hash = "#zh"
        }else{
            window.location.hash = "#en"
        }
    }

    // init
    _render();
</script>
