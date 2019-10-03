<template>
    <vs-row vs-justify="center">
        <vs-col :key="index"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6">
            <vs-card class="dr-card">
                <div slot="header">
                    <h1>Prix de vente net</h1>
                    <br>
                    <p>Valeur du prix de vente net : {{netSellPrice}} </p>
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
                                              v-model.number="netBuyPrice"/>
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
                <vs-button :color="colorx"
                           :gradient-color-secondary="colorx2"
                           type="gradient"
                           v-on:click="getActualSellPrice(netBuyPrice, coeff)">
                    Calculer
                </vs-button>
                <vs-button
                        color="dark"
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
    export default class ActualPrice extends Vue {

        @Prop({default: 0})public coeff !: number;
        @Prop({default: 0})public netBuyPrice !: number;

        public netSellPrice: number = 0;

        @Watch('coeff', {immediate: true})
        @Watch('netBuyPrice', {immediate: true})
        public getActualSellPrice(netBuyPrice: number, coeff: number) {
                const nsp: number = this.netSellPrice = netBuyPrice * coeff;
                return this.netSellPrice = nsp;
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
