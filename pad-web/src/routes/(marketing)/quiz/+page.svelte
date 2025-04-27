<script>
  import { onMount } from 'svelte';

  let dataset = [];
  let currentQuestion = 0;
  let score = 0;
  let showScore = false;
  let showTip = false;
  let currentTip = '';
  let answerStatus = '';

  const tips = [
    "Unnatural Facial Movements: Look for blinking patterns or mouth movements that don't match the speech.",
    "Odd Lighting and Shadows: Check for unnatural lighting around the eyes, hair, and neck.",
    "Distortion and Fused Parts: Watch for distorted or fused areas around the face or body.",
    "Blurry Background: Notice if the background looks warped, flickering, or blurry around the subject.",
    "Unusual Expressions: Strange or unnatural facial expressions can indicate a deepfake."
  ];

  async function loadDataset() {
    const response = await fetch('/src/routes/(marketing)/quiz/dataset.json');
    let fullDataset = await response.json();
    dataset = shuffleArray(fullDataset).slice(0, 5);
  }

  function shuffleArray(array) {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  onMount(() => {
    loadDataset();
  });

  function selectOption(option) {
    if (option === dataset[currentQuestion].label) {
      score++;
      answerStatus = 'Correct!';
      setTimeout(() => nextQuestion(), 1000);
    } else {
      answerStatus = 'Wrong!';
      showTip = true;
      currentTip = tips[Math.floor(Math.random() * tips.length)];
    }
  }

  function nextQuestion() {
    showTip = false;
    answerStatus = '';
    if (currentQuestion < dataset.length - 1) {
      currentQuestion++;
    } else {
      showScore = true;
    }
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showScore = false;
    showTip = false;
    answerStatus = '';
    loadDataset();
  }

  function isVideo(filePath) {
    return filePath.endsWith('.mp4') || filePath.endsWith('.webm') || filePath.endsWith('.ogg');
  }
</script>

<main class="p-6 max-w-xl mx-auto">
  {#if dataset.length > 0}
    {#if showScore}
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">Quiz Completed!</h1>
        <p class="text-xl mb-4">Your score: {score} / {dataset.length}</p>
        <p class="mb-6">Want to improve? Restart the quiz and try using the <strong>PAD Chrome Extension</strong> to detect deepfakes!</p>
        <button class="btn btn-primary" on:click={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    {:else}
      <div>
        <h2 class="text-2xl font-semibold mb-4">
          Item {currentQuestion + 1} of {dataset.length}
        </h2>

        {#if isVideo(dataset[currentQuestion].file)}
          <video src={dataset[currentQuestion].file} controls class="w-full mb-6 rounded shadow"></video>
        {:else}
          <img src={dataset[currentQuestion].file} alt="Quiz Item" class="w-full mb-6 rounded shadow" />
        {/if}

        {#if answerStatus}
          <div class="alert {answerStatus === 'Correct!' ? 'alert-success' : 'alert-error'} shadow-lg mb-4">
            <div>
              <span>{answerStatus}</span>
            </div>
          </div>
        {/if}

        {#if showTip}
          <div class="alert alert-warning shadow-lg mb-6">
            <div>
              <strong>Tip:</strong> {currentTip}
            </div>
            <button class="btn btn-success mt-4" on:click={nextQuestion}>Next</button>
          </div>
        {:else}
          <div class="grid gap-4">
            <button class="btn btn-success" on:click={() => selectOption('real')}>
              Real
            </button>
            <button class="btn btn-error" on:click={() => selectOption('deepfake')}>
              Deepfake
            </button>
          </div>
        {/if}
      </div>
    {/if}
  {:else}
    <p>Loading dataset...</p>
  {/if}
</main>

<style>
  main {
    font-family: system-ui, sans-serif;
  }
</style>
