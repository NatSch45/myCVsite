<script>
    // import Blog from "../components/Blog.svelte"
    import Contact from "../components/Contact.svelte"
    import {contacts} from "../stores/contactStore.js"
</script>

<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">My Site</h1>
    <Contact />

    {#each $contacts as contact}
        <h3>{contact.id} : {contact.email}</h3>
        <p>{contact.msg}</p>
    {/each}
</main>