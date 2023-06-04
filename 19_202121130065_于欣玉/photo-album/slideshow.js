// 点击下一个
document.querySelectorAll('.botton-style')[1].onclick = () => {
    let lists = document.querySelectorAll('.item');
    // 将第一个item换到最后一个为位置 
    document.querySelector('.slide').appendChild(lists[0]);
}

// 点击上一个
document.querySelectorAll('.botton-style')[0].onclick = () => {
    let lists = document.querySelectorAll('.item');
    // 将最后一个item换到第一个为位置 
    document.querySelector('.slide').prepend(lists[lists.length - 1 ])
}