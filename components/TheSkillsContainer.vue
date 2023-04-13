<script setup>
import skillsQuery from "@/graphql/queries/skills.query.gql";
const { result: skillsData } = useQuery(skillsQuery, null, { prefetch: false });
</script>

<template>
  <div v-if="skillsData" class="flex w-full flex-wrap p-1">
    <div
      v-for="(skill, index) in skillsData?.skillCollection?.items"
      :key="index"
      class="group/icon m-2 flex flex-col content-center justify-center rounded p-2"
    >
      <Icon
        class="content-center text-center text-8xl transition duration-150 ease-in-out group-hover/icon:scale-125"
        :name="skill.icon"
        size="75px"
      />
      <div
        class="invisible m-1 p-1 text-center text-blue-900 transition duration-150 ease-in-out group-hover/icon:visible group-hover/icon:scale-125 dark:text-white"
      >
        {{ skill.name }}
      </div>
    </div>
  </div>
</template>
