import React, { Component } from "react";
import { render } from "react-dom";

import Post from "./Post";

import imgProfile from "../../assets/profile.jpg";
import imgProfile2 from "../../assets/profile2.svg";
import imgProfile3 from "../../assets/profile3.svg";
import imgProfile4 from "../../assets/profile4.svg";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Wesley Domae",
          avatar: imgProfile
        },
        date: "07 Set 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: imgProfile2
        },
        date: "05 Set 2019",
        content:
          "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: imgProfile3
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: imgProfile4
            },
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Gabriel Lisboa",
          avatar: imgProfile2
        },
        date: "04 Set 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur erat id nisl maximus pellentesque. Donec gravida ornare lacinia. Donec congue ligula et consequat venenatis.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: imgProfile3
            },
            content: "Quisque viverra erat commodo iaculis imperdiet."
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: imgProfile4
            },
            content:
              "Cras consequat, dolor eu rhoncus fermentum, ante nulla ultrices sapien, in dictum ante sapien non ante. Sed id quam vel nisl interdum pretium."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postList">
        <section>
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              name={post.author.name}
              avatar={post.author.avatar}
              date={post.date}
              content={post.content}
              comments={post.comments}
              post={this.state.posts}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default PostList;
