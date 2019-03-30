<template>
        <ListView for="event in events.rows" @itemTap="changePage">
                 <v-template>
                    <StackLayout orientation="vertical">
                        <Label :text="event.titulo"  textWrap="true"></Label>
                        <Label v-html="event.artigo"></Label>
                    </StackLayout>
                </v-template>
        </ListView>
</template>
<script lang="ts" src="./events.ts">
</script>
