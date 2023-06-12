<script setup>
import skillsQuery from "@/graphql/queries/skills.query.gql";
const { result: skillsData } = useQuery(skillsQuery, null, { prefetch: false });
</script>

<template>
  <div v-if="skillsData" class="flex w-full flex-wrap justify-around space-x-1">
    <div
      v-for="(skill, index) in skillsData?.skillCollection?.items"
      :key="index"
      class="group/icon m-2 flex flex-col justify-center rounded p-1"
    >
      <div class="text-center">
        <Icon
          class="content-center text-center text-3xl transition duration-150 ease-in-out will-change-auto group-hover/icon:scale-125 md:text-7xl"
          :name="skill.icon"
        />
      </div>
      <div
        class="invisible m-1 p-1 pt-2 text-center text-[9px] tracking-tighter text-blue-900 transition duration-150 ease-in-out will-change-auto group-hover/icon:visible group-hover/icon:scale-125 dark:text-white md:text-xs lg:text-sm"
      >
        {{ skill.name }}
      </div>
    </div>
  </div>
</template>
