<script>
  import Head from "./components/Head.svelte";
  import Body from "./components/Body.svelte";
  import Tail from "./components/Tail.svelte";
  import Globe from "./components/Globe.svelte";
</script>

<div class="temp-wrapper">
  <div class="foxkeh">
    <Head />
    <Body />
    <Tail />
    <Globe />
  </div>
</div>

<style lang="scss">
  .temp-wrapper {
    width: 200px;
    height: 200px;
  }

  .foxkeh {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
  }
</style>