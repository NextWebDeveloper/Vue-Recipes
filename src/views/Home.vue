<template>
	<span>
		<home-hero></home-hero>
		<home-plans></home-plans>
	</span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomePlans from '@/components/HomePlans';

export default {
    name: 'home',
	components: {
		HomeHero,
		HomePlans
	}
};
</script>
