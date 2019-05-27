<template>
    <vs-row vs-justify="center">
        <vs-col :key="index"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6">
            <vs-card class="dr-card">
                <div slot="header">
                    <h1>Actual Net Price</h1>
                    <br>
                    <p>This is the Actual selling net Price <tag>{{netSellPrice}}</tag></p>
                </div>
                <vs-col vs-type="flex"
                        vs-justify="center"
                        vs-align="center"
                        vs-w="12">
                    <vs-row>
                        <form class="centerx labelx">
                            <vs-row>
                                <vs-col vs-type="flex"
                                        vs-justify="center" vs-align="center" vs-w="6">
                                    <vs-input label="Prix d'achat net" v-model.number="netBuyPrice"/>
                                </vs-col>
                                <vs-col vs-type="flex"
                                        vs-justify="center" vs-align="center" vs-w="6">
                                    <vs-input label="Coefficient multiplicateur" v-model.number="coeff"/>
                                </vs-col>
                            </vs-row>
                        </form>
                    </vs-row>
                </vs-col>
                <vs-button :color="colorx" :gradient-color-secondary="colorx2"
                           type="gradient"
                           v-on:click="getActualSellPrice(netBuyPrice, coeff)">Calculer
                </vs-button>
                <vs-button color="dark" type="flat" v-on:click="emptyFields">Effacer</vs-button>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class ActualSellPrice extends Vue {
        public coeff: number = 0;
        public netBuyPrice: number = 0;
        public netSellPrice: number = 0;

        public colorx: string = '#FFF94C';
        public colorx2: string = '#004FF9';
        public getActualSellPrice(netBuyPrice: number, coeff: number) {
                this.netSellPrice = netBuyPrice * coeff;
                return this.netSellPrice;
        }

        public emptyFields() {
            this.coeff = 0;
            this.netBuyPrice = 0;
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