<template>
    <div class="frame">
        <div class="info">
            <span>Center: {{ center }}</span>
            <span>Zoom: {{ zoom }}</span>
            <span>Bounds: {{ bounds }}</span>
        </div>
        <l-map  class="map"
                :zoom="zoom"
                :center="center"
                @update:zoom="zoomUpdated"
                @update:center="centerUpdated"
                @update:bounds="boundsUpdated"
        >
            <l-tile-layer :url="url"></l-tile-layer>
        </l-map>
    </div>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import * as L from 'leaflet';
    import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet';
    import 'leaflet/dist/leaflet.css';

    @Component({
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup,
            LTooltip,
        },
    })
    export default class Map extends Vue {


        public url: string = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
        public zoom: number = 3;
        public center: [number, number] = [47.413220, -1.219482];
        public bounds: any = null;


        public zoomUpdated(zoom: number) {
            this.zoom = zoom;
        }
        public centerUpdated(center: any) {
            this.center = center;
        }
        public boundsUpdated(bounds: any) {
            this.bounds = bounds;
        }

    }
</script>

<style scoped>

    .frame {
        width: 100%;
        height: 100%;
        z-index: 1;
        position: relative;
    }

    .info {
        height: 15%;
    }
    .map {
        height: 40vh;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
    }


</style>
