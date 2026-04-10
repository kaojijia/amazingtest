// 心理测试题目数据 - 每个选项有固定的渣度值(1-4)
const rawQuestions = [
    {
        text: "凌晨三点，那个人发来在吗，你：",
        options: [
            { text: "已读不回，第二天说睡着了", level: 1 },
            { text: "礼貌回个表情包，然后继续睡", level: 2 },
            { text: "秒回在呢宝~，开始深夜畅聊", level: 3 },
            { text: "直接弹语音过去：怎么啦想我啦", level: 4 }
        ]
    },
    {
        text: "你的置顶里有多少人？",
        options: [
            { text: "就一个人，其他都是工作群", level: 1 },
            { text: "那个人加两三个死党", level: 2 },
            { text: "七八个吧，都是重要的人", level: 3 },
            { text: "开什么玩笑，小号了解一下", level: 4 }
        ]
    },
    {
        text: "那个人问在干嘛，你实际在：",
        options: [
            { text: "真的在加班，如实汇报", level: 1 },
            { text: "在打游戏，但说在工作", level: 2 },
            { text: "在和Ta的情敌吃饭，顺便把旁边P掉", level: 3 },
            { text: "在约会，但不是和那个人——开会中勿扰", level: 4 }
        ]
    },
    {
        text: "你的微信分组标签是：",
        options: [
            { text: "家人朋友同事，没了", level: 1 },
            { text: "有个待定分组，放着没想好的人", level: 2 },
            { text: "鱼塘1号鱼塘2号已上钩待开发...", level: 3 },
            { text: "分什么类，直接给每个人设专属备注", level: 4 }
        ]
    },
    {
        text: "朋友圈发自拍说今天也很充实，实际上：",
        options: [
            { text: "真的充实，记录美好生活", level: 1 },
            { text: "在家躺了一天，但想装得很充实", level: 2 },
            { text: "仅某人可见，懂得都懂", level: 3 },
            { text: "群发钓鱼，谁点赞私聊谁", level: 4 }
        ]
    },
    {
        text: "你的红/蓝颜约你单独吃饭，你：",
        options: [
            { text: "拒绝，或者带上那个人一起", level: 1 },
            { text: "去，但提前报备，吃完汇报", level: 2 },
            { text: "去，公司聚餐了解一下", level: 3 },
            { text: "约什么约，直接来家里做饭", level: 4 }
        ]
    },
    {
        text: "分手后前任求复合，你：",
        options: [
            { text: "看情况，还爱就复合不爱就拉黑", level: 1 },
            { text: "不复合，但留着当朋友偶尔聊", level: 2 },
            { text: "不复合，但寂寞时约出来叙叙旧", level: 3 },
            { text: "复合个屁，同时吊三个，谁对我好我跟谁", level: 4 }
        ]
    },
    {
        text: "你的聊天记录出现最多的是：",
        options: [
            { text: "好的收到哈哈哈", level: 1 },
            { text: "在干嘛吃了吗早点睡", level: 2 },
            { text: "宝想你亲亲（不同的人）", level: 3 },
            { text: "别告诉Ta对象我们这样不好吧刺激", level: 4 }
        ]
    },
    {
        text: "你的恋爱观是：",
        options: [
            { text: "一生一世一双人，认准就一辈子", level: 1 },
            { text: "不合适就分，但每段都认真", level: 2 },
            { text: "多谈几个才知道谁最适合", level: 3 },
            { text: "谈什么恋爱，养鱼它不香吗", level: 4 }
        ]
    },
    {
        text: "你的晚安都发给谁？",
        options: [
            { text: "只发给那个人，发完就睡", level: 1 },
            { text: "那个人加好朋友，群发", level: 2 },
            { text: "不同人不同晚安，有的还带爱心", level: 3 },
            { text: "发什么晚安，发睡了吗，谁回聊谁", level: 4 }
        ]
    },
    {
        text: "你有多少个只是好朋友的异性？",
        options: [
            { text: "没几个，都认识那个人", level: 1 },
            { text: "有几个，但正常交往", level: 2 },
            { text: "挺多，都只是朋友，但都单独约", level: 3 },
            { text: "朋友？那是储备粮，懂？", level: 4 }
        ]
    },
    {
        text: "你最容易对哪种人心动？",
        options: [
            { text: "对我好专一有责任感的", level: 1 },
            { text: "长得好看有趣聊得来的", level: 2 },
            { text: "对我好但又有对象的——刺激", level: 3 },
            { text: "对我好就行，同时对我好更好", level: 4 }
        ]
    },
    {
        text: "你的恋爱保质期多久？",
        options: [
            { text: "一年以上，甚至好几年", level: 1 },
            { text: "几个月到一年，看感觉", level: 2 },
            { text: "几周吧，新鲜感过了就换", level: 3 },
            { text: "保质期？同时开好几瓶，喝完开下一瓶", level: 4 }
        ]
    },
    {
        text: "如果那个人和别人聊天，你：",
        options: [
            { text: "信任，不会乱吃醋", level: 1 },
            { text: "不舒服，但会沟通", level: 2 },
            { text: "你可以我也可以，找人报复性聊天", level: 3 },
            { text: "双标——我可以，你不行", level: 4 }
        ]
    },
    {
        text: "你觉得自己渣吗？",
        options: [
            { text: "不渣，每段感情都认真", level: 1 },
            { text: "偶尔有点，但总体还行", level: 2 },
            { text: "有点渣，但我快乐啊", level: 3 },
            { text: "渣什么渣，这叫给每个人一个家", level: 4 }
        ]
    }
];

// 打乱数组顺序的函数
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 处理题目和选项，生成随机顺序
function processQuestions() {
    // 打乱题目顺序
    const shuffledQuestions = shuffleArray(rawQuestions);
    
    // 处理每个题目的选项
    return shuffledQuestions.map(question => {
        // 打乱选项顺序
        const shuffledOptions = shuffleArray(question.options);
        
        // 为每个选项分配A/B/C/D标签，分数等于其level值
        const labels = ['A', 'B', 'C', 'D'];
        const processedOptions = shuffledOptions.map((option, index) => ({
            text: option.text,
            score: option.level, // 分数等于原始level值
            label: labels[index]
        }));
        
        return {
            text: question.text,
            options: processedOptions
        };
    });
}

// 生成题目（页面加载时随机生成）
let questions = processQuestions();

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
    
    // 重新测试按钮 - 重新生成随机顺序
    restartBtn.addEventListener('click', function() {
        questions = processQuestions();
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
    
    if (totalScore >= 15 && totalScore <= 26) {
        type = '纯爱战神（恋爱脑晚期）';
        description = "绝了！你简直是当代稀有物种！专一得像条狗（褒义），恋爱脑晚期没救了。Ta说东你绝不往西，Ta说星星你绝不摘月亮。建议：保护好自己，别被渣了，你这纯度太高了！";
    } else if (totalScore >= 27 && totalScore <= 38) {
        type = '正常人（有点小渣但不多）';
        description = "恭喜你，你是个正常人！会有小心思，但底线还在。偶尔想养鱼但鱼塘没水，想当海王但晕船。属于那种想渣但渣不起来。继续加油，别学坏！";
    } else if (totalScore >= 39 && totalScore <= 50) {
        type = '海王/海后（鱼塘塘主）';
        description = "好家伙，鱼塘挺大啊！同时聊好几个是常态，宝字随口就来，爱心表情群发。你是那种不主动不拒绝不负责的资深玩家。建议：收收心，别最后翻车了！";
    } else if (totalScore >= 51 && totalScore <= 60) {
        type = '顶级渣男/渣女（祖师爷级别）';
        description = "卧槽，祖师爷来了！你把感情玩得明明白白，时间管理大师，多线操作666。手机里三个微信，备忘录记着小号密码，开会是你的口头禅。建议：做个人吧，天道好轮回！";
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
