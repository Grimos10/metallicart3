<template>
    <section id="navbar" class="flexbox justify-between align-center">
        <div><h1>METALLICART SRLS</h1></div>
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/contatti">Contatti</router-link>
            <router-link to="/chi-siamo">Chi Siamo</router-link>
        </div>
    </section>
    <slot></slot>
</template>