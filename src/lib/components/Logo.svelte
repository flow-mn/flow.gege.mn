<script lang="ts">
  interface LogoProps {
    size?: string;
  }

  let { size = "3rem" }: LogoProps = $props();
</script>

<svg
  style="width: {size}; height: {size}"
  width="256"
  height="256"
  viewBox="0 0 256 256"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    width="256"
    height="256"
    class="fill-transparent"
  />
  <path
    d="M80 77.3703C80 63.5923 91.5745 52.643 105.331 53.4073L157.902 56.3279C168.056 56.892 176 65.2899 176 75.4592C176 87.9247 164.285 97.0713 152.192 94.048L103.283 81.8209C91.4566 78.8642 80 87.8092 80 100V77.3703Z"
    class="fill-primary"
  />
  <path
    d="M80 137.275C80 122.13 93.8558 110.771 108.707 113.741L148.089 121.618C157.696 123.539 163.138 133.774 159.359 142.812C156.244 150.264 147.933 154.078 140.252 151.582L102.825 139.418C91.5591 135.757 80 144.154 80 156V137.275Z"
    class="fill-primary"
  />
  <path
    d="M80 188C80 179.163 87.1634 172 96 172C104.837 172 112 179.163 112 188C112 196.837 104.837 204 96 204C87.1634 204 80 196.837 80 188Z"
    class="fill-primary"
  />
</svg>
