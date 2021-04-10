import { writable, derived } from "svelte/store";

export const chainData = writable({});
// export const valid = writable({});

export const chain = derived(chainData, ($apiData) => {
  if ($apiData.chain) {
    return $apiData.chain;
  }
  return [];
});

export const chainLength = derived(chainData, ($apiData) => {
  if ($apiData.chain) {
    return $apiData.chain.length;
  }
  return 0;
});

export const chainValidity = derived(chainData, ($apiData) => {
  if ($apiData.valid) {
    return $apiData.valid;
  }
  return false;
});

// export const latestBlock = derived(chainData, ($apiData) => {
//   if ($apiData.length) {
//     return $apiData.lastBlock;
//   }
// }); 
