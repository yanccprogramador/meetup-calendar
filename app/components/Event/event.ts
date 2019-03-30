export default {
    name: "Event",
    props: ['id'],
    data() {
      return {
        event: {}
      }
    },
    async created () {
      this.event= await fetch('https://yc-ti-blog.herokuapp.com/'+this.id).then((data)=>data.json());
      this.event=this.event.rows[0]
    }
}