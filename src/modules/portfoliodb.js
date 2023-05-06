import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: 1,
      title: "Rebranding af en  non-profit organisation ",
      subtitle: "Organdonation",
      category: "Rebranding Organdonation",
      image: "../assets/organdonation.png",
      
      description: "Min partner og jeg ønskede at skabe et nyt branding af organisationen, der skulle få de unge til at tage stilling. Deres nuværende branding var ikke særlig opsigtvækkende for de unge. ifølge statistikker tager de unge ikke stilling, og det ønskede vi at ændre med vores rebranding. I det nye logo vi designede, brugte vi et navigationssymbol til at illustrere en ny placering samt et hjertekardiogram, der genvinder sin styrke."
    },
    {
      id: 2,
      title: "Rebranding af en barbeque konkurrence",
      subtitle: "Long Horn",
      category: "Rebranding af event",
      image: "../assets/BBQ_folder.png",
      text: "",
      description: "Long horn ønskede at få flere besøgende til deres konkurrence. De havde tidligere haft en viking som maskot, som de stadig ønskede skulle være en del af deres branding. Branding fokus var, at skabe en sammenhæng mellem de to temaer BBQ og Viking. Vikingen var vores frontfigur, så vi tilføjede noget fra BBQ-verdenen til logoet. Logoet illustrerer derfor et smagsmolekyle, som dannes under en BBQ-proces (Syringol)."

      
    },
    {
      id: 3,
      title: "Bumle",
      subtitle: "Photoshop",
      category: "Billederedigering",
      image: "../assets/bumle1.jpg",
      text: "",
      description: "Photoshop projekt af et lejetøj"

    }
  ])

  return {
    state,
  }
}

export default getPortfolio