document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const progressBar = document.querySelector('.progress');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 25; // 加快进度增加速度
        if (progress > 100) progress = 100;
        progressBar.style.width = progress + '%';
    }, 200); // 缩短间隔时间

    window.addEventListener('load', () => {
        setTimeout(() => {
            clearInterval(interval);
            progressBar.style.width = '100%';
            
            setTimeout(() => {
                document.body.classList.add('loaded');
                splashScreen.style.opacity = '0';
                setTimeout(() => {
                    splashScreen.style.display = 'none';
                }, 500); // 缩短淡出时间
            }, 500); // 缩短完成后的停留时间
        }, 1500); // 缩短最小显示时间到1.5秒
    });

    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('www.')) {
                    const fullUrl = url.startsWith('www.') ? 'https://' + url : url;
                    window.open(fullUrl, '_blank');
                } else {
                    window.location.href = url;
                }
            }
        });
    });
});