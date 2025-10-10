import { Hero } from "./Hero";
import { Programs } from "./Programs";
import { LetsTalk } from "./Contact";
import { SideProjects } from "../../components/side-projects";

export const Home = (props) => {
  return (
    <>
      <Hero/>

      <SideProjects articleFrontmatterList={props.articleFrontmatterList} />

      <Programs articleFrontmatterList={props.articleFrontmatterList} />

      <LetsTalk />
    </>
  );
};
