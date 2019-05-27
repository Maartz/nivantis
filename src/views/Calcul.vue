<template>
    <div>
        <h1>Calcul</h1>
        <DiscountRate/>
        <NetPrice/>
        <ActualPrice/>
    </div>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ActualPrice from '@/components/ActualPrice.vue';
    import DiscountRate from '@/components/DiscountRate.vue'; // @ is an alias to /src
    import NetPrice from '@/components/NetPrice.vue';

    @Component({
        components: {
            DiscountRate,
            NetPrice,
            ActualPrice,
        },
    })
    export default class Calcul extends Vue {}
</script>

<style scoped>

</style>
