<template>
    <div class="container">
        <Header></Header>
        <hr>
        <div class="row">
            <Servers></Servers>
            <ServerDetails></ServerDetails>
        </div>
        <hr>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Servers from './components/Servers.vue'
    import ServerDetails from './components/ServerDetails.vue'
    import Footer from './components/Footer.vue'

    export default {
        components: {
            Header,
            Servers,
            ServerDetails,
            Footer
        }
    }
</script>

<style>

</style>
