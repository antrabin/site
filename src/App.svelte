<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./pages/Home.svelte";
</script>

<Router>
  <div class="h-screen bg-gray-200">
    <div class="max-w-7xl mx-auto <lg:(px-4)">
      <Navbar />
      <div>
        <Route path="/" component={Home} />
      </div>
    </div>
  </div>
</Router>
