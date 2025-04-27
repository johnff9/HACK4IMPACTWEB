<script lang="ts">

  import { onMount } from 'svelte';
  
  const features = [
    {
      name: "Deepfake Detection",
      description:
        "Our advanced algorithms analyze images and videos to detect potential deepfakes and manipulated media.",
      svgContent: `<path d="M4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422C16.7528 17.1484 15.6038 17.5314 13.3057 18.2975L8.23724 19.987C5.47183 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12.2351 18.3461C12.2351 18.3461 11.477 16.0649 11.477 14.5552C11.477 13.0454 12.2351 10.7643 12.2351 10.7643M8.06517 19.4833C8.06517 19.4833 7.42484 16.7314 7.307 14.9343C7.11229 11.965 8.06517 7.35254 8.06517 7.35254" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.5093 10.0061L14.6533 9.28614C14.7986 8.55924 15.3224 7.96597 16.0256 7.73155C16.7289 7.49714 17.2526 6.90387 17.398 6.17697L17.542 5.45703" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17.5688 12.2533L17.7817 12.3762C18.4388 12.7556 19.265 12.6719 19.8327 12.1685C20.3468 11.7126 21.0789 11.597 21.7085 11.8723L22 11.9997" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`
    },
    {
      name: "Credibility Scoring",
      description:
        "We evaluate website content for reliability and provide trustworthiness scores based on multiple factors.",
      svgContent: `<path d="M12 6V18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`
    },
    {
      name: "Educational Resources",
      description:
        "Learn how to spot disinformation with our interactive quizzes and educational materials.",
      svgContent: `<path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`
    },
    {
      name: "Real-time Analysis",
      description:
        "Get instant feedback on content credibility as you browse the web with our Chrome extension.",
      svgContent: `<path d="M12.75 6.5C12.75 6.08579 12.4142 5.75 12 5.75C11.5858 5.75 11.25 6.08579 11.25 6.5H12.75ZM18 16.5L18.5303 17.0303C18.8232 16.7374 18.8232 16.2626 18.5303 15.9697L18 16.5ZM15.9697 17.4697C15.6768 17.7626 15.6768 18.2374 15.9697 18.5303C16.2626 18.8232 16.7374 18.8232 17.0303 18.5303L15.9697 17.4697ZM17.0303 14.4697C16.7374 14.1768 16.2626 14.1768 15.9697 14.4697C15.6768 14.7626 15.6768 15.2374 15.9697 15.5303L17.0303 14.4697ZM11.25 6.5V12.5H12.75V6.5H11.25ZM16 17.25H18V15.75H16V17.25ZM17.4697 15.9697L15.9697 17.4697L17.0303 18.5303L18.5303 17.0303L17.4697 15.9697ZM18.5303 15.9697L17.0303 14.4697L15.9697 15.5303L17.4697 17.0303L18.5303 15.9697ZM11.25 12.5C11.25 15.1234 13.3766 17.25 16 17.25V15.75C14.2051 15.75 12.75 14.2949 12.75 12.5H11.25Z" fill="#1C274C"/>`
    }
  ]
</script>

<svelte:head>
  <title>About Us | {WebsiteName}</title>
  <meta name="description" content="Learn about our mission to combat disinformation and how our tools can help you navigate the digital world safely." />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div style="background-image: url('/images/hack4impact.jpg'); background-size:cover; background-repeat: no-repeat;">
  <div class="hero min-h-[60vh]">
    <div class="hero-content text-center py-12">
      <div class="max-w-xl">
        <div class="text-4xl md:text-6xl font-bold px-2" style="line-height: 1.2;">
          About <span class="underline decoration-secondary decoration-4 md:decoration-[6px]">Our Mission</span>
        </div>
        <div class="mt-6 md:mt-10 text-sm md:text-lg">
          We're dedicated to protecting users from disinformation through advanced detection tools and education.
        </div>
      </div>
    </div>
  </div>

  <div class="min-h-[60vh] bg-white bg-opacity-90">
    <div class="pt-20 pb-8 px-7">
      <div class="max-w-lg mx-auto text-center">
        <div class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent pb-2">
          Our Story
        </div>
        <div class="mt-4 text-xl font-bold">
          Born from the need to combat the <span class="underline decoration-secondary decoration-[3px] md:decoration-[4px]">growing threat</span> of online disinformation
        </div>
      </div>

      <div class="max-w-4xl mx-auto mt-12 text-lg text-center">
        <p class="mb-6">
          Founded yesterday, our team of technologists and media experts came together to create tools that help users navigate the complex digital information landscape. We believe everyone deserves access to accurate information.
        </p>
        <p>
          Our extension combines cutting-edge AI detection with human expertise to provide reliable assessments of online content credibility.
        </p>
      </div>

      <div class="max-w-lg mx-auto text-center mt-20">
        <div class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent pb-2">
          Our Technology
        </div>
      </div>

      <div class="flex gap-6 mt-12 max-w-[1064px] mx-auto place-content-center flex-wrap">
        {#each features as feature}
          <div class="card bg-gray w-[270px] min-h-[300px] flex-none shadow-xl">
            <div class="card-body items-center text-center p-[24px] pt-[32px]">
              <div>
                <svg
                  width="50px"
                  height="50px"
                  class="mb-2 mt-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  {@html feature.svgContent}
                </svg>
              </div>
              <h2 class="card-title">
                {feature.name}
              </h2>
              <p class="text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        {/each}
      </div>

      <div class="max-w-lg mx-auto text-center mt-20">
        <div class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent pb-2">
          Join Our Cause
        </div>
        <div class="mt-6">
          <a href="/contact_us">
            <button class="btn btn-primary px-6">Get Involved</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>