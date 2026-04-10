// 心理测试题目数据
const questions = [
    {
        text: "凌晨三点，你的'好哥哥/好姐姐'发来'在吗'，你：",
        options: [
            { text: "已读不回，第二天回个'昨晚睡着了'", score: 1, label: "A" },
            { text: "礼貌回个表情包，然后继续睡", score: 2, label: "B" },
            { text: "秒回'在呢宝~'，开始深夜emo时间", score: 3, label: "C" },
            { text: "直接弹语音过去：'怎么啦想我啦？'", score: 4, label: "D" }
        ]
    },
    {
        text: "你的置顶里有多少人？",
        options: [
            { text: "就对象一个，其他都是工作群", score: 1, label: "A" },
            { text: "对象+两三个死党", score: 2, label: "B" },
            { text: "七八个吧，都是'重要的人'", score: 3, label: "C" },
            { text: "置顶？我直接开小号，一个号聊一个", score: 4, label: "D" }
        ]
    },
    {
        text: "对象查岗问'在干嘛'，你实际上在：",
        options: [
            { text: "真的在加班/学习，如实汇报", score: 1, label: "A" },
            { text: "在打游戏，但说在工作", score: 2, label: "B" },
            { text: "在和异性吃饭，拍个照把旁边的人P掉", score: 3, label: "C" },
            { text: "在约会，但对象不是TA——'我在开会，晚点说'", score: 4, label: "D" }
        ]
    },
    {
        text: "你的微信分组标签是：",
        options: [
            { text: "家人、朋友、同事，没了", score: 1, label: "A" },
            { text: "有个'待定'分组，里面是没想好怎么归类的人", score: 2, label: "B" },
            { text: "'鱼塘1号''鱼塘2号''已上钩''待开发'...", score: 3, label: "C" },
            { text: "我不分组，我直接给每个人设置专属标签和备注", score: 4, label: "D" }
        ]
    },
    {
        text: "朋友圈发了一张自拍，配文'今天也很充实呢'，实际上：",
        options: [
            { text: "真的充实，记录美好生活", score: 1, label: "A" },
            { text: "在家躺了一天，但想显得自己很充实", score: 2, label: "B" },
            { text: "专门发给某个暧昧对象看的，仅TA可见", score: 3, label: "C" },
            { text: "群发钓鱼，看谁先点赞评论就来私聊谁", score: 4, label: "D" }
        ]
    },
    {
        text: "对象说'我想看你手机'，你：",
        options: [
            { text: "给啊，随便看，反正没啥见不得人的", score: 1, label: "A" },
            { text: "给，但会先'上个厕所'，顺便删点东西", score: 2, label: "B" },
            { text: "'这是不信任我！'然后大吵一架转移话题", score: 3, label: "C" },
            { text: "'我手机坏了/没电了/忘带了'，反正就是不给", score: 4, label: "D" }
        ]
    },
    {
        text: "你的'异性闺蜜'约你单独吃饭，你：",
        options: [
            { text: "拒绝，或者带上对象一起去", score: 1, label: "A" },
            { text: "去，但提前告诉对象，吃完汇报行程", score: 2, label: "B" },
            { text: "去，跟对象说'公司聚餐'", score: 3, label: "C" },
            { text: "去什么去，我直接约到家里'做饭'", score: 4, label: "D" }
        ]
    },
    {
        text: "分手后前任找你复合，你：",
        options: [
            { text: "看情况，如果还爱就复合，不爱就拉黑", score: 1, label: "A" },
            { text: "不复合，但留着当朋友，偶尔聊聊", score: 2, label: "B" },
            { text: "不复合，但寂寞时会约出来'叙叙旧'", score: 3, label: "C" },
            { text: "复合？我同时吊着三个前任，谁对我好我跟谁", score: 4, label: "D" }
        ]
    },
    {
        text: "你的聊天记录里出现最多的是：",
        options: [
            { text: "'好的''收到''哈哈哈'", score: 1, label: "A" },
            { text: "'在干嘛''吃了吗''早点睡'", score: 2, label: "B" },
            { text: "'宝''想你''亲亲'（对不同的人）", score: 3, label: "C" },
            { text: "'别告诉你对象''我们这样不好吧''刺激'", score: 4, label: "D" }
        ]
    },
    {
        text: "情人节你收到几份礼物？",
        options: [
            { text: "一份，来自对象", score: 1, label: "A" },
            { text: "一份，但偷偷羡慕别人收好几份", score: 2, label: "B" },
            { text: "两三份，不同人送的，我都收了", score: 3, label: "C" },
            { text: "数不清，反正我收礼物的袋子比垃圾桶还大", score: 4, label: "D" }
        ]
    },
    {
        text: "你的恋爱观是：",
        options: [
            { text: "一生一世一双人，认准了就一辈子", score: 1, label: "A" },
            { text: "不合适就分，但每段都认真对待", score: 2, label: "B" },
            { text: "多谈几个才知道谁最适合自己", score: 3, label: "C" },
            { text: "谈什么恋爱，养鱼不快乐吗？", score: 4, label: "D" }
        ]
    },
    {
        text: "对象问你'你爱我吗'，你：",
        options: [
            { text: "认真看着TA的眼睛说'爱'", score: 1, label: "A" },
            { text: "'当然爱啊'，然后亲一下糊弄过去", score: 2, label: "B" },
            { text: "'你怎么突然问这个'，转移话题", score: 3, label: "C" },
            { text: "'爱啊'——同时给手机里的5个人发'在想你'", score: 4, label: "D" }
        ]
    },
    {
        text: "你的'晚安'都发给谁？",
        options: [
            { text: "只发给对象，发完就睡觉", score: 1, label: "A" },
            { text: "对象+几个好朋友，群发", score: 2, label: "B" },
            { text: "不同的人不同的晚安，有的还加爱心", score: 3, label: "C" },
            { text: "我不发晚安，我发'睡了吗'，谁回我我就跟谁聊", score: 4, label: "D" }
        ]
    },
    {
        text: "你有多少个'只是朋友'的异性？",
        options: [
            { text: "没几个，而且都认识我对象", score: 1, label: "A" },
            { text: "有几个，但都是正常交往", score: 2, label: "B" },
            { text: "挺多的，每个都'只是朋友'，但都会单独约", score: 3, label: "C" },
            { text: "'朋友'？那是我的储备粮，懂？", score: 4, label: "D" }
        ]
    },
    {
        text: "你最容易对哪种人心动？",
        options: [
            { text: "对我好、专一、有责任感的人", score: 1, label: "A" },
            { text: "长得好看、有趣、聊得来的人", score: 2, label: "B" },
            { text: "对我好但又有对象的人（刺激）", score: 3, label: "C" },
            { text: "只要对我好就行，同时对我好就更好了", score: 4, label: "D" }
        ]
    },
    {
        text: "你的恋爱保质期一般是多久？",
        options: [
            { text: "一年以上，甚至好几年", score: 1, label: "A" },
            { text: "几个月到一年，看感觉", score: 2, label: "B" },
            { text: "几周吧，新鲜感过了就换", score: 3, label: "C" },
            { text: "保质期？我同时开好几瓶，喝完一瓶开一瓶", score: 4, label: "D" }
        ]
    },
    {
        text: "如果对象和异性聊天，你：",
        options: [
            { text: "信任TA，不会乱吃醋", score: 1, label: "A" },
            { text: "会不舒服，但会沟通", score: 2, label: "B" },
            { text: "'你可以聊，我也可以'，然后找异性报复性聊天", score: 3, label: "C" },
            { text: "双标——我可以聊，你不行", score: 4, label: "D" }
        ]
    },
    {
        text: "你的微信步数暴露了什么？",
        options: [
            { text: "宅家0步或者正常上下班", score: 1, label: "A" },
            { text: "偶尔有异常，但都能解释", score: 2, label: "B" },
            { text: "经常半夜还有步数，'我去夜跑了'", score: 3, label: "C" },
            { text: "我关了步数，或者专门开小号刷步数", score: 4, label: "D" }
        ]
    },
    {
        text: "你对'海王'这个词的态度是：",
        options: [
            { text: "鄙视，绝对不会成为这种人", score: 1, label: "A" },
            { text: "不理解，觉得这样很累", score: 2, label: "B" },
            { text: "有点羡慕，但觉得自己做不到", score: 3, label: "C" },
            { text: "别骂了别骂了，我就是", score: 4, label: "D" }
        ]
    },
    {
        text: "最后一题：你觉得自己渣吗？",
        options: [
            { text: "不渣，我对每段感情都很认真", score: 1, label: "A" },
            { text: "偶尔有点，但总体还行", score: 2, label: "B" },
            { text: "有点渣，但我快乐啊", score: 3, label: "C" },
            { text: "渣？这叫'给每个人一个家'，懂？", score: 4, label: "D" }
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
        type = '纯爱战神（恋爱脑晚期）';
        description = '绝了！你简直是当代稀有物种！专一得像条狗（褒义），恋爱脑晚期没救了。对象说东你绝不往西，对象说星星你绝不摘月亮。建议：保护好自己，别被渣男/渣女骗了，你这纯度太高了！';
    } else if (totalScore >= 36 && totalScore <= 50) {
        type = '正常人（有点小渣但不多）';
        description = '恭喜你，你是个正常人！会有小心思，但底线还在。偶尔想养鱼但鱼塘没水，想当海王但晕船。属于那种'想渣但渣不起来'的类型。继续保持，别学坏！';
    } else if (totalScore >= 51 && totalScore <= 65) {
        type = '海王/海后（鱼塘塘主）';
        description = '好家伙，鱼塘挺大啊！同时聊好几个是常态，'宝'字随口就来，爱心表情群发。你是那种'不主动、不拒绝、不负责'的资深玩家。建议：收收心，别最后翻车了！';
    } else if (totalScore >= 66 && totalScore <= 80) {
        type = '顶级渣男/渣女（祖师爷级别）';
        description = '卧槽，祖师爷来了！你把感情玩得明明白白，时间管理大师，多线操作666。手机里有三个微信，备忘录记着小号密码，'在开会'是你的口头禅。建议：做个人吧，天道好轮回！';
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
