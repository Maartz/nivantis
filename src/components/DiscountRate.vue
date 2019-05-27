<template>
    <vs-row vs-justify="center">
        <vs-col :key="index"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6">
            <vs-card class="dr-card">
                <div slot="header">
                    <h1>Discount Rate</h1>
                    <br>
                    <p>This is the discount rate: {{ discountRate.toFixed(2) }} %</p>
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
                                              v-model.number="netPrice"/>
                                </vs-col>
                                <vs-col vs-type="flex"
                                        vs-justify="center"
                                        vs-align="center"
                                        vs-w="6">
                                    <vs-input
                                            label="Prix d'achat brut"
                                            v-model.number="rawPrice"/>
                                </vs-col>
                                <vs-col vs-type="flex"
                                        vs-justify="center"
                                        vs-align="center"
                                        vs-w="6">
                                    <vs-input label="Prix de vente net"
                                              v-model.number="sellPrice"/>
                                </vs-col>
                                <vs-col vs-type="flex"
                                        vs-justify="center"
                                        vs-align="center"
                                        vs-w="6">
                                    <vs-input label="Coefficient multiplicateur"
                                              v-model.number="coeff"/>
                                </vs-col>
                            </vs-row>
                        </form>
                    </vs-row>
                </vs-col>
                <vs-button :color="colorX"
                           :gradient-color-secondary="colorX2"
                           type="gradient"
                           v-on:click="getDiscountRate(netPrice, rawPrice)">
                    Calculer
                </vs-button>
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
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class DiscountRate extends Vue {
        public index: number = 0;

        public coeff: number = 0;
        public netPrice: number = 0;
        public discountRate: number = 0;
        public sellPrice: number = 0;
        public rawPrice: number = 0;

        // CSS purpose
        public colorX: string = '#3dd495';
        public colorX2: string = '#5252e8';

        public getDiscountRate(netPrice: number, rawPrice: number) {
            const ds: number = (1 - netPrice / rawPrice) * 100;
            return this.discountRate = ds;
        }

        public emptyFields() {
            this.coeff = 0;
            this.netPrice = 0;
            this.sellPrice = 0;
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
