<script lang="ts">
  import { navigate } from "svelte-navigator";

  export let id;

  function goTo() {
    navigate(`/${id}`);
  }
</script>

<div
  class="bg-white border-l-4 rounded-r-sm border-green-400 py-2 px-2 rounded-l-md hover:(shadow-md) group"
>
  <div class="cursor-pointer group-hover:underline" on:click={goTo}>
    <h1 class="text-xl font-bold">{id}</h1>
  </div>
</div>
