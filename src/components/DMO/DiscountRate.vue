<template>
    <vs-row vs-justify="center">
        <vs-col :key="index"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6">
            <vs-card class="dr-card">
                <div slot="header">
                    <h1>Remise</h1>
                    <br>
                    <p>Pourcentage de remise : {{ discountRate.toFixed(2) }} %</p>
                </div>
                <vs-col vs-type="flex"
                        vs-justify="center"
                        vs-align="center"
                        vs-w="12">
                    <vs-row>
                        <form class="centerx labelx">
                            <vs-row>
                                <vs-col vs-type="flex"
                                        vs-justify="center"
                                        vs-align="center"
                                        vs-w="6">
                                    <vs-input label="Prix d'achat net"
                                              type="number" step="0.1"
                                              v-model.number="netPrice"/>
                                </vs-col>
                                <vs-col vs-type="flex"
                                        vs-justify="center"
                                        vs-align="center"
                                        vs-w="6">
                                    <vs-input
                                            label="Prix d'achat brut"
                                            type="number" step="0.1"
                                            v-model.number="rawPrice"/>
                                </vs-col>
                            </vs-row>
                        </form>
                    </vs-row>
                </vs-col>
                <vs-button color="dark"
                           type="flat"
                           v-on:click="emptyFields">
                    Effacer
                </vs-button>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script lang="ts">
    import {Component, Prop, Watch, Vue} from 'vue-property-decorator';

    @Component
    export default class DiscountRate extends Vue {
        public index: number = 0;

        @Prop({default: 0}) public netPrice !: number; // PRIX D'ACHAT NET
        @Prop({default: 0})public discountRate !: number; // POURCENTAGE DE REMISE
        @Prop({default: 0}) public rawPrice !: number; // PRIX D'ACHAT BRUT

        // CSS purpose
        public colorX: string = '#3dd495';
        public colorX2: string = '#5252e8';

        @Watch('rawPrice', {immediate: true})
        @Watch('netPrice', {immediate: true})
        public getDiscountRate(netPrice: number, rawPrice: number) {
            const discountRate: number = (1 - netPrice / rawPrice) * 100;
            return this.discountRate = discountRate;
        }

        public emptyFields() {
            this.netPrice = 0;
            this.rawPrice = 0;
        }


    }
</script>

<style scoped lang="scss">

    .dr-card {
        padding: 0 0 1.5em 0;
    }

    form {
        padding-bottom: 30px;
    }

    .vs-button {
        margin-right: 15px;
    }
</style>
