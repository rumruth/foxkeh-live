<script>
  import Head from "./components/Head.svelte";
  import Body from "./components/Body.svelte";
  import Tail from "./components/Tail.svelte";
</script>

<div class="temp-wrapper">
  <div class="foxkeh__wrapper">
    <div class="foxkeh">
      <Head />
      <Body />
      <Tail />
    </div>
  </div>
</div>

<style lang="scss">
  .temp-wrapper {
    width: 400px;
    height: 400px;
    background: blue;
  }

  .foxkeh {
    position: absolute;
    aspect-ratio: 1 / 1;
    width: 50%;
    bottom: 0;
    left: 21%;

    &__wrapper {
      box-sizing: border-box;
      position: relative;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>