<template>
    <section id="navbar" class="flexbox justify-between align-center">
        <div><h1 class="font-size-2em">METALLICART SRLS</h1></div>
        <div>
            <router-link to="/" class="font-size-1-25em font-weight-lighter">Home</router-link>
            <router-link to="/#contatti" class="font-size-1-25em font-weight-lighter">Contatti</router-link>
            <router-link to="/#chi-siamo" class="font-size-1-25em font-weight-lighter">Chi Siamo</router-link>
        </div>
    </section>
    <slot></slot>
</template>