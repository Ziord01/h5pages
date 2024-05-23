let ImageID ;
function startAnimationSequence() {
    const image1_2 = document.getElementById('image1-2');
    const image1_3 = document.getElementById('image1-3');
    const image1_4 = document.getElementById('image1-4');
    const watchButton = document.getElementById('watch-button');

    // 设置1-2从下方移动至上方的动画
    setTimeout(() => {
        image1_2.classList.remove('hidden');
        image1_2.classList.add('show');
    }, 500); // 延迟一点时间以确保动画效果

    // 设置1-3从上方移动至下方的动画，并在1-2动画快结束时显示
    setTimeout(() => {
        image1_3.classList.remove('hidden');
        image1_3.classList.add('show');
    }, 1500); // 在1-2动画快结束时启动1-3动画（1.5s 是1-2动画时间减去0.5s）

    // 设置1-4等待1-2和1-3加载完毕后淡入，同时显示“点击观看”按钮
    setTimeout(() => {
        image1_4.classList.remove('hidden');
        image1_4.classList.add('show');
        watchButton.classList.remove('hidden');
        watchButton.style.opacity = 1;
    }, 3000); // 在1-3动画快结束时启动1-4淡入动画（1.5s 是1-3动画时间减去0.5s）
}

window.onload = startAnimationSequence;

function watchVideo() {
    const images1 = document.querySelectorAll('.image1');
    images1.forEach(image => {
        image.classList.add('hidden');
    });

    const images2 = document.querySelectorAll('.image2');
    images2.forEach(image => {
        image.classList.remove('hidden');
    });

    const watchButton = document.getElementById('watch-button');
    watchButton.hidden = true;

    const button2 = document.querySelectorAll('.button_2');
    button2.forEach(button => {
        button.classList.remove('hidden');
    });
    toggleAudio(); // 播放音频
}

function toggleAudio() {
    const bgm = document.getElementById('bgm');
    if (bgm.paused) {
        bgm.play();
    } else {
        bgm.pause();
    }
}

function changeImage(baseImageId) {
    console.log(baseImageId)
    ImageID = baseImageId;
    const imagesToShow = [];
    let i = 1;
    while (true) {
        const imageId = `${baseImageId}-${i}`;
        const image = document.getElementById(imageId);
        if (!image) break;
        imagesToShow.push(image);
        i++;
    }

    imagesToShow.forEach(image => {
        image.classList.remove('hidden');
        image.classList.add('fade-in');
    });

    const image2 = document.getElementById(`image2`);
    image2.classList.add('hidden');

    const button2 = document.querySelectorAll('.button_2');
    button2.forEach(button => {
        button.classList.add('hidden');
    });


    const closeButton = document.createElement('div');
    closeButton.classList.add('button_22', 'close-button');
    closeButton.textContent = '关闭';
    closeButton.style.fontSize = '0.8em'; // 减小字体大小
    closeButton.onclick = function() {
        closeButton.classList.add('hidden'); // 隐藏关闭按钮
        console.log(`${ImageID}-2`)

        const image2_2 = document.getElementById(`${ImageID}-2`);
        image2_2.classList.add('hidden');
        image2_2.classList.remove('fade-in');
        const image2_1= document.getElementById(`${ImageID}-1`);
        image2_1.classList.remove('fade-in');
        showAdditionalButtons(baseImageId); // 显示额外按钮
    };
    document.querySelector('.container').appendChild(closeButton);

    function showAdditionalButtons(imageID) {
        const backButton = document.createElement('div');
        backButton.classList.add('additional-button1');
        backButton.textContent = '返回';
        backButton.onclick = function() {
            // 处理返回按钮的点击事件
            hiddenAdditionalButtons();
            const image_1 = document.getElementById(`${ImageID}-1`);
            image_1.classList.add('hidden');

            const image2 = document.getElementById(`image2`);
            image2.classList.remove('hidden');
            //显示四个按钮
            const button2 = document.querySelectorAll('.button_2');
            button2.forEach(button => {
                button.classList.remove('hidden');
            });
        };
        document.querySelector('.container').appendChild(backButton);

        const infoButton = document.createElement('div');
        infoButton.classList.add('additional-button2');
        infoButton.textContent = '简介';
        infoButton.onclick = function() {
            hiddenAdditionalButtons();
            const closeButton = document.querySelector('.close-button');
            closeButton.classList.remove('hidden'); // 显示关闭按钮
            //显示简介
            const image2_2 = document.getElementById(`${ImageID}-2`);
            image2_2.classList.remove('hidden');
            image2_2.classList.add('fade-in');
        };
        document.querySelector('.container').appendChild(infoButton);
    }

    function hiddenAdditionalButtons(){
        console.log(baseImageId)
        const additionalButtons1 = document.querySelectorAll('.additional-button2');
        additionalButtons1.forEach(button => {
            button.classList.add('hidden');
        });
        const additionalButtons2 = document.querySelectorAll('.additional-button1');
        additionalButtons2.forEach(button => {
            button.classList.add('hidden');
        });
    }
}

