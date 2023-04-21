import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: 1,
      title: "Rebranding of a non-profit organizations",
      subtitle: "Organdonation",
      category: "Rebranding Organdonation",
      /* image: "https://placehold.jp/150x150.png", */
      image: "/src/assets/organdonation.png",
      
      description: "My partner and I wanted to create a rebrand of organizations that was designed to get young people to take a stand and the current branding was not very attention grabbing for young people. according to statistics young people do not take a stand and we wanted to change that in our rebranding. In the new logo we designed, we used a navigation symbol to illustrate a new location, as well as a heart cardiogram regaining its strength.   "
    },
    {
      id: 2,
      title: "Rebranding a barbeque competition",
      subtitle: "Long Horn",
      category: "Rebranding competition",
      image: "/src/assets/BBQ folder.png",
      text: "",
      description: "Long horn wanted to get more guests to their competition. previously they had had a Viking as a mascot, which they still wanted to be part of their branding. The branding focused on creating a link between the two themes BBQ and Viking. The Viking was our front figure, so we added something from the BBQ world to the logo. The logo therefore illustrates a flavor molecule that is formed during a BBQ process (Syringol). "
    },
    {
      id: 3,
      title: "Non-profit organisation",
      category: "Rebranding Organdonation",
      image: "/src/assets/bumle1.jpg",
      text: "",
      description: "photoshop project, with a toy car"

    }
  ])

  return {
    state,
  }
}

export default getPortfolio