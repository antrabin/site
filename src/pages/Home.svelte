<script lang="ts">
  // import { HighlightAuto } from "svelte-highlight";

  import RecentCard from "../lib/RecentCard.svelte";
</script>

<div class="w-full max-w-7xl mx-auto flex-1">
  <div class="h-full py-8">
    <div class="flex flex-col items-center">
      <h1
        class="font-poppins font-black text-2xl md:text-4xl underline focus:outline-none"
      >
        Share Files :p
      </h1>
    </div>

    <div class="h-10/11 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div
        class="shadow-md lg:col-span-7 bg-gray-300 px-4 py-4  overflow-y-auto border-t-4 border-green-500 rounded-t-md"
      >
        <div class="h-full flex flex-col gap-4 items-center">
          <h1 class="font-poppins uppercase font-black text-xl">Code</h1>
          <div
            class="w-full h-screen lg:h-full flex flex-col items-center gap-4"
          >
            <textarea
              class="focus:outline-none resize-none rounded-md flex-1 w-full px-2 py-2 font-fira"
            />

            <div>
              <button class="py-2 px-4 lg:(px-6) bg-blue-600 text-white rounded"
                >Save</button
              >
            </div>
          </div>
        </div>
      </div>

      <div
        class="shadow-md lg:col-span-5 bg-gray-300 px-4 py-4  overflow-y-auto border-t-4 border-green-500 rounded-t-md"
      >
        <div class="h-full flex flex-col gap-4 items-center">
          <h1 class="font-poppins uppercase font-black text-xl">Recent</h1>
          <div class="w-full h-screen lg:h-full">
            <div class="grid grid-cols-2 gap-2">
              {#each new Array(20) as i, index}
                <RecentCard id={index} />
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
