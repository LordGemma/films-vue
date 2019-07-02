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
    padding: 2rem 1.5rem;
}
</style>

