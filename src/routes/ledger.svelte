<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import Valid from "../components/ledger/Valid.svelte";
  import Table from "../components/ledger/Table.svelte";
  import { chainData } from "../stores/chain.js";

  // get the actual blocks of the chain (no doubt we shall have to paginate this eventually.)
  async function getChain() {
    const call = await axios.get(
      "https://xeachain-sandbox.herokuapp.com/v1/chain"
    );
    const { data } = call;
    chainData.set(data);
  }

  // get the pending transactions that have not yet been mined. There is no call for this today. 
  async function getTransactions() {

  }

  // run all the API calls from this top level component
  onMount(async () => {
    await getChain();
  });


</script>

<svelte:head>
  <title>Ledger</title>
</svelte:head>

<div class="flex px-10 py-10">
  <Valid />
  <Table />
</div>
