<template>
  <div class="calendar-wrap">
    <section v-if="activeMonth" class="calendar-month">
      <div class="calendar-header">
        <button :disabled="currentMonthIndex === 0" @click="previousMonth">
          ←
        </button>

        <h2>{{ activeMonth.label }}</h2>

        <button
          :disabled="currentMonthIndex === months.length - 1"
          @click="nextMonth"
        >
          →
        </button>
      </div>

      <div class="weekdays">
        <span v-for="day in weekDays" :key="day">{{ day }}</span>
      </div>

      <div class="calendar-grid">
        <div
          v-for="blank in activeMonth.startOffset"
          :key="`blank-${activeMonth.key}-${blank}`"
          class="calendar-day empty"
        />

        <div
          v-for="day in activeMonth.days"
          :key="day.dateKey"
          class="calendar-day"
          :class="{ today: day.dateKey === todayKey }"
        >
          <span class="day-number">{{ day.dayNumber }}</span>

          <div v-if="day.adventures.length" class="dots">
            <div
              v-for="adventure in day.adventures"
              :key="adventure.id"
              class="dot-wrap"
            >
              <RouterLink
                :to="`/blog/${adventure.slug}`"
                class="activity-dot"
                :style="dotStyle(adventure)"
                :aria-label="adventure.title"
              />

              <div class="hover-card">
                <AdventureCard :adventure="adventure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import AdventureCard from './AdventureCard.vue'

const props = defineProps({
  adventures: { type: Array, required: true },
})

const currentMonthIndex = ref(0)

const weekDays = ['Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob', 'Ned']

const dateKey = (date) => {
  const d = new Date(date)

  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const todayKey = dateKey(new Date())

const adventuresByDate = computed(() => {
  return props.adventures.reduce((acc, adventure) => {
    const key = dateKey(adventure.date)

    if (!acc[key]) acc[key] = []
    acc[key].push(adventure)

    return acc
  }, {})
})

const months = computed(() => {
  const uniqueMonths = [
    ...new Set(
      props.adventures.map((adventure) => {
        const date = new Date(adventure.date)
        return `${date.getFullYear()}-${date.getMonth()}`
      })
    ),
  ]

  return uniqueMonths
    .map((monthKey) => {
      const [year, month] = monthKey.split('-').map(Number)

      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)

      const startOffset = (firstDay.getDay() + 6) % 7

      const days = Array.from({ length: lastDay.getDate() }, (_, index) => {
        const date = new Date(year, month, index + 1)
        const key = dateKey(date)

        return {
          dateKey: key,
          dayNumber: index + 1,
          adventures: adventuresByDate.value[key] || [],
        }
      })

      return {
        key: monthKey,
        label: new Intl.DateTimeFormat('sl-SI', {
          month: 'long',
          year: 'numeric',
        }).format(firstDay),
        startOffset,
        days,
      }
    })
    .sort((a, b) => {
      const [aYear, aMonth] = a.key.split('-').map(Number)
      const [bYear, bMonth] = b.key.split('-').map(Number)

      return new Date(aYear, aMonth) - new Date(bYear, bMonth)
    })
})

const activeMonth = computed(() => months.value[currentMonthIndex.value])

watchEffect(() => {
  if (!months.value.length) return

  const latestAdventure = [...props.adventures].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )[0]

  const latestDate = new Date(latestAdventure.date)
  const latestMonthKey = `${latestDate.getFullYear()}-${latestDate.getMonth()}`

  const index = months.value.findIndex((month) => month.key === latestMonthKey)

  if (index !== -1) {
    currentMonthIndex.value = index
  }
})

const previousMonth = () => {
  if (currentMonthIndex.value > 0) {
    currentMonthIndex.value--
  }
}

const nextMonth = () => {
  if (currentMonthIndex.value < months.value.length - 1) {
    currentMonthIndex.value++
  }
}

const dotStyle = (adventure) => {
  const effort = adventure.distance + adventure.elevation / 100
  const size = Math.min(Math.max(effort * 0.55, 10), 34)

  return {
    width: `${size}px`,
    height: `${size}px`,
  }
}
</script>

<style scoped>
.calendar-wrap {
  display: grid;
  gap: var(--space-2xl);
}

.calendar-month {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-card-bg);
  padding: var(--space-lg);
}

.calendar-month h2 {
  margin: 0 0 var(--space-lg);
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  text-transform: capitalize;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--space-xs);
  margin-bottom: var(--space-xs);
}

.weekdays span {
  color: var(--color-muted);
  font-size: 0.78rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--space-xs);
}

.calendar-day {
  position: relative;
  min-height: 96px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-surface);
  padding: var(--space-sm);
}

.calendar-day.empty {
  opacity: 0;
  pointer-events: none;
}

.day-number {
  color: var(--color-muted);
  font-size: 0.85rem;
  font-weight: 700;
}

.dots {
  position: absolute;
  inset: var(--space-sm);
  top: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.dot-wrap {
  position: relative;
  display: inline-flex;
}

.activity-dot {
  display: block;
  border-radius: 999px;
  background: var(--color-accent);
  box-shadow: 0 0 0 6px var(--color-accent-soft);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;
}

.dot-wrap:hover .activity-dot {
  transform: scale(1.15);
  box-shadow: 0 0 0 9px var(--color-accent-soft);
}

.hover-card {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 1rem);
  z-index: 20;
  width: min(330px, 80vw);
  transform: translateX(-50%) translateY(0.5rem);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 160ms ease,
    transform 160ms ease;
}

.dot-wrap:hover .hover-card {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}

@media (max-width: 760px) {
  .calendar-month {
    padding: var(--space-md);
  }

  .calendar-day {
    min-height: 72px;
    padding: 0.45rem;
  }

  .day-number {
    font-size: 0.72rem;
  }

  .dots {
    inset: 0.45rem;
    top: 1.8rem;
  }

  .hover-card {
    display: none;
  }
}

@media (max-width: 460px) {
  .calendar-grid,
  .weekdays {
    gap: 0.25rem;
  }

  .calendar-day {
    min-height: 54px;
    border-radius: 0.5rem;
  }

  .weekdays span {
    font-size: 0.6rem;
  }
}
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.calendar-header h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  text-transform: capitalize;
  text-align: center;
}

.calendar-header button {
  width: 44px;
  height: 44px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-accent-soft);
  color: var(--color-text);
  cursor: pointer;
  font-size: 1.2rem;
}

.calendar-header button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.calendar-day.today {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 2px var(--color-accent-soft);
}

.calendar-day.today .day-number {
  color: var(--color-accent);
}
</style>