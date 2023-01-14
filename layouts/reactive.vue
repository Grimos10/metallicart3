<!--this is the second layout that have to be switch when the width is less then 700px-->
<template>
    <div id="navbar" class="flexbox justify-between align-center">
        <section>
            <a href="/" class="font-size-1-25em font-weight-lighter">Home</a>
            <a href="/#chi-siamo" class="font-size-1-25em font-weight-lighter">Chi Siamo</a>
            <a href="/#servizi" class="font-size-1-25em font-weight-lighter">Servizi</a>
            <a href="/#contatti" class="font-size-1-25em font-weight-lighter">Contatti</a>
        </section>
    </div>
    <slot></slot>
</template>