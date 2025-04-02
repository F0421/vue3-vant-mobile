<template>
  <div class="p-4 m-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
    <h1 class="text-2xl text-pink-600 font-bold mb-4">
      Hello, Tailwind CSS!
    </h1>

    <p class="my-6 text-gray-900 dark:text-gray-100 leading-relaxed">
      This is a simple example of Tailwind CSS in action.
    </p>

    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md border-2 border-blue-600 hover:bg-blue-600"
    >
      Button
    </button>
  </div>
</template>

<route lang="json5">
{
  name: 'tailwind',
  meta: {
    title: '🎨 Tailwind CSS 示例',
    i18n: 'menus.tailwindExample',
  },
}
</route>
