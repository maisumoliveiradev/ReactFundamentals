import { Sidebar } from "./components/Siderbar";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";

// author: {avatar_url: "", name: "", role:""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maisumoliveiradev.png",
      name: "Vinicius Oliveira",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-16 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maisumoliveiradev.png",
      name: "Vinicius Almeida",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de concluir mais um projeto, visite no github e deixe sua estrela 🌟",
      },
      {
        type: "link",
        content: "👉 https://github.com/maisumoliveiradev/typeweather",
      },
    ],
    publishedAt: new Date("2022-11-10 20:00:00"),
  },
];

//iterção

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
