import Event from '../Event/Event.vue';
export default {
    name: "Events",
    data() {
      return {
        events: []
      }
    },
    async created () {
      //this.events.push({name:'Betim dev 4'})
      this.events= await fetch('https://yc-ti-blog.herokuapp.com/meu/yccp').then((data)=>data.json());
    },
    methods: {
      changePage(ev) {
        this.$navigateTo(Event,{ props: {id: ev.item.id }})
      }
    },
}