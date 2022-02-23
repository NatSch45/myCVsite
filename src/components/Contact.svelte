<script>
    import {addContact} from '../stores/contactStore.js'

    let email = ''
    let msg = ''

    const handleSubmit = () => {
        addContact(email, msg)
        email = ''; msg = ''

        console.log("Form submitted")
    }

</script>

<form action="" method="post" class="my-6" on:submit|preventDefault={handleSubmit}>
    <h2>Contact</h2>
    <div class="flex flex-col text-sm mb-2">
        <label for="email" class="font-bold mb-2 text-gray-800"></label>
        <input type="email" name="email" id="email" placeholder="Email" bind:value={email} class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg">
        <br>
        <label for="msg"></label>
        <input type="text" name="msg" id="msg" placeholder="Your message" bind:value={msg} class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg">
    </div>

    <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Submit</button>
</form>