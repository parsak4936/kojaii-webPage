import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "./generic";
import "./Loading.css";

const Loading = () => (
  <Section>
    <Title>این صفحه در دست ساخت میباشد ، پس از اتمام پروژه به آن دسترسی خئاهید داشت</Title>
    {list.map(l => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="#fff" />
        <Prop>{l.name}</Prop>
      </Article>
    ))}
  </Section>
);

export default Loading;
