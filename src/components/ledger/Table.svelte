<script>
  // import { chain } from "../../stores/stores";
  import { chain } from "../../stores/chain";
</script>

{#if $chain && $chain.length > 0}
<section class="flex-auto px-3 py-3">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >Index</th
            >
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >Time</th
            >
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >Transactions</th
            >
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >Nonce</th
            >
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >Hash</th
            >
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#each $chain as block}
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">{block.index}</td>
                <td class="px-6 py-4 whitespace-nowrap">{block.timestamp}</td>
                <td class="px-6 py-4 whitespace-nowrap"
                  >{block.transactions.length}</td
                >
                <td class="px-6 py-4 whitespace-nowrap">{block.proof}</td>
                <td class="px-6 py-4 whitespace-nowrap"
                  >{block.hash.substr(0, 4)}...</td
                >
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
{/if}