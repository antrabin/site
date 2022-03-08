<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Navbar from "./lib/Navbar.svelte";
  import Home from "./pages/Home.svelte";
</script>

<Router>
  <div class="bg-gray-200">
    <div>
      <Navbar />
      <div
        class="<xl:(px-4) <lg:(min-h-screen) flex flex-col lg:h-screen max-w-7xl mx-auto pt-16"
      >
        <Route path="/" component={Home} />
      </div>
    </div>
  </div>
</Router>
