const questions = {
  en: [
    {
      id: 1,
      question: "Which group contains only consonants (spółgłoski)?",
      choiceA: "O, e, a, i, y",
      choiceB: "P, b, t, s, h",
      choiceC: "A, k, u, d, h",
      correct: "B",
    },
    {
      id: 2,
      question: "Which group contains only vowels (samogłoski)?",
      choiceA: "O, e, a, i, y",
      choiceB: "P, b, t, s, h",
      choiceC: "A, k, u, d, h",
      correct: "A",
    },
    {
      id: 3,
      question: `Which word is spoken? <img class="sound" src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon" ><audio class="audio" src="./../../../media/unit0/alphabet/records/litery/J.wav"></audio>`,
      choiceA: "Jajko",
      choiceB: "Dom",
      choiceC: "Igła",
      correct: "A",
    },
    {
      id: 4,
      question: `Which word is spoken? <img class="sound" class="alphabetLesson" src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon"
      >
    <audio class="audio" src="./../../../media/unit0/alphabet/records/litery/W.wav"></audio>`,
      choiceA: "Mama",
      choiceB: "But",
      choiceC: "Wino",
      correct: "C",
    },
    {
      id: 5,
      question: `Which word is spoken? <img class="sound" class="alphabetLesson" src="./../../../assets/img/icons/speaker.svg" onclick="play()"
        alt="Speaker icon" >
      <audio class="audio" src="./../../../media/unit0/alphabet/records/dwuznaki/Ś.wav"></audio> `,
      choiceA: "Hałas",
      choiceB: "Światło",
      choiceC: "Okno",
      correct: "B",
    },
    {
      id: 6,
      question: `Which word is spoken? <img class="sound" class="alphabetLesson" src="./../../../assets/img/icons/speaker.svg" onclick="play()"
      alt="Speaker icon" >
    <audio class="audio" src="./../../../media/unit0/alphabet/records/dwuznaki/rz.wav"></audio> `,
      choiceA: "Rzeka",
      choiceB: "Zima",
      choiceC: "Żaba",
      correct: "A",
    },
    {
      id: 7,
      question: `Which word is spoken? <img class="sound" class="alphabetLesson"
      src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon" >
    <audio class="audio" src="./../../../media/unit0/alphabet/records/dwuznaki/ci.wav"></audio>`,
      choiceA: "Ćma",
      choiceB: "Cisza",
      choiceC: "Góra",
      correct: "B",
    },
    {
      id: 8,
      question:
        "Which part of a sentence/speech does declension apply to? (two answers are correct!)",
      choiceA: "Verb",
      choiceB: "Adjective",
      choiceC: "Noun",
      correct: "B" || "C",
    },
    {
      id: 9,
      question: "How many cases are there in Polish language?",
      choiceA: "5",
      choiceB: "6",
      choiceC: "7",
      correct: "C",
    },
    {
      id: 10,
      question:
        "„To jest mój komputer” (this is my computer) – which case is used for „komputer”?",
      choiceA: "Accusative (biernik)",
      choiceB: "Nominative (mianownik)",
      choiceC: "Instrumental (narzędnik)",
      correct: "B",
    },
    {
      id: 11,
      question:
        "„W torbie nie ma telefonu” (there is no phone in the bag) – which case is used for „telefon”?",
      choiceA: "Genitive (dopełniacz)",
      choiceB: "Locative (miejscownik)",
      choiceC: "Vocative (wołacz)",
      correct: "A",
    },
    {
      id: 12,
      question:
        "„W torbie nie ma telefonu” (there is no phone in the bag) – which case is used for „torba”?",
      choiceA: "Genitive (dopełniacz)",
      choiceB: "Locative (miejscownik)",
      choiceC: "Vocative (wołacz)",
      correct: "B",
    },
    {
      id: 13,
      question: "What is basic word order in a Polish sentence?",
      choiceA: "SOV (subject – object – verb)",
      choiceB: "OSV (object – subject– verb) ",
      choiceC: "SVO (subject – verb – object)",
      correct: "C",
    },
    {
      id: 14,
      question:
        "Usually where do we put an information about time in a Polish sentence?",
      choiceA: "At the beginning",
      choiceB: "In the middle",
      choiceC: "At the end",
      correct: "A",
    },
    {
      id: 15,
      question:
        "Is it correct to say „Mieszkam w Polsce” instead of „Ja mieszkam w Polsce”?",
      choiceA: "Yes",
      choiceB: "No",
      choiceC: "",
      correct: "A",
    },
    {
      id: 16,
      question:
        "Is there any difference in meaning between these two questions? „Czy (ty) mieszkasz w Polsce?” „(Ty) mieszkasz w Polsce?”",
      choiceA: "Yes",
      choiceB: "No",
      choiceC: "",
      correct: "B",
    },
    {
      id: 17,
      question:
        "There are two ways to form a yes/no question for the sentence below: Ona jest studentką. Which two questions are correct?",
      choiceA: "Jest ona studentką?",
      choiceB: "Czy ona jest studentką?",
      choiceC: "Ona jest studentką?",
      correct: "B" || "C",
    },
    {
      id: 18,
      question: "What questions does an adjective answer?",
      choiceA: "When? At what time?",
      choiceB: "What? Who?",
      choiceC: "What (kind of)? Which? Which one? Whose?",
      correct: "C",
    },
    {
      id: 19,
      question:
        "There is a small mouse – mysz (feminine) in Polish. How would you describe it?",
      choiceA: "Mały mysz",
      choiceB: "Mała mysz",
      choiceC: "Małe mysz",
      correct: "B",
    },
    {
      id: 20,
      question:
        "You live in a big house – dom (masculine). How would you describe it?      ",
      choiceA: "Duży dom",
      choiceB: "Duża dom",
      choiceC: "Duże dom",
      correct: "A",
    },
    {
      id: 21,
      question:
        "You just cleaned a window – okno (neuter). How would you say „a clean window”?",
      choiceA: "Czysty okno",
      choiceB: "Czysta okno",
      choiceC: "Czyste okno",
      correct: "C",
    },
    {
      id: 22,
      question: "How many basic noun grammatical genders are there in Polish?",
      choiceA: "3",
      choiceB: "4",
      choiceC: "5",
      correct: "A",
    },
    {
      id: 23,
      question:
        "„Mały samochód” – a small car. Can you figure out what is the grammatical gender of samochód?",
      choiceA: "Masculine",
      choiceB: "Feminine",
      choiceC: "Neuter",
      correct: "A",
    },
    {
      id: 24,
      question:
        "„Słodkie ciasto” – a sweet cake. Can you figure out what is the grammatical gender of ciasto?",
      choiceA: "Masculine",
      choiceB: "Feminine",
      choiceC: "Neuter",
      correct: "C",
    },
    {
      id: 25,
      question:
        "„Dobra kawa” – a good coffee. Can you figure out what is the grammatical gender of coffee?      ",
      choiceA: "Masculine",
      choiceB: "Feminine",
      choiceC: "Neuter",
      correct: "B",
    },
    {
      id: 26,
      question: " How would you fill in the gap? „Ja ..... studentem”",
      choiceA: "Jesteś",
      choiceB: "Jest",
      choiceC: "Jestem",
      correct: "C",
    },
    {
      id: 27,
      question: "How would you fill in the gap? „My.... Chińczykami”",
      choiceA: "Są",
      choiceB: "Jesteśmy",
      choiceC: "Jesteście",
      correct: "B",
    },
    {
      id: 28,
      question: "How would you fill in the gap? „Ty....Polakiem”",
      choiceA: "Jesteś",
      choiceB: "Jest",
      choiceC: "Jesteśmy",
      correct: "A",
    },
    {
      id: 29,
      question: "Which of the sentences below means „They are my friends”?",
      choiceA: "Oni są moimi przyjaciółmi",
      choiceB: "Wy jesteście moimi przyjaciółmi.",
      choiceC: "My jesteśmy jego przyjaciółmi.",
      correct: "A",
    },
    {
      id: 30,
      question: "Which of the sentences below means „She is Japanese”?",
      choiceA: "On jest Japończykiem.",
      choiceB: "Oni są Japończykami.",
      choiceC: "Ona jest Japonką.",
      correct: "C",
    },
  ],
  ja: [
    {
      id: 1,
      question: "子音（spółgłoski）のみを含むグループはどれですか？",
      choiceA: "O, e, a, i, y",
      choiceB: "P, b, t, s, h",
      choiceC: "A, k, u, d, h",
      correct: "B",
    },
    {
      id: 2,
      question: "母音（samogłoski）のみを含むグループはどれですか？",
      choiceA: "O, e, a, i, y",
      choiceB: "P, b, t, s, h",
      choiceC: "A, k, u, d, h",
      correct: "A",
    },
    {
      id: 3,
      question: `次の単語はa～cのうちどれですか？
      <img class="sound" src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon" ><audio class="audio" src="./../../../media/unit0/alphabet/records/J.wav"></audio>`,
      choiceA: "Jajko",
      choiceB: "Dom",
      choiceC: "Igła",
      correct: "A",
    },
    {
      id: 4,
      question: `次の単語はa～cのうちどれですか？
      <img class="sound" class="alphabetLesson" src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon"
      >
    <audio class="audio" src="./../../../media/unit0/alphabet/records/litery/W.wav"></audio>`,
      choiceA: "Mama",
      choiceB: "But",
      choiceC: "Wino",
      correct: "C",
    },
    {
      id: 5,
      question: `次の単語はa～cのうちどれですか？
      <img class="sound" class="alphabetLesson" src="./../../../assets/img/icons/speaker.svg" onclick="play()"
        alt="Speaker icon" >
      <audio class="audio" src="./../../../media/unit0/alphabet/records/dwuznaki/ś.wav"></audio> `,
      choiceA: "Hałas",
      choiceB: "Światło",
      choiceC: "Okno",
      correct: "B",
    },
    {
      id: 6,
      question: `次の単語はa～cのうちどれですか？
      <img class="sound" class="alphabetLesson" src="./../../../assets/img/icons/speaker.svg" onclick="play()"
      alt="Speaker icon" >
    <audio class="audio" src="./../../../media/unit0/alphabet/records/dwuznaki/rz.wav"></audio> `,
      choiceA: "Rzeka",
      choiceB: "Zima",
      choiceC: "Żaba",
      correct: "A",
    },
    {
      id: 7,
      question: `次の単語はa～cのうちどれですか？
      <img class="sound" class="alphabetLesson"
      src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon" >
    <audio class="audio" src="./../../../media/unit0/alphabet/records/dwuznaki/ci.wav"></audio>`,
      choiceA: "Ćma",
      choiceB: "Cisza",
      choiceC: "Góra",
      correct: "B",
    },
    {
      id: 8,
      question:
        "文章や会話文の中で、どの部分に語形変化が適用されますか？次のa～cの中から2つ選んでください。",
      choiceA: "動詞",
      choiceB: "形容詞",
      choiceC: "名詞",
      correct: "B" || "C",
    },
    {
      id: 9,
      question: "ポーランド語の語形変化はいくつありますか？",
      choiceA: "5",
      choiceB: "6",
      choiceC: "7",
      correct: "C",
    },
    {
      id: 10,
      question:
        "„To jest mój komputer”(これは私のコンピューターです)－この文章の„komputer”には、どのケースが適用されますか？",
      choiceA: "対格(biernik)",
      choiceB: "主格(mianownik)",
      choiceC: "助格(narzędnik)",
      correct: "B",
    },
    {
      id: 11,
      question:
        "„W torbie nie ma telefonu” (バッグの中に携帯がありません)－この文章の„telefon”には、どのケースが適用されますか？",
      choiceA: "所有格(dopełniacz)",
      choiceB: "所格(miejscownik)",
      choiceC: "呼格(wołacz)",
      correct: "A",
    },
    {
      id: 12,
      question:
        "„W torbie nie ma telefonu” (バッグの中に携帯がありません)－この文章の„torba”には、どのケースが適用されますか？",
      choiceA: "所有格(dopełniacz)",
      choiceB: "所格(miejscownik)",
      choiceC: "呼格(wołacz)",
      correct: "B",
    },
    {
      id: 13,
      question: "ポーランド語の基本的な語順はa～cのうちどれですか？",
      choiceA: "SOV(主語－目的語－動詞)",
      choiceB: "OSV(目的語－主語－動詞)",
      choiceC: "SVO(主語－動詞－目的語)",
      correct: "C",
    },
    {
      id: 14,
      question:
        "通常、ポーランド語の文章において時制を表す情報はどこに置きますか？",
      choiceA: "文章の始め",
      choiceB: "文章の中間",
      choiceC: "文章の最後",
      correct: "A",
    },
    {
      id: 15,
      question:
        "„Ja mieszkam w Polsce”の代わりに„Mieszkam w Polsce”と言い換える事はできますか？",
      choiceA: "はい",
      choiceB: "いいえ",
      choiceC: "",
      correct: "A",
    },
    {
      id: 16,
      question:
        "以下の2つの質問の意味に違いはありますか？ „Czy (ty) mieszkasz w Polsce?” „(Ty) mieszkasz w Polsce?”",
      choiceA: "はい",
      choiceB: "いいえ",
      choiceC: "",
      correct: "B",
    },
    {
      id: 17,
      question: `次の文章について「はい/いいえ」で答えられる質問方法が2つあります。
      Ona jest studentką.
      Which two questions are correct?　以下のa～cから答えを2つ選んでください。`,
      choiceA: "Jest ona studentką?",
      choiceB: "Czy ona jest studentką?",
      choiceC: "Ona jest studentką?",
      correct: "B" || "C",
    },
    {
      id: 18,
      question: "a～cのうち、どの質問が形容詞の答えになりますか？",
      choiceA: "いつ？なんじ？",
      choiceB: "何？誰？",
      choiceC: "何(どんな)？どの？どっちの？誰の？",
      correct: "C",
    },
    {
      id: 19,
      question:
        "ここに小さなネズミがいます。mysz (女性形)はポーランド語で「ネズミ」を意味します。どのように表現しますか？以下のa～cから選んでください。",
      choiceA: "Mały mysz",
      choiceB: "Mała mysz",
      choiceC: "Małe mysz",
      correct: "B",
    },
    {
      id: 20,
      question:
        "あなたは大きな家に住みます。dom (男性形)はポーランド語で「家」を意味します。どのように表現しますか？以下のa～cから選んでください。",
      choiceA: "Duży dom",
      choiceB: "Duża dom",
      choiceC: "Duże dom",
      correct: "A",
    },
    {
      id: 21,
      question:
        "あなたは窓を掃除しました。okno (中性形)はポーランド語で「窓」を意味します。「きれいな窓」を正しく説明しているのは、a～cのうちどれですか？",
      choiceA: "Czysty okno",
      choiceB: "Czysta okno",
      choiceC: "Czyste okno",
      correct: "C",
    },
    {
      id: 22,
      question:
        "ポーランド語における名詞の文法的な性別はいくつですか？以下のa～cから正しいものを選んでください。",
      choiceA: "3",
      choiceB: "4",
      choiceC: "5",
      correct: "A",
    },
    {
      id: 23,
      question:
        "„Mały samochód”「小さな車」の“samochód”の文法的な性別を、以下のa～cから正しいものを選んでください。",
      choiceA: "男性形",
      choiceB: "女性形",
      choiceC: "中性形",
      correct: "A",
    },
    {
      id: 24,
      question:
        "„Słodkie ciasto”「甘いケーキ」の“ciasto”の文法的な性別を、以下のa～cから正しいものを選んでください。",
      choiceA: "男性形",
      choiceB: "女性形",
      choiceC: "中性形",
      correct: "C",
    },
    {
      id: 25,
      question:
        "„Dobra kawa”「良いコーヒー」の“coffee” の文法的な性別を、以下のa～cから正しいものを選んでください",
      choiceA: "男性形",
      choiceB: "女性形",
      choiceC: "中性形",
      correct: "B",
    },
    {
      id: 26,
      question:
        "次の文章の穴埋めを、以下のa～cから選んでください。„Ja ..... studentem”",
      choiceA: "Jesteś",
      choiceB: "Jest",
      choiceC: "Jestem",
      correct: "C",
    },
    {
      id: 27,
      question:
        "次の文章の穴埋めを、以下のa～cから選んでください。„My.... Chińczykami”      ",
      choiceA: "Są",
      choiceB: "Jesteśmy",
      choiceC: "Jesteście",
      correct: "B",
    },
    {
      id: 28,
      question:
        "次の文章の穴埋めを、以下のa～cから選んでください。„Ty....Polakiem”      ",
      choiceA: "Jesteś",
      choiceB: "Jest",
      choiceC: "Jesteśmy",
      correct: "A",
    },
    {
      id: 29,
      question:
        "「彼らは私の友達です。」この文章を示しているものをa～cの中から選んでください。",
      choiceA: "Oni są moimi przyjaciółmi",
      choiceB: "Wy jesteście moimi przyjaciółmi.",
      choiceC: "My jesteśmy jego przyjaciółmi.",
      correct: "A",
    },
    {
      id: 30,
      question:
        "「彼女は日本人です。」この文章を示しているものをa～cの中から選んでください。",
      choiceA: "On jest Japończykiem.",
      choiceB: "Oni są Japończykami.",
      choiceC: "Ona jest Japonką.",
      correct: "C",
    },
  ],
  zh: [
    {
      id: 1,
      question: "哪个组里只有辅音？",
      choiceA: "O, e, a, i, y",
      choiceB: "P, b, t, s, h",
      choiceC: "A, k, u, d, h",
      correct: "B",
    },
    {
      id: 2,
      question: "哪个组里只有母音？",
      choiceA: "O, e, a, i, y",
      choiceB: "P, b, t, s, h",
      choiceC: "A, k, u, d, h",
      correct: "A",
    },
    {
      id: 3,
      question: `现在说的是哪个单词? <img class="sound" src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon" ><audio class="audio" src="./../../../media/unit0/alphabet/records/litery/J.wav"></audio>`,
      choiceA: "Jajko",
      choiceB: "Dom",
      choiceC: "Igła",
      correct: "A",
    },
    {
      id: 4,
      question: `现在说的是哪个单词? <img class="sound" class="alphabetLesson" src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon"
      >
    <audio class="audio" src="./../../../media/unit0/alphabet/records/litery/W.wav"></audio>`,
      choiceA: "Mama",
      choiceB: "But",
      choiceC: "Wino",
      correct: "C",
    },
    {
      id: 5,
      question: `现在说的是哪个单词? <img class="sound" class="alphabetLesson" src="./../../../assets/img/icons/speaker.svg" onclick="play()"
        alt="Speaker icon" >
      <audio class="audio" src="./../../../media/unit0/alphabet/records/dwuznaki/Ś.wav"></audio> `,
      choiceA: "Hałas",
      choiceB: "Światło",
      choiceC: "Okno",
      correct: "B",
    },
    {
      id: 6,
      question: `现在说的是哪个单词? <img class="sound" class="alphabetLesson" src="./../../../assets/img/icons/speaker.svg" onclick="play()"
      alt="Speaker icon" >
    <audio class="audio" src="./../../../media/unit0/alphabet/records/dwuznaki/rz.wav"></audio> `,
      choiceA: "Rzeka",
      choiceB: "Zima",
      choiceC: "Żaba",
      correct: "A",
    },
    {
      id: 7,
      question: `现在说的是哪个单词? <img class="sound" class="alphabetLesson"
      src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon" >
    <audio class="audio" src="./../../../media/unit0/alphabet/records/dwuznaki/ci.wav"></audio>`,
      choiceA: "Ćma",
      choiceB: "Cisza",
      choiceC: "Góra",
      correct: "B",
    },
    {
      id: 8,
      question: "词语变格适用于哪个类型的词语？（有两个答案！）",
      choiceA: "动词",
      choiceB: "形容词",
      choiceC: "名词",
      correct: "B" || "C",
    },
    {
      id: 9,
      question: "波兰语有几个语法格？",
      choiceA: "5个",
      choiceB: "6个",
      choiceC: "7个",
      correct: "C",
    },
    {
      id: 10,
      question:
        "„To jest mój komputer” (这是我的电脑) – 为„komputer”使用了哪个格?",
      choiceA: "四格 (biernik)",
      choiceB: "一格 (mianownik)",
      choiceC: "五格 (narzędnik)",
      correct: "B",
    },
    {
      id: 11,
      question:
        "„W torbie nie ma telefonu” (手包里没有手机) – 为„telefon”使用了哪个格?",
      choiceA: "二格 (dopełniacz)",
      choiceB: "六格 (miejscownik)",
      choiceC: "七格 (wołacz)",
      correct: "A",
    },
    {
      id: 12,
      question:
        "„W torbie nie ma telefonu” (手包里没有手机) – 为„torba”使用了哪个格?",
      choiceA: "二格 (dopełniacz)",
      choiceB: "六格 (miejscownik)",
      choiceC: "七格 (wołacz)",
      correct: "B",
    },
    {
      id: 13,
      question: "波兰语局子中基本单词顺序是什么？",
      choiceA: "SOV (subject – object – verb 中文：主宾动语序)",
      choiceB: "OSV (object – subject– verb 中文：宾主动语序)",
      choiceC: "SVO (subject – verb – object 中文：主动宾语序)",
      correct: "C",
    },
    {
      id: 14,
      question: "波兰语句子中时间词语一般在哪里？",
      choiceA: "句子开头",
      choiceB: "句子中间",
      choiceC: "句子后面",
      correct: "A",
    },
    {
      id: 15,
      question: "„Ja mieszkam w Polsce”代替说 „Mieszkam w Polsce”是可以的吗?",
      choiceA: "对",
      choiceB: "不",
      choiceC: "",
      correct: "A",
    },
    {
      id: 16,
      question:
        "下列两个句子有区别吗？ „Czy (ty) mieszkasz w Polsce?” „(Ty) mieszkasz w Polsce?”",
      choiceA: "对",
      choiceB: "不",
      choiceC: "",
      correct: "B",
    },
    {
      id: 17,
      question:
        "把下的句子改成“对/不”问题有两个办法： Ona jest studentką. 下列问题其中哪两个是对的?",
      choiceA: "Jest ona studentką?",
      choiceB: "Czy ona jest studentką?",
      choiceC: "Ona jest studentką?",
      correct: "B" || "C",
    },
    {
      id: 18,
      question: "描写形容词的问题是什么问题？",
      choiceA: "什么时候？",
      choiceB: "什么？谁？",
      choiceC: "什么样的？哪个/哪一个？谁的？）",
      correct: "C",
    },
    {
      id: 19,
      question: "房子里有一个小老鼠 – 波兰语mysz (女性). 你会怎么描写老鼠？",
      choiceA: "Mały mysz",
      choiceB: "Mała mysz",
      choiceC: "Małe mysz",
      correct: "B",
    },
    {
      id: 20,
      question: "你住在一套很大房子 – dom (男性). 你会怎么描写这套房子？",
      choiceA: "Duży dom",
      choiceB: "Duża dom",
      choiceC: "Duże dom",
      correct: "A",
    },
    {
      id: 21,
      question: "你刚才清洁了窗户 – okno (中性). 你会怎么说“干净的窗户“？",
      choiceA: "Czysty okno",
      choiceB: "Czysta okno",
      choiceC: "Czyste okno",
      correct: "C",
    },
    {
      id: 22,
      question: "波兰语语法上有多少名词性别？",
      choiceA: "3",
      choiceB: "4",
      choiceC: "5",
      correct: "A",
    },
    {
      id: 23,
      question: "„Mały samochód” – 小车。你会不会推测samochód的语法性别？",
      choiceA: "Masculine",
      choiceB: "Feminine",
      choiceC: "Neuter",
      correct: "A",
    },
    {
      id: 24,
      question: "„Słodkie ciasto” – 甜甜蛋糕。你会不会推测ciasto的语法性别？",
      choiceA: "Masculine",
      choiceB: "Feminine",
      choiceC: "Neuter",
      correct: "C",
    },
    {
      id: 25,
      question: "„Dobra kawa” – 好喝咖啡。你会不会推测kawa的语法性别？",
      choiceA: "Masculine",
      choiceB: "Feminine",
      choiceC: "Neuter",
      correct: "B",
    },
    {
      id: 26,
      question: "你会怎么填空？„Ja ..... studentem”",
      choiceA: "Jesteś",
      choiceB: "Jest",
      choiceC: "Jestem",
      correct: "C",
    },
    {
      id: 27,
      question: "你会怎么填空？„My.... Chińczykami”",
      choiceA: "Są",
      choiceB: "Jesteśmy",
      choiceC: "Jesteście",
      correct: "B",
    },
    {
      id: 28,
      question: "你会怎么填空？„Ty....Polakiem”",
      choiceA: "Jesteś",
      choiceB: "Jest",
      choiceC: "Jesteśmy",
      correct: "A",
    },
    {
      id: 29,
      question: "下列句子中哪个句子的意思是 „他们是我的朋友”?",
      choiceA: "Oni są moimi przyjaciółmi",
      choiceB: "Wy jesteście moimi przyjaciółmi.",
      choiceC: "My jesteśmy jego przyjaciółmi.",
      correct: "A",
    },
    {
      id: 30,
      question: "下列句子中哪个句子的意思是„她是日本人”?",
      choiceA: "On jest Japończykiem.",
      choiceB: "Oni są Japończykami.",
      choiceC: "Ona jest Japonką.",
      correct: "C",
    },
  ],
  vi: [
    {
      id: 1,
      question: "Nhóm nào chỉ gồm các phụ âm (spółgłoski)?",
      choiceA: "O, e, a, i, y",
      choiceB: "P, b, t, s, h",
      choiceC: "A, k, u, d, h",
      correct: "B",
    },
    {
      id: 2,
      question: "Nhóm nào chỉ gồm các nguyên âm (samogłoski)?",
      choiceA: "O, e, a, i, y",
      choiceB: "P, b, t, s, h",
      choiceC: "A, k, u, d, h",
      correct: "A",
    },
    {
      id: 3,
      question: "Từ nào đã được nói? <jajko>",
      choiceA: "Jajko",
      choiceB: "Dom",
      choiceC: "Igła",
      correct: "A",
    },
    {
      id: 4,
      question: "Từ nào đã được nói? <wino>",
      choiceA: "Mama",
      choiceB: "But",
      choiceC: "Wino",
      correct: "C",
    },
    {
      id: 5,
      question: "Từ nào đã được nói? <rzeka>",
      choiceA: "Rzeka",
      choiceB: "Zima",
      choiceC: "Żaba",
      correct: "B",
    },
    {
      id: 6,
      question: "Từ nào đã được nói? <cisza>",
      choiceA: "Ćma",
      choiceB: "Cisza",
      choiceC: "Góra",
      correct: "A",
    },
    {
      id: 7,
      question:
        "Chúng ta áp dụng biến cách vào phần nào của câu? (Có hai đáp án đúng!)",
      choiceA: "Động từ",
      choiceB: "Tính từ",
      choiceC: "Danh từ",
      correct: "B",
    },
    {
      id: 8,
      question: "Có bao nhiêu biến cách trong tiếng Ba Lan?",
      choiceA: "5",
      choiceB: "6",
      choiceC: "7",
      correct: "B" && "C",
    },
    {
      id: 9,
      question:
        "„To jest mój komputer” (đây là máy tính của tôi) – cách ngữ pháp nào được sử dụng cho „komputer”?",
      choiceA: "Biernik",
      choiceB: "Mianownik",
      choiceC: "Narzędnik",
      correct: "C",
    },
    {
      id: 10,
      question:
        "„W torbie nie ma telefonu” (không có điện thoại trong túi) – cách ngữ pháp nào được sử dụng cho „telefon”?",
      choiceA: "Dopełniacz",
      choiceB: "Miejscownik",
      choiceC: "Wołacz",
      correct: "B",
    },
    {
      id: 11,
      question:
        "„W torbie nie ma telefonu” (không có cái điện thoại nào trong túi) – cách ngữ pháp nào được sử dụng cho „torba”?",
      choiceA: "Dopełniacz",
      choiceB: "Miejscownik",
      choiceC: "Wołacz",
      correct: "A",
    },
    {
      id: 12,
      question: "Thứ tự từ trong câu ngữ pháp tiếng Ba Lan là gì?",
      choiceA: " Chủ ngữ – tân ngữ – động từ",
      choiceB: " Tân ngữ – chủ ngữ – động từ ",
      choiceC: " Chủ ngữ – động từ – tân ngữ",
      correct: "B",
    },
    {
      id: 13,
      question:
        "Thông thường chúng ta thường đặt thời gian ở vị trí nào trong câu?",
      choiceA: "Ở đầu câu",
      choiceB: "Ở giữa câu",
      choiceC: "Ở cuối câu",
      correct: "A",
    },
    {
      id: 14,
      question:
        " Chúng ta có thể nói „Mieszkam w Polsce” thay cho „Ja mieszkam w Polsce”?",
      choiceA: "Đúng",
      choiceB: "Sai",
      choiceC: " ",
      correct: "A",
    },
    {
      id: 15,
      question:
        "„To jest mój komputer” (this is my computer) – cách ngữ pháp nào được sử dụng cho „komputer”?",
      choiceA: "Biernik",
      choiceB: "Mianownik",
      choiceC: "Narzędnik",
      correct: "A",
    },
    {
      id: 16,
      question: `Hai câu dưới đây có nghĩa khác nhau không?
              „Czy (ty) mieszkasz w Polsce?”
              „(Ty) mieszkasz w Polsce?”`,
      choiceA: "Có",
      choiceB: "Không",
      choiceC: "",
      correct: "B",
    },
    {
      id: 17,
      question:
        "Có hai cách để đặt câu hỏi đúng/sai cho câu: Ona jest studentką. Hai đáp án nào dưới đây là đúng?",
      choiceA: "Jest ona studentką?",
      choiceB: "Czy ona jest studentką?",
      choiceC: "Ona jest studentką?",
      correct: "B" && "C",
    },
    {
      id: 18,
      question: "Tính từ trả lời cho câu hỏi nào?",
      choiceA: "Khi nào? Mấy giờ?",
      choiceB: "Cái gì? Ai?",
      choiceC: "Loại nào? Cái nào? Của ai?",
      correct: "C",
    },
    {
      id: 19,
      question:
        "Có một con chuột nhỏ – mysz (giới cái). Bạn sẽ nói như nào trong tiếng Ba Lan?",
      choiceA: "Mały mysz",
      choiceB: "Mała mysz",
      choiceC: "Małe mysz",
      correct: "B",
    },
    {
      id: 20,
      question:
        "Bạn sống trong một ngôi nhà to – dom (giới đực). Bạn sẽ nói như thế nào trong tiếng Ba Lan?      ",
      choiceA: "Duży dom",
      choiceB: "Duża dom",
      choiceC: "Duże dom",
      correct: "A",
    },
    {
      id: 21,
      question:
        "Bạn vừa mới lau sạch một cái cửa sổ – okno (Giới tính trung).Bạn sẽ nói „Một cái cửa sổ sạch” như nào?",
      choiceA: "Czysty okno",
      choiceB: "Czysta okno",
      choiceC: "Czyste okno",
      correct: "C",
    },
    {
      id: 22,
      question: "Có bao nhiêu giới tính cho danh từ trong ngữ pháp Ba Lan?",
      choiceA: "3",
      choiceB: "4",
      choiceC: "5",
      correct: "A",
    },
    {
      id: 23,
      question:
        "„Mały samochód” – một chiếc ô tô nhỏ. Giới tính ngữ pháp của chiếc ô tô là gì?",
      choiceA: "Giới đực",
      choiceB: "Giới cái",
      choiceC: "Giới trung",
      correct: "A",
    },
    {
      id: 24,
      question:
        "„Słodkie ciasto” – một cái bánh ngọt lịm. Giới tính ngữ pháp của cái bánh là gì?",
      choiceA: "Giới đực",
      choiceB: "Giới cái",
      choiceC: "Giới trung",
      correct: "C",
    },
    {
      id: 25,
      question:
        "„Dobra kawa” – Cà phê thơm ngon. Giới tính ngữ pháp của cà phê là gì? ",
      choiceA: "Giới đực",
      choiceB: "Giới cái",
      choiceC: "Giới trung",
      correct: "B",
    },
  ],
};

export default questions;
