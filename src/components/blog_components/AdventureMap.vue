<template>
  <div ref="mapElement" class="adventure-map"></div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { gpx } from '@tmcw/togeojson'

const props = defineProps({
  gpxUrl: { type: String, required: true },
  markers: { type: Array, default: () => [] },
})

const markerIcons = {
  start: L.icon({
    iconUrl: '/icons/map-markers/map-start.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),

  finish: L.icon({
    iconUrl: '/icons/map-markers/map-finish.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),

  aid: L.icon({
    iconUrl: '/icons/map-markers/map-aid.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),

  hut: L.icon({
    iconUrl: '/icons/map-markers/map-hut.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  cheer: L.icon({
    iconUrl: '/icons/map-markers/map-cheer.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  peak: L.icon({
    iconUrl: '/icons/map-markers/map-peak.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
}

const mapElement = ref(null)
let map

onMounted(async () => {
  map = L.map(mapElement.value)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap',
  }).addTo(map)

  const response = await fetch(props.gpxUrl)
  const gpxText = await response.text()
  const gpxXml = new DOMParser().parseFromString(gpxText, 'application/xml')
  const geojson = gpx(gpxXml)

  const routeLayer = L.geoJSON(geojson, {
    style: {
      weight: 4,
      opacity: 0.9,
    },
  }).addTo(map)

  map.fitBounds(routeLayer.getBounds(), {
    padding: [30, 30],
  })

  props.markers.forEach((marker) => {
    L.marker([marker.lat, marker.lng], {
      icon: markerIcons[marker.type] || markerIcons.aid,
    })
      .addTo(map)
      .bindPopup(`<strong>${marker.title}</strong>${marker.text ? `<br>${marker.text}` : ''}`)
  })
})

onBeforeUnmount(() => {
  if (map) map.remove()
})
</script>

<style scoped>
.adventure-map {
  width: 100%;
  height: 460px;
  border-radius: var(--radius-md);
  overflow: hidden;
  z-index: 0;
}
</style>