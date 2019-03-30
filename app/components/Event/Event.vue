<template>
<Page>
<ActionBar :title="event.titulo" android:flat="true">
<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
</ActionBar>
<StackLayout orientation="vertical">
    <HtmlView :html="event.artigo"></HtmlView>
</StackLayout>
</Page>
</template>
<script lang="ts" src="./event.ts">
</script>

<style scoped>
    ActionBar {
        background-color: #000;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>

