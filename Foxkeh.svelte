<script>
  import Head from "./components/Head.svelte";
  import Body from "./components/Body.svelte";
  import Tail from "./components/Tail.svelte";

  let innerWidth = 0, innerHeight = 0;

  let x_pixels = 0;
  let y_pixels = 0;
  /*
  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  } 

  function mouse_handler(e) {
    x_percent = Math.ceil(percentage(e.clientX, innerWidth));
    y_percent = Math.ceil(percentage(e.clientY, innerHeight));
  }
  */

  function mouse_handler(e) {
    x_pixels = Math.ceil(e.clientX);
    y_pixels = Math.ceil(e.clientY);
  }
  /*
  $: if (x_percent !== 0) {
    //console.log("Moving X to", x_percent, "%");
  }

  $: if (y_percent !== 0) {
    //console.log("Moving Y to", y_percent, "%");
  }
  */
</script>

<svelte:window on:mousemove={mouse_handler} bind:innerWidth bind:innerHeight />

<div class="foxkeh">
  <Head bind:x_pixels bind:y_pixels />
  <Body />
  <Tail />
</div>

<style lang="scss">
  .foxkeh {
    position: absolute;
    aspect-ratio: 1 / 1;
    width: 50%;
    bottom: 0;
    left: 21%;
  }

  :global(.foxkeh__wrapper) {
    box-sizing: border-box;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
</style>