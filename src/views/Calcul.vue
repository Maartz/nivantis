<template>
    <div>
        <h1>Calcul</h1>
        <DiscountRate/>
        <ActualPrice/>
    </div>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ActualPrice from '@/components/ActualPrice.vue';
    import DiscountRate from '@/components/DiscountRate.vue'; // @ is an alias to /src

    @Component({
        components: {
            DiscountRate,
            ActualPrice,
        },
    })
    export default class Calcul extends Vue {}
</script>

<style scoped>

</style>
