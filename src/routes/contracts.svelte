<script>
  const dummyContracts = [
    {
      contracts: [],
      exclusive: false,
      name: "Explore Magan's Rest",
      issuer: "XEA",
      description: "Magan's Rest may be the ideal spot for a landing.",
      personSecondsRequired: 100,
      wage: 0.1,
      dangers: [],
      foes: [],
    },
  ];
</script>

<svelte:head>
  <title>Contracts</title>
</svelte:head>

<div>
  <table>
    <thead>
      <th>Name</th>
      <th>Description</th>
      <th>Exclusive</th>
      <th>Work Required</th>
      <th>Difficulty (CR)</th>
    </thead>
    <tbody>
      <tr>
        {#each dummyContracts as contract}
          <td>{contract.name}</td>
          <td>{contract.description}</td>
          <td>{contract.exclusive}</td>
          <td>{contract.personSecondsRequired}</td>
          <td>{contract.dangers}</td>
          <td />
          <td />
        {/each}
      </tr>
    </tbody>
  </table>
</div>

<style>
</style>
