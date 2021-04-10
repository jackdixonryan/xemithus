<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import Valid from "../components/ledger/Valid.svelte";
  import Table from "../components/ledger/Table.svelte";
  import { chain, valid } from "./stores.js";

  // get the actual blocks of the chain (no doubt we shall have to paginate this eventually.)
  async function getChain() {
    const call = await axios.get(
      "https://xeachain-sandbox.herokuapp.com/v1/chain"
    );
    const { data } = call;
    chain.set(data);
  }

  // get the valdidation for the chain we're pointing to. 
  async function validateChain() {
    const call = await axios.get("https://xeachain-sandbox.herokuapp.com/v1/chain/validate");
    const { data } = call;
    valid.set(data);
  }

  // get the pending transactions that have not yet been mined. There is no call for this today. 
  async function getTransactions() {

  }

  let chainValue;
  let validValue;

  // run all the API calls from this top level component
  onMount(async () => {
    console.log("trying")

    await getChain();
    await validateChain();

    chain.subscribe(value => {
      chainValue = value;
    });

    valid.subscribe(value => {
      validValue = value;
    });

    console.log(chainValue);
  });


</script>

<svelte:head>
  <title>Ledger</title>
</svelte:head>

<div class="flex px-10 py-10">
  {#if chainValue && chainValue.chain && chainValue.chain.length > 0}
    <Valid valid={validValue.isValid} chainLength={chainValue.chain.length}/>
    <Table chain={chainValue.chain}></Table>
  {:else}
     <div class="loading">Loading...</div>
  {/if}

</div>
