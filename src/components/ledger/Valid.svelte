<script>
  export let valid;
  export let chainLength;

  console.log(valid);
</script>

<figure
  id="cards-and-whatnot"
  class="flex-auto md:flex shadow rounded-xl p-8 md:p-0 bg-white"
>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <h2 class="text-lg font-medium uppercase text-gray-700">Status</h2>
    <div>
      <p class="text-sm font-medium uppercase text-gray-700">
        {chainLength} Block
        {#if chainLength !== 1}
          <span class="inline">s</span>
        {/if}
      </p>
      {#if valid}
        <div
          class="rounded-full h-6 w-6 flex items-center justify-center bg-green-700"
        >
          <p class="text-sm font-medium uppercase text-white">&#10003;</p>
        </div>
        <p class="text-gray-700">Valid Chain</p>
      {:else}
        <div
          class="rounded-full h-6 w-6 flex items-center justify-center bg-red-700"
        >
          <p class="text-sm font-medium uppercase text-white">x</p>
        </div>
        <p class="text-gray-700">Invalid Chain</p>
      {/if}
    </div>
  </div>
</figure>
