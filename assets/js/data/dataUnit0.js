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
      question: `Which word is spoken? <img class="sound" src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon" ><audio class="audio" src="./../../../media/unit0/alphabet/records/spółgłoski ex1.wav"></audio>`,
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
      <audio class="audio" src="./../../../media/unit0/alphabet/records/dwuznaki/rz.wav"></audio> `,
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
      <img class="sound" src="./../../../assets/img/icons/speaker.svg" onclick="play()" alt="Speaker icon" ><audio class="audio" src="./../../../media/unit0/alphabet/records/spółgłoski ex1.wav"></audio>`,
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
};

export default questions;
