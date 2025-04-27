<script lang="ts">
  // You can add any necessary imports or logic here
</script>

<div class="min-h-screen bg-base-100">
  <!-- Hero Section -->
  <div class="hero bg-base-200">
    <div class="hero-content text-center py-12">
      <div class="max-w-4xl">
        <h1 class="text-5xl font-bold mb-6">About Deepfake Detector</h1>
        <p class="text-xl">
          Empowering you to navigate the digital world with trust, clarity, and confidence
        </p>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-12">
    <!-- What are Deepfakes? -->
    <div class="card bg-base-100 shadow-xl mb-12">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-4">What are Deepfakes?</h2>
        <div class="prose max-w-none">
          <p>
            The term "deepfake" comes from the type of machine learning called "deep learning" and "fake". 
            Deep Fakes are hyper-realistic, digitally manipulated images, videos, or audio recordings 
            created using artificial intelligence (AI) and machine learning algorithms.
          </p>
          <p>
            These technologies use a process known as deep learning to manipulate or generate content, 
            making it look real and authentic even though it's completely fabricated. It is important 
            to understand that this technology can be used to spread false malicious information that 
            affects people's lives and erodes public trust.
          </p>
        </div>
      </div>
    </div>

    <!-- How to Spot a Deepfake -->
    <div class="card bg-base-100 shadow-xl mb-12">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-4">How to Spot a Deepfake</h2>
        <div class="prose max-w-none">
          <p>
            While deepfakes are becoming more complex and realistic, there are still several key signs 
            to look for when trying to identify fake content:
          </p>

          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <!-- Tip 1 -->
            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="tips" checked /> 
              <div class="collapse-title text-xl font-medium">
                1. Unnatural Facial Movements
              </div>
              <div class="collapse-content"> 
                <ul class="list-disc pl-5">
                  <li>Pay attention to blinking patterns or eyes that don't focus properly</li>
                  <li>In some deepfakes, the person's eyes may not move in sync with their speech</li>
                  <li>Watch for mouth movements that don't match the audio</li>
                </ul>
              </div>
            </div>

            <!-- Tip 2 -->
            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="tips" /> 
              <div class="collapse-title text-xl font-medium">
                2. Odd Lighting and Shadows
              </div>
              <div class="collapse-content"> 
                <p>
                  Look for unnatural lighting or shadows that appear to be out of place. 
                  Deepfake technology can struggle to accurately show how light interacts 
                  with a person's face, especially around eyes, hair, and neck.
                </p>
              </div>
            </div>

            <!-- Tip 3 -->
            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="tips" /> 
              <div class="collapse-title text-xl font-medium">
                3. Distortion and Fused Parts
              </div>
              <div class="collapse-content"> 
                <ul class="list-disc pl-5">
                  <li>Within the image there are distorted parts that can be also fused to parts of the body or things</li>
                  <li>There may be shadows that seem out of place and missing parts of facial features, limbs or clothing</li>
                  <li>The perspective of the image could be off making it look warped</li>
                </ul>
              </div>
            </div>

            <!-- Tip 4 -->
            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="tips" /> 
              <div class="collapse-title text-xl font-medium">
                4. Blurry Background
              </div>
              <div class="collapse-content"> 
                <p>
                  The background can become distorted or blurry, especially around the edges of the face or body. 
                  Look for objects in the background that look to be moving unnaturally or flickering.
                </p>
              </div>
            </div>

            <!-- Tip 5 -->
            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="tips" /> 
              <div class="collapse-title text-xl font-medium">
                5. Unusual Expressions
              </div>
              <div class="collapse-content"> 
                <p>
                  Deepfake images might show people making strange or unnatural facial expressions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Credibility Flags -->
    <div class="card bg-base-100 shadow-xl mb-12">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-4">Credibility Flags</h2>
        <p class="mb-6">Flags are used to help differentiate between credibility scores:</p>
        
        <div class="flex flex-wrap gap-4 justify-center">
          <div class="badge badge-lg badge-success gap-2 p-4">
            <span class="font-bold">Green</span> = High Credibility
          </div>
          <div class="badge badge-lg badge-warning gap-2 p-4">
            <span class="font-bold">Yellow</span> = Medium Credibility
          </div>
          <div class="badge badge-lg badge-error gap-2 p-4">
            <span class="font-bold">Red</span> = Low Credibility
          </div>
        </div>
      </div>
    </div>

    <!-- About Our Extension -->
    <div class="card bg-base-100 shadow-xl mb-12">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-4">About Our Extension</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Purpose & Vision -->
          <div>
            <h3 class="text-xl font-bold mb-2">Purpose</h3>
            <p class="mb-6">
              Equip users with a powerful Chrome web extension to detect misinformation, 
              AI misuse, and deepfake content online.
            </p>
            
            <h3 class="text-xl font-bold mb-2">Vision</h3>
            <p>
              Empowering everyone to navigate the digital world with trust, clarity, and confidence.
            </p>
          </div>

          <!-- Target Audience -->
          <div>
            <h3 class="text-xl font-bold mb-2">Target Audience</h3>
            <p>
              Everyday internet users, students, researchers, educators, and fact-checkers.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Features -->
    <div class="card bg-base-100 shadow-xl mb-12">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-6">Main Features</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Feature 1 -->
          <div class="card bg-base-200 h-full">
            <div class="card-body">
              <h3 class="card-title">Credibility Score</h3>
              <p>Quickly shows how trustworthy a website is based on verified information and past reputation.</p>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="card bg-base-200 h-full">
            <div class="card-body">
              <h3 class="card-title">Deepfake Detection</h3>
              <p>Identifies and flags deepfake images present on the website.</p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="card bg-base-200 h-full">
            <div class="card-body">
              <h3 class="card-title">Image Analyzer</h3>
              <p>Scans and analyzes images to detect signs of manipulation, synthetic generation, or AI tampering.</p>
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="card bg-base-200 h-full">
            <div class="card-body">
              <h3 class="card-title">AI Misuse Detector</h3>
              <p>Alerts users to suspicious or unethical uses of AI content across text, images, and media on the site.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works -->
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-4">How It Works</h2>
        
        <div class="prose max-w-none">
          <ul class="list-disc pl-5">
            <li>Leverages AI models, fact-checking APIs, and image analysis tools</li>
            <li>Provides simple, clear alerts (green, yellow, and red indicators)</li>
            <li>Includes explanations for the credibility score</li>
          </ul>
          
          <div class="divider"></div>
          
          <h3 class="text-xl font-bold mt-6">User Impact</h3>
          <ul class="list-disc pl-5">
            <li>Helps protect users from falling for misinformation, fake media, or unethical AI use</li>
            <li>Supports critical thinking and informed browsing habits</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>