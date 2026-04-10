// 心理测试逻辑
const questions = [
    {
        text: "当你遇到困难时，你通常会怎么做？",
        options: [
            { text: "立即寻求帮助", score: 1 },
            { text: "尝试自己解决", score: 2 },
            { text: "冷静分析后再行动", score: 3 },
            { text: "先放一放，稍后再处理", score: 4 }
        ]
    },
    {
        text: "在社交场合中，你更倾向于：",
        options: [
            { text: "主动与人交流", score: 1 },
            { text: "等待别人主动", score: 2 },
            { text: "选择性地与熟悉的人交流", score: 3 },
            { text: "尽量保持低调", score: 4 }
        ]
    },
    {
        text: "当你收到批评时，你会：",
        options: [
            { text: "感到沮丧和难过", score: 1 },
            { text: "接受并反思", score: 2 },
            { text: "分析批评的合理性", score: 3 },
            { text: "认为批评不公正", score: 4 }
        ]
    },
    {
        text: "你如何看待未来的不确定性？",
        options: [
            { text: "感到焦虑和不安", score: 1 },
            { text: "保持谨慎但乐观", score: 2 },
            { text: "视为挑战和机遇", score: 3 },
            { text: "不太在意，顺其自然", score: 4 }
        ]
    },
    {
        text: "在团队合作中，你通常扮演什么角色？",
        options: [
            { text: "跟随者，执行任务", score: 1 },
            { text: "协调者，确保团队和谐", score: 2 },
            { text: "领导者，制定计划", score: 3 },
            { text: "思考者，提供创意", score: 4 }
        ]
    }
];

let currentQuestion = 0;
let scores = [];

// DOM元素
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const finalScore = document.getElementById('final-score');
const resultDescription = document.getElementById('result-description');
const restartBtn = document.getElementById('restart-btn');

// 初始化测试
document.addEventListener('DOMContentLoaded', function() {
    loadQuestion(currentQuestion);
    
    // 选项点击事件
    optionsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('option')) {
            // 移除其他选项的选中状态
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            // 添加当前选项的选中状态
            e.target.classList.add('selected');
            // 保存分数
            scores[currentQuestion] = parseInt(e.target.dataset.score);
        }
    });
    
    // 上一题按钮
    prevBtn.addEventListener('click', function() {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion(currentQuestion);
        }
    });
    
    // 下一题按钮
    nextBtn.addEventListener('click', function() {
        // 确保当前题目有选择
        if (scores[currentQuestion] === undefined) {
            alert('请选择一个选项');
            return;
        }
        
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            loadQuestion(currentQuestion);
        } else {
            // 测试完成，显示结果
            showResult();
        }
    });
    
    // 重新测试按钮
    restartBtn.addEventListener('click', function() {
        currentQuestion = 0;
        scores = [];
        questionContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        loadQuestion(currentQuestion);
    });
});

// 加载题目
function loadQuestion(index) {
    const question = questions[index];
    questionNumber.textContent = `问题 ${index + 1}/${questions.length}`;
    questionText.textContent = question.text;
    
    // 清空选项
    optionsContainer.innerHTML = '';
    
    // 添加选项
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.dataset.score = option.score;
        optionElement.textContent = option.text;
        
        // 如果已经选择过，保持选中状态
        if (scores[index] === option.score) {
            optionElement.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionElement);
    });
    
    // 更新按钮状态
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === questions.length - 1 ? '完成测试' : '下一题';
}

// 显示结果
function showResult() {
    // 计算总分
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    finalScore.textContent = totalScore;
    
    // 根据分数显示结果描述
    let description = '';
    if (totalScore <= 8) {
        description = '你是一个倾向于依赖他人、情感较为敏感的人。你在面对挑战时可能会感到不安，需要他人的支持和鼓励。建议你逐渐培养自己的独立解决问题的能力，增强自信心。';
    } else if (totalScore <= 12) {
        description = '你是一个平衡型的人，既能够独立思考，也愿意寻求帮助。你在面对困难时能够保持冷静，并有一定的适应能力。继续保持这种平衡的心态，会让你在生活和工作中更加顺利。';
    } else if (totalScore <= 16) {
        description = '你是一个理性、独立的人，善于分析问题并找到解决方案。你在团队中通常扮演重要角色，能够带领大家克服困难。建议你在保持独立的同时，多考虑他人的感受，增强团队合作能力。';
    } else {
        description = '你是一个非常独立、有自己想法的人。你倾向于按照自己的方式做事，不太受外界影响。这种特质让你在某些领域表现出色，但可能在团队合作中需要更多的沟通和妥协。';
    }
    
    resultDescription.textContent = description;
    
    // 显示结果容器，隐藏题目容器
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}