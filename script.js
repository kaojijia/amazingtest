// 心理测试题目数据
const questions = [
    {
        text: "面对陌生人的主动搭讪，你的第一反应是？",
        options: [
            { text: "礼貌拒绝，不轻易回应", score: 1, label: "A" },
            { text: "简单寒暄几句，不再深入交流", score: 2, label: "B" },
            { text: "热情回应，愿意加联系方式", score: 3, label: "C" },
            { text: "主动拉近关系，开启暧昧聊天", score: 4, label: "D" }
        ]
    },
    {
        text: "你同时会和几个异性保持频繁聊天？",
        options: [
            { text: "最多1个，且是明确好感对象", score: 1, label: "A" },
            { text: "2-3个，普通朋友相处", score: 2, label: "B" },
            { text: "4-5个，偶尔暧昧互动", score: 3, label: "C" },
            { text: "5个以上，广泛保持暧昧关系", score: 4, label: "D" }
        ]
    },
    {
        text: "当你有好感的人向你表白，你会？",
        options: [
            { text: "认真考虑，明确给出答复", score: 1, label: "A" },
            { text: "犹豫几天，再确定是否在一起", score: 2, label: "B" },
            { text: "先答应，相处看看是否合适", score: 3, label: "C" },
            { text: "不拒绝也不答应，继续吊着对方", score: 4, label: "D" }
        ]
    },
    {
        text: "和异性相处时，你是否会刻意保持肢体边界？",
        options: [
            { text: "始终保持安全距离，绝不越界", score: 1, label: "A" },
            { text: "普通接触可以，避免亲密肢体动作", score: 2, label: "B" },
            { text: "偶尔有亲密肢体接触，不抗拒", score: 3, label: "C" },
            { text: "主动制造肢体接触，拉近关系", score: 4, label: "D" }
        ]
    },
    {
        text: "你会在朋友圈公开自己的恋爱状态吗？",
        options: [
            { text: "只要恋爱就会公开", score: 1, label: "A" },
            { text: "关系稳定后再公开", score: 2, label: "B" },
            { text: "看心情，不想公开就不发", score: 3, label: "C" },
            { text: "从不公开，刻意隐藏恋爱关系", score: 4, label: "D" }
        ]
    },
    {
        text: "面对异性的暧昧信号，你会？",
        options: [
            { text: "直接回避，不接收不回应", score: 1, label: "A" },
            { text: "假装不懂，保持普通朋友关系", score: 2, label: "B" },
            { text: "默默接受，偶尔回应暧昧", score: 3, label: "C" },
            { text: "主动迎合，升级暧昧氛围", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会对伴侣隐瞒自己的异性社交？",
        options: [
            { text: "完全不会，所有社交都坦诚告知", score: 1, label: "A" },
            { text: "偶尔隐瞒无关紧要的异性交往", score: 2, label: "B" },
            { text: "经常隐瞒和异性的暧昧互动", score: 3, label: "C" },
            { text: "刻意隐瞒所有异性社交，营造专一形象", score: 4, label: "D" }
        ]
    },
    {
        text: "恋爱后，你还会和其他异性单独约会吗？",
        options: [
            { text: "绝对不会，主动拒绝所有单独邀约", score: 1, label: "A" },
            { text: "必要的公事可以，私事绝不单独见面", score: 2, label: "B" },
            { text: "偶尔和异性单独吃饭，不告诉伴侣", score: 3, label: "C" },
            { text: "经常和不同异性单独约会，毫无顾忌", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会同时对多个异性产生好感？",
        options: [
            { text: "不会，同一时间只喜欢一个人", score: 1, label: "A" },
            { text: "偶尔会，但不会付诸行动", score: 2, label: "B" },
            { text: "经常会，且和多人保持好感互动", score: 3, label: "C" },
            { text: "天生多情，同时对多人表达好感", score: 4, label: "D" }
        ]
    },
    {
        text: "当伴侣质疑你和异性的关系，你会？",
        options: [
            { text: "耐心解释，主动证明自己的清白", score: 1, label: "A" },
            { text: "简单解释，觉得伴侣多想了", score: 2, label: "B" },
            { text: "不耐烦，指责伴侣不信任自己", score: 3, label: "C" },
            { text: "直接发火，转移话题回避问题", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会给异性取专属暧昧昵称？",
        options: [
            { text: "绝不会，只对伴侣用亲密称呼", score: 1, label: "A" },
            { text: "偶尔给好朋友取，无暧昧意思", score: 2, label: "B" },
            { text: "经常给有好感的异性取", score: 3, label: "C" },
            { text: "给所有关系好的异性都取专属昵称", score: 4, label: "D" }
        ]
    },
    {
        text: "面对异性的礼物，你会？",
        options: [
            { text: "只收伴侣的，其他异性一律拒绝", score: 1, label: "A" },
            { text: "普通朋友的小礼物可以收", score: 2, label: "B" },
            { text: "只要是礼物都收，不拒绝", score: 3, label: "C" },
            { text: "主动暗示异性给自己送礼物", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会在深夜和异性聊私密话题？",
        options: [
            { text: "绝不会，深夜只和伴侣沟通", score: 1, label: "A" },
            { text: "偶尔公事会，绝不聊私密内容", score: 2, label: "B" },
            { text: "经常和好感异性深夜聊私密话题", score: 3, label: "C" },
            { text: "每天深夜和多个异性聊暧昧私密话题", score: 4, label: "D" }
        ]
    },
    {
        text: "恋爱中，你是否会嫌弃伴侣的缺点？",
        options: [
            { text: "接纳伴侣所有缺点，共同磨合", score: 1, label: "A" },
            { text: "偶尔嫌弃，但会包容沟通", score: 2, label: "B" },
            { text: "经常嫌弃，忍不住和别人对比", score: 3, label: "C" },
            { text: "极度嫌弃，随时想找更好的替代品", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会为了迎合异性，刻意伪装自己？",
        options: [
            { text: "不会，始终保持真实的自己", score: 1, label: "A" },
            { text: "稍微改变小习惯，不刻意伪装", score: 2, label: "B" },
            { text: "刻意伪装优点，隐藏缺点", score: 3, label: "C" },
            { text: "完全伪装成异性喜欢的样子", score: 4, label: "D" }
        ]
    },
    {
        text: "当你不爱伴侣了，你会？",
        options: [
            { text: "坦诚说清楚，和平分手", score: 1, label: "A" },
            { text: "慢慢疏远，等对方察觉后提分手", score: 2, label: "B" },
            { text: "一边拖着，一边寻找下一个目标", score: 3, label: "C" },
            { text: "直接出轨，找到下家再分手", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会和前任保持联系？",
        options: [
            { text: "彻底断联，不再往来", score: 1, label: "A" },
            { text: "偶尔有事联系，无其他交集", score: 2, label: "B" },
            { text: "经常联系，保持朋友以上的关系", score: 3, label: "C" },
            { text: "和多个前任保持暧昧联系", score: 4, label: "D" }
        ]
    },
    {
        text: "和异性聊天时，你是否会发表情包暧昧互动？",
        options: [
            { text: "只用普通表情包，无暧昧内容", score: 1, label: "A" },
            { text: "偶尔用可爱表情包，无刻意暧昧", score: 2, label: "B" },
            { text: "经常用暧昧表情包互动", score: 3, label: "C" },
            { text: "全程用暧昧表情包，引导暧昧聊天", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会对异性做出承诺？",
        options: [
            { text: "只说自己能做到的承诺，说到做到", score: 1, label: "A" },
            { text: "偶尔承诺，尽力去完成", score: 2, label: "B" },
            { text: "轻易承诺，但很少兑现", score: 3, label: "C" },
            { text: "随意许下承诺，只为哄对方开心", score: 4, label: "D" }
        ]
    },
    {
        text: "恋爱中，你是否会主动报备自己的行踪？",
        options: [
            { text: "主动及时报备，让伴侣安心", score: 1, label: "A" },
            { text: "被问到时会如实报备", score: 2, label: "B" },
            { text: "刻意隐瞒部分行踪，不主动说", score: 3, label: "C" },
            { text: "编造谎言，隐瞒真实行踪", score: 4, label: "D" }
        ]
    },
    {
        text: "面对异性的表白，即使不喜欢，你会？",
        options: [
            { text: "直接拒绝，不拖泥带水", score: 1, label: "A" },
            { text: "委婉拒绝，保持普通朋友", score: 2, label: "B" },
            { text: "不拒绝，享受被追求的感觉", score: 3, label: "C" },
            { text: "假意接受，利用对方的感情", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会在社交平台发布暧昧动态？",
        options: [
            { text: "绝不会，只发布正常生活内容", score: 1, label: "A" },
            { text: "偶尔发布伤感动态，无指向性", score: 2, label: "B" },
            { text: "发布模糊暧昧动态，吸引异性关注", score: 3, label: "C" },
            { text: "专门发布针对性暧昧动态，钓鱼互动", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会和异性共享私密账号（如游戏、社交小号）？",
        options: [
            { text: "只和伴侣共享，其他人绝不", score: 1, label: "A" },
            { text: "关系很好的同性朋友可以，异性不行", score: 2, label: "B" },
            { text: "和好感异性偶尔共享", score: 3, label: "C" },
            { text: "和多个异性共享私密账号，毫无保留", score: 4, label: "D" }
        ]
    },
    {
        text: "当有更好的异性追求你，你恋爱后会？",
        options: [
            { text: "直接拒绝，坚守现有感情", score: 1, label: "A" },
            { text: "内心动摇，但不会做出背叛行为", score: 2, label: "B" },
            { text: "偷偷联系，对比现任和追求者", score: 3, label: "C" },
            { text: "果断分手，和新异性在一起", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会把自己的情感经历全部告诉伴侣？",
        options: [
            { text: "毫无保留，坦诚所有过往", score: 1, label: "A" },
            { text: "选择性说，不隐瞒关键经历", score: 2, label: "B" },
            { text: "隐瞒部分暧昧经历", score: 3, label: "C" },
            { text: "编造虚假情感经历，欺骗伴侣", score: 4, label: "D" }
        ]
    },
    {
        text: "和异性相处，你是否会有过度关心的行为？",
        options: [
            { text: "只关心伴侣，对异性保持分寸", score: 1, label: "A" },
            { text: "普通朋友式关心，不过度", score: 2, label: "B" },
            { text: "对好感异性过度关心", score: 3, label: "C" },
            { text: "对所有异性都过度关心，营造暖男/暖女人设", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会因为异性的物质条件而接近对方？",
        options: [
            { text: "绝不会，只看感情和人品", score: 1, label: "A" },
            { text: "物质是参考，但不是主要因素", score: 2, label: "B" },
            { text: "比较看重物质，会主动接近条件好的", score: 3, label: "C" },
            { text: "只看重物质，刻意讨好物质条件好的异性", score: 4, label: "D" }
        ]
    },
    {
        text: "恋爱中，你是否会控制伴侣的社交？",
        options: [
            { text: "不会，尊重伴侣的社交自由", score: 1, label: "A" },
            { text: "偶尔过问，不强行控制", score: 2, label: "B" },
            { text: "限制伴侣和异性交往，自己却随意", score: 3, label: "C" },
            { text: "全面控制伴侣社交，自己却到处暧昧", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会在背后议论伴侣的缺点？",
        options: [
            { text: "绝不会，在外人面前维护伴侣", score: 1, label: "A" },
            { text: "只和亲密家人吐槽，不对外宣扬", score: 2, label: "B" },
            { text: "和朋友经常议论伴侣缺点", score: 3, label: "C" },
            { text: "到处和异性吐槽伴侣，博取同情", score: 4, label: "D" }
        ]
    },
    {
        text: "当你和伴侣吵架，你会？",
        options: [
            { text: "冷静沟通，主动解决问题", score: 1, label: "A" },
            { text: "冷战几天，再慢慢和好", score: 2, label: "B" },
            { text: "找异性倾诉，寻求安慰", score: 3, label: "C" },
            { text: "趁机和其他异性暧昧，报复伴侣", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会刻意记住异性的喜好？",
        options: [
            { text: "只记住伴侣的喜好", score: 1, label: "A" },
            { text: "好朋友的喜好会简单记住", score: 2, label: "B" },
            { text: "记住所有好感异性的喜好", score: 3, label: "C" },
            { text: "刻意记住所有异性喜好，投其所好", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会接受异性的单独邀约？",
        options: [
            { text: "只接受伴侣的单独邀约", score: 1, label: "A" },
            { text: "公开场合的普通邀约可以，私下拒绝", score: 2, label: "B" },
            { text: "偶尔接受好感异性的单独邀约", score: 3, label: "C" },
            { text: "来者不拒，接受所有异性单独邀约", score: 4, label: "D" }
        ]
    },
    {
        text: "恋爱中，你是否会对伴侣忽冷忽热？",
        options: [
            { text: "始终保持稳定的态度，温柔专一", score: 1, label: "A" },
            { text: "偶尔情绪不好会冷淡，很快恢复", score: 2, label: "B" },
            { text: "经常忽冷忽热，让伴侣猜不透", score: 3, label: "C" },
            { text: "刻意忽冷忽热，拿捏伴侣的情绪", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会和异性聊自己伴侣的不好？",
        options: [
            { text: "绝不会，只说伴侣的优点", score: 1, label: "A" },
            { text: "偶尔吐槽，不刻意贬低", score: 2, label: "B" },
            { text: "经常和异性抱怨伴侣", score: 3, label: "C" },
            { text: "主动和异性说伴侣坏话，制造暧昧机会", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会为了陪伴异性，忽略伴侣？",
        options: [
            { text: "绝不会，永远把伴侣放在第一位", score: 1, label: "A" },
            { text: "偶尔有事会忽略，事后道歉", score: 2, label: "B" },
            { text: "经常为了异性忽略伴侣", score: 3, label: "C" },
            { text: "始终把异性放在首位，伴侣无关紧要", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会假装单身，吸引异性？",
        options: [
            { text: "绝不会，主动表明恋爱状态", score: 1, label: "A" },
            { text: "不主动说单身，也不刻意说恋爱", score: 2, label: "B" },
            { text: "被问到时含糊其辞，假装单身", score: 3, label: "C" },
            { text: "到处宣称自己单身，广泛交友", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会同时和多个异性暧昧？",
        options: [
            { text: "绝对不会，只专注一段感情", score: 1, label: "A" },
            { text: "不会，最多和一个人保持好感", score: 2, label: "B" },
            { text: "偶尔和2-3个异性暧昧", score: 3, label: "C" },
            { text: "长期和多个异性保持暧昧关系", score: 4, label: "D" }
        ]
    },
    {
        text: "面对异性的求助，你会？",
        options: [
            { text: "量力而行，不刻意讨好", score: 1, label: "A" },
            { text: "普通朋友会帮忙，不过度付出", score: 2, label: "B" },
            { text: "无条件帮忙，换取好感", score: 3, label: "C" },
            { text: "主动帮忙，借机发展暧昧关系", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会修改手机密码，不让伴侣查看手机？",
        options: [
            { text: "密码公开，允许伴侣随时查看", score: 1, label: "A" },
            { text: "有密码，但伴侣想看可以解锁", score: 2, label: "B" },
            { text: "修改密码，找借口不让伴侣查看", score: 3, label: "C" },
            { text: "手机设置多重密码，彻底隐藏隐私", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会对伴侣撒谎？",
        options: [
            { text: "从不说谎，坦诚相待", score: 1, label: "A" },
            { text: "善意谎言偶尔说，不伤害感情", score: 2, label: "B" },
            { text: "经常撒谎，隐瞒自己的行为", score: 3, label: "C" },
            { text: "满嘴谎言，全是欺骗伴侣的话", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会在意伴侣的异性朋友？",
        options: [
            { text: "信任伴侣，不过度在意", score: 1, label: "A" },
            { text: "会留意，但不干涉", score: 2, label: "B" },
            { text: "很在意，经常吃醋怀疑", score: 3, label: "C" },
            { text: "毫不在意，自己也和异性暧昧", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会主动和异性断联，忠于感情？",
        options: [
            { text: "恋爱后主动疏远所有异性", score: 1, label: "A" },
            { text: "慢慢疏远，保持普通距离", score: 2, label: "B" },
            { text: "不主动断联，依旧频繁互动", score: 3, label: "C" },
            { text: "拒绝断联，反而增加异性交往", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会把伴侣的付出当成理所当然？",
        options: [
            { text: "不会，懂得感恩和回报", score: 1, label: "A" },
            { text: "偶尔会，但会及时弥补", score: 2, label: "B" },
            { text: "经常觉得理所当然，不珍惜", score: 3, label: "C" },
            { text: "完全无视伴侣付出，只索取不付出", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会为了暧昧，忽略身边人的感受？",
        options: [
            { text: "绝不会，始终顾及身边人", score: 1, label: "A" },
            { text: "偶尔忽略，事后道歉", score: 2, label: "B" },
            { text: "经常忽略，只在乎暧昧对象", score: 3, label: "C" },
            { text: "完全不顾及，以自我暧昧为中心", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会在恋爱中留后路？",
        options: [
            { text: "不会，全身心投入这段感情", score: 1, label: "A" },
            { text: "稍微保留自我，不算留后路", score: 2, label: "B" },
            { text: "悄悄留后路，和异性保持联系", score: 3, label: "C" },
            { text: "提前找好下家，随时准备分手", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会夸赞除伴侣以外的异性？",
        options: [
            { text: "礼貌性夸赞，无其他意思", score: 1, label: "A" },
            { text: "偶尔真心夸赞，不刻意", score: 2, label: "B" },
            { text: "经常刻意夸赞，博取好感", score: 3, label: "C" },
            { text: "无脑夸赞所有异性，制造暧昧", score: 4, label: "D" }
        ]
    },
    {
        text: "当异性主动暧昧，你恋爱后会？",
        options: [
            { text: "直接拉黑删除，绝不回应", score: 1, label: "A" },
            { text: "礼貌拒绝，表明自己的恋爱状态", score: 2, label: "B" },
            { text: "默默接受，不主动也不拒绝", score: 3, label: "C" },
            { text: "主动回应，开启地下暧昧", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会记得和伴侣的重要纪念日？",
        options: [
            { text: "全部记得，还会提前准备惊喜", score: 1, label: "A" },
            { text: "大部分记得，偶尔忘记", score: 2, label: "B" },
            { text: "经常忘记，需要伴侣提醒", score: 3, label: "C" },
            { text: "从不记得，也不在意", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会和异性分享自己的恋爱日常？",
        options: [
            { text: "很少分享，只和亲密家人说", score: 1, label: "A" },
            { text: "偶尔分享，不涉及私密内容", score: 2, label: "B" },
            { text: "经常分享，刻意说伴侣不好", score: 3, label: "C" },
            { text: "编造恋爱日常，和异性暧昧吐槽", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会为了伴侣，拒绝所有异性社交？",
        options: [
            { text: "愿意，主动杜绝无效异性社交", score: 1, label: "A" },
            { text: "愿意拒绝不必要的异性社交", score: 2, label: "B" },
            { text: "不愿意，觉得自己需要自由", score: 3, label: "C" },
            { text: "坚决拒绝，认为自己可以有异性朋友", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会利用异性的感情，达到自己的目的？",
        options: [
            { text: "绝不会，尊重每一份感情", score: 1, label: "A" },
            { text: "不会，不想伤害别人", score: 2, label: "B" },
            { text: "偶尔会，无意识利用", score: 3, label: "C" },
            { text: "经常会，刻意利用异性感情", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会在社交软件上和异性撩骚？",
        options: [
            { text: "完全不会，坚守感情底线", score: 1, label: "A" },
            { text: "普通聊天可以，绝不撩骚", score: 2, label: "B" },
            { text: "偶尔和好感异性撩骚", score: 3, label: "C" },
            { text: "每天和不同异性撩骚", score: 4, label: "D" }
        ]
    },
    {
        text: "面对感情，你的态度是？",
        options: [
            { text: "专一忠诚，一生一世一双人", score: 1, label: "A" },
            { text: "认真对待，不轻易背叛", score: 2, label: "B" },
            { text: "随缘相处，不行就换", score: 3, label: "C" },
            { text: "游戏人间，不想被一段感情束缚", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会原谅伴侣的背叛？",
        options: [
            { text: "绝不原谅，直接分手", score: 1, label: "A" },
            { text: "看情况，偶尔一次可以考虑", score: 2, label: "B" },
            { text: "为了感情，勉强原谅", score: 3, label: "C" },
            { text: "无所谓，自己也会背叛", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会主动追求自己喜欢的人？",
        options: [
            { text: "会，专一追求，不暧昧", score: 1, label: "A" },
            { text: "会，慢慢接触，确定心意再行动", score: 2, label: "B" },
            { text: "会，同时追求多个人", score: 3, label: "C" },
            { text: "不会，只享受被追求，暧昧养鱼", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会对伴侣有足够的耐心？",
        options: [
            { text: "始终有耐心，包容伴侣", score: 1, label: "A" },
            { text: "大部分时候有，偶尔不耐烦", score: 2, label: "B" },
            { text: "缺乏耐心，容易发脾气", score: 3, label: "C" },
            { text: "毫无耐心，只想满足自己", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会在意别人说你花心？",
        options: [
            { text: "在意，始终约束自己的行为", score: 1, label: "A" },
            { text: "在意，尽量避免让人误会", score: 2, label: "B" },
            { text: "不太在意，自己开心就好", score: 3, label: "C" },
            { text: "毫不在意，觉得是自己的本事", score: 4, label: "D" }
        ]
    },
    {
        text: "恋爱中，你是否会主动为伴侣付出？",
        options: [
            { text: "主动付出，不求回报", score: 1, label: "A" },
            { text: "被动付出，有回应就好", score: 2, label: "B" },
            { text: "很少付出，只等对方主动", score: 3, label: "C" },
            { text: "从不付出，一味索取", score: 4, label: "D" }
        ]
    },
    {
        text: "你是否会和异性有超越朋友的对话？",
        options: [
            { text: "绝不会，坚守朋友边界", score: 1, label: "A" },
            { text: "偶尔有，无刻意越界", score: 2, label: "B" },
            { text: "经常有，暧昧对话不断", score: 3, label: "C" },
            { text: "全程都是超越朋友的暧昧对话", score: 4, label: "D" }
        ]
    },
    {
        text: "做完测试，你对自己情感态度的认知是？",
        options: [
            { text: "专一真诚，对待感情负责任", score: 1, label: "A" },
            { text: "普通正常，有边界感", score: 2, label: "B" },
            { text: "偶尔暧昧，不够坚定", score: 3, label: "C" },
            { text: "随性而为，不在意感情规则", score: 4, label: "D" }
        ]
    }
];

let scores = new Array(questions.length).fill(undefined);

// DOM元素
const questionsContainer = document.getElementById('questions-container');
const resultContainer = document.getElementById('result-container');
const finalScore = document.getElementById('final-score');
const personalityType = document.getElementById('personality-type');
const resultDescription = document.getElementById('result-description');
const restartBtn = document.getElementById('restart-btn');

// 初始化测试
document.addEventListener('DOMContentLoaded', function() {
    initQuestions();
    addProgressBar();
    
    // 选项点击事件
    questionsContainer.addEventListener('click', function(e) {
        if (e.target.closest('.option')) {
            const optionElement = e.target.closest('.option');
            const questionIndex = parseInt(optionElement.dataset.question);
            
            // 移除当前问题的其他选项的选中状态
            document.querySelectorAll(`.option[data-question="${questionIndex}"]`).forEach(option => {
                option.classList.remove('selected');
            });
            
            // 添加当前选项的选中状态
            optionElement.classList.add('selected');
            
            // 保存分数
            scores[questionIndex] = parseInt(optionElement.dataset.score);
            
            // 更新进度条
            updateProgressBar();
        }
    });
    
    // 重新测试按钮
    restartBtn.addEventListener('click', function() {
        resetTest();
    });
});

// 添加进度条
function addProgressBar() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.innerHTML = `
        <div class="progress-bar">
            <div class="progress-fill" id="progress-fill" style="width: 0%"></div>
        </div>
        <div class="progress-text" id="progress-text">已完成: 0/60</div>
    `;
    questionsContainer.insertBefore(progressContainer, questionsContainer.firstChild);
}

// 更新进度条
function updateProgressBar() {
    const answeredCount = scores.filter(score => score !== undefined).length;
    const progressPercentage = (answeredCount / questions.length) * 100;
    
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `已完成: ${answeredCount}/${questions.length}`;
    
    // 如果所有题目都回答了，添加提交按钮
    if (answeredCount === questions.length) {
        addSubmitButton();
    }
}

// 添加提交按钮
function addSubmitButton() {
    let submitContainer = document.querySelector('.submit-container');
    if (!submitContainer) {
        submitContainer = document.createElement('div');
        submitContainer.className = 'submit-container';
        submitContainer.innerHTML = '<button id="submit-btn">提交测试</button>';
        questionsContainer.appendChild(submitContainer);
        
        // 绑定提交事件
        document.getElementById('submit-btn').addEventListener('click', function() {
            if (scores.includes(undefined)) {
                alert('请回答所有问题');
                return;
            }
            showResult();
        });
    }
}

// 初始化题目
function initQuestions() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        const questionNumber = document.createElement('h3');
        questionNumber.className = 'question-number';
        questionNumber.textContent = `问题 ${index + 1}`;
        
        const questionText = document.createElement('p');
        questionText.className = 'question-text';
        questionText.textContent = question.text;
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';
        
        question.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.dataset.question = index;
            optionDiv.dataset.score = option.score;
            
            const optionLabel = document.createElement('span');
            optionLabel.className = 'option-label';
            optionLabel.textContent = option.label;
            
            const optionText = document.createElement('span');
            optionText.className = 'option-text';
            optionText.textContent = option.text;
            
            optionDiv.appendChild(optionLabel);
            optionDiv.appendChild(optionText);
            optionsContainer.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(questionNumber);
        questionDiv.appendChild(questionText);
        questionDiv.appendChild(optionsContainer);
        questionsContainer.appendChild(questionDiv);
    });
}

// 显示结果
function showResult() {
    // 计算总分
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    finalScore.textContent = totalScore;
    
    // 根据分数显示结果描述
    let type = '';
    let description = '';
    
    if (totalScore >= 60 && totalScore <= 80) {
        type = '真诚专一型（专一爱人）';
        description = '你是一个对待感情极度认真、专一忠诚的人，拥有极强的边界感和责任感，无论是恋爱还是单身，都能坚守情感底线，从不暧昧、从不背叛，眼里心里只有认可的人，懂得尊重伴侣、珍惜感情，是值得托付终身的人，绝对不会出现渣男渣女行为。';
    } else if (totalScore >= 81 && totalScore <= 120) {
        type = '中级平衡型（普通正常人）';
        description = '你是大多数人中的普通情感人格，对待感情有基本的责任感，有清晰的社交边界，不会主动暧昧，也不会轻易背叛感情。偶尔会有社交分寸上的小疏忽，对异性的好感把控不够精准，但能及时纠正，不会跨越情感底线，既不刻意讨好异性，也不玩弄感情，是三观正常、情感态度端正的人。';
    } else if (totalScore >= 121 && totalScore <= 160) {
        type = '暧昧养鱼型（暧昧者）';
        description = '你对待感情不够坚定，缺乏足够的边界感，很容易陷入暧昧关系中，享受被异性围绕、被追捧的感觉，习惯不拒绝、不主动、不负责的相处模式，经常和多个异性保持模糊的情感关系，既不明确在一起，也不彻底断开，属于典型的暧昧养鱼人格，容易伤害到真心对待你的人。';
    } else if (totalScore >= 161 && totalScore <= 240) {
        type = '情感玩弄型（渣男/渣女）';
        description = '你对待感情毫无责任感和底线，把感情当成游戏，习惯刻意伪装自己、欺骗他人，擅长暧昧撩骚、忽冷忽热、脚踏多条船，从不珍惜真心、从不兑现承诺，只在乎自己的感受，不断索取、不断背叛，完全无视情感规则，是典型的渣男/渣女人格，习惯性伤害身边的人。';
    }
    
    personalityType.textContent = type;
    resultDescription.textContent = description;
    
    // 显示结果容器，隐藏题目容器
    questionsContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // 滚动到页面顶部
    window.scrollTo(0, 0);
}

// 重置测试
function resetTest() {
    // 重置分数
    scores = new Array(questions.length).fill(undefined);
    
    // 移除题目和提交按钮，保留测试说明
    const testIntro = document.querySelector('.test-intro');
    questionsContainer.innerHTML = '';
    questionsContainer.appendChild(testIntro);
    
    // 重新初始化
    initQuestions();
    addProgressBar();
    
    // 显示题目容器，隐藏结果容器
    questionsContainer.style.display = 'block';
    resultContainer.style.display = 'none';
}
