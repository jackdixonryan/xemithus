<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main class="bg-gray-100 h-screen">
	<slot></slot>
</main>