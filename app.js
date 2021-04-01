const quiz = [
  {
    question: 'りり先生の通っている大学はどこ？',
    answers: [ '東京医科歯科大学医学部医学科', '東京大学理科三類', '京都大学医学部医学科', '大阪大学医学部医学科'],
    correct: '東京医科歯科大学医学部医学科'
  }, {
    question: 'りり先生の本名は？',
    answers: [ '藤代りり', '鶴田優希', '木村美紀', '鈴木光'],
    correct: '藤代りり'
  }, {
    question: 'りり先生の通っていた高校は？',
    answers: [ '智辯和歌山高校', '桜蔭高校', '女子学院高校', '豊島岡女子高校'],
    correct: '智辯和歌山高校'
  },
    {
      question: 'りり先生が理科講師を勤める予備校は？',
      answers: [ 'スタディサプリ', '東進ハイスクール', '代々木ゼミ', '駿台予備校'],
      correct: 'スタディサプリ'  
    },
    {
      question: 'りり先生が10万円で買ったのは？',
      answers: [ 'カメラ', '車', 'バイク', '家'],
      correct: 'カメラ'  
    },
      {
      question: 'りり先生の高校時代の部活は？',
      answers: [ 'チアリーダー部', 'ソフトボール部', 'バスケットボール部', 'バレーボール部'],
      correct: 'チアリーダー部' 
      },
      {
      question: 'りり先生のセンター試験の％は？',
      answers: [ '94%', '100%', '90%', '95%'],
      correct: '94%' 
      }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
