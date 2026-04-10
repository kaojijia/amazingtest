// 添加简单的交互功能
console.log('网站加载完成');

// 为页面添加一些动态效果
document.addEventListener('DOMContentLoaded', function() {
    // 为标题添加点击效果
    const h1 = document.querySelector('h1');
    h1.addEventListener('click', function() {
        this.style.color = getRandomColor();
    });
    
    // 为列表项添加悬停效果
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});

// 生成随机颜色
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}