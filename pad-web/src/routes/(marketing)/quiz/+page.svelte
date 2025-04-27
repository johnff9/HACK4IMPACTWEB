<script>
  import { onMount } from 'svelte';

  let dataset = [];
  let currentQuestion = 0;
  let score = 0;
  let showScore = false;

  async function loadDataset() {
    // const response = await fetch('/dataset.json');
    // dataset = await response.json();
  }

  onMount(() => {
    loadDataset();
  });

  function selectOption(option) {
    if (option === dataset[currentQuestion].label) {
      score++;
    }
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
  }
</script>

<main class="p-6 max-w-xl mx-auto">
  {#if dataset.length > 0}
    {#if showScore}
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">Quiz Completed!</h1>
        <p class="text-xl mb-6">Your score: {score} / {dataset.length}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    {:else}
      <div>
        <h2 class="text-2xl font-semibold mb-4">
          Image {currentQuestion + 1} of {dataset.length}
        </h2>
        <img src={dataset[currentQuestion].image} alt="Quiz Image" class="w-full mb-6 rounded shadow" />
        <div class="grid gap-4">
          <button
            class="bg-green-400 hover:bg-green-500 p-3 rounded"
            on:click={() => selectOption('real')}
          >
            Real
          </button>
          <button
            class="bg-red-400 hover:bg-red-500 p-3 rounded"
            on:click={() => selectOption('deepfake')}
          >
            Deepfake
          </button>
        </div>
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
