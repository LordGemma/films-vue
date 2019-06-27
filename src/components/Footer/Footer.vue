<template>
   <footer class="footer">
       <div class="container">
            <nav class="level">
                <div class="level-item has-text-centered">
                    <Logo />
                </div>
            </nav>
        </div>
    </footer>
</template>

<script>
import Logo from '../Logo/Logo';

export default {
    name: 'Footer',
    components: {
        Logo,
    }
}
</script>

<style lang="scss">
footer.footer {
    background-color: #373737;
    height: 80px;
    margin-top: 30px;
}
</style>

