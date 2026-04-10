// 心理测试逻辑
let scores = new Array(5).fill(undefined);

// DOM元素
const questionsContainer = document.getElementById('questions-container');
const resultContainer = document.getElementById('result-container');
const finalScore = document.getElementById('final-score');
const resultDescription = document.getElementById('result-description');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

// 初始化测试
document.addEventListener('DOMContentLoaded', function() {
    // 选项点击事件
    questionsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('option')) {
            const questionIndex = parseInt(e.target.dataset.question);
            
            // 移除当前问题的其他选项的选中状态
            document.querySelectorAll(`.option[data-question="${questionIndex}"]`).forEach(option => {
                option.classList.remove('selected');
            });
            
            // 添加当前选项的选中状态
            e.target.classList.add('selected');
            
            // 保存分数
            scores[questionIndex] = parseInt(e.target.dataset.score);
        }
    });
    
    // 提交按钮
    submitBtn.addEventListener('click', function() {
        // 验证所有问题都已回答
        if (scores.includes(undefined)) {
            alert('请回答所有问题');
            return;
        }
        
        // 测试完成，显示结果
        showResult();
    });
    
    // 重新测试按钮
    restartBtn.addEventListener('click', function() {
        // 重置分数
        scores = new Array(5).fill(undefined);
        
        // 移除所有选项的选中状态
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // 显示题目容器，隐藏结果容器
        questionsContainer.style.display = 'block';
        resultContainer.style.display = 'none';
    });
});

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
    questionsContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}