<script>
  import { onMount } from 'svelte';

  export let x_pixels = 0;
  export let y_pixels = 0;

  let head;
  let viewportOffset, top, left, w, h;
  let rotate_angle = 0;
  let left_modifier = 280;
  let right_modifier = 90;
  let head_degrees = undefined;
  let head_state = "left";
  let neck_offset = {
    x: 60,
    y: 60
  };

  function getAngleDegrees(fromX, fromY, toX, toY, force360 = true) {
    let deltaX = fromX-toX; 
    let deltaY = fromY-toY; // reverse
    let radians = Math.atan2(deltaY, deltaX)
    let degrees = (radians * 180) / Math.PI - 90; // rotate

    if (force360) {
      while (degrees >= 360) degrees -= 360;
      while (degrees < 0) degrees += 360;
    }

    return degrees;
  }

  $: if (y_pixels !== 0) {
    head_degrees = getAngleDegrees(left + (w - (w * .35)), top + (h - (h * .35)), x_pixels, y_pixels);
  }

  $: if (head_degrees != undefined) {
    if (head_degrees <= 340 && head_degrees >= 230) {
      rotate_angle = Math.ceil(head_degrees - left_modifier);
      head_state = "left";
    }
    else if(head_degrees > 340 || head_degrees < 40) {
      rotate_angle = 0;
      head_state = "up";
    }
    else if (head_degrees < 230 && head_degrees > 130) {
      rotate_angle = 0;
      head_state = "down";
    }
    else if (head_degrees <= 130 && head_degrees >= 40) {
      rotate_angle = 0;
      head_state = "right";
      rotate_angle = Math.ceil(head_degrees - right_modifier);
    }
    else {
      rotate_angle = 0;
      head_state = "left";
    }

    //console.log(head_degrees);
  }

  function update_position() {
    viewportOffset = head.getBoundingClientRect();
    top = Math.ceil(viewportOffset.top);
    left = Math.ceil(viewportOffset.left);
    w  = head.clientWidth;
    h  = head.clientHeight;
  }

  onMount(() => {
    update_position();
  });
</script>

<svelte:window on:scroll={update_position} />

<div
  class="head"
  bind:this={head}
  style="
    transform: rotate({rotate_angle}deg);
    transform-origin: {neck_offset.x}% {neck_offset.y}%;
  "
>
  {#if head_state == "left"}
    <div class="head__left">
      <svg  version="1.1" id="レイヤー_1" xmlns="&ns_svg;" xmlns:xlink="&ns_xlink;" viewBox="0 0 235.998 228.427" overflow="visible" enable-background="new 0 0 235.998 228.427" xml:space="preserve">
        <symbol  id="頭_横_xFF08_笑顔_xFF09_" viewBox="-117.999 -114.214 235.997 228.428">
          <g>
            <path fill="none" stroke="#20BF00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M51.217-55.172
              c0-5.339-4.328-9.667-9.667-9.667s-9.667,4.328-9.667,9.667s4.328,9.667,9.667,9.667S51.217-49.833,51.217-55.172z"/>
            
              <line fill="none" stroke="#20BF00" stroke-width="2.7066" stroke-linecap="round" stroke-linejoin="round" x1="24.632" y1="-55.172" x2="58.468" y2="-55.172"/>
            
              <line fill="none" stroke="#20BF00" stroke-width="2.7212" stroke-linecap="round" stroke-linejoin="round" x1="41.55" y1="-39.462" x2="41.55" y2="-70.882"/>
          </g>
          <g>
            <path fill="#DF731B" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-1.932,80.151
              c-18.367,13.534-17.4,12.084-42.053,18.368c-24.653,6.284-44.471,14.984-47.854,13.534c-3.385-1.45,1.931-32.387,7.25-47.371
              c5.316-14.984,14.984-31.419,17.4-35.77"/>
            <path fill="#FFFFCC" d="M-40.118,61.656c-17.223,12.931-43.54,34.621-45.932,32.536c-2.391-2.086,2.395-24.193,9.092-37.542
              c6.696-13.349,20.096-17.103,20.096-17.103L-40.118,61.656z"/>
          </g>
          <g>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-81.213-40.208
              c-17.885,11.601-31.418,8.7-31.418,8.7"/>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-82.178-50.843
              c-18.852,5.317-34.32,1.934-34.32,1.934"/>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-84.597-63.41
              c-24.167,1.45-28.52-1.45-28.52-1.45"/>
          </g>
          <g>
            <path fill="#DF731B" d="M-30.612,76.539L-30.612,76.539c-37.57-12.356-48.287-39.253-53.426-61.306
              c-2.431-10.426-1.68-18.909-0.955-27.113c0.922-10.416,1.792-20.255-3.907-33.316c-3.644-8.353-3.573-16.803,0.214-25.117
              c5.877-12.905,20.743-24.45,38.798-30.13c24.085-7.577,69.574-17.209,103.624,3.415c32.359,19.598,47.736,21.715,47.888,21.734
              l2.269,0.285l-1.164,1.969c0,0-4.786,8.064-6.084,10.254c2.375,1.12,14.404,6.797,14.404,6.797s-6.939,6.205-9.29,8.306
              c3.142,1.271,14.239,5.761,14.239,5.761l-2.355,1.58c-0.061,0.041-6.107,4.223-10.784,17.908
              c-1.042,3.047-1.761,8.343-2.593,14.475c-3.085,22.721-8.248,60.748-40.228,76.023C19.119,87.612,2.319,87.368-30.612,76.539z"/>
            <path fill="#FFFFCC" d="M-49.887-100.443c24.085-7.577,69.574-17.209,103.624,3.415c19.62,11.883,32.985,17.333,40.511,19.791
              c-4.601,1.465-9.811,3.299-15.752,5.611C37.521-55.675-12.163-60.024-32.138-66.792c-19.977-6.768-40.464-2.9-55.83,2.9
              c0,0-1.041-0.628-2.402-1.902c0.442-1.51,1-3.018,1.685-4.52C-82.808-83.219-67.942-94.764-49.887-100.443z"/>
            <path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-30.612,76.539
              L-30.612,76.539c-37.57-12.356-48.287-39.253-53.426-61.306c-2.431-10.426-1.68-18.909-0.955-27.113
              c0.922-10.416,1.792-20.255-3.907-33.316c-3.644-8.353-3.573-16.803,0.214-25.117c5.877-12.905,20.743-24.45,38.798-30.13
              c24.085-7.577,69.574-17.209,103.624,3.415c32.359,19.598,47.736,21.715,47.888,21.734l2.269,0.285l-1.164,1.969
              c0,0-4.786,8.064-6.084,10.254c2.375,1.12,14.404,6.797,14.404,6.797s-6.939,6.205-9.29,8.306
              c3.142,1.271,14.239,5.761,14.239,5.761l-2.355,1.58c-0.061,0.041-6.107,4.223-10.784,17.908
              c-1.042,3.047-1.761,8.343-2.593,14.475c-3.085,22.721-8.248,60.748-40.228,76.023C19.119,87.612,2.319,87.368-30.612,76.539z"/>
          </g>
          <g>
            <path fill="#DF731B" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M86.526,6.195
              c-3.868,39.153-14.019,58.488-19.819,72.989c-5.802,14.501-10.152,19.334-13.535,22.234S32.384,86.92,22.234,70.001
              C12.083,53.083,7.25,45.35,6.283,41.966"/>
            <path fill="#FFFFCC" d="M16.431,35.526c1.916,10.393,6.895,19.245,13.787,28.867c2.868,4,11.18,15.313,13.79,13.857
              c3.447-1.925,10.34-16.551,14.936-36.182c4.596-19.63,4.212-25.789,1.916-27.713c-2.299-1.925-14.172,9.238-23.363,14.626
              C28.304,34.371,15.943,32.876,16.431,35.526z"/>
          </g>
          <g>
            <path fill="#FFFFCC" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-34.806-87.094
              c-3.383-7.251-22.717-10.634-30.451-7.733c-7.735,2.9-16.918,5.8-19.819,14.5c-2.9,8.701-2.9,14.985-2.9,14.985"/>
            <path fill="#332F20" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-95.187-56.984
              c1.756,5.853,14.748-0.567,15.882-6.239c1.136-5.673-2.837-18.152-6.806-15.883C-90.081-76.838-96.888-62.657-95.187-56.984z"/>
            <g>
              <path d="M-23.174-40.981c0-6.041-4.86-10.08-10.852-9.024c-5.992,1.057-10.85,6.81-10.85,12.851
                c0,6.039,4.857,10.079,10.85,9.023C-28.034-29.188-23.174-34.942-23.174-40.981z"/>
              <path fill="#FFFFFF" d="M-35.181-42.821c0-2.313-1.758-3.879-3.926-3.496c-2.164,0.381-3.923,2.566-3.923,4.88
                s1.76,3.878,3.923,3.497C-36.938-38.323-35.181-40.509-35.181-42.821z"/>
            </g>
            <g>
              <path d="M-72.897-28.21c0-6.041-2.476-9.224-5.533-7.111c-3.054,2.113-5.533,8.724-5.533,14.764c0,6.039,2.479,9.223,5.533,7.11
                C-75.374-15.561-72.897-22.171-72.897-28.21z"/>
              <path fill="#FFFFFF" d="M-79.018-27.933c0-2.313-0.896-3.568-2.002-2.805c-1.104,0.764-2.002,3.26-2.002,5.572
                s0.899,3.568,2.002,2.805C-79.915-23.124-79.018-25.62-79.018-27.933z"/>
            </g>
          </g>
          <g>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-8.223-64.377
              c49.305-3.384,69.605-21.752,69.605-21.752"/>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-11.606-74.527
              c39.153-11.118,48.336-28.519,48.336-28.519"/>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-15.473-84.194
              c23.686-16.436,27.551-28.52,27.551-28.52"/>
          </g>
        </symbol>
        <use xlink:href="#頭_横_xFF08_笑顔_xFF09_"  width="235.997" height="228.428" x="-117.999" y="-114.214" transform="matrix(1 0 0 -1 117.9985 114.2139)"/>
      </svg>
    </div>
  {:else if head_state == "up"}
    <div class="head__up">
      <svg  version="1.1" id="レイヤー_1" xmlns="&ns_svg;" xmlns:xlink="&ns_xlink;" viewBox="0 0 233.858 186.662" overflow="visible" enable-background="new 0 0 233.858 186.662" xml:space="preserve">
        <symbol  id="頭_正面_xFF08_上向き_xFF09_" viewBox="-116.929 -93.331 233.858 186.662">
          <g>
            <path fill="none" stroke="#20BF00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M9.661-58.944
              c0-5.34-4.329-9.668-9.667-9.668c-5.34,0-9.667,4.328-9.667,9.668s4.328,9.668,9.667,9.668
              C5.333-49.276,9.661-53.604,9.661-58.944z"/>
            
              <line fill="none" stroke="#20BF00" stroke-width="2.7066" stroke-linecap="round" stroke-linejoin="round" x1="-16.924" y1="-58.944" x2="16.912" y2="-58.944"/>
            
              <line fill="none" stroke="#20BF00" stroke-width="2.7212" stroke-linecap="round" stroke-linejoin="round" x1="-0.006" y1="-43.235" x2="-0.006" y2="-66.587"/>
          </g>
          <g>
            <g>
              <path fill="#DF731B" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M42.268,69.353
                c8.859,8.318,27.302,7.965,36.506,9.898c9.384,1.969,25.813,4.74,27.576,2.096c1.763-2.645-0.01-30.527-2.699-46.49
                c-1.497-8.877-5.979-19.346-6.608-26.262"/>
              <path fill="#DF731B" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-42.28,69.353
                c-8.859,8.318-27.304,7.965-36.507,9.898c-9.385,1.969-25.811,4.74-27.576,2.096c-1.764-2.645,0.011-30.527,2.699-46.49
                c1.497-8.877,5.979-19.346,6.609-26.262"/>
            </g>
            <g>
              <path fill="#FFFFCC" d="M-56.816,67.987c-4.237,4.619-18.822,3.664-24.981,5.855c-5.321,1.895-15.404,1.973-16.518,0.781
                c-1.109-1.189,1.25-10.512,2.854-17.637c0.893-3.961,5.36-10.211,5.742-13.299c0.286-2.311,3.363-3.566,4.704-1.959
                c1.341,1.605,13.193,13.826,14.929,15.719C-65.793,62.132-55.067,66.083-56.816,67.987z"/>
              <path fill="#FFFFCC" d="M56.548,67.987c4.237,4.619,18.822,3.664,24.981,5.855c5.321,1.895,15.404,1.973,16.518,0.781
                c1.109-1.189-1.25-10.512-2.854-17.637c-0.892-3.961-5.36-10.211-5.741-13.299c-0.286-2.311-3.363-3.566-4.704-1.959
                c-1.341,1.605-13.193,13.826-14.929,15.719C65.526,62.132,54.8,66.083,56.548,67.987z"/>
            </g>
            <g>
              <path fill="#DF731B" d="M48.365-91.331C70.463-85.03,78.278-77.44,84.917-69.485c9.424,11.293,23.715,13.111,23.875,13.242
                l1.804,1.49c0,0-4.981,5.84-6.864,7.102c2.085,0.434,9.392,2.168,9.392,2.168s-7.544,9.787-9.639,10.832
                c1.949,1.299,6.54,1.299,11.443,2.49C101.227-10.39,90.558,30.956,90.558,30.956C80.235,65.749,40.271,91.331,0.021,91.331
                c-43.364,0-81.069-25.273-90.577-60.473l0,0c-12.165-27.633-12.87-40.381-24.374-63.041c3.853-0.736,9.591-1.17,11.429-2.469
                c-2.095-1.045-9.637-10.832-9.637-10.832s7.416-1.301,9.392-2.168c-1.883-1.262-6.958-7.162-6.958-7.162l1.95-1.471
                c0.148-0.111,14.508-2.342,24.249-14.041c5.135-6.166,12.912-14.041,35.472-20.654"/>
              <path fill="#FFFFCC" d="M-102.03-34.651c0-0.039-0.002-0.08-0.003-0.119c-0.04-0.615-0.375-1.156-0.875-1.404
                c-0.929-0.463-4.233-4.252-7.355-8.158c2.402-0.469,5.717-1.18,7.049-1.766c0.524-0.23,0.888-0.781,0.934-1.416
                c0.003-0.045,0.005-0.09,0.005-0.137c0-0.584-0.272-1.131-0.722-1.432c-1.01-0.678-3.481-3.309-5.403-5.467
                c0.166-0.125,0.46-0.348,0.46-0.348c0.146-0.109,14.65-2.449,24.504-14.285l0.403-0.484c5.592-6.73,11.412-16.243,40.051-22.255
                l85.618-0.525c28.294,5.684,33.643,15.03,40.883,23.71l0.329,0.395c8.443,10.117,20.51,10.709,24.008,13.393l0.093,0.072
                c0,0,0.262,0.217,0.402,0.332c-1.893,2.145-4.353,4.781-5.367,5.463c-0.45,0.301-0.708,0.848-0.708,1.426
                c0,0.094,0.007,0.189,0.021,0.285c0.101,0.68,0.574,1.221,1.17,1.359c0,0,4.178,0.963,6.861,1.582
                c-3.145,3.941-6.498,7.787-7.435,8.256c-0.504,0.252-0.842,0.803-0.875,1.426c-0.001,0.033-0.002,0.064-0.002,0.098
                c0,0.588,0.274,1.135,0.725,1.436c0.981,0.653,2.333,1.009,3.982,1.303c-3.853,4.792-7.657,9.244-11.057,13.246
                C78.969,0.989,61.674,15.683,58.161,26.612C54.686,37.423,34.013,54.427,0.001,54.794L0,54.812c-0.188,0-0.368-0.008-0.553-0.01
                c-0.186,0.002-0.367,0.01-0.554,0.01l-0.002-0.018c-34.011-0.367-54.684-17.371-58.159-28.182
                c-3.513-10.93-20.045-26.299-37.505-45.279c-3.771-4.098-7.623-8.414-11.363-12.912c2.302-0.395,4.293-0.867,5.414-1.66
                C-102.29-33.544-102.03-34.081-102.03-34.651z"/>
              <path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M48.365-91.331
                C70.463-85.03,78.278-77.44,84.917-69.485c9.424,11.293,23.715,13.111,23.875,13.242l1.804,1.49c0,0-4.981,5.84-6.864,7.102
                c2.085,0.434,9.392,2.168,9.392,2.168s-7.544,9.787-9.639,10.832c1.949,1.299,6.54,1.299,11.443,2.49
                C101.227-10.39,90.558,30.956,90.558,30.956C80.235,65.749,40.271,91.331,0.021,91.331c-43.364,0-81.069-25.273-90.577-60.473
                l0,0c-12.165-27.633-12.87-40.381-24.374-63.041c3.853-0.736,9.591-1.17,11.429-2.469c-2.095-1.045-9.637-10.832-9.637-10.832
                s7.416-1.301,9.392-2.168c-1.883-1.262-6.958-7.162-6.958-7.162l1.95-1.471c0.148-0.111,14.508-2.342,24.249-14.041
                c5.135-6.166,12.912-14.041,35.472-20.654"/>
            </g>
          </g>
          <g>
            <g>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-52.479,16.073
                c-36.155-5.219-53.866-35.912-53.866-35.912"/>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-50.137,8.655
                C-78.354-3.554-95.417-33.89-95.417-33.89"/>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-52.88,23.776
                C-91.903,22.708-115.364-1.29-115.364-1.29"/>
            </g>
            <g>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M52.479,16.073
                c36.155-5.219,53.866-35.912,53.866-35.912"/>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M50.138,8.655
                C78.354-3.554,95.417-33.89,95.417-33.89"/>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M52.88,23.776
                C91.903,22.708,115.365-1.29,115.365-1.29"/>
            </g>
          </g>
          <g>
            <path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M57.274,29.249
              C48.075,44.567,22.75,54.812,0,54.812s-51.461-10.244-57.273-25.563"/>
            <g>
              <path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-40.023,16.853
                c3.903-1.561,14.052-2.342,21.468-0.389c7.736,2.035,16.395,8.195,18.608,19.508"/>
              <path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M40.023,16.853
                c-3.903-1.561-14.052-2.342-21.468-0.389C10.82,18.499,2.161,24.659-0.052,35.972"/>
            </g>
            <path fill="#332F20" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-0.009,56.983
              c13.06,0,17.484-4.512,11.281-12.564c-6.203-8.051-16.354-8.051-22.555,0C-17.487,52.472-13.065,56.983-0.009,56.983z"/>
          </g>
          <g>
            <g>
              <path d="M-22.736,57.778c0-4.719-5.615-9.035-12.542-9.641c-6.927-0.607-12.542,2.727-12.542,7.445
                c0,4.717,5.615,9.033,12.542,9.641C-28.352,65.829-22.736,62.495-22.736,57.778z"/>
              <path fill="#FFFFFF" d="M-36.613,53.472c0-1.805-2.031-3.449-4.537-3.668c-2.503-0.219-4.535,1.07-4.535,2.875
                c0,1.809,2.032,3.451,4.535,3.67C-38.645,56.567-36.613,55.28-36.613,53.472z"/>
            </g>
            <g>
              <path d="M47.809,55.583c0-4.719-5.617-8.051-12.543-7.445c-6.928,0.605-12.541,4.922-12.541,9.641
                c0,4.717,5.613,8.051,12.541,7.445C42.191,64.618,47.809,60.3,47.809,55.583z"/>
              <path fill="#FFFFFF" d="M33.93,53.706c0-1.805-2.029-3.094-4.533-2.875c-2.506,0.219-4.537,1.863-4.537,3.668
                c0,1.809,2.031,3.096,4.537,2.877C31.9,57.157,33.93,55.515,33.93,53.706z"/>
            </g>
          </g>
        </symbol>
        <use xlink:href="#頭_正面_xFF08_上向き_xFF09_"  width="233.858" height="186.662" x="-116.929" y="-93.331" transform="matrix(1 0 0 -1 116.9292 93.3311)"/>
      </svg>
    </div>
  {:else if head_state == "down"}
    <div class="head__down">
      <svg  version="1.1" id="レイヤー_1" xmlns="&ns_svg;" xmlns:xlink="&ns_xlink;" viewBox="0 0 230.352 205.231" overflow="visible" enable-background="new 0 0 230.352 205.231" xml:space="preserve">
        <symbol  id="頭_正面_xFF08_笑顔_xFF09_" viewBox="-115.176 -102.616 230.353 205.231">
          <g>
            <path fill="none" stroke="#20BF00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M9.667-54.521
              c0-5.34-4.328-9.668-9.667-9.668s-9.667,4.328-9.667,9.668S-5.339-44.853,0-44.853S9.667-49.181,9.667-54.521z"/>
            
              <line fill="none" stroke="#20BF00" stroke-width="2.7066" stroke-linecap="round" stroke-linejoin="round" x1="-16.918" y1="-54.521" x2="16.917" y2="-54.521"/>
            
              <line fill="none" stroke="#20BF00" stroke-width="2.7212" stroke-linecap="round" stroke-linejoin="round" x1="0" y1="-38.812" x2="0" y2="-70.229"/>
          </g>
          <g>
            <g>
              <path fill="#DF731B" d="M-90.548,39.546L-90.548,39.546C-102.713,11.913-110.998-1.823-111.08-1.96l-0.604-0.994
                c0,0,4.25-4.344,6.078-6.211c-2.137-0.941-7.57-3.332-7.57-3.332s5.461-5.035,7.32-6.748c-1.921-1.137-7.1-4.199-7.1-4.199
                l1.99-1.324c0.151-0.102,15.264-10.318,24.743-30.551c4.979-10.625,25.912-45.297,86.251-45.297l0,0
                c59.532,0,80.414,32.207,86.629,46.053c7.962,17.734,24.199,29.713,24.362,29.832l1.841,1.342c0,0-5.083,3.008-7.004,4.145
                c1.859,1.713,7.321,6.748,7.321,6.748s-5.435,2.391-7.573,3.332c1.829,1.867,6.093,6.227,6.093,6.227l-0.633,1.002
                c-0.086,0.135-8.663,13.822-20.5,41.58C74.969,76.202,40.278,98.911,0.028,98.911C-43.336,98.911-72.964,79.493-90.548,39.546z"
                />
              <path fill="#FFFFCC" d="M-86.223-55.319c4.979-10.625,25.912-45.297,86.251-45.297c59.532,0,80.414,32.207,86.629,46.053
                c5.923,13.193,16.42,23.195,21.479,27.506c-14.981-1.818-32.994-1.814-51.373-13.838c-24.875-16.277-24.952-24.91-56.879-24.91
                c0.177,0,0.359-0.018,0.535-0.018h-1.07c0.178,0,0.356,0.018,0.535,0.018c-30.457,0-32,8.633-56.877,24.91
                c-18.172,11.889-36.071,11.971-50.904,13.768C-102.959-31.218-93.108-40.624-86.223-55.319z"/>
              <path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-90.548,39.546
                L-90.548,39.546C-102.713,11.913-110.998-1.823-111.08-1.96l-0.604-0.994c0,0,4.25-4.344,6.078-6.211
                c-2.137-0.941-7.57-3.332-7.57-3.332s5.461-5.035,7.32-6.748c-1.921-1.137-7.1-4.199-7.1-4.199l1.99-1.324
                c0.151-0.102,15.264-10.318,24.743-30.551c4.979-10.625,25.912-45.297,86.251-45.297l0,0c59.532,0,80.414,32.207,86.629,46.053
                c7.962,17.734,24.199,29.713,24.362,29.832l1.841,1.342c0,0-5.083,3.008-7.004,4.145c1.859,1.713,7.321,6.748,7.321,6.748
                s-5.435,2.391-7.573,3.332c1.829,1.867,6.093,6.227,6.093,6.227l-0.633,1.002c-0.086,0.135-8.663,13.822-20.5,41.58
                C74.969,76.202,40.278,98.911,0.028,98.911C-43.336,98.911-72.964,79.493-90.548,39.546z"/>
            </g>
            <g>
              <path fill="#DF731B" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M42.274,81.583
                c8.859,8.318,27.303,11.867,36.506,13.801c9.384,1.969,25.813,7.139,27.576,4.494c1.764-2.645-0.009-36.828-2.699-52.791
                c-1.496-8.877-5.979-19.346-6.607-26.262"/>
              <path fill="#DF731B" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-42.274,81.583
                c-8.859,8.318-27.304,11.867-36.507,13.801c-9.386,1.969-25.811,7.139-27.576,4.494c-1.764-2.645,0.011-36.828,2.699-52.791
                c1.497-8.877,5.979-19.346,6.609-26.262"/>
            </g>
            <g>
              <path fill="#FFFFCC" d="M-60.861,56.7c-4.272,6.01-15.871,14.029-22.048,16.912c-5.336,2.492-14.782,8.119-15.887,6.586
                c-1.101-1.531,1.375-21.77,3.032-31.004c0.922-5.137,5.438-13.26,5.842-17.26c0.303-2.992,3.391-4.639,4.72-2.57
                c1.329,2.07,20.79,17.404,23.001,19.063S-59.098,54.222-60.861,56.7z"/>
              <path fill="#FFFFCC" d="M60.86,56.7c4.273,6.01,15.871,14.029,22.049,16.912c5.336,2.492,14.783,8.119,15.885,6.586
                c1.101-1.531-1.373-21.77-3.031-31.004c-0.922-5.137-5.436-13.26-5.842-17.26c-0.303-2.992-3.391-4.639-4.719-2.57
                c-1.33,2.07-20.789,17.404-23,19.063C59.989,50.085,59.098,54.222,60.86,56.7z"/>
            </g>
            <path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-40.367-67.562
              c0-10.939,9.689-19.809,21.642-19.809c7.999,0,14.979,3.975,18.725,9.883c3.746-5.908,10.727-9.883,18.727-9.883
              c11.951,0,21.639,8.869,21.639,19.809"/>
            <path fill="#332F20" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-0.003-56.476
              c13.06,0,17.483-5.271,11.281-14.678c-6.203-9.406-16.354-9.406-22.555,0C-17.481-61.747-13.059-56.476-0.003-56.476z"/>
          </g>
          <g>
            <g>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-50.638-54.694
                c-36.215,2.225-50.347-9.793-50.347-9.793"/>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-48.429-64.487
                c-31.357-4.453-39.748-15.58-39.748-15.58"/>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-52.845-44.013
                c-37.098,9.793-58.297,1.336-58.297,1.336"/>
            </g>
            <g>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M50.637-54.694
                c36.215,2.225,50.348-9.793,50.348-9.793"/>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M48.43-64.487
                c31.355-4.453,39.748-15.58,39.748-15.58"/>
              <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M52.846-44.013
                c37.098,9.793,58.297,1.336,58.297,1.336"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M-22.73-18.329c0-6.982-5.615-12.643-12.542-12.643c-6.926,0-12.542,5.66-12.542,12.643
                c0,6.98,5.616,12.641,12.542,12.641C-28.345-5.688-22.73-11.349-22.73-18.329z"/>
              <path fill="#FFFFFF" d="M-36.607-22.903c0-2.672-2.031-4.842-4.538-4.842c-2.503,0-4.535,2.17-4.535,4.842
                c0,2.674,2.032,4.842,4.535,4.842C-38.638-18.062-36.607-20.229-36.607-22.903z"/>
            </g>
            <g>
              <path d="M47.815-18.329c0-6.982-5.617-12.643-12.543-12.643c-6.927,0-12.541,5.66-12.541,12.643
                c0,6.98,5.614,12.641,12.541,12.641C42.198-5.688,47.815-11.349,47.815-18.329z"/>
              <path fill="#FFFFFF" d="M33.936-22.903c0-2.672-2.029-4.842-4.533-4.842c-2.506,0-4.537,2.17-4.537,4.842
                c0,2.674,2.031,4.842,4.537,4.842C31.907-18.062,33.936-20.229,33.936-22.903z"/>
            </g>
          </g>
        </symbol>
        <use xlink:href="#頭_正面_xFF08_笑顔_xFF09_"  width="230.353" height="205.231" x="-115.176" y="-102.616" transform="matrix(1 0 0 -1 115.1763 102.6152)"/>
      </svg>
    </div>
  {:else if head_state == "right"}
    <div class="head__right">
      <svg  version="1.1" id="レイヤー_1" xmlns="&ns_svg;" xmlns:xlink="&ns_xlink;" viewBox="0 0 235.998 228.427" overflow="visible" enable-background="new 0 0 235.998 228.427" xml:space="preserve">
        <symbol  id="頭_横_xFF08_笑顔_xFF09_" viewBox="-117.999 -114.214 235.997 228.428">
          <g>
            <path fill="none" stroke="#20BF00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M51.217-55.172
              c0-5.339-4.328-9.667-9.667-9.667s-9.667,4.328-9.667,9.667s4.328,9.667,9.667,9.667S51.217-49.833,51.217-55.172z"/>
            
              <line fill="none" stroke="#20BF00" stroke-width="2.7066" stroke-linecap="round" stroke-linejoin="round" x1="24.632" y1="-55.172" x2="58.468" y2="-55.172"/>
            
              <line fill="none" stroke="#20BF00" stroke-width="2.7212" stroke-linecap="round" stroke-linejoin="round" x1="41.55" y1="-39.462" x2="41.55" y2="-70.882"/>
          </g>
          <g>
            <path fill="#DF731B" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-1.932,80.151
              c-18.367,13.534-17.4,12.084-42.053,18.368c-24.653,6.284-44.471,14.984-47.854,13.534c-3.385-1.45,1.931-32.387,7.25-47.371
              c5.316-14.984,14.984-31.419,17.4-35.77"/>
            <path fill="#FFFFCC" d="M-40.118,61.656c-17.223,12.931-43.54,34.621-45.932,32.536c-2.391-2.086,2.395-24.193,9.092-37.542
              c6.696-13.349,20.096-17.103,20.096-17.103L-40.118,61.656z"/>
          </g>
          <g>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-81.213-40.208
              c-17.885,11.601-31.418,8.7-31.418,8.7"/>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-82.178-50.843
              c-18.852,5.317-34.32,1.934-34.32,1.934"/>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-84.597-63.41
              c-24.167,1.45-28.52-1.45-28.52-1.45"/>
          </g>
          <g>
            <path fill="#DF731B" d="M-30.612,76.539L-30.612,76.539c-37.57-12.356-48.287-39.253-53.426-61.306
              c-2.431-10.426-1.68-18.909-0.955-27.113c0.922-10.416,1.792-20.255-3.907-33.316c-3.644-8.353-3.573-16.803,0.214-25.117
              c5.877-12.905,20.743-24.45,38.798-30.13c24.085-7.577,69.574-17.209,103.624,3.415c32.359,19.598,47.736,21.715,47.888,21.734
              l2.269,0.285l-1.164,1.969c0,0-4.786,8.064-6.084,10.254c2.375,1.12,14.404,6.797,14.404,6.797s-6.939,6.205-9.29,8.306
              c3.142,1.271,14.239,5.761,14.239,5.761l-2.355,1.58c-0.061,0.041-6.107,4.223-10.784,17.908
              c-1.042,3.047-1.761,8.343-2.593,14.475c-3.085,22.721-8.248,60.748-40.228,76.023C19.119,87.612,2.319,87.368-30.612,76.539z"/>
            <path fill="#FFFFCC" d="M-49.887-100.443c24.085-7.577,69.574-17.209,103.624,3.415c19.62,11.883,32.985,17.333,40.511,19.791
              c-4.601,1.465-9.811,3.299-15.752,5.611C37.521-55.675-12.163-60.024-32.138-66.792c-19.977-6.768-40.464-2.9-55.83,2.9
              c0,0-1.041-0.628-2.402-1.902c0.442-1.51,1-3.018,1.685-4.52C-82.808-83.219-67.942-94.764-49.887-100.443z"/>
            <path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-30.612,76.539
              L-30.612,76.539c-37.57-12.356-48.287-39.253-53.426-61.306c-2.431-10.426-1.68-18.909-0.955-27.113
              c0.922-10.416,1.792-20.255-3.907-33.316c-3.644-8.353-3.573-16.803,0.214-25.117c5.877-12.905,20.743-24.45,38.798-30.13
              c24.085-7.577,69.574-17.209,103.624,3.415c32.359,19.598,47.736,21.715,47.888,21.734l2.269,0.285l-1.164,1.969
              c0,0-4.786,8.064-6.084,10.254c2.375,1.12,14.404,6.797,14.404,6.797s-6.939,6.205-9.29,8.306
              c3.142,1.271,14.239,5.761,14.239,5.761l-2.355,1.58c-0.061,0.041-6.107,4.223-10.784,17.908
              c-1.042,3.047-1.761,8.343-2.593,14.475c-3.085,22.721-8.248,60.748-40.228,76.023C19.119,87.612,2.319,87.368-30.612,76.539z"/>
          </g>
          <g>
            <path fill="#DF731B" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M86.526,6.195
              c-3.868,39.153-14.019,58.488-19.819,72.989c-5.802,14.501-10.152,19.334-13.535,22.234S32.384,86.92,22.234,70.001
              C12.083,53.083,7.25,45.35,6.283,41.966"/>
            <path fill="#FFFFCC" d="M16.431,35.526c1.916,10.393,6.895,19.245,13.787,28.867c2.868,4,11.18,15.313,13.79,13.857
              c3.447-1.925,10.34-16.551,14.936-36.182c4.596-19.63,4.212-25.789,1.916-27.713c-2.299-1.925-14.172,9.238-23.363,14.626
              C28.304,34.371,15.943,32.876,16.431,35.526z"/>
          </g>
          <g>
            <path fill="#FFFFCC" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-34.806-87.094
              c-3.383-7.251-22.717-10.634-30.451-7.733c-7.735,2.9-16.918,5.8-19.819,14.5c-2.9,8.701-2.9,14.985-2.9,14.985"/>
            <path fill="#332F20" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M-95.187-56.984
              c1.756,5.853,14.748-0.567,15.882-6.239c1.136-5.673-2.837-18.152-6.806-15.883C-90.081-76.838-96.888-62.657-95.187-56.984z"/>
            <g>
              <path d="M-23.174-40.981c0-6.041-4.86-10.08-10.852-9.024c-5.992,1.057-10.85,6.81-10.85,12.851
                c0,6.039,4.857,10.079,10.85,9.023C-28.034-29.188-23.174-34.942-23.174-40.981z"/>
              <path fill="#FFFFFF" d="M-35.181-42.821c0-2.313-1.758-3.879-3.926-3.496c-2.164,0.381-3.923,2.566-3.923,4.88
                s1.76,3.878,3.923,3.497C-36.938-38.323-35.181-40.509-35.181-42.821z"/>
            </g>
            <g>
              <path d="M-72.897-28.21c0-6.041-2.476-9.224-5.533-7.111c-3.054,2.113-5.533,8.724-5.533,14.764c0,6.039,2.479,9.223,5.533,7.11
                C-75.374-15.561-72.897-22.171-72.897-28.21z"/>
              <path fill="#FFFFFF" d="M-79.018-27.933c0-2.313-0.896-3.568-2.002-2.805c-1.104,0.764-2.002,3.26-2.002,5.572
                s0.899,3.568,2.002,2.805C-79.915-23.124-79.018-25.62-79.018-27.933z"/>
            </g>
          </g>
          <g>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-8.223-64.377
              c49.305-3.384,69.605-21.752,69.605-21.752"/>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-11.606-74.527
              c39.153-11.118,48.336-28.519,48.336-28.519"/>
            <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M-15.473-84.194
              c23.686-16.436,27.551-28.52,27.551-28.52"/>
          </g>
        </symbol>
        <use xlink:href="#頭_横_xFF08_笑顔_xFF09_"  width="235.997" height="228.428" x="-117.999" y="-114.214" transform="matrix(1 0 0 -1 117.9985 114.2139)"/>
      </svg>
    </div>
  {:else}
    <span>no head</span>
  {/if}

</div>

<style lang="scss">
  .head {
    position: absolute;
    z-index: 5;
    top: -42%;
    left: -39%;
    width: 93%;

    &__left {
      width: 100%;
    }

    &__up {
      transform: translate(14%, -1%);
    }

    &__down {
      transform: translate(14%, 2%);
    }

    &__right {
      transform: translate(19%, -0) scaleX(-1);
    }

    svg {
      width: 100%;
    }
  }
</style>