// 心理测试题目数据
const questions = [
    {
        text: "深夜两点，暧昧对象突然发来消息说'睡不着，你陪我聊聊'，你会？",
        options: [
            { text: "假装没看到，第二天若无其事", score: 1, label: "A" },
            { text: "礼貌回复但不深入，赶紧睡觉", score: 2, label: "B" },
            { text: "立刻回复'我也睡不着呢'，开启深夜畅聊模式", score: 3, label: "C" },
            { text: "不仅秒回，还主动发一张刚洗完澡的照片", score: 4, label: "D" }
        ]
    },
    {
        text: "你和现任正在约会，突然前任发来消息说'我想你了，能见一面吗'，你会？",
        options: [
            { text: "直接删除拉黑，眼不见心不烦", score: 1, label: "A" },
            { text: "告诉现任，商量怎么处理", score: 2, label: "B" },
            { text: "偷偷看一眼消息，找借口中途离开去见前任", score: 3, label: "C" },
            { text: "对现任说公司临时加班，然后去找前任开房", score: 4, label: "D" }
        ]
    },
    {
        text: "你在朋友圈发了一张和异性的合照，配文'今晚很开心'，你的真实目的是？",
        options: [
            { text: "单纯记录生活，没有任何目的", score: 1, label: "A" },
            { text: "想炫耀一下今天的约会，让朋友们知道", score: 2, label: "B" },
            { text: "故意让某个人看到，看他/她的反应", score: 3, label: "C" },
            { text: "同时发给多个暧昧对象，看谁先吃醋来讨好你", score: 4, label: "D" }
        ]
    },
    {
        text: "你和A刚确认关系不到一周，B又来追你，而且B比A更有钱更好看，你会？",
        options: [
            { text: "坚定拒绝B，珍惜和A的感情", score: 1, label: "A" },
            { text: "先不告诉A，偷偷和B聊几天再说", score: 2, label: "B" },
            { text: "和A分手，理由是'我们不太合适'，然后立刻和B在一起", score: 3, label: "C" },
            { text: "脚踩两条船，同时和A、B保持恋爱关系", score: 4, label: "D" }
        ]
    },
    {
        text: "你手机里有几个异性的特别备注和专属铃声？",
        options: [
            { text: "除了现任，没有任何特别备注", score: 1, label: "A" },
            { text: "1-2个关系好的普通朋友", score: 2, label: "B" },
            { text: "5-6个有好感的暧昧对象", score: 3, label: "C" },
            { text: "10个以上，每个都有专属昵称和特别铃声，方便分辨谁上钩了", score: 4, label: "D" }
        ]
    },
    {
        text: "你和对象吵架后冷战，你会？",
        options: [
            { text: "冷静一下，主动沟通解决问题", score: 1, label: "A" },
            { text: "等对方来哄自己，但也不会太久", score: 2, label: "B" },
            { text: "立刻找别的异性倾诉，说对方的坏话", score: 3, label: "C" },
            { text: "趁冷战期间约其他异性出来玩，反正他/她又不知道", score: 4, label: "D" }
        ]
    },
    {
        text: "你收到一份价值不菲的礼物，但不是现任送的，你会？",
        options: [
            { text: "拒绝并退回，不想欠人情", score: 1, label: "A" },
            { text: "收下但告诉现任，看他/她的态度", score: 2, label: "B" },
            { text: "收下但不告诉现任，自己偷偷藏着", score: 3, label: "C" },
            { text: "不仅收下，还主动暗示对方'下次送我更好的呗'，试探他/她的底线", score: 4, label: "D" }
        ]
    },
    {
        text: "你和对象在一起时，会经常看手机吗？一般在看什么？",
        options: [
            { text: "偶尔看看，基本都是正常社交", score: 1, label: "A" },
            { text: "看看朋友圈和新闻，不会刻意隐藏", score: 2, label: "B" },
            { text: "偷偷看微信消息，怕被对象发现和谁的聊天记录", score: 3, label: "C" },
            { text: "一边和对象约会，一边同时回复3-5个暧昧对象的微信", score: 4, label: "D" }
        ]
    },
    {
        text: "你对'专一'这个词的理解是？",
        options: [
            { text: "一生只爱一个人，从一而终", score: 1, label: "A" },
            { text: "一段感情中只爱一个，但可以有多段感情", score: 2, label: "B" },
            { text: "没有明确恋爱关系时，可以和多人暧昧", score: 3, label: "C" },
            { text: "只要没被抓到，就是专一", score: 4, label: "D" }
        ]
    },
    {
        text: "你的异性朋友知道你/你有对象吗？他们怎么知道的？",
        options: [
            { text: "当然知道，我主动说的，而且我的朋友圈都是关于对象的", score: 1, label: "A" },
            { text: "知道，但如果有人问还是会说'我有对象'", score: 2, label: "B" },
            { text: "我的朋友圈会屏蔽他们，这样他们不知道我有对象", score: 3, label: "C" },
            { text: "我会假装单身，享受被多人追求的感觉", score: 4, label: "D" }
        ]
    },
    {
        text: "你在社交软件上的签名或个人简介是？",
        options: [
            { text: "已有对象/恋爱中，勿扰", score: 1, label: "A" },
            { text: "正常签名，没有任何暗示性内容", score: 2, label: "B" },
            { text: "'单身可撩'或'期待遇见对的人'，积极暗示自己单身", score: 3, label: "C" },
            { text: "发一些似是而非的文案，配上诱惑的自拍，让人不确定你到底有没有对象", score: 4, label: "D" }
        ]
    },
    {
        text: "你对'养鱼'这个词怎么看？",
        options: [
            { text: "很不屑，我绝对不会做这种事", score: 1, label: "A" },
            { text: "不太理解，觉得这样很累", score: 2, label: "B" },
            { text: "觉得可以理解，但不认为自己是", score: 3, label: "C" },
            { text: "鱼多塘大，选择更多，这叫'给自己留后路'", score: 4, label: "D" }
        ]
    },
    {
        text: "你和对象吵架时，对象说'你根本不爱我'，你的反应是？",
        options: [
            { text: "反思自己，用行动证明自己的爱", score: 1, label: "A" },
            { text: "虽然生气，但还是会耐心解释", score: 2, label: "B" },
            { text: "反怼回去'你不也这样吗'，揭对方的短", score: 3, label: "C" },
            { text: "冷笑着说'你爱这么想就这么说呗'，然后摔门出去约别人", score: 4, label: "D" }
        ]
    },
    {
        text: "你最长的一段感情持续了多久？结束的原因是？",
        options: [
            { text: "3年以上，因为客观原因或深思熟虑后和平分手", score: 1, label: "A" },
            { text: "1-3年，觉得不合适或遇到更喜欢的人而分手", score: 2, label: "B" },
            { text: "几个月到半年，每次都是被分手或分手别人", score: 3, label: "C" },
            { text: "从来没有超过一个月，因为我'不甘心'被一个人绑定", score: 4, label: "D" }
        ]
    },
    {
        text: "你对'劈腿'的定义是？",
        options: [
            { text: "精神和身体都不可以，这是底线", score: 1, label: "A" },
            { text: "只要没发生关系，精神出轨可以原谅", score: 2, label: "B" },
            { text: "只要没被发现，就不算劈腿", score: 3, label: "C" },
            { text: "只要我更喜欢对方，我就有权利去追求新的感情", score: 4, label: "D" }
        ]
    },
    {
        text: "你的现任问'你手机密码是什么'，你会？",
        options: [
            { text: "毫不犹豫地告诉他/她，反正没有什么不能看的", score: 1, label: "A" },
            { text: "告诉他/她，但会提前删除一些聊天记录", score: 2, label: "B" },
            { text: "找借口拒绝，说'这是我的隐私'", score: 3, label: "C" },
            { text: "设很多层密码和指纹，还把暧昧对象放在隐藏相册里", score: 4, label: "D" }
        ]
    },
    {
        text: "你和前任分手后，你会？",
        options: [
            { text: "彻底删除联系方式，开始新生活", score: 1, label: "A" },
            { text: "留着微信但不联系，当普通朋友", score: 2, label: "B" },
            { text: "偶尔聊天，回忆过去的美好，但不会复合", score: 3, label: "C" },
            { text: "保持联系和暧昧，当'最好的朋友'，方便寂寞时召之即来", score: 4, label: "D" }
        ]
    },
    {
        text: "你觉得自己是渣男/渣女吗？",
        options: [
            { text: "绝对不是，我对待感情很认真", score: 1, label: "A" },
            { text: "偶尔有些小渣，但总体还行", score: 2, label: "B" },
            { text: "我可能有点海，但我觉得自己很有魅力", score: 3, label: "C" },
            { text: "渣不渣不重要，重要的是我开心就好", score: 4, label: "D" }
        ]
    },
    {
        text: "你对感情的态度更接近哪种？",
        options: [
            { text: "宁缺毋滥，宁愿单身也不将就", score: 1, label: "A" },
            { text: "认真对待每一段感情，但也会现实一些", score: 2, label: "B" },
            { text: "骑驴找马，在确定更好的之前不放手现在的", score: 3, label: "C" },
            { text: "我只是想被爱，不想被绑定，感情只是调剂品", score: 4, label: "D" }
        ]
    },
    {
        text: "最后一道题：你觉得一个'好恋人'最重要的是什么？",
        options: [
            { text: "专一和忠诚，愿意为对方拒绝所有诱惑", score: 1, label: "A" },
            { text: "互相尊重，有共同话题，能一起成长", score: 2, label: "B" },
            { text: "浪漫和激情，能给我带来心跳的感觉", score: 3, label: "C" },
            { text: "能满足我的需求，给我自由，让我开心就好", score: 4, label: "D" }
        ]
    }
];

let scores = new Array(questions.length).fill(undefined);
let currentQuestion = 0;

// DOM元素
const cardsContainer = document.getElementById('cards-container');
const resultContainer = document.getElementById('result-container');
const questionCard = document.getElementById('question-card');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');
const personalityType = document.getElementById('personality-type');
const resultDescription = document.getElementById('result-description');
const restartBtn = document.getElementById('restart-btn');

// 初始化测试
document.addEventListener('DOMContentLoaded', function() {
    // 直接加载第一题
    loadQuestion(currentQuestion);
    
    // 选项点击事件
    optionsContainer.addEventListener('click', function(e) {
        if (e.target.closest('.option')) {
            const optionElement = e.target.closest('.option');
            const score = parseInt(optionElement.dataset.score);
            
            // 保存分数
            scores[currentQuestion] = score;
            
            // 移除当前问题的其他选项的选中状态
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // 添加当前选项的选中状态
            optionElement.classList.add('selected');
            
            // 如果是最后一题，显示提交按钮
            if (currentQuestion === questions.length - 1) {
                submitBtn.style.display = 'inline-block';
            } else {
                // 延迟后跳到下一题
                setTimeout(() => {
                    nextQuestion();
                }, 300);
            }
        }
    });
    
    // 提交按钮
    submitBtn.addEventListener('click', function() {
        showResult();
    });
    
    // 上一题按钮
    prevBtn.addEventListener('click', function() {
        prevQuestion();
    });
    
    // 重新测试按钮
    restartBtn.addEventListener('click', function() {
        resetTest();
    });
});

// 加载题目
function loadQuestion(index, direction = 'next') {
    const question = questions[index];
    questionText.textContent = question.text;
    
    // 更新进度条
    updateProgressBar();
    
    // 更新上一题按钮状态
    prevBtn.disabled = index === 0;
    
    // 处理提交按钮显示
    if (index === questions.length - 1 && scores[index] !== undefined) {
        submitBtn.style.display = 'inline-block';
    } else {
        submitBtn.style.display = 'none';
    }
    
    // 清空选项
    optionsContainer.innerHTML = '';
    
    // 添加选项
    question.options.forEach((option) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.score = option.score;
        
        const optionLabel = document.createElement('span');
        optionLabel.className = 'option-label';
        optionLabel.textContent = option.label;
        
        const optionText = document.createElement('span');
        optionText.className = 'option-text';
        optionText.textContent = option.text;
        
        optionDiv.appendChild(optionLabel);
        optionDiv.appendChild(optionText);
        
        // 如果已经选择过，保持选中状态
        if (scores[index] === option.score) {
            optionDiv.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // 添加滑动动画
    questionCard.style.animation = 'none';
    questionCard.offsetHeight; // 触发重绘
    questionCard.style.animation = direction === 'next' ? 'slideIn 0.4s ease-out' : 'slideBack 0.4s ease-out';
}

// 下一题
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion, 'next');
    } else {
        // 测试完成，显示结果
        showResult();
    }
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion, 'prev');
    }
}

// 更新进度条
function updateProgressBar() {
    const answeredCount = scores.filter(score => score !== undefined).length;
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
    
    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `${currentQuestion + 1}/${questions.length}`;
}

// 显示结果
function showResult() {
    // 计算总分（undefined值按1分计算）
    const totalScore = scores.reduce((sum, score) => sum + (score === undefined ? 1 : score), 0);
    
    // 根据分数显示结果描述
    let type = '';
    let description = '';
    
    if (totalScore >= 20 && totalScore <= 35) {
        type = '专一好恋人（绝世好男人/女人）';
        description = '恭喜你！你简直是恋爱界的一股清流！专一负责、三观超正，对感情认真到让人感动。你是那种删光了通讯录也不会删现任的人，是大家口中'别人家的对象'。继续保持，你值得最好的爱情！';
    } else if (totalScore >= 36 && totalScore <= 50) {
        type = '正常普通人（有点小毛病的大多数）';
        description = '你是大多数普通人的代表，有责任心但偶尔也会开小差。不会主动伤害别人，但遇到诱惑也可能会有小心思。总体来说还行，别太渣就行，毕竟大家都是凡人嘛～';
    } else if (totalScore >= 51 && totalScore <= 65) {
        type = '暧昧高手（海王/海后预备役）';
        description = '哎呀，你这是妥妥的暧昧体质啊！喜欢被追的感觉，享受这种若即若离的关系。鱼塘管理大师，备胎若干，但真心没几个。建议收收心，别最后把真心爱你的人也推走了！';
    } else if (totalScore >= 66 && totalScore <= 80) {
        type = '渣男/渣女本渣（人间清醒版）';
        description = '恭喜你喜提渣男/渣女称号！你把感情玩得明明白白，备胎养得风生水起，暧昧技术炉火纯青。你是那种'我可以渣，但别人不能渣我'的类型。建议：对得起自己的良心，别玩过火了，毕竟出来混总是要还的！';
    }
    
    personalityType.textContent = type;
    resultDescription.textContent = description;
    
    // 显示结果容器，隐藏卡片容器
    cardsContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

// 重置测试
function resetTest() {
    // 重置分数和当前题目
    scores = new Array(questions.length).fill(undefined);
    currentQuestion = 0;
    
    // 显示卡片容器，隐藏结果容器
    cardsContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    
    // 隐藏提交按钮
    submitBtn.style.display = 'none';
    
    // 重新加载第一题
    loadQuestion(currentQuestion);
}
