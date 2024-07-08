import { defineStore } from 'pinia';

export const useEventStore = defineStore('event', {
  state: () => ({
    eventId: null,
    eventName: '',
  }),
  actions: {
    setEventId(id) {
      this.eventId = id;
    },
    getEventId() {
      return this.eventId;
    },
  },
});
