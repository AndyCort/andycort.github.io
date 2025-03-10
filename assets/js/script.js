document.addEventListener('DOMContentLoaded', function() {
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