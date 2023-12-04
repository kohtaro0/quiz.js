const quizData = [
    {
      question: "質問1",
      choices: [
        {
          text: "選択肢A",
          isCorrect: true
        },
        {
          text: "選択肢B",
          isCorrect: false
        },
        {
          text: "選択肢C",
          isCorrect: false
        },
        {
          text: "選択肢D",
          isCorrect: false
        }
      ]
    },
    {
      question: "質問1",
      choices: [
        {
          text: "選択肢A",
          isCorrect: true
        },
        {
          text: "選択肢B",
          isCorrect: false
        },
        {
          text: "選択肢C",
          isCorrect: false
        },
        {
          text: "選択肢D",
          isCorrect: false
        }
      ]
    },
  ];
  
  const choicesContainer = document.getElementById("choices");
  
// クイズを表示する関数
function showQuiz(index) {
  const quiz = quizData[index];

  // 質問文を表示
  const questionElement = document.createElement("h2");
  questionElement.textContent = quiz.question;
  choicesContainer.appendChild(questionElement);

  // 選択肢を表示
  const choicesWrapper = document.createElement("div");
  choicesWrapper.className = "choices-wrapper"; // 選択肢を包む要素のクラス名を追加
  choicesContainer.appendChild(choicesWrapper);

  quiz.choices.forEach((choice, choiceIndex) => {
    const choiceElement = document.createElement("div");
    choiceElement.className = "choice-item"; // 選択肢の要素のクラス名を追加

    // 選択肢がクリックされた時の処理
    choiceElement.addEventListener("click", () => {
      // 選択された選択肢が正解かどうかをチェックする関数を呼び出す
      checkAnswer(index, choiceIndex);
    });

    choiceElement.appendChild(choiceImage);
    choicesWrapper.appendChild(choiceElement);
  });
}

// CSSで選択肢を横に並べるスタイルを追加
const styleElement = document.createElement("style");
styleElement.textContent = `
  .choices-wrapper {
    display: flex;
  }
  .choice-item {
    margin-right: 10px;
    cursor: pointer; /* カーソルをポインターにする */
  }
`;
document.head.appendChild(styleElement);


// 正解判定の関数
function checkAnswer(questionIndex, choiceIndex) {
  const quiz = quizData[questionIndex];
  const choice = quiz.choices[choiceIndex];
  
  if (choice.isCorrect) {
    alert("正解です！");
  } else {
    alert("不正解です。");
  }

  // 次の問題を表示するか、クイズ終了処理を行う
  if (questionIndex + 1 < quizData.length) {
    // 次の問題がある場合は、次の問題を表示
    clearQuiz(); // 現在の問題をクリア
    showQuiz(questionIndex + 1); // 次の問題を表示
  } else {
    // クイズ終了処理を行う（例: 結果を表示する、リセットするなど）
    clearQuiz(); // 最後の問題をクリア
    alert("クイズ終了です。");
  }
}

// クイズをクリアする関数
function clearQuiz() {
  choicesContainer.innerHTML = ""; // 選択肢をクリア
}
  
  // // 最初の問題を表示する
  showQuiz(0)
  
