import { readFileSync } from "node:fs";

const hsk1Words = JSON.parse(readFileSync(new URL("../src/data/hsk1.json", import.meta.url), "utf8"));
const hsk2Words = JSON.parse(readFileSync(new URL("../src/data/hsk2.json", import.meta.url), "utf8"));
const officialHsk2Increment = "吧 白 百 帮助 报纸 比 便宜 别 长 唱歌 出 穿 船 次 从 错 打篮球 大家 但是 到 得 等 弟弟 第一 懂 对 房间 非常 服务员 高 告诉 哥哥 给 公共汽车 公斤 公司 贵 过 孩子 好吃 号 黑 红 欢迎 还 回答 机场 鸡蛋 件 教室 姐姐 介绍 近 进 就 觉得 咖啡 开始 考试 可能 可以 课 快 快乐 累 离 两 路 旅游 卖 慢 忙 每 妹妹 门 男人 您 牛奶 女人 旁边 跑步 票 妻子 起床 千 晴 去年 让 上班 身体 生病 生日 时间 事情 手表 手机 送 所以 它 踢足球 题 跳舞 外 完 玩 晚上 为什么 问 问题 西瓜 希望 洗 向 小时 笑 新 姓 休息 雪 颜色 眼睛 羊肉 药 要 也 一起 已经 意思 因为 阴 游泳 右边 鱼 元 远 运动 再 早上 张 丈夫 找 真 正在 知道 准备 着 自行车 走 最 左边".split(" ");
const words = [...hsk1Words, ...hsk2Words];
const hsk1Characters = new Set(hsk1Words.flatMap(({ word }) => [...word]));
const hsk2Characters = new Set(hsk2Words.flatMap(({ word }) => [...word]));
const characters = new Set(words.flatMap(({ word }) => [...word]));

if (hsk1Words.length !== 150) throw new Error(`Expected 150 HSK 1 words, found ${hsk1Words.length}.`);
if (hsk2Words.length !== 150) throw new Error(`Expected 150 new HSK 2 words, found ${hsk2Words.length}.`);
if (hsk2Words.some(({ word }, index) => word !== officialHsk2Increment[index])) throw new Error("HSK 2 does not match the official increment or order.");
if (new Set(words.map(({ word }) => word)).size !== 300) throw new Error("HSK 1 and HSK 2 words must be unique.");
if (hsk1Characters.size !== 178) throw new Error(`Expected 178 HSK 1 characters, found ${hsk1Characters.size}.`);
if ([...hsk2Characters].filter((character) => !hsk1Characters.has(character)).length !== 171) throw new Error("Expected 171 new HSK 2 characters.");
if (characters.size !== 349) throw new Error(`Expected 349 cumulative characters, found ${characters.size}.`);

for (const entry of words) {
  if (entry.word.length !== entry.syllables.length || entry.word.length !== entry.tones.length) {
    throw new Error(`Character, pinyin, and tone counts do not match for ${entry.word}.`);
  }
  if (entry.tones.some((tone) => ![1, 2, 3, 4, 5].includes(tone))) {
    throw new Error(`Invalid tone in ${entry.word}.`);
  }
}

console.log(`Validated ${words.length} words and ${characters.size} cumulative characters.`);
